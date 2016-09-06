app.controller('tablesController', function($scope,dataService,$timeout,$state) {

	$scope.selectedItem = {};
	
	
	$scope.onItemClick = function(selectedItem) {
		$scope.selectedItem = selectedItem;
	}

    $scope.styleNavLeft = {
        "width": "16%"
    };
    $scope.styleNavRight  = {
        "width": "16%",
        "right":"0px"
    };

    $scope.showNavLeft = true;
    $scope.isShowLeftMenu = true;

    $scope.isShowNavLeft = function() {
        $scope.showNavLeft = !$scope.showNavLeft;
        if (!$scope.showNavLeft) {
            $scope.styleNavLeft.width = "0px";
        } else {
            $scope.styleNavLeft.width = "16%";
        }

        $timeout(function () {
        	$scope.isShowLeftMenu = !$scope.isShowLeftMenu;
    	}, 500);


    }

    $scope.showNavRigth = true;
    $scope.isShowRightMenu = true;
    $scope.isShowNavRight = function() {
        $scope.showNavRigth = !$scope.showNavRigth;
        if (!$scope.showNavRigth) {
            $scope.styleNavRight.width = "0px";
            $scope.styleNavRight.right = "-200px"
        } else {
            $scope.styleNavRight.width = "16%";
            $scope.styleNavRight.right = "0px"
        }

        $timeout(function() {
        	$scope.isShowRightMenu = !$scope.isShowRightMenu;
        },500);
    }

    var url = "tables/get";
    $scope.employee = {};
    dataService.getDetailData(url,function(error,result){
    	if(error) {

    	} else {
    		$state.go("table.detail");
			$scope.employee["tables"] = result.data;
			$scope.selectedItem = result.data[0];    		
    	}
    })


    $scope.changeClass = function() {

    	if(!$scope.isShowLeftMenu && !$scope.isShowRightMenu) {
    		return "col-sm-12";
    	} else if(!$scope.isShowLeftMenu || !$scope.isShowRightMenu) {
    		return  "col-sm-10"
    	} else {
    		return "col-sm-8"
    	}
    	
    }
    // $scope.employee = {
    //     "tables": [{
    //         "id": 1,
    //         "name" : "Employee Details",
    //         "route": "employeeDetails"
    //     }, {
    //         "id": 2,
    //         "name": "Employee Address",
    //         "route": "employeeDetails"
    //     }, {
    //         "id": 3,
    //         "name": "Employee ContactInfo",
    //         "route": "employeeDetails"
    //     }, {
    //         "id": 4,
    //         "name": "Employee Qualification",
    //         "route": "employeeDetails"
    //     }]
    // }
})
