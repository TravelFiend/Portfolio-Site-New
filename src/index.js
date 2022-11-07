import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './serviceWorker/ServiceWorkerRegistration';


render(<App />, document.getElementById('root'));

registerServiceWorker();

if (module.hot){
  module.hot.accept();
}
