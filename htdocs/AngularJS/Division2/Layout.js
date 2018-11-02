vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getNavigation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section1/Index.html\">Gynowars</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project2.html\">Assault</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project3.html\">Mars</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section4/Index.html\">Renley</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section5/Index.html\">Antarrea</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project7.html\">Truth</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project8.html\">Kingdoms</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project9.html\">Terminal World</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project10.html\">Monster Office Workplace</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project11.html\">Battle Princesses</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project12.html\">Sacred Offerings</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project13.html\">The Way</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project14.html\">Conspiratorium</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project15.html\">Conversion</a><br><br>";
    
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);