/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["C:/personalPage/public/404.html","30fa79fa75ce637275f94207e35d169f"],["C:/personalPage/public/C++/index.html","60e5c2ccd5d4cff00314ab9f4ef0fac7"],["C:/personalPage/public/HEXO/index.html","c53cdd735eed5209b17d072343990a4b"],["C:/personalPage/public/about/index.html","53bed6ca585a1cbbfec65321b5756f37"],["C:/personalPage/public/archives/2020/07/index.html","0e8b45e375291b1abf9b43301927eec3"],["C:/personalPage/public/archives/2020/index.html","2113e230537958b5fec9f701eecc790d"],["C:/personalPage/public/archives/index.html","6966ea4b2ca088ed6755452c78bd760f"],["C:/personalPage/public/categories/hexo/index.html","2697177fdd3d998a279d29f0ed963ad8"],["C:/personalPage/public/categories/index.html","e201107392b3eb717719c5fc84d15046"],["C:/personalPage/public/categories/os/index.html","3ca691fee43d0eb284cd545e1ee482e0"],["C:/personalPage/public/css/index.css","6fba3e05aa7d71a3589d4cc6cf6faf6c"],["C:/personalPage/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["C:/personalPage/public/hello-world/index.html","b7de2e80734cc2d74265e7f5064caaa0"],["C:/personalPage/public/img/3.png","cf5d6fb2446df9e86075540b72198c39"],["C:/personalPage/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["C:/personalPage/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["C:/personalPage/public/img/bai.jpg","1a326b8c06734059256df5943ed15b7e"],["C:/personalPage/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["C:/personalPage/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["C:/personalPage/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["C:/personalPage/public/img/img1.jpg","33f70eb00151f31cf0c0ebaa93ff3a60"],["C:/personalPage/public/img/img10.png","ee6292078a5ef6f54b4eec31fba8ce82"],["C:/personalPage/public/img/img100.jpg","b06a96f85b65e4e7419755fdeabd7452"],["C:/personalPage/public/img/img11.jpg","8574730a93a839e7580d57cfe69f6929"],["C:/personalPage/public/img/img12.jpg","69375e003052b5309d2888905a64dffc"],["C:/personalPage/public/img/img13.jpg","6ba6608d6f25712ea94425ef9272c2b3"],["C:/personalPage/public/img/img2.jpg","1e2c0b72ac7377acdc96b0b6d264da8c"],["C:/personalPage/public/img/img3.jpg","772092db9fba166727aa2010b787b34c"],["C:/personalPage/public/img/img4.jpg","f3d024265de22abf5cc16998b5d0cfad"],["C:/personalPage/public/img/img5.jpg","73e7711e166c9d6d95a0f6e7a708690f"],["C:/personalPage/public/img/img6.jpg","ebe6af5eadde19797ed9d57dd108e974"],["C:/personalPage/public/img/img7.jpg","36a1ece62523696de1ce1a3dc9af5ce5"],["C:/personalPage/public/img/img8.jpg","d585c6d687b52d09fc1570c242d1c110"],["C:/personalPage/public/img/img9.jpg","cc1d989c5833c1503e38ae878211a02a"],["C:/personalPage/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["C:/personalPage/public/img/rainbow.png","4a4d8c545b582196d62c0a820f2bfa89"],["C:/personalPage/public/img/taohua.jpg","a4694755792adf4bfc7134be0b31fc7d"],["C:/personalPage/public/index.html","13c4daf431da78a313f59bc8875ce7ea"],["C:/personalPage/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["C:/personalPage/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["C:/personalPage/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["C:/personalPage/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["C:/personalPage/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["C:/personalPage/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["C:/personalPage/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["C:/personalPage/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["C:/personalPage/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["C:/personalPage/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["C:/personalPage/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["C:/personalPage/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["C:/personalPage/public/os/index.html","21c2b1e280c20ad0cb736051e69f3f8a"],["C:/personalPage/public/photo/index.html","e3bc8a7d7f9cfd5ab87bf1f490a70e8d"],["C:/personalPage/public/process/index.html","259036d46948aa006d88340ba468f52b"],["C:/personalPage/public/python/index.html","dad6bb51f915954bb02b0d3ef0c67a1b"],["C:/personalPage/public/tags/hexo/index.html","6aab9052b0cd925ca52166c2251ae3a9"],["C:/personalPage/public/tags/index.html","6d64876115e522b7ba988147ab9969c9"],["C:/personalPage/public/tags/博客/index.html","6eab2f46972736c5d1a049e67ec75866"],["C:/personalPage/public/tags/操作指南/index.html","4ec69231e027b666e296e1bef59a9ced"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







