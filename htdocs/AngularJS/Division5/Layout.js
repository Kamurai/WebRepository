vApp.controller("LayoutController", ['$scope', '$sce', function ($scope, $sce){
	$scope.getNavigation = function(){
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index.html\">Database Work</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1.html\">Oracle</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2.html\">Derby</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3.html\">MySQL</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4.html\">SQL Server</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5.html\">Postgres</a></li>
			</ul>
		`;
	
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);