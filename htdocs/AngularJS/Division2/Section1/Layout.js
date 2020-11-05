vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce){
	$scope.getNavigation = function(){
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"../Index.html\">Digital Board Games</a></li>
				<li><a class=\"navlinkA\" href=\"../Project1.html\">Kingdoms</a></li>
				<li><a class=\"navlinkA\" href=\"../Project2.html\">Goblins and Guardians</a></li>
				<li><a class=\"navlinkA\" href=\"../Project3.html\">Mega Fleets</a></li>
				<li><a class=\"navlinkA\" href=\"../Section1/Index.html\">Crash Ball</a></li>
				<ul class=\"navigationUl\">
					<li><a class=\"navlinkB\" href=\"./Project1.html\">Antarrea: Crash Ball</a></li>
					<li><a class=\"navlinkB\" href=\"./Project2.html\">Gynowars: Crash Ball</a></li>
				</ul>
			</ul>
		`;
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);