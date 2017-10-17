function getHead(vLevel, vCSS)
{
	var vResult = "";
	
	vResult += "<head>";
		vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		vResult += "<link runat='server' rel='shortcut icon' href='"+getPath(vLevel)+"favicon.ico')' type='image/x-icon' />";
		vResult += "<link runat='server' rel='icon' href='"+getPath(vLevel)+"favicon.ico' type='image/ico' />";
		
		vResult += getStyle(vLevel, vDivision);
	vResult += "</head>";
}

function getStyle(vDivision)
{
	var vResult = "";
	
	vResult += "<link href='";
	vResult += getPath(vLevel)"'Styles/'";
	vResult += getStyleFile(vDivision);
	vResult += "' rel='stylesheet' type='text/CSS'>";

	return vResult;
}

function getStyleFile(vDivision)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Main.css";
	
	if(vDivision == 0)
	{
		vResult = vDefault;
	}
	else if(vDivision == 1)
	{
		vResult = "Division1.css";
	}
	else if(vDivision == 2)
	{
		vResult = "Division2.css";
	}
	else if(vDivision == 3)
	{
		vResult = "Division3.css";
	}
	else
	{
		vResult = vDefault;
	}
	
	return vResult;
}

function getLogo(vLevel)
{
	var vResult = "";
	
    vResult += "<img id=\"idLogo\" src='"+getPath(vLevel)+"logoHTKB.jpg'><br>";
	
	return vResult;
}

function getNavBar(vLevel)
{
	var vResult = "";
	
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Index.aspx'>Home</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division1/Index.aspx'>Web Programming</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division2/Index.aspx'>Private Projects</a>";
    vResult += "<a class=\"navBar\" href='"+getPath(vLevel)+"Division3/Index.aspx'>Downloadable Projects</a>";
		
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
	
    vResult += "This is written with generic ASP.NET and javascript.";
	
	return vResult;
}

function getGDR()
{
	var vResult = "";
	
	vResult += "<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	
	return vResult;
}

function getWinRar()
{
	var vResult = "";
	
	vResult += "<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";	
	
	return vResult;
}

function getFooter()
{
	var vResult = "";
	
    vResult += "© Copyright 2012 All rights reserved<br>";    
    vResult += "House That Kamurai Built<br>";
	
	return vResult;
}

function getWebMaster()
{
	var vResult = "";
	
    vResult += "Website managed by Kamurai.";
	
	return vResult;
}

function getPath(vLevel)
{
	var vResult = "";
	
    if(vLevel <= 0)
    {
        vResult += ""./";
    }
    else if(vLevel == 1)
    {
        vResult += ""../";
    }
    else if(vLevel == 2)
    {
        vResult += ""../../";
    }
    else if(vLevel == 3)
    {
        vResult += ""../../../";
    }
    else if(vLevel == 4)
    {
        vResult += ""../../../../";
    }
    else if(vLevel == 5)
    {
        vResult += ""../../../../../";
    }
    else if(vLevel == 6)
    {
        vResult += ""../../../../../../";
    }
    else if(vLevel == 7)
    {
        vResult += ""../../../../../../../";
    }
	
	return vResult;
}