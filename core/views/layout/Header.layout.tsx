import { ReactElement } from 'react';
import classnames from 'classnames/bind';

import styles from './Header.module.scss';
const cx = classnames.bind(styles);

function Header(): ReactElement {
	return <header className={cx('gnb')}>
		<h1 className={cx('title')}>MOTION</h1>
		<nav>
			<ul className={cx('nav-list')}>
				<li className={cx('nav-list-item')}>
					<button className={cx('button')}>IMAGE</button>
				</li>
				<li className={cx('nav-list-item')}>
					<button className={cx('button')}>VIDEO</button>
				</li>
				<li className={cx('nav-list-item')}>
					<button className={cx('button')}>NOTE</button>
				</li>
				<li className={cx('nav-list-item')}>
					<button className={cx('button')}>TASK</button>
				</li>
			</ul>
		</nav>
		
	</header>;
}

export default Header;