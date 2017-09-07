var UniversalController = function ($scope)
{
	$scope.WriteHeader = function(vLevel)
	{
		document.write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
		document.write("<link href='"+GetPath(vLevel-1)+"moo.css' rel='stylesheet' type='text/css'>");
		document.write("<font color='white'>");
	}

	$scope.TitlePicture = function(vLevel)
	{
		return "<img src='"+Path(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' >"
	};
	
	$scope.NavBar = function(vLevel)
	{
		document.write("<a href='"+GetPath(vLevel)+"Index.html'>Home</a>");
		document.write("<a href='"+GetPath(vLevel)+"Section1/Index.html'>Web Programming</a>");
		document.write("<a href='"+GetPath(vLevel)+"Section2/Index.html'>Private Projects</a>");
		document.write("<a href='"+GetPath(vLevel)+"Section3/Index.html'>Downloadable Projects</a>");
	}

	$scope.GetInformation = function()
	{
		document.write("This is written with AngularJS.");
	}

	$scope.GDR = function()
	{
		document.write("<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
	}

	$scope.WinRAR = function()
	{
		document.write("<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
	}
	
	$scope.Footer = function()
	{
		document.write("© Copyright 2012 All rights reserved<br>");    
		document.write("House That Kamurai Built<br>");    
	}

	$scope.WebMaster = function()
	{
		document.write("Website managed by Kamurai.");    
	}

	$scope.GetPath = function(vLevel)
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
	};
}





