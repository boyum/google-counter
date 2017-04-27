var url = window.location.href;
if (url && url.includes('google') && url.includes('search')) {
  var count = 0;
  chrome.storage.sync.get('sb-google-count', function (googleCount) {
    if (googleCount['sb-google-count']) {
      count = +googleCount['sb-google-count'];
    }
    count++;
    chrome.storage.sync.set({
      'sb-google-count': count
    }, function () {});

    sendMessage(count);
    runEasterEgg(count);
  });
}

/**
 * Stores a message in the cloud storage.
 * @param {string} message 
 */
function sendMessage(message) {
  chrome.runtime.sendMessage({count: message}, function() {});
}

/**
 * Runs easter eggs whenever the count reaches certain stages.
 * @param {number} count 
 */
function runEasterEgg(count) {
  if (count % 100 === 0) {
      showFireworks();    
  }
}

/**
 * Creates fireworks and appends them to the DOM.
 * (Fireworks made by Eddie Lin https://codepen.io/yshlin/pen/ylDEk).
 */
function showFireworks() {
  var pyro = document.createElement('div');

  pyro.classList.add('google-counter__pyro');

  document.body.appendChild(pyro);


  /** Hide fireworks when all animations are done playing. */
  window.setTimeout(hideFireworks, 16 * 1000);
}

/**
 * Removes the `div.pyro` element from the DOM.
 */
function hideFireworks() {
  var pyro = document.querySelector('.google-counter__pyro');

  if (pyro !== null) {
    pyro.parentNode.removeChild(pyro);
  }
}