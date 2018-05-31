vApp.controller("LayoutController", ['$scope', '$sce', '$rootScope', function ($scope, $sce, $rootScope, vLevel)
{
	$scope.getNavigation = function(vLevel)
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