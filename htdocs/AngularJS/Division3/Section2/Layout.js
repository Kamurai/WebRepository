vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce){
	$scope.getNavigation = function(){
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"../Project1.html\">Truth</a></li>
				<li><a class=\"navlinkA\" href=\"../Project2.html\">The Wrong Ninja</a></li>
				<li><a class=\"navlinkA\" href=\"../Project3.html\">Gynowars</a></li>
				<li><a class=\"navlinkA\" href=\"../Project4.html\">Terminal World</a></li>
				<li><a class=\"navlinkA\" href=\"../Project5.html\">Mars: Opposition</a></li>
				<li><a class=\"navlinkA\" href=\"../Section1/Index.html\">Antarrea</a></li>
				<li><a class=\"navlinkA\" href=\"../Section2/Index.html\">Renley</a></li>
				<ul class=\"navigationUl\">
					<li><a class=\"navlinkB\" href=\"./Project1.html\">Warring Nations</a></li>
					<li><a class=\"navlinkB\" href=\"./Project2.html\">Psychodom: The One Empire</a></li>
				</ul>
			</ul>
		`;
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);