import type { NextPage } from 'next';
import classnames from 'classnames/bind';

import styles from './index.module.scss';
import Header from '@views/layout/Header.layout';
import Footer from '@views/layout/Footer.layout';
import Main from '@views/layout/Main';

const cx = classnames.bind(styles);

const Home: NextPage = () => {
	return (
		<div className={cx('wrap')}>
			<Header />
			<div className={cx('main')}>
				<Main />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
