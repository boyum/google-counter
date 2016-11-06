document.addEventListener('DOMContentLoaded', function () {
  getCount();
  initResetButton();

});

function getCount() {
  chrome.storage.sync.get('sb-google-count', function (googleCount) {
    var el = document.getElementById('count');
    count.innerText = googleCount['sb-google-count'] || 0;
  });
}

function initResetButton() {
  var button = document.getElementById('reset-button');
  button.addEventListener('click', resetCounter);

  function resetCounter() {

    chrome.storage.sync.set({
      'sb-google-count': 0
    }, function () {});

    // Reset badge by sending a message to eventpage.js
    chrome.runtime.sendMessage({
      count: 0
    }, function () {});

    location.reload();
  }
}