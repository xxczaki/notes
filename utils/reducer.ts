import {renderToMarkdown} from './render-to-markdown';

export interface Note {
	timestamp: number;
	content: string;
}

export enum Actions {
	ADD_NOTE,
	DELETE_NOTE
}

export interface Action {
	type: Actions;
	payload: Note;
}

export const reducer = (state: Note[], action: Action) => {
	switch (action.type) {
		case Actions.ADD_NOTE:
			return [...state, {
				timestamp: action.payload.timestamp,
				content: renderToMarkdown(action.payload.content)
			}];
		case Actions.DELETE_NOTE:
			return state.filter(note =>
				note.timestamp !== action.payload.timestamp
			);
		default:
			return state;
	}
};
