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

function NavBar(vLevel, vExtension)
{
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Index"+GetvExtension(vExtension)+"'>Home</a>");
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section1/Index"+GetvExtension(vExtension)+"'>Web Programming</a>");
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section2/Index"+GetvExtension(vExtension)+"'>Private Projects</a>");
    document.write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section3/Index"+GetvExtension(vExtension)+"'>Downloadable Projects</a>");
}

function GDR()
{
	document.write("<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
}

function WinRAR()
{
	document.write("<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
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

function GetvExtension(vExtension)
{
    if(vExtension == 0)
    {
        //Basic HTML
        return ".html";
    }
    else if(vExtension == 1)
    {
        //ASP
        return ".asp";
    }
    else if(vExtension == 2)
    {
        //ASP.NET
        return ".aspx";
    }
}

function GetInformation(vExtension)
{
    if(vExtension == 0)
    {
        //Basic HTML
        document.write("This is written with basic HTML and javascript.");
    }
    else if(vExtension == 1)
    {
        //ASP
        document.write("This is written with classic ASP and javascript.");
    }
    else if(vExtension == 2)
    {
        //ASP.NET
        document.write("This is written with generic ASP.NET and javascript.");
    }
}


