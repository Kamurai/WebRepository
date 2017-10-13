vApp.controller("MonkeyController", ['$scope', '$sce', function ($scope, $sce)
	{
		$scope.Monkey = function()
		{
			$scope.vResult = "Monkeys!";
			return $sce.trustAsHtml($scope.vResult);
		};
		
		
		
	}]);
	



