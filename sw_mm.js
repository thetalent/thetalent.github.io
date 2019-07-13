var cacheName = 'mastermind'

self.addEventListener('install',event => {
  event.waitUntil(
    caches.open(cachName)
      .then(cache => cache.adAll([
        'index2.html',
        'mm.css',
        'mm.js'
        ]))
  )
 });
 
 
 self.addEventListener('fetch',function(event){
  event.respondWith(
    caches.match(event.request)
      .then(function(response){
         if(response){
         return(response)
         }
         return fetch(event.request)
      }
  )
 })
    
