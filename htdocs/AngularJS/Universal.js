var vApp = angular.module("vApp", []);

vApp.controller("UniversalController", ['$scope', '$sce', function ($scope, $sce, vLayout)
{
	$scope.vPage = vPage;
	$scope.vLevel = vLevel;
	$scope.vDivision = vDivision;
	$scope.vLayout = vLayout;
	
	$scope.getHead = function(vLevel, vDivision)
	{
		$scope.vResult = "";
		
		$scope.vResult += "<head>";
		$scope.vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		$scope.vResult += getStyle(vLevel, vDivision);
		$scope.vResult += "</head>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getLogo = function(vLevel)
	{
		$scope.vResult = "";
		
		$scope.vResult += "<img src='"+getPath(vLevel)+"Pictures/logoHTKB.jpg' >";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getNavBar = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a href='"+getPath(vLevel)+"Index.html'>Home</a>";
		$scope.vResult += "<a href='"+getPath(vLevel)+"Division1/Index.html'>Web Programming</a>";
		$scope.vResult += "<a href='"+getPath(vLevel)+"Division2/Index.html'>Private Projects</a>";
		$scope.vResult += "<a href='"+getPath(vLevel)+"Division3/Index.html'>Downloadable Projects</a>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getNavigationHeader = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<h4>";
		$scope.vResult += "Navigation";
		$scope.vResult += "</h4>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getInformationHeader = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<h4>";
		$scope.vResult += "Information";
		$scope.vResult += "</h4>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getInformation = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "This was written in AngularJS.<br><br>";
		$scope.vResult += "Other versions of this page are here:<br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getGDR = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getWinRAR = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getFooter = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "© Copyright 2012 All rights reserved<br>";    
		$scope.vResult += "House That Kamurai Built";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getWebMaster = function()
	{
		$scope.vResult = "";
		
		$scope.vResult += "Website managed by Kamurai.";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);

function getStyle(vLevel, vDivision)
{
	var vResult = "";
	
	vResult += "<link href='";
	vResult += getPath(vLevel)+"Styles/";
	vResult += getStyleFile(vDivision);
	vResult += "\" rel=\"stylesheet\" type =\"text/css\">";
	
	return vResult;
}
	
function getStyleFile(vDivision)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Main.css";
	
	if(vDivision == 0)
	{
		vResult += vDefault;
	}
	else if(vDivision == 1)
	{
		vResult += "Division1.css";
	}
	else if(vDivision == 2)
	{
		vResult += "Division2.css";
	}
	else if(vDivision == 3)
	{
		vResult += "Division3.css";
	}
	else
	{
		vResult += vDefault;
	}
	
	return vResult;
}	

function getPath(vLevel)
{
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

		
	




