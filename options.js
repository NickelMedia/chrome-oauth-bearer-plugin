function save_options() {
    var url = document.getElementById('url').value;
    var token = document.getElementById('token').value;
    chrome.storage.sync.set({
        url: url,
        token: token
    }, function() {
        console.log("Saved Options");
    });
    chrome.extension.getBackgroundPage().updateSetting(url, token);
    return false;
}

function restore_options() {
  chrome.storage.sync.get({
        url: 'http://kubernetes.cluster.local',
        token: '<unknown>'
  }, function(items) {
    document.getElementById('url').value = items.url;
    document.getElementById('token').value = items.token;
  });
}

document.getElementById('save').addEventListener('click', save_options);
restore_options();
