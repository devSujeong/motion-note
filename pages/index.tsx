import type { NextPage } from 'next';
import classnames from 'classnames/bind';

import styles from './index.module.scss';
import Header from '@views/layout/Header.layout';
import Footer from '@views/layout/Footer.layout';
import Main from '@views/layout/Main';
import Modal from '@views/components/Modal';
import { noteModalContents } from 'core/data/modal.data';
import { useState } from 'react';

const cx = classnames.bind(styles);

const Home: NextPage = () => {
	const [isNoteModal, setIsNoteModal] = useState(false);
	const handleNoteClick = () => {
		setIsNoteModal(true);
	};

	return (
		<div className={cx('body')}>
			<div className={cx('wrap')}>
				<Header handleNoteClick={handleNoteClick} />
				<div className={cx('main')}>
					<Main />
				</div>
				<Footer />
			</div>
			{ isNoteModal && <Modal data={noteModalContents} /> }
		</div>
	);
};

export default Home;
