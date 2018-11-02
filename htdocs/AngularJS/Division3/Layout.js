vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getNavigation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division3/Project1.html\">Online Experience Downloads</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division3/Project2.html\">Game Maker Downloads</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division3/Project3.html\">Java Downloads</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division3/Project4.html\">C# Downloads</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division3/Project5.html\">C++ Downloads</a><br><br>";
    
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);