import {useState, FormEvent} from 'react';
import NotesList from '../components/NotesList';
import {Page} from '../types/page';
import {Actions} from '../utils/reducer';

import shared from '../styles/shared.module.css';
import styles from '../styles/home.module.css';

const Home: Page = ({state, dispatch}) => {
	const [value, setValue] = useState<string>('');

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		dispatch({
			type: Actions.ADD_NOTE,
			payload: {
				timestamp: Date.now(),
				content: value
			}
		});

		setValue('');
	};

	return (
		<main className={shared.container}>
			<section className={styles.content}>
				<form
					className={styles.form}
					onSubmit={onSubmit}
				>
					<textarea
						className={styles.input}
						value={value}
						onChange={event => {
							setValue(event.target.value);
						}}
						required
					/>
					<section className={styles.bottom}>
						<button
							className={styles.button}
							type="submit"
							disabled={!value.trim()}
						>
              Add note
						</button>
					</section>
				</form>
				<NotesList state={state} dispatch={dispatch}/>
			</section>
		</main>
	);
};

export default Home;
