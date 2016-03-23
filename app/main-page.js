//var createViewModel = require("./main-view-model").createViewModel;
var http = require('http'),
    moment = require('moment'),
    frameModule = require('ui/frame');


function loaded(args) {
    var page = args.object;
    var isLoading = true;
    http.getJSON('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=http://www.nbcnewyork.com/entertainment/top-stories/?rss=y&embedThumb=y&summary=y')
               .then(function (res) {
                   console.log(res.responseData.feed.entries[0].title);
                   console.log(res.responseData.feed.entries[0].mediaGroups[0].contents[0].url);
                   //this.set("data", );
                   page.bindingContext = {data: res.responseData.feed.entries, isLoading:false};

               }, function (err) {
                   console.log('ERROR');
    });
    
}
exports.loaded = loaded;

exports.getInfo = function (args) {
    var navigation = {
        moduleName : "views/singlePost/single",
        context : {info : args.view.bindingContext}
    }
    frameModule.topmost().navigate(navigation);
} 