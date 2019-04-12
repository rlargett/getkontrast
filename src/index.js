import { h, render } from 'preact';
// import renderString from 'preact-render-to-string';
import './style';

let root;
function init() {
 let App = require('./components/app').default;
 root = render(<App />, document.getElementById('root'), document.getElementById('app'));
}

// Service Workers on Production
// if(process.env.NODE_ENV==='production' && 'serviceWorker' in navigator && location.protocol === 'https:') {
// 	navigator.serviceWorker.register(__webpack_public_path__ + 'sw.js');
// }

// in development, set up HMR:
if (module.hot) {
 //require('preact/devtools');   // turn this on if you want to enable React DevTools!
 module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();
