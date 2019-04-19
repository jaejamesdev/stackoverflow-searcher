document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('search');
    button.addEventListener('click', function() {
        var text = document.getElementById('searchText').value;
        var stackUrl = 'https://stackoverflow.com/search?q=' + encodeURIComponent(text);
        chrome.tabs.create({url: stackUrl})
    })
})