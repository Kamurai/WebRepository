function WriteHeader(vLevel, vCSS)
{
	Response.Write("<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>");
	Response.Write("<link runat='server' rel='shortcut icon' href='"+GetPath(vLevel)+"favicon.ico')' type='image/x-icon' />");
	Response.Write("<link runat='server' rel='icon' href='"+GetPath(vLevel)+"favicon.ico' type='image/ico' />");
	Response.Write("<link href='"+GetPath(vLevel-1)+vCSS+"' rel='stylesheet' type='text/CSS'>");
	Response.Write("<font color='white'>");
}

function TitlePicture(vLevel)
{
    Response.Write("<img id=\"idLogo\" src='"+GetPath(vLevel)+"logo_HouseThatKamuraiBuilt_blueonblack.jpg' width='100%' alt='' border='0' align='center' vspace='0' hspace='0'><br>");
}

function WebMaster()
{
    Response.Write("Website managed by Kamurai.");
}

function NavBar(vLevel)
{
    Response.Write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Index.aspx'>Home</a>");
    Response.Write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section1/Index.aspx'>Web Programming</a>");
    Response.Write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section2/Index.aspx'>Private Projects</a>");
    Response.Write("<a class=\"navBar\" href='"+GetPath(vLevel)+"Section3/Index.aspx'>Downloadable Projects</a>");
}

function GDR()
{
	Response.Write("<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>");	
}

function WinRAR()
{
	Response.Write("<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>");	
}

function Footer()
{
    Response.Write("© Copyright 2012 All rights reserved<br>");    
    Response.Write("House That Kamurai Built<br>");    
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

function GetInformation(vExtension)
{
    Response.Write("This is written with generic ASP.NET and javascript.");
}

function GetMonkeys()
{
	Response.Write("Monkeys");
}
