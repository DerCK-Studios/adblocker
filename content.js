// content.js

function removeElements(selector) {
  document.querySelectorAll(selector).forEach(el => el.remove());
}

function skipVideoAds() {
  const video = document.querySelector('video');


  const isAd = document.querySelector('.ad-showing');
  const skipBtn = document.querySelector('.ytp-ad-skip-button');

  if (isAd && video) {
  
    if (skipBtn) {
      skipBtn.click();
      console.log("[CK] Skip Button clicked.");
    }

  
    if (video.duration > 0 && video.currentTime < video.duration - 1) {
      video.currentTime = video.duration;
      console.log("[CK] Advertise skipped.");
    }
  }
}


function hideAdElements() {
  removeElements('.ytd-display-ad-renderer'); // Sidebar-Anzeigen
  removeElements('.ytd-promoted-sparkles-text-search-renderer'); // Suchwerbung
  removeElements('ytd-player-legacy-desktop-watch-ads-renderer'); // Videoads
  removeElements('.ytp-ad-overlay-container'); // Overlay
  removeElements('.ytp-ad-module'); // andere Ad-Elemente
}

setInterval(() => {
  skipVideoAds();
  hideAdElements();
}, 1000); 
