importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "3rdpartylicenses.txt",
    "revision": "19f2591ebaf1bb6bd5eb60a237c647ec"
  },
  {
    "url": "assets/How_to_modify_projectb2.PNG",
    "revision": "7cec423507ff3a3592ac367178f52ce0"
  },
  {
    "url": "assets/i18n/en.json",
    "revision": "74292f28e736cfc237c8e27a03e92a10"
  },
  {
    "url": "assets/i18n/fr.json",
    "revision": "77016363098b58c72beee5d0208c61a2"
  },
  {
    "url": "assets/IntroducingYourProductb5.PNG",
    "revision": "7afdf8372b9405e4ecf537155af03df6"
  },
  {
    "url": "assets/manifest.json",
    "revision": "163a3eaddefa04020a3e78abea079f4e"
  },
  {
    "url": "assets/me.jpg",
    "revision": "486b9bbe2d15c907b34eabe54cc0a899"
  },
  {
    "url": "assets/N-128x128.png",
    "revision": "9ba134b53d348b5309a6adffd121ee03"
  },
  {
    "url": "assets/N-16x16.png",
    "revision": "569e21e8ef27b7a0a4ec5574e33927fa"
  },
  {
    "url": "assets/N-20x20.png",
    "revision": "ed45e58912a5f8177b2ec24561d46a51"
  },
  {
    "url": "assets/N-24x24.png",
    "revision": "8585abe997823b9a5508b171a09ea48d"
  },
  {
    "url": "assets/N-256x256.png",
    "revision": "795f8c70359ae76f4037985eaa317493"
  },
  {
    "url": "assets/N-32x32.png",
    "revision": "8083ae4469a84c1594a8bdaf770b97b1"
  },
  {
    "url": "assets/N-48x48.png",
    "revision": "c34d334d02c5b10baedaee7c1293be09"
  },
  {
    "url": "assets/N-512x512.png",
    "revision": "8c76f156bd58ac525a59217b7dbdb86f"
  },
  {
    "url": "assets/N-64x64.png",
    "revision": "1a6309640354f77010c3a6d45a773dd9"
  },
  {
    "url": "assets/RESSAD Nour Updated 2018.ver1.docx",
    "revision": "98f2dcb1874c18b84741438cf531d683"
  },
  {
    "url": "assets/Sanef-Its-1.jpg",
    "revision": "a0425f3bca871e96dd7066e1a7651d93"
  },
  {
    "url": "assets/SdtBookingMainUi.PNG",
    "revision": "397c14dd4570e5ba591738bd3afaa036"
  },
  {
    "url": "assets/SdtBookingMapView.PNG",
    "revision": "f5778cd93439e6a9da312555de2521fb"
  },
  {
    "url": "assets/SdtMonitoringTool.PNG",
    "revision": "b936012b753b5787cd259400649e121d"
  },
  {
    "url": "assets/SdtMonitoringToolActiviryView.PNG",
    "revision": "900b846ba1f0463e760308947f41e105"
  },
  {
    "url": "assets/SdtMonitoringToolActiviryView.PNGsFtp.PNG",
    "revision": "0a913e81803cd932b3dd97c29dcaef45"
  },
  {
    "url": "assets/SdtMonitoringToolWsView.PNG",
    "revision": "2abde98ac145448c91eaeed21ded3a34"
  },
  {
    "url": "favicon.ico",
    "revision": "03594a84564ac436e51147d05f0ac5a5"
  },
  {
    "url": "fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "index.html",
    "revision": "692c3471f7f8583747f4ba3403184249"
  },
  {
    "url": "inline.bundle.js",
    "revision": "da7d1332261ed88721d7789ee34885d3"
  },
  {
    "url": "main.bundle.js",
    "revision": "dde41c214e847c7024c4c474ab4e1f55"
  },
  {
    "url": "polyfills.bundle.js",
    "revision": "5ec94a9c48581a0bc928600b1686a11b"
  },
  {
    "url": "styles.bundle.css",
    "revision": "1c3c83faee02cb7e9a2a38df36b552d3"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
