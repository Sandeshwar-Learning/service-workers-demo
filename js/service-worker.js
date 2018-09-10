const cacheName = 'fullSiteCache';

// Service worker install event
self.addEventListener('install', e => {
    console.log('Service worker installed');    
});

// Service worker activate event
self.addEventListener('activate', e => {
    console.log('Service worker activated');
});
