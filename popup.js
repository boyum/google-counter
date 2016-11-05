document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('sb-google-count', function (googleCount) {
    var el = document.getElementById('count');
    count.innerText = googleCount['sb-google-count'] || 0;
  });
});