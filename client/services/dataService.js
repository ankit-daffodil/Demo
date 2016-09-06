app.service("dataService", function($http) {

    this.baseUrl = "http://localhost:3000";

    this.getDetailData = function(url, callback) {
        var url = this.baseUrl +"/"+ url;
        console.log(url);

        $http.get(url).then(function(result) {
            callback(null, result);
        }, function(error) {
            callback(error, null);
        });
    };

})
