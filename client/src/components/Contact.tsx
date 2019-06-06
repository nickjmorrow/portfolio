import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';
import { Header } from './shared/Header';
import { TextInput, useThemeContext, StyleConstant, Button } from '@nickjmorrow/react-component-library';
import { Theme } from '../types';

export const Contact: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const theme = useThemeContext();
	const { border, colors, typography, spacing } = theme;
	return (
		<DelayedSlideInFade enterTimeout={0}>
			<Header>Contact</Header>
			<ContactWrapper theme={theme}>
				<Form spacing={spacing}>
					<TextInput
						style={{ width: '100%' }}
						value={name}
						onChange={e => setName(e.currentTarget.value)}
						placeholder={'Name'}
					/>
					<TextInput
						style={{ width: '100%' }}
						value={email}
						onChange={e => setEmail(e.currentTarget.value)}
						placeholder={'Email'}
					/>
					<TextArea
						spacing={spacing}
						colors={colors}
						typography={typography}
						border={border}
						value={message}
						onChange={e => setMessage(e.currentTarget.value)}
						placeholder={'Enter your message here'}
					/>
					<Button useMargin={false} style={{justifySelf: 'flex-end', width: 'max-content'}}>Send Message</Button>
				</Form>
			</ContactWrapper>
		</DelayedSlideInFade>
	);
};

const Form = styled('form')<{ spacing: StyleConstant<'spacing'> }>`
	display: grid;
	grid-auto-flow: row;
	grid-row-gap: ${p => p.spacing.ss8};
	width: 100%;
	margin: 0 auto;
	max-width: 600px;
`;

const ContactWrapper = styled('div')<{theme: Theme}>`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	margin-top: ${({theme}) => theme.spacing.ss16}
`;

const TextArea = styled('textarea')<{
	border: StyleConstant<'border'>;
	colors: StyleConstant<'colors'>;
	typography: StyleConstant<'typography'>;
	spacing: StyleConstant<'spacing'>;
}>`
	border-radius: ${p => p.border.borderRadius.br1};
	background-color: ${p => p.colors.neutral.cs2};
	border: none;
	font-family: ${p => p.typography.fontFamily.default};
	font-size: ${p => p.typography.fontSizes.fs3};
	padding: ${p => p.spacing.ss3};
	&:focus {
		border: none;
		outline: none;
	}
`;
