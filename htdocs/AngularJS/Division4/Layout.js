vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce){
	$scope.getNavigation = function(){
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index.html\">Downloadables</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1.html\">Cube World</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2.html\">Minecraft</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3.html\">Game Maker</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4.html\">Java</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5.html\">C#</a></li>
			</ul>
		`;
    
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);