var Universal = angular.module("Universal", []);

Universal.controller("UniversalController", ['$scope', '$sce', function ($scope, $sce)
	{
		
		$scope.WriteHeader = function()
		{
			$scope.vResult = "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
			$scope.vResult += "<link href='"+GetPath(vLevel-1)+"moo.css' rel='stylesheet' type='text/css'>";
			return $sce.trustAsHtml($scope.vResult);
		};
		
		$scope.TitlePicture = function(vLevel)
		{
			$scope.vResult = "<img src='"+$scope.GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' >";
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
		
		$scope.GetPath = function(vLevel)
		{
			if(vLevel <= 0)
			{
				$scope.vResult = "./";
			}
			else if(vLevel == 1)
			{
				$scope.vResult = "../";
			}
			else if(vLevel == 2)
			{
				$scope.vResult = "../../";
			}
			else if(vLevel == 3)
			{
				$scope.vResult = "../../../";
			}
			else if(vLevel == 4)
			{
				$scope.vResult = "../../../../";
			}
			else if(vLevel == 5)
			{
				$scope.vResult = "../../../../../";
			}
			else if(vLevel == 6)
			{
				$scope.vResult = "../../../../../../";
			}
			else if(vLevel == 7)
			{
				$scope.vResult = "../../../../../../../";
			}
			
			return $scope.vResult;
		};
	}]);
	/*
		var app = angular.module('TestApp', []);	
		app.controller('UniversalController', function($scope) 
		<script language="JavaScript" src="Layout.js" runat="server"></script>
		<script language="JavaScript" src="Custom.js" runat="server"></script>
		
	*/
		
	




