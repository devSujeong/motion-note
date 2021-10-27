import { ReactElement } from 'react';
import classnames from 'classnames/bind';

import styles from './Modal.module.scss';
const cx = classnames.bind(styles);

type Props = {
  data: Array<{
    id: string;
    label: string;
  }>
}

function Modal({data}: Props): ReactElement {
	return <article className={cx('modal')}>
		<button className={cx('btn-close')}>X</button>
		{
			data.map((item) => {
				return <div className={cx('row')} key={item.id}>
					<label className={cx('label')} htmlFor={item.id}>{item.label}</label>
					<input className={cx('input')} type="text" id={item.id} />
				</div>;
			})
		}
		
		<button className={cx('btn-add')}>
      ADD
		</button>
	</article>;
}

export default Modal;