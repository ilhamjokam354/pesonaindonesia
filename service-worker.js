const CACHE_NAME = "pesonaINDO";
var urlsToCache = [
  "./",
  "./navbar.html",
  "./index.html",
  "./pages/home.html",
  "./pages/nusantara.html",
  "./pages/agama.html",
  "./pages/budaya.html",
  "./css/materialize.min.css",
  "./css/style.css",
  "./js/materialize.min.js",
  "./js/navbar.js",
  "./images/ak1.jpg",
  "./images/b1.jpg",
  "./images/bu1.jpg",
  "./images/hi1.jpg",
  "./images/indonesia.png",
  "./images/is1.jpg",
  "./images/j1.jpg",
  "./images/jb1.jpg",
  "./images/k1.jpg",
  "./images/ko1.jpg",
  "./images/kri1.jpg",
  "./images/nus1.jpg",
  "./images/p1.jpg",
  "./images/pp1.jpg",
  "./images/pro1.jpg",
  "./images/ru1.jpg",
  "./images/sl1.jpg",
  "./images/sm1.jpg",
  "./images/up1.jpg",
  "../manifest.json",
  "./icon1.png"
];
 
//install cache
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );

});

// ambil cache
self.addEventListener("fetch", function(event) {
    event.respondWith(
        caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
            if (response) {
            return response;
            }
    
            
            return fetch(event.request);
        })
    );
});

//hapus cache jika nama tidak samadengan nama cache
self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
});
