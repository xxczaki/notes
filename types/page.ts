import type {NextPage} from 'next';
import {Dispatch} from 'react';
import {Note, Action} from '../utils/reducer';

export interface ComponentProps {
	state: Note[];
	dispatch: Dispatch<Action>;
}

export type Page = NextPage<ComponentProps>;
