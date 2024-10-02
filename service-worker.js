self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('calculator-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/umaasa.mp3',
                '/styles.css',
                '/script.js',
                '/icon.png',
                '/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});