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
			$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section1/Index.html\">Global</a><br><br>";
			$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section2/Index.html\">Grendol</a><br><br>";
			$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section3/Index.html\">Utopia</a><br><br>";
				$scope.vResult += "<a class=\"navlinkC\" href=\""+getPath(vLevel)+"Division2/Section5/Section3/Project1.html\">Avia:Elemental Angels</a><br><br>";
			$scope.vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section4/Index.html\">Elvia</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project6.html\">Truth</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project7.html\">Kingdoms</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project8.html\">Terminal World</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project9.html\">Monster Office Workplace</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project10.html\">Battle Princesses</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project11.html\">Sacred Offerings</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project12.html\">The Way</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project13.html\">Conspiratorium</a><br><br>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project14.html\">Conversion</a><br><br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);