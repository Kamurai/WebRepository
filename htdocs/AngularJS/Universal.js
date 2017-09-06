var UniversalController = function ($scope)
{
	
	
	$scope.TitlePicture = function(vLevel)
	{
		return "<img src='"+Path(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg'" >
	};
}

function WriteHeader(vLevel)
{
	document.write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
	document.write("<link href='"+GetPath(vLevel-1)+"moo.css' rel='stylesheet' type='text/css'>");
	document.write("<font color='white'>");
}

function TitlePicture(vLevel)
{
    document.write("<img src='"+GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>");
}

function WebMaster()
{
    document.write("<p align='left'>");
        document.write("<font size='1'>");    
            document.write("Website managed by Kamurai.");    
        document.write("</font>");
    document.write("</p>");
}

function NavBar(vLevel, extension)
{
    document.write("<a href='"+GetPath(vLevel)+"Index.html'>Home</a>");
    document.write("<a href='"+GetPath(vLevel)+"Section1/Index.html'>Web Programming</a>");
    document.write("<a href='"+GetPath(vLevel)+"Section2/Index.html'>Private Projects</a>");
    document.write("<a href='"+GetPath(vLevel)+"Section3/Index.html'>Downloadable Projects</a>");
}

function GDR()
{
	document.write("<p align='center'>");
		document.write("<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
	document.write("</p>");
}

function WinRAR()
{
	document.write("<p align='center'>");
		document.write("<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
	document.write("</p>");
}

function Footer()
{
    document.write("<p align='center'>");
        document.write("© Copyright 2012 All rights reserved<br>");    
        document.write("House That Kamurai Built<br>");    
    document.write("</p>");
}

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

function GetInformation(extension)
{
    //Basic HTML
    document.write("This is written with AngularJS.");
}


