vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce){
	$scope.getNavigation = function()	{
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./AboutUs.html\">About Us</a></li>
				<li><a class=\"navlinkA\" href=\"./Media.html\">Media</a></li>
				<li><a class=\"navlinkA\" href=\"./GitHubs.html\">Git Hubs</a></li>
				<li><a class=\"navlinkA\" href=\"./WebApps.html\">Web Apps</a></li>
			</ul>
		`;
	
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);