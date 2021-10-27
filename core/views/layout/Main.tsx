import { ReactElement } from 'react';
import classnames from 'classnames/bind';

import styles from './Main.module.scss';
const cx = classnames.bind(styles);

function Main(): ReactElement {
	return <main className={cx('wrapper')}>main</main>;
}

export default Main;