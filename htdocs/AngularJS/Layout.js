vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getNavigation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<span class='navlink'>";
			$scope.vResult += "<a href='"+getPath(vLevel)+"AboutUs.html'>About Us</a>";
		$scope.vResult += "</span>";
		$scope.vResult += "<br>";
		$scope.vResult += "<span class='navlink'>";
			$scope.vResult += "<a href='"+getPath(vLevel)+"Media.html'>Media</a>";
		$scope.vResult += "</span>";
		$scope.vResult += "<br>";
		$scope.vResult += "<span class='navlink'>";
			$scope.vResult += "<a href='"+getPath(vLevel)+"Minecraft.html'>Minecraft!</a>";
		$scope.vResult += "</span>";
		$scope.vResult += "<br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);