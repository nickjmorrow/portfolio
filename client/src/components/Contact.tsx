import * as React from 'react'
import styled from 'styled-components';
import { DelayedSlideInFade } from './shared/DelayedSlideInFade';

export const Contact : React.FC = () => {
	return <DelayedSlideInFade enterTimeout={0}>
		<ContactWrapper>Contact me!</ContactWrapper>
	</DelayedSlideInFade>;
}

const ContactWrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;