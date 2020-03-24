// service worker
var CACHE_NAME = 'simple-pwa-cache-v2';

var urlsToCache = [
    '/',
    'libs/semanticui/semantic.min.css',
    'libs/semanticui/semantic.min.js',
    'js/index.js',
    'css/index.css',
    'assets/icons/apple-logo-macintosh-mac-os-x-lion-macos-macbook-operating-system-apple-logo-png-clip-art-thumbnail.png',
    'assets/icons/android-icon-192x192.png',
    'assets/images/13-inch-macbook-pro-sale-image.png',
    'assets/images/314AC997-DB5B-4921-8824-09EE3ACD994F-780x437.jpeg',
    'assets/images/FJ83_B1606E0F-2A86-4BD2-8BBC-6E9A74B33F12_large.jpg',

]



// install 
self.addEventListener('install', (e) => {

    //wait
    e.waitUntil(

        // open cache 
        caches.open(CACHE_NAME)

            .then((cache) => {

                console.log('cache opened');

                return cache.addAll(urlsToCache);
            })
    )

    

})

// activate
self.addEventListener('activate', (e) => {

    // clean old caches 

})

// listen to fetch requests 
self.addEventListener('fetch', (e) => {

    e.respondWith(

        caches.match(e.request)

            .then((response) => {

                if(response){
                    return response;
                }

                // return request 
                return fetch(e.request);
            })

            // .catch((err)=>{
            //     console.log(err);
            // })

    )


})