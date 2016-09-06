app.controller('detailController', function($scope,$stateParams,dataService) {

	var url = "employeeDetail";
	$scope.title = "Employee Detail";
	
	if($stateParams.route) {
		url = $stateParams.route["route"];
	} 

	if($stateParams.route && $stateParams.route.name) {
		$scope.title = $stateParams.route.name;
	}



	dataService.getDetailData(url,function(error,result) {
		if(error) {

		} else {
			$scope.employee["detail"] = result.data;
			$scope.employee.keys = Object.keys($scope.employee["detail"][0]);
		}
	});

    
});
