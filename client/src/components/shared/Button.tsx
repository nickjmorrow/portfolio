import * as React from 'react';
import { Button as GenericButton, useThemeContext } from '@nickjmorrow/react-component-library';

export const Button: React.FC<{leftColor: string; rightColor: string}> = ({ children, leftColor, rightColor }) => {
	const {colors} = useThemeContext();
	return (
		<GenericButton
			colorVariant={'primaryLight'}
			styleVariant={2}
			useMargin={false}
			style={{backgroundColor: 'hsla(0, 0%, 0%, 10%)'}}
			typographyStyle={{ textTransform: 'none', fontSize: '18px', background: `-webkit-linear-gradient(0deg, ${leftColor || colors.core.cs5}, ${rightColor || colors.accent.cs5})`, backgroundClip: 'text', '-webkit-background-clip': 'text', '-webkit-text-fill-color': 'transparent' }}
		>
			{children}
		</GenericButton>
	);
};
