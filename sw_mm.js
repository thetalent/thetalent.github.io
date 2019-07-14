var cacheName = 'mastermind'


self.addEventListener('install',event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.adAll([
        'index2.html',
        'mm.css',
        'mm.js',
        'offline.html'
        ]))
  )
 });
 
 
self.addEventListener('fetch', function(event) {

    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            if(!response || response.status !== 200) {
              return response;
            }

            var responseToCache = response.clone();
            caches.open(cacheName)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });

            return response;
          }
        ).catch(error => {
          // Check if the user is offline first and is trying to navigate to a web page
          if (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html')) {
          // Return the offline page
          return caches.match("index2.html");
        }
        });
      })
    );

});
