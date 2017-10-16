function getHead(vLevel, vDivision)
{
	dim vResult = "";

	vResult = "<head>";
		vResult = "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		vResult += "<link runat='server' rel='shortcut icon' href='"+getPath(vLevel)+"/Pictures/favicon.ico')' type='image/x-icon' />";
		vResult += "<link runat='server' rel='icon' href='"+getPath(vLevel)+"/Pictures/favicon.ico' type='image/ico' />";
		
		vResult += getStyle(vLevel, vDivision);
	vResult += "</head>";
	
	return vResult;
}

function getStyle(vDivision)
{
	dim vResult = "";
	
	vResult += "<link href='";
	vResult += getPath(vLevel)"'Styles/'";
	vResult += getStyleFile(vDivision);
	vResult += "' rel='stylesheet' type='text/CSS'>";

	return vResult;
}

function getStyleFile(vDivision)
{
	dim vResult = "";
	dim vDefault = "";
	
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
    dim vResult = "";
	vResult += "<img id=""idLogo"" src='"+getPath(vLevel)+"Pictures/logoHTKB.jpg'><br>";
	return vResult;
}

function getWebMaster()
{
	dim vResult = "";
	vResult += "Website managed by Kamurai.";
	return vResult;
}

function getNavBar(vLevel)
{
    dim vResult = "";
	vResult += "<a class=""navBar"" href='"+getPath(vLevel)+"Index.asp'>Home</a>";
	vResult += "<a class=""navBar"" href='"+getPath(vLevel)+"Section1/Index.asp'>Web Programming</a>";
	vResult += "<a class=""navBar"" href='"+getPath(vLevel)+"Section2/Index.asp'>Private Projects</a>";
	vResult += "<a class=""navBar"" href='"+getPath(vLevel)+"Section3/Index.asp'>Downloadable Projects</a>";
	return vResult;
}

function getNavigationHeader()
{
	dim vResult = "";
	vResult += '<h4>';
	vResult += 'Navigation';
	vResult += '</h4>';        
	return vResult;
}

function getInformationHeader()
{
	dim vResult = "";
	vResult += '<h4>';
	vResult += 'Information';
	vResult += '</h4>';	
	return vResult;
}

function getInformation()
{
    dim vResult = "";
	vResult += "This is written with classic ASP and VBScript.";
	return vResult;
}

function getGDR()
{
	dim vResult = "";
	vResult += "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	return vResult;
}

function getWinRar()
{
	dim vResult = "";
	vResult += "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";	
	return vResult;
}

function getFooter()
{
	dim vResult = "";
	vResult += "© Copyright 2012 All rights reserved<br>";    
	vResult += "House That Kamurai Built<br>";
	return vResult;
}

function getPath(vLevel)
{
	dim vResult = "";
	
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