import { ReactElement } from 'react';
import classnames from 'classnames/bind';

import styles from './Footer.module.scss';
const cx = classnames.bind(styles);

function Footer(): ReactElement {
	return <footer className={cx('footer')}>
    Copylight devSujeong
	</footer>;
}

export default Footer;