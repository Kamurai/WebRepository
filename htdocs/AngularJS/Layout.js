vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.Navigation = function(vLevel)
	{
		$scope.vResult = "<span class='navlink'>";
			$scope.vResult += "<a href='./AboutUs.html'>About Us</a>";
		$scope.vResult += "</span>";
		$scope.vResult += "<br>";
		$scope.vResult += "<span class='navlink'>";
			$scope.vResult += "<a href='./Media.html'>Media</a>";
		$scope.vResult += "</span>";
		$scope.vResult += "<br>";
		$scope.vResult += "<span class='navlink'>";
			$scope.vResult += "<a href='./Minecraft.html'>Minecraft!</a>";
		$scope.vResult += "</span>";
		$scope.vResult += "<br>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);