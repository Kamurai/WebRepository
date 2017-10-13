var vApp = angular.module("vApp", []);

vApp.controller("UniversalController", ['$scope', '$sce', function ($scope, $sce, vLayout)
{
	$scope.vPage = vPage;
	$scope.vLevel = vLevel;
	$scope.vDivision = vDivision;
	$scope.vLayout = vLayout;
	
	$scope.WriteHeader = function(vLevel, vDivision)
	{
		$scope.vResult = "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		
		$scope.vResult += "<link href='"+GetPath(vLevel)+"Styles/";
		
		if(vDivision == 0)
		{
			$scope.vResult += "Main.css";
		}
		else if(vDivision == 1)
		{
			$scope.vResult += "Division1.css";
		}
		else if(vDivision == 2)
		{
			$scope.vResult += "Division2.css";
		}
		else if(vDivision == 3)
		{
			$scope.vResult += "Division3.css";
		}
		else
		{
			$scope.vResult += "Main.css";
		}
		
		$scope.vResult += "rel='stylesheet' type='text/css'>";
		
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.TitlePicture = function(vLevel)
	{
		$scope.vResult = "<img src='"+GetPath(vLevel)+"Pictures/logoHTKB.jpg' >";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.NavBar = function()
	{
		$scope.vResult = "<a href='"+GetPath(vLevel)+"Index.html'>Home</a>";
		$scope.vResult += "<a href='"+GetPath(vLevel)+"Section1/Index.html'>Web Programming</a>";
		$scope.vResult += "<a href='"+GetPath(vLevel)+"Section2/Index.html'>Private Projects</a>";
		$scope.vResult += "<a href='"+GetPath(vLevel)+"Section3/Index.html'>Downloadable Projects</a>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.GetNavigationHeader = function()
	{
		$scope.vResult = "<h4>";
		$scope.vResult += "Navigation";
		$scope.vResult += "</h4>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.GetInformationHeader = function()
	{
		$scope.vResult = "<h4>";
		$scope.vResult += "Information";
		$scope.vResult += "</h4>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.GetInformation = function()
	{
		$scope.vResult = "This was written in AngularJS.<br><br>";
		$scope.vResult += "Other versions of this page are here:<br>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.GDR = function()
	{
		$scope.vResult = "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.WinRAR = function()
	{
		$scope.vResult = "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.Footer = function()
	{
		$scope.vResult = "© Copyright 2012 All rights reserved<br>";    
		$scope.vResult += "House That Kamurai Built";
		return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.WebMaster = function()
	{
		$scope.vResult = "Website managed by Kamurai.";
		return $sce.trustAsHtml($scope.vResult);
	};
	
}]);

function GetPath(vLevel)
{
	if(vLevel <= 0)
	{
		return "./";
	}
	else if(vLevel == 1)
	{
		return "../";
	}
	else if(vLevel == 2)
	{
		return "../../";
	}
	else if(vLevel == 3)
	{
		return "../../../";
	}
	else if(vLevel == 4)
	{
		return "../../../../";
	}
	else if(vLevel == 5)
	{
		return "../../../../../";
	}
	else if(vLevel == 6)
	{
		return "../../../../../../";
	}
	else if(vLevel == 7)
	{
		return "../../../../../../../";
	}
}

		
	




