vApp.controller("UniversalController", ['$scope', '$sce', function ($scope, $sce){
	var vPage = '-1';
	var vLevel = '-1';
	var vDivision = '-1';
	var vLayout = './Layout.html';

	$scope.getHead = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<head>";
		$scope.vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		$scope.vResult += getStyle();
		$scope.vResult += "</head>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getLogo = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<img src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\">";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getNavBar = function(){
		$scope.vResult = "";
		
		$scope.vResult += `
			<ul class=\"navBarUl\">
				<li><a class=\"navBar\" href=\"/AngularJS/Index.html\">Home</a></li>
				<li><a class=\"navBar\" href=\"/AngularJS/Division1/Index.html\">Board Games</a></li>
				<li><a class=\"navBar\" href=\"/AngularJS/Division2/Index.html\">Digital Board Games</a></li>
				<li><a class=\"navBar\" href=\"/AngularJS/Division3/Index.html\">Video Games</a></li>
				<li><a class=\"navBar\" href=\"/AngularJS/Division4/Index.html\">Downloadables</a></li>
				<li><a class=\"navBar\" href=\"/AngularJS/Division5/Index.html\">Database Work</a></li>
			</ul>
		`;
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getNavigationHeader = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<h4 class=\"headerColorBlack\">";
		$scope.vResult += "Navigation";
		$scope.vResult += "</h4>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getInformationHeader = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<h4 class=\"headerColorBlack\">";
		$scope.vResult += "Information";
		$scope.vResult += "</h4>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getInformation = function(){
		$scope.vResult = "";
		
		$scope.vResult += "This was written in AngularJS.<br><br>";
		$scope.vResult += "Other versions of this page are here:<br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getGDR = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<a href='http://htkb.dyndns.org/Division3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getWinRAR = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<a href='http://htkb.dyndns.org/Division3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getFooter = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<div id=\"idFooterContent\">";
			$scope.vResult += "© Copyright 2012 All rights reserved<br>";    
			$scope.vResult += "House That Kamurai Built";
		$scope.vResult += "</div>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getWebMaster = function(){
		$scope.vResult = "";
		
		$scope.vResult += "<div id=\"idFooterContent\">";
			$scope.vResult += "Website managed by Kamurai.";
		$scope.vResult += "</div>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);

function getStyle(){
	var vResult = "";
	
	vResult += "<link href=\"http://htkb.dyndns.org/Styles/";
	vResult += getStyleFile();
	vResult += "\" rel=\"stylesheet\" type =\"text/css\">";
	
	return vResult;
}
	
function getStyleFile(){
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Main.css";
	
	if(vDivision == 0){
		vResult += vDefault;
	}else if(vDivision == 1){
		vResult += "Division1.css";
	}else if(vDivision == 2){
		vResult += "Division2.css";
	}else if(vDivision == 3){
		vResult += "Division3.css";
	}else if(vDivision == 4){
		vResult += "Division4.css";
	}else if(vDivision == 5){
		vResult += "Division5.css";
	}else if(vDivision == 6){
		vResult += "Division6.css";
	}else if(vDivision == 7){
		vResult += "Division7.css";
	}else{
		vResult += vDefault;
	}
	
	return vResult;
}	

function getPath(){
	var vResult = "";
	
	if(vLevel <= 0)
	{
		vResult += "./";
	}
	else if(vLevel == 1)
	{
		vResult += "../";
	}
	else if(vLevel == 2)
	{
		vResult += "../../";
	}
	else if(vLevel == 3)
	{
		vResult += "../../../";
	}
	else if(vLevel == 4)
	{
		vResult += "../../../../";
	}
	else if(vLevel == 5)
	{
		vResult += "../../../../../";
	}
	else if(vLevel == 6)
	{
		vResult += "../../../../../../";
	}
	else if(vLevel == 7)
	{
		vResult += "../../../../../../../";
	}
	
	return vResult;
}

		
	




