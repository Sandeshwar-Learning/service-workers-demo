if ('serviceWorker' in navigator) {
    window.addEventListener('load', _ => {
        // Register service worker
        navigator.serviceWorker
            .register('./js/service-worker.js')
            .then(_ => console.log('Service worker registered'))
            .catch(err => console.log('Failed to registered service worker', err));
    });
    
}