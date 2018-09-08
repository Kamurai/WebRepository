function getHead(vLevel, vDivision)
{
	var vResult = "";
	
	vResult += "<head>";
    vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
	vResult += getStyle(vLevel, vDivision);
	vResult += "</head>";
    
	return vResult;
}

function getStyle(vLevel, vDivision)
{
	var vResult = "";
	
	vResult += "<link href=\"http://htkb.dyndns.org/Styles/";
	vResult += getStyleFile(vDivision);
	vResult += "\" rel=\"stylesheet\" type=\"text/css\">";
    
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

function getLogo(vLevel)
{
	vResult = "";
	
    vResult += "<img id=\"idLogo\" src='http://htkb.dyndns.org/Pictures/logoHTKB.jpg'><br>";
	
	return vResult;
}

function getNavBar(vLevel)
{
	var vResult = "";
	
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Index.html'>Home</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division1/Index.html'>Web Programming</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division2/Index.html'>Private Projects</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division3/Index.html'>Downloadable Projects</a>";
	
	return vResult;
}

function getNavigationHeader()
{
    var vResult = "";
	
    vResult += "<h4>";
	vResult += "Navigation";
	vResult += "</h4>";
	
	return vResult;
}

function getInformationHeader()
{
    var vResult = "";
	
    vResult += "<h4>";
	vResult += "Information";
	vResult += "</h4>";
	
	return vResult;
}

function getInformation()
{
    var vResult = "";
	
    vResult += "This is written with basic HTML and javascript.<br><br>";
	vResult += "Other versions of this page are here:<br>";
	
	return vResult;
}

function getGDR()
{
	var vResult = "";
	
    vResult += "<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	
	return vResult;
}

function getWinRAR()
{
	var vResult = "";
	
    vResult += "<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
	
	return vResult;
}

function getFooter()
{
    var vResult = "";
	
    vResult += "<p id=\"idFooterContent\">";
		vResult += "� Copyright 2012 All rights reserved<br>";    
		vResult += "House That Kamurai Built<br>";
	vResult += "</p>";

	return vResult;   
}

function getWebMaster()
{
    var vResult = "";
	
    vResult += "<p id=\"idFooterManagement\">";
		vResult += "Website managed by Kamurai.";
	vResult += "</p>";
				
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




