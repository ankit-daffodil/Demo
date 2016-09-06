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

    $scope.employee = {};
    // we have set default data for tables. If data not get from db
    $scope.employee["tables"] = [{ "_id": "57c94f8b87faef1d0a93028d", "name": "Employee Detail", "route": "employeeDetail" }, { "_id": "57c94fa287faef1d0a93028e", "name": "Employee Qualification", "route": "employeeQualification" }, { "_id": "57c94fbb87faef1d0a93028f", "name": "Contact Information", "route": "contactInformation" }, { "_id": "57c94fce87faef1d0a930290", "name": "Employee Address", "route": "employeeAddress" }];

    var url = "tables/get";
    dataService.getDetailData(url,function(error,result){
    	if(error) {

    	} else {
    		$state.go("table.detail"); 
            if(result.data.length) {
    			$scope.employee["tables"] = result.data;            
            }
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
