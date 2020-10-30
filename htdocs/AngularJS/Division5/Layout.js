vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce){
	$scope.getNavigation = function(){
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkB\" href=\"./Project1.html\">Oracle</a></li>
				<li><a class=\"navlinkB\" href=\"./Project2.html\">Derby</a></li>
				<li><a class=\"navlinkB\" href=\"./Project3.html\">MySQL</a></li>
				<li><a class=\"navlinkB\" href=\"./Project4.html\">SQL Server</a></li>
				<li><a class=\"navlinkB\" href=\"./Project5.html\">Postgres</a></li>
			</ul>
		`;
	
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);