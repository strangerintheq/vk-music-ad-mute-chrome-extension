var node = document.getElementsByTagName('body')[0];
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.extension.getURL('mute.js'));
node.appendChild(script);