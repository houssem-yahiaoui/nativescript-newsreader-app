var Observable = require("data/observable").Observable;
var http = require('http');

function createViewModel() {
    var viewModel = new Observable();
   
    http.getJSON('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.nbcnewyork.com/entertainment/top-stories/?rss=y&embedThumb=y&summary=y')
               .then(function (res) {
                   console.log(res.responseData.feed.entries[0].title);
                   console.log(res.responseData.feed.entries[0].mediaGroups[0].contents[0].url);
                   this.set("data", res.responseData.feed.entries);
               }, function (err) {
                   console.log('ERROR');
    });
    

    return viewModel;
}

exports.createViewModel = createViewModel;