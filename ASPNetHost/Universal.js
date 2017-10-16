function getHead(vLevel, vCSS)
{
	vResult = "";
	
	vResult +="<head>";
		vResult +="<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		vResult +="<link runat='server' rel='shortcut icon' href='"+GetPath(vLevel)+"favicon.ico')' type='image/x-icon' />";
		vResult +="<link runat='server' rel='icon' href='"+GetPath(vLevel)+"favicon.ico' type='image/ico' />";
		vResult +="<link href='"+GetPath(vLevel-1)+vCSS+"' rel='stylesheet' type='text/CSS'>";
	vResult +="</head>";
		
}

function getLogo(vLevel)
{
	vResult = "";
	
    vResult +="<img id=\"idLogo\" src='"+GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>";
}

function getNavBar(vLevel)
{
	vResult = "";
	
    vResult +="<a class=\"navBar\" href='"+GetPath(vLevel)+"Index.aspx'>Home</a>";
    vResult +="<a class=\"navBar\" href='"+GetPath(vLevel)+"Section1/Index.aspx'>Web Programming</a>";
    vResult +="<a class=\"navBar\" href='"+GetPath(vLevel)+"Section2/Index.aspx'>Private Projects</a>";
    vResult +="<a class=\"navBar\" href='"+GetPath(vLevel)+"Section3/Index.aspx'>Downloadable Projects</a>";
}

function GetInformation(vExtension)
{
	vResult = "";
	
    vResult +="This is written with generic ASP.NET and javascript.";
}


function GDR()
{
	vResult = "";
	
	vResult +="<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";	
}

function WinRAR()
{
	vResult = "";
	
	vResult +="<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";	
}

function getFooter()
{
	vResult = "";
	
    vResult +="© Copyright 2012 All rights reserved<br>";    
    vResult +="House That Kamurai Built<br>";    
}

function getWebMaster()
{
	vResult = "";
	
    vResult +="Website managed by Kamurai.";
}

function GetPath(vLevel)
{
	vResult = "";
	
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