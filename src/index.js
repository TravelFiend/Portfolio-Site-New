import { createRoot } from 'react-dom/client';
import App from './App';
import registerServiceWorker from './serviceWorker/ServiceWorkerRegistration';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

registerServiceWorker();

if (module.hot){
  module.hot.accept();
}
