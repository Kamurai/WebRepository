getPath = function (vLevel){
	vResult = "";
	
    if(vLevel <= 0){
        vResult = "./";
    }else if(vLevel == 1){
        vResult = "../";
    }else if(vLevel == 2){
        vResult = "../../";
    }else if(vLevel == 3){
        vResult = "../../../";
    }else if(vLevel == 4){
        vResult = "../../../../";
    }else if(vLevel == 5){
        vResult = "../../../../../";
    }else if(vLevel == 6){
        vResult = "../../../../../../";
    }else if(vLevel == 7){
        vResult = "../../../../../../../";
    }
	return vResult;
}

exports.getPath = function (vLevel){
	vResult = "";
	
    if(vLevel <= 0){
        vResult = "./";
    }else if(vLevel == 1){
        vResult = "../";
    }else if(vLevel == 2){
        vResult = "../../";
    }else if(vLevel == 3){
        vResult = "../../../";
    }else if(vLevel == 4){
        vResult = "../../../../";
    }else if(vLevel == 5){
        vResult = "../../../../../";
    }else if(vLevel == 6){
        vResult = "../../../../../../";
    }else if(vLevel == 7){
        vResult = "../../../../../../../";
    }
	return vResult;
}

exports.getHead = function (vLevel, vDivision){
	var vResult = "";
	
	vResult += "<head>";
		vResult += "<meta http-equiv='Content-Type' content='text/html; charset=ISO-8859-1'>";
		vResult += getStyle(vLevel, vDivision);
	vResult += "</head>";
    
    return vResult;
}

function getStyle(vLevel, vDivision){
	var vResult = "";
	
	vResult += "<link href='http://htkb.dyndns.org/Styles/";
	vResult += getStyleFile(vDivision);
	vResult += "' rel='stylesheet' type='text/CSS'>";

	return vResult;	
}

function getStyleFile(vDivision){
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Main.css";
	
	if(vDivision == 0){
		vResult = vDefault;
	}else if(vDivision == 1){
		vResult = "Division1.css";
	}else if(vDivision == 2){
		vResult = "Division2.css";
	}else if(vDivision == 3){
		vResult = "Division3.css";
	}else if(vDivision == 4){
		vResult = "Division4.css";
	}else if(vDivision == 5){
		vResult = "Division5.css";
	}else if(vDivision == 6){
		vResult = "Division6.css";
	}else if(vDivision == 7){
		vResult = "Division7.css";
	}else{
		vResult = vDefault;
	}
	return vResult;
}

exports.getLogo = function (vLevel){
    var vResult = "";
	
	vResult += "<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\">";
    
    return vResult;
}

exports.getNavBar = function (vLevel){
    var vResult = "";
	
	vResult += `
		<ul class=\"navBarUl\">
			<li><a class=\"navBar\" href=\"/Index\">Home</a></li>
			<li><a class=\"navBar\" href=\"/Division1/Index\">Board Games</a></li>
			<li><a class=\"navBar\" href=\"/Division2/Index\">Digital Board Games</a></li>
			<li><a class=\"navBar\" href=\"/Division3/Index\">Video Games</a></li>
			<li><a class=\"navBar\" href=\"/Division4/Index\">Downloadables</a></li>
			<li><a class=\"navBar\" href=\"/Division5/Index\">Database Work</a></li>
		</ul>
	`;
    
    return vResult;
}

exports.getNavigationHeader = function (){
    var vResult = "";
	
	vResult += `
		<h4 class=\"headerColorBlack\">
			Navigation
		</h4>
	`;
    
    return vResult;
}

exports.getInformationHeader = function (){
    var vResult = "";
	
	vResult += `
		<h4 class=\"headerColorBlack\">
			Information
		</h4>
	`;
    
    return vResult;
}

exports.getInformation = function (){
    var vResult = "";
	
	vResult += `
		This is written with NodeJS.</br>
		Other versions can be found here:</br>
	`;
    
    return vResult;
}

exports.getGDR = function (){
	var vResult = "";
	
	vResult += "<a href='http://htkb.dyndns.org/downloads/GDR.zip'>You can download my Games Development Report here.</a>";	
    
    return vResult;
}

exports.getWinRAR = function (){
	var vResult = "";
	
	vResult += "<a href='http://htkb.dyndns.org/downloads/WinRAR.exe'>You may need WinRar to open zip files from this site.</a>";	
    
    return vResult;
}

exports.getFooter = function (){
    var vResult = "";
	
	vResult += `
		<div id=\"idFooterContent\">
			Copyright 2012 All rights reserved<br>
			House That Kamurai Built<br>
		</div>
	`;
	
    return vResult;
}

exports.getWebMaster = function (){
    var vResult = "";
	
	vResult += `
		<div id=\"idFooterManagement\">
			Website managed by Kamurai.
		</div>
	`;
	
    return vResult;    
}

