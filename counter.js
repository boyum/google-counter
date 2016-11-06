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
  });
}

function sendMessage(message) {
  chrome.runtime.sendMessage({count: message}, function() {});
}