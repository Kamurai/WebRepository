vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getNavigation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division1/Section1/Index.html\">Databases</a><br><br>";
	
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);