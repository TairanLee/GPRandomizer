const APPLICATION_NAME="GPRandomizer",VERSION="2cb9e1941b4e0a1d73cbf553cae31a24bd9d6fda",CACHE_KEY="GPRandomizer"+VERSION,APPLICATION_DIR="/GPRandomizer",URL=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")+"/GPRandomizer",IMG_SUFFIX=navigator.userAgent.match(/Chrome|Opera/)?".webp":"-min.png",STATIC_FILES=[URL+"/",URL+"/js/randomizer.js",URL+"/pic/ADVfedP"+IMG_SUFFIX,URL+"/pic/ADVfedV"+IMG_SUFFIX,URL+"/pic/ADVgai"+IMG_SUFFIX,URL+"/pic/ADVknw"+IMG_SUFFIX,URL+"/pic/ADVlab"+IMG_SUFFIX,URL+"/pic/ADVminB"+IMG_SUFFIX,URL+"/pic/ADVminV"+IMG_SUFFIX,URL+"/pic/ADVore"+IMG_SUFFIX,URL+"/pic/ADVqic"+IMG_SUFFIX,URL+"/pic/ADVsecO"+IMG_SUFFIX,URL+"/pic/ADVsecV"+IMG_SUFFIX,URL+"/pic/ADVstp"+IMG_SUFFIX,URL+"/pic/ADVtrsB"+IMG_SUFFIX,URL+"/pic/ADVtrsV"+IMG_SUFFIX,URL+"/pic/ADVtyp"+IMG_SUFFIX,URL+"/pic/BOOgai"+IMG_SUFFIX,URL+"/pic/BOOknw"+IMG_SUFFIX,URL+"/pic/BOOlab"+IMG_SUFFIX,URL+"/pic/BOOmin"+IMG_SUFFIX,URL+"/pic/BOOnav"+IMG_SUFFIX,URL+"/pic/BOOpia"+IMG_SUFFIX,URL+"/pic/BOOpwt"+IMG_SUFFIX,URL+"/pic/BOOqic"+IMG_SUFFIX,URL+"/pic/BOOter"+IMG_SUFFIX,URL+"/pic/BOOtrs"+IMG_SUFFIX,URL+"/pic/FEDcre"+IMG_SUFFIX,URL+"/pic/FEDgle"+IMG_SUFFIX,URL+"/pic/FEDknw"+IMG_SUFFIX,URL+"/pic/FEDore"+IMG_SUFFIX,URL+"/pic/FEDpwt"+IMG_SUFFIX,URL+"/pic/FEDqic"+IMG_SUFFIX,URL+"/pic/FEDvps"+IMG_SUFFIX,URL+"/pic/FINbld"+IMG_SUFFIX,URL+"/pic/FINfed"+IMG_SUFFIX,URL+"/pic/FINgai"+IMG_SUFFIX,URL+"/pic/FINsat"+IMG_SUFFIX,URL+"/pic/FINsec"+IMG_SUFFIX,URL+"/pic/FINtyp"+IMG_SUFFIX,URL+"/pic/RNDfed"+IMG_SUFFIX,URL+"/pic/RNDgai3"+IMG_SUFFIX,URL+"/pic/RNDgai4"+IMG_SUFFIX,URL+"/pic/RNDmin"+IMG_SUFFIX,URL+"/pic/RNDpia"+IMG_SUFFIX,URL+"/pic/RNDstp"+IMG_SUFFIX,URL+"/pic/RNDter"+IMG_SUFFIX,URL+"/pic/RNDtrs3"+IMG_SUFFIX,URL+"/pic/RNDtrs4"+IMG_SUFFIX,URL+"/pic/TECcre"+IMG_SUFFIX,URL+"/pic/TECgai"+IMG_SUFFIX,URL+"/pic/TECknw"+IMG_SUFFIX,URL+"/pic/TECore"+IMG_SUFFIX,URL+"/pic/TECpia"+IMG_SUFFIX,URL+"/pic/TECpow"+IMG_SUFFIX,URL+"/pic/TECqic"+IMG_SUFFIX,URL+"/pic/TECtyp"+IMG_SUFFIX,URL+"/pic/TECvps"+IMG_SUFFIX];function onInstall(I){I.waitUntil(caches.open(CACHE_KEY).then(function(I){I.addAll(STATIC_FILES),console.log("[ServiceWorker]","Success to store all static data in cache.")}))}function onFetch(I){I.respondWith(caches.open(CACHE_KEY).then(function(F){return F.match(I.request).then(function(F){return F?(console.log("Found response in cache: ",F),F):fetch(I.request)}).catch(function(I){console.log("Error fetch in handler:",I)})}))}function onActivate(I){I.waitUntil(caches.keys().then(function(I){I.filter(function(I){return 0!==I.indexOf(CACHE_KEY)}).map(function(I){caches.delete(I),console.log("[ServiceWorker]","Delete old cache:",I)})}))}self.addEventListener("install",onInstall),self.addEventListener("fetch",onFetch),self.addEventListener("activate",onActivate);