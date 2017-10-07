function WriteHeader(vLevel, vCSS)
{
	document.write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
	document.write("<link href='"+GetPath(vLevel)+vCSS+"' rel='stylesheet' type='text/CSS'>");
}

function TitlePicture(vLevel)
{
    document.write("<img id=\"idLogo\" src='"+GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>");
}

function WebMaster()
{
    document.write("Website managed by Kamurai.");    
}

function NavBar(vLevel)
{
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Index.html'>Home</a>");
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section1/Index.html'>Web Programming</a>");
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section2/Index.html'>Private Projects</a>");
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section3/Index.html'>Downloadable Projects</a>");
}

function GDR()
{
	document.write("<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
}

function WinRAR()
{
	document.write("<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
}

function Footer()
{
    document.write("© Copyright 2012 All rights reserved<br>");    
    document.write("House That Kamurai Built<br>");    
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

function GetInformation()
{
    document.write("This is written with basic HTML and javascript.");
	document.write("Other versions of this page are here:<br>");
}


