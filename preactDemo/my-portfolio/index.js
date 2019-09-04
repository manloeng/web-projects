import './style';
import { Component } from 'preact';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import data from './src/myInfo.js';

export default class App extends Component {
	state = {
		data
	};

	render() {
		const { name, aboutMe, imgs, myWork } = this.state.data.myInfo;
		return (
			<div>
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}
