import {useRouter} from 'next/router';
import Link from 'next/link';
import {Note as NoteType, Actions} from '../utils/reducer';
import {Page} from '../types/page';

import shared from '../styles/shared.module.css';
import styles from '../styles/note.module.css';

const Note: Page = ({state, dispatch}) => {
	const router = useRouter();

	const {timestamp} = router.query;

	const deleteNote = async (timestamp: number) => {
		dispatch({
			type: Actions.DELETE_NOTE,
			payload: {
				timestamp,
				content: ''
			}
		});

		await router.push('/');
	};

	const note: NoteType | undefined = state
		.find((note: NoteType) => note.timestamp === Number(timestamp));

	return (
		<main className={shared.container}>
			<section className={styles.content}>
				<div className={styles.header}>
					<Link href="/">
						<button className={styles.button} type="button">Go back</button>
					</Link>
					<button
						className={shared.delete}
						type="button"
						disabled={!note}
						onClick={async () => {
							// @ts-expect-error The button is disabled if note is undefined
							await deleteNote(note?.timestamp);
						}}
					>
						Delete
					</button>
				</div>
				<div className={shared.note}>
					<div dangerouslySetInnerHTML={{__html: note?.content ?? 'Such a note does not exist.'}}/>
					{note?.timestamp && <i className={styles.date}>{new Date(note.timestamp).toLocaleString()}</i>}
				</div>
			</section>
		</main>
	);
};

export default Note;
