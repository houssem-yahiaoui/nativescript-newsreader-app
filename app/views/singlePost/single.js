var frameModule = require('ui/frame'),
    moment = require('moment');
    
var data;

exports.onLoaded = function(args) {
    var page = args.object;
    data = page.navigationContext.info;
    data.content = data.content.replace(/(<([^>]+)>)/ig,"");
    data.author = "By : "+data.author + " | ";
    data.publishedDate = data.publishedDate.substr(5, 20);
    data.publishedDate= moment(data.publishedDate).fromNow();
    page.bindingContext = {passedData : data};
    console.log(data.content.replace(/(<([^>]+)>)/ig,""));
}

exports.goBack = function() {
    frameModule.topmost().navigate('main-page');
}