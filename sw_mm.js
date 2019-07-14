var cacheName = 'mastermind'


self.addEventListener('install',event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.adAll([
        'index2.html',
        'mm.css',
        'mm.js'
        'offline.html'
        ]))
  )
 });
 
 
 self.addEventListener('fetch',function(event){
   if (event.request.method === 'GET' && event.request.headers.get('accept')
       .includes('text/html')){ event.respondWith(
   {
     return caches.match('index2.html)
     
   })
   )
   }
   
   else{
   
  event.respondWith(fetch(event.request));
   }
   
 })
    
