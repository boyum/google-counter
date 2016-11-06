chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var text = request.count; 

  if (request.count >= 1e3 && request.count < 1e6) {
    text = (text / 1e3) + 'k';
  } else if (request.count >= 1e6 && request.count < 1e9) {
    text = (text / 1e6) + 'M';
  } else if (request.count >= 1e9 && request.count < 1e12) {
    text = (text / 1e9) + 'B';
  } 
 
  text += '';
  
  chrome.browserAction.setBadgeBackgroundColor({
    color: [
      220,
      0,
      0,
      230
    ]
  });
  chrome.browserAction.setBadgeText({
    text: text
  });
});