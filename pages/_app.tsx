import '../styles/globals.css';

import type {AppProps} from 'next/app';
import {useReducer} from 'react';
import {reducer} from '../utils/reducer';

const MyApp = ({Component, pageProps}: AppProps) => {
	const [state, dispatch] = useReducer(reducer, []);

	return <Component {...pageProps} state={state} dispatch={dispatch} />;
};

export default MyApp;
