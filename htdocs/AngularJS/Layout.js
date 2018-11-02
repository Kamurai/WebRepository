vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getNavigation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"AboutUs.html\">About Us</a><br/><br/>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Media.html\">Media</a><br/><br/>";
		$scope.vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Minecraft.html\">Minecraft!</a><br/><br/>";
	
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);