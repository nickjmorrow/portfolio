import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Technology } from '../../types';
import { findKeyPhrases } from './find-key-phrases';
import { Typography, useThemeContext } from '@nickjmorrow/react-component-library';

export const GatsbyQuery = graphql`
	{
		data {
			technologies {
				name
				version
			}
		}
	}
`;

export const TechnologyEmphasizedTypography: React.FC<{ text: string }> = ({ text }) => {
	const {
		data: { technologies },
	} = useStaticQuery<{ data: { technologies: Technology[] } }>(GatsbyQuery);
	const theme = useThemeContext();
	const keyPhrases = technologies.map(t => t.name);

	const identifiedKeyPhrases = findKeyPhrases(text, keyPhrases);

	const output: JSX.Element[] = [];
	if (identifiedKeyPhrases.length === 0) {
		return <Typography style={{ display: 'inline' }}>{text}</Typography>;
	}
	const splitText = text.split(' ');
	const firstParagraphIndex = identifiedKeyPhrases[0].paragraphIndex;
	const firstPart = (
		<Typography style={{ display: 'inline' }}>{splitText.slice(0, firstParagraphIndex).join(' ')}</Typography>
	);

	output.push(firstPart);
	const keyPhraseStyle = { color: theme.colors.neutral.cs8 };
	identifiedKeyPhrases.forEach((ikp, i, arr) => {
		if (i < arr.length - 1) {
			// push key phrase
			const keyPhrase = splitText[ikp.paragraphIndex];
			output.push(<Typography style={{ display: 'inline', ...keyPhraseStyle }}>{' ' + keyPhrase}</Typography>);

			// push text that comes after key phrase
			const nextKeyPhraseParagraphIndex = identifiedKeyPhrases[i + 1];
			const nextTextSegment = splitText.slice(ikp.paragraphIndex + 1, nextKeyPhraseParagraphIndex.paragraphIndex);

			if (nextTextSegment.length > 0) {
				output.push(<Typography style={{ display: 'inline' }}>{' ' + nextTextSegment.join(' ')}</Typography>);
			}
		}
	});

	const lastIdentifiedKeyPhrase = identifiedKeyPhrases[identifiedKeyPhrases.length - 1];
	const actualKeyPhrase = keyPhrases[lastIdentifiedKeyPhrase.keyPhraseIndex];
	const keyPhraseLength = actualKeyPhrase.split(' ').length;
	output.push(<Typography style={{ display: 'inline', ...keyPhraseStyle }}>{' ' + actualKeyPhrase}</Typography>);
	const nextTextSegment = splitText.slice(
		identifiedKeyPhrases[identifiedKeyPhrases.length - 1].paragraphIndex + keyPhraseLength,
		splitText.length,
	);

	if (nextTextSegment.length > 0) {
		output.push(<Typography style={{ display: 'inline' }}>{' ' + nextTextSegment.join(' ')}</Typography>);
	}

	return output;
};
