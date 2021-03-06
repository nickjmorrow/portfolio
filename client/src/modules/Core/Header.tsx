import * as React from 'react';
import { Typography, GetComponentProps, useThemeContext } from '@nickjmorrow/react-component-library';

export const HeaderTypography: React.FC<
	{ Text: string; id: string } & GetComponentProps<typeof Typography> & { style?: React.CSSProperties }
> = ({ children, link, id, ...props }) => {
	const theme = useThemeContext();
	return (
		<div style={{ marginBottom: theme.spacing.ss16 }}>
			<Typography Text={link} sizeVariant={8} id={id}>
				{children}
			</Typography>
		</div>
	);
};
