import * as React from 'react'
import { Typography } from '@nickjmorrow/react-component-library';

export const Header : React.FC = ({children}) => {
	return <Typography>{children}</Typography>;
}