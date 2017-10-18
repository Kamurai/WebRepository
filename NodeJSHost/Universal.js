getPath = function (vLevel)
{
	vResult = "";
	
    if(vLevel <= 0)
    {
        vResult = "./";
    }
    else if(vLevel == 1)
    {
        vResult = "../";
    }
    else if(vLevel == 2)
    {
        vResult = "../../";
    }
    else if(vLevel == 3)
    {
        vResult = "../../../";
    }
    else if(vLevel == 4)
    {
        vResult = "../../../../";
    }
    else if(vLevel == 5)
    {
        vResult = "../../../../../";
    }
    else if(vLevel == 6)
    {
        vResult = "../../../../../../";
    }
    else if(vLevel == 7)
    {
        vResult = "../../../../../../../";
    }
	
	return vResult;
}

exports.getPath = function (vLevel)
{
	vResult = "";
	
    if(vLevel <= 0)
    {
        vResult = "./";
    }
    else if(vLevel == 1)
    {
        vResult = "../";
    }
    else if(vLevel == 2)
    {
        vResult = "../../";
    }
    else if(vLevel == 3)
    {
        vResult = "../../../";
    }
    else if(vLevel == 4)
    {
        vResult = "../../../../";
    }
    else if(vLevel == 5)
    {
        vResult = "../../../../../";
    }
    else if(vLevel == 6)
    {
        vResult = "../../../../../../";
    }
    else if(vLevel == 7)
    {
        vResult = "../../../../../../../";
    }
	
	return vResult;
}

exports.getHead = function (vLevel, vDivision)
{
	var vResult = "";
	
	vResult += "<head>";
    vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
	vResult += "<link href='"+vDivision+"' rel='stylesheet' type='text/CSS'>";
	vResult += "</head>";
    
    return vResult;
}

exports.getLayout = function (vPage, vLevel, vDivision)
{
    var vResult = "";
	
	vResult += "<html>";
    vResult +=     getHead(vLevel, vDivision);
    vResult += "<body id=\"idBody\">";
    vResult +=     custom.WriteBody(vPage, vLevel);
    vResult += "</body>";
    vResult += "</html>";
    
    return vResult;
}

exports.getLogo = function (vLevel)
{
    var vResult = "";
	
	vResult += "<img id=\"idLogo\" src='"+getPath(vLevel)+"logoHTKB.jpg'><br>";
    
    return vResult;
}

exports.NavBar = function (vLevel)
{
    var vResult = "";
	
	vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Index'>Home</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division1/Index'>Web Programming</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division2/Index'>Private Projects</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division3/Index'>Downloadable Projects</a>";
    
    return vResult;
}

exports.GetNavigationHeader = function ()
{
    var vResult = "";
	
	vResult += "<h4>";
        vResult += "Navigation";
    vResult += "</h4>";
    
    return vResult;
}

exports.getInformationHeader = function ()
{
    var vResult = "";
	
	vResult += "<h4>";
        vResult += "Information";
    vResult += "</h4>";
    
    return vResult;
}

exports.getInformation = function ()
{
    var vResult = "";
	
	vResult += "This is written with NodeJS.";
    vResult += "Other versions can be found here:";
    
    return vResult;
}

exports.GDR = function ()
{
	var vResult = "";
	
	vResult += "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";	
    
    return vResult;
}

exports.WinRAR = function ()
{
	var vResult = "";
	
	vResult += "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";	
    
    return vResult;
}

exports.getFooter = function ()
{
    var vResult = "";
	
	vResult += "Copyright 2012 All rights reserved<br>";    
    vResult += "House That Kamurai Built<br>";
    
    return vResult;
}

exports.getWebMaster = function ()
{
    var vResult = "";
	
	vResult += "Website managed by Kamurai.";

    return vResult;    
}

