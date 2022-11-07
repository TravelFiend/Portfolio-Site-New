import { Workbox } from 'workbox-window';

const registerServiceWorker = () => {
  if (process.env.npm_lifecycle_event !== 'build' && process.env.npm_lifecycle_event !== 'serve'){
    return;
  }

  if ('serviceWorker' in navigator){
    const wb = new Workbox('sw.js');

    wb.addEventListener('installed', e => {
      if (e.isUpdate){
        if (confirm('New update available.  Click ok to refresh')){    //  pleace holder, replace with self-build popud or something like that
          window.location.reload();
        }
      }
    })

    wb.register();
  }
}

export default registerServiceWorker;
