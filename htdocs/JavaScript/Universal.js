function getHead(vLevel, vDivision){
	var vResult = "";
	
	vResult += "<head>";
    vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
	vResult += getStyle(vLevel, vDivision);
	vResult += "</head>";
    
	return vResult;
}

function getStyle(vLevel, vDivision){
	var vResult = "";
	
	vResult += "<link href=\"http://htkb.dyndns.org/Styles/";
	vResult += getStyleFile(vDivision);
	vResult += "\" rel=\"stylesheet\" type=\"text/css\">";
    
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
	vResult = "";
	
    vResult += "<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\"><br>";
	
	return vResult;
}

function getNavBar(vLevel){
	var vResult = "";
	
    vResult += `
			<ul class=\"navBarUl\">
				<li><a class=\"navBar\" href=\"/Javascript/Index.html\">Home</a></li>
				<li><a class=\"navBar\" href=\"/Javascript/Division1/Index.html\">Board Games</a></li>
				<li><a class=\"navBar\" href=\"/Javascript/Division2/Index.html\">Digital Board Games</a></li>
				<li><a class=\"navBar\" href=\"/Javascript/Division3/Index.html\">Video Games</a></li>
				<li><a class=\"navBar\" href=\"/Javascript/Division4/Index.html\">Downloadables</a></li>
				<li><a class=\"navBar\" href=\"/Javascript/Division5/Index.html\">Database Work</a></li>
			</ul>
		`;
	
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
	
    vResult += "This is written with basic HTML and javascript.<br><br>";
	vResult += "Other versions of this page are here:<br>";
	
	return vResult;
}

function getGDR(){
	var vResult = "";
	
    vResult += "<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	
	return vResult;
}

function getWinRAR(){
	var vResult = "";
	
    vResult += "<a href='http://htkb.dyndns.org/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
	
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




