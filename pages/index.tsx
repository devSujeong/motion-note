// libraries
import type { NextPage } from 'next';
// import classnames from 'classnames/bind';

// customs
import Header from '@views/layout/Header.layout';
import Footer from '@views/layout/Footer.layout';

// const cx = classnames.bind(styles);

const Home: NextPage = () => {
	return (
		<div>
			<Header />
			<Footer />
		</div>
	);
};

export default Home;
