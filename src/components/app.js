import { h, Component } from 'preact';
import { Router } from 'preact-router';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-111534147-2');
ReactGA.pageview(window.location.pathname + window.location.search);

import Header from './header';

import Home from 'Routes/home';

// if(process.env.NODE_ENV==='development') {
// 	import('react-ga').then(ReactGA => {
// 		ReactGA.initialize('UA-111534147-2');
// 		ReactGA.pageview(window.location.pathname + window.location.search);
// 	})
// }

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class="font-hack leading-normal text-black bg-grey-lighter antialiased">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
				</Router>
			</div>
		);
	}
}
