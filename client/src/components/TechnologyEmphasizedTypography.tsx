import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Technology } from '../types';
import { findKeyPhrases } from '../algorithms/find-key-phrases';
import { Typography } from '@nickjmorrow/react-component-library';

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
	const keyPhrases = technologies.map(t => t.name);
	console.log(keyPhrases);

	console.log(text);
	const identifiedKeyPhrases = findKeyPhrases(text, keyPhrases);
	console.log(identifiedKeyPhrases);
	const output: JSX.Element[] = [];
	if (identifiedKeyPhrases.length === 0) {
		return <Typography>{text}</Typography>;
	}
	const splitText = text.split(' ');
	const firstParagraphIndex = identifiedKeyPhrases[0].paragraphIndex;
	const firstPart = (
		<Typography>
			{splitText
				.slice(0, firstParagraphIndex)
				.join(' ')}
		</Typography>
	);

	output.push(firstPart);
	identifiedKeyPhrases.forEach((ikp, i) => {
		// push key phrase
		const keyPhrase = splitText[ikp.paragraphIndex];
		output.push(<Typography colorVariant={'core'}>{keyPhrase}</Typography>)
		
		if (i !== identifiedKeyPhrases.length - 1) {
			// push text that comes after key phrase
			const nextKeyPhraseParagraphIndex = identifiedKeyPhrases[i + 1];
			const nextTextSegment = splitText.slice(i, nextKeyPhraseParagraphIndex.paragraphIndex);	
			output.push(<Typography>{nextTextSegment}</Typography>)
		} else {
			// push rest of text
			// const nextTextSegment = splitText.slice(i, splitText.length);
			// output.push(<Typography>{nextTextSegment}</Typography>)
		}
	})
	
	return output;
};
