vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getNavigation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project1.html\">Oracle</a><br><br>";
		$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project2.html\">Derby</a><br><br>";
		$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project3.html\">MySQL</a><br><br>";
		$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project4.html\">SQL Server</a><br><br>";
		$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project5.html\">PostgreSQL</a><br><br>";
    
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);