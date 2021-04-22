openscihub = function(word){
    var query = word.linkUrl;
    chrome.tabs.create({url: "https://sci-hub.se/" + query});
 };

chrome.contextMenus.create({
 title: "Open in Sci-Hub",
 contexts:["link"],  // ContextType
 onclick: openscihub // A callback function
});