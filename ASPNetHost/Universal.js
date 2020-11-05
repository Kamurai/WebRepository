function getHead(vLevel, vDivision){
	var vResult = "";
	
	vResult += "<head>";
		vResult += "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=ISO-8859-1\">";
		vResult += "<link runat=\"server\" rel=\"shortcut icon\" href=\"/Pictures/favicon.ico\")\" type=\"image/x-icon\" />";
		vResult += "<link runat=\"server\" rel=\"icon\" href=\"/Pictures/favicon.ico\" type=\"image/ico\" />";
		vResult += getStyle(vLevel, vDivision);
	vResult += "</head>";

	return vResult;
}

function getStyle(vLevel, vDivision){
	var vResult = "";
	
	vResult += "<link href=\"http://htkb.dyndns.org/Styles/";
	vResult += getStyleFile(vDivision);
	vResult += "\" rel=\"stylesheet\" type=\"text/CSS\">";

	return vResult;
}

function getStyleFile(vDivision){
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Main.css";
	
	if(vDivision == 0){
		vResult += vDefault;
	}else if(vDivision == 1){
		vResult += "Division1.css";
	}else if(vDivision == 2){
		vResult += "Division2.css";
	}else if(vDivision == 3){
		vResult += "Division3.css";
	}else if(vDivision == 4){
		vResult += "Division4.css";
	}else if(vDivision == 5){
		vResult += "Division5.css";
	}else if(vDivision == 6){
		vResult += "Division6.css";
	}else if(vDivision == 7){
		vResult += "Division7.css";
	}else{
		vResult += vDefault;
	}
	
	return vResult;
}

function getLogo(vLevel){
	var vResult = "";
	
    vResult += "<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\"><br>";
	
	return vResult;
}

function getNavBar(vLevel){
	var vResult = "";
	
    vResult += "<ul class=\"navBarUl\">";
		vResult += "<li><a class=\"navBar\" href=\"/ASPNET/Index.aspx\">Home</a></li>";
		vResult += "<li><a class=\"navBar\" href=\"/ASPNET/Division1/Index.aspx\">Board Games</a></li>";
		vResult += "<li><a class=\"navBar\" href=\"/ASPNET/Division2/Index.aspx\">Digital Board Games</a></li>";
		vResult += "<li><a class=\"navBar\" href=\"/ASPNET/Division3/Index.aspx\">Video Games</a></li>";
		vResult += "<li><a class=\"navBar\" href=\"/ASPNET/Division4/Index.aspx\">Downloadables</a></li>";
		vResult += "<li><a class=\"navBar\" href=\"/ASPNET/Division5/Index.aspx\">Database Work</a></li>";
	vResult += "</ul>";
		
	return vResult;
}

function getNavigationHeader(){
	var vResult = "";
	
    vResult += "<h4 class=\"headerColorBlack\">";
		vResult += "Navigation";
	vResult += "</h4>";
	
	return vResult;
}

function getInformationHeader(){
	var vResult = "";
	
    vResult += "<h4 class=\"headerColorBlack\">";
		vResult += "Information";
	vResult += "</h4>";
	
	return vResult;
}

function getInformation(){
	var vResult = "";
	
    vResult += "This is written with generic ASP.NET and javascript.<br><br>";
	vResult += "Other versions can be found here:<br>";
    
	return vResult;
}

function getGDR(){
	var vResult = "";
	
	vResult += "<a href=\"http://htkb.dyndns.org/downloads/GDR.zip\">You can download my Games Development Report here.</a></br>";
	
	return vResult;
}

function getWinRar(){
	var vResult = "";
	
	vResult += "<a href=\"http://htkb.dyndns.org/downloads/wrar371.exe\">You may need WinRar to open zip files from this site.</a></br>";	
	
	return vResult;
}

function getFooter(){
	var vResult = "";
	
	vResult += "<div id=\"idFooterContent\">";
		vResult += "© Copyright 2012 All rights reserved<br>";    
		vResult += "House That Kamurai Built<br>";
	vResult += "</div>";
	
	return vResult;
}

function getWebMaster(){
	var vResult = "";
	
    vResult += "<div id=\"idFooterManagement\">";
		vResult += "Website managed by Kamurai.";
	vResult += "</div>";
	
	return vResult;
}

function getPath(vLevel){
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