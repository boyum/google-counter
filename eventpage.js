chrome.runtime.onMessage.addListener(function onMessage(request, sender, sendResponse) {
  var text = request.count; 

  if (request.count >= 1e3 && request.count < 1e6) {
    text = Math.floor(text / 1e3) + 'k';
  } else if (request.count >= 1e6 && request.count < 1e9) {
    text = Math.floor(text / 1e6) + 'M';
  } else if (request.count >= 1e9 && request.count < 1e12) {
    text = Math.floor(text / 1e9) + 'B';
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

  return true;
});