
var urlPattern;
var authToken;

function init() {
    chrome.storage.sync.get({
        url: '<unknown>',
        token: '<unknown>'
    }, function(items) {
        urlPattern = items.url;
        authToken = items.token;
    });
}

function updateSetting (url, token) {
    urlPattern = url;
    authToken = token;
}


chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    if (authToken && urlPattern) {
        var match = false;
        if (details.url.startsWith(urlPattern)) {
            console.log("Setting Authorization Header on request to " + details.url);
            details.requestHeaders.push({
                name: "Authorization",
                value: "Bearer " + authToken
            });
        }
    }
    return {requestHeaders: details.requestHeaders};
},{
    "urls": ["*://*/*"]
},[
    "requestHeaders",
    "blocking"
]);

init()

