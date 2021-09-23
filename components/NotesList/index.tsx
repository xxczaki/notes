import Link from 'next/link';
import {Note, Actions} from '../../utils/reducer';
import {ComponentProps} from '../../types/page';

import shared from '../../styles/shared.module.css';
import styles from './styles.module.css';

const NotesList = ({state, dispatch}: ComponentProps) => {
	const deleteNote = (timestamp: number) => {
		dispatch({
			type: Actions.DELETE_NOTE,
			payload: {
				timestamp,
				content: ''
			}
		});
	};

	return (
		<section>
			<h2 className={styles.heading}>Existing notes</h2>
			<div className={styles.notes}>
				{state.length === 0 ? (
					<p>Newly added notes will appear here</p>
				) : state
					.sort((a, b) => b.timestamp - a.timestamp)
					.map((note: Note) => (
						<div className={shared.note} key={note.timestamp}>
							<div className={styles.inline}>
								<div dangerouslySetInnerHTML={{__html: note.content}}/>
								<button
									type="button"
									className={shared.delete}
									onClick={() => {
										deleteNote(note.timestamp);
									}}
								>
									Delete
								</button>
							</div>
							<Link href={`/note?timestamp=${note.timestamp}`}>
								<i className={styles.date}>
									{new Date(note.timestamp).toLocaleString()}
								</i>
							</Link>
						</div>
					))}
			</div>
		</section>
	);
};

export default NotesList;
