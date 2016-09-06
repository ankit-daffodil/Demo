app.controller('detailController', function($scope,$stateParams,dataService) {

	var url = "employeeDetail";
	$scope.title = "Employee Detail";
	
	if($stateParams.route) {
		url = $stateParams.route["route"];
	} 

	if($stateParams.route && $stateParams.route.name) {
		$scope.title = $stateParams.route.name;
	}

	$scope.employee["detail"] = [{"_id":"57c91efc72a784611785cad6","empid":"1","name":"ankit","gender":"M","designation":"Devloper"},{"_id":"57c91fe772a784611785cad7","empid":"2","name":"pankaj","gender":"M","designation":"Devloper"},{"_id":"57c91ff772a784611785cad8","empid":"3","name":"rahul","gender":"M","designation":"Devloper"},{"_id":"57c9200772a784611785cad9","empid":"4","name":"hitesh","gender":"M","designation":"Devloper"},{"_id":"57c9201b72a784611785cada","empid":"5","name":"amit","gender":"M","designation":"Devloper"}];
	$scope.employee.keys = Object.keys($scope.employee["detail"][0]);

	dataService.getDetailData(url,function(error,result) {
		if(error) {

		} else {
			if(result.data.length) {
				$scope.employee["detail"] = result.data;
				$scope.employee.keys = Object.keys($scope.employee["detail"][0]);
			}
		}
	});

    
});
