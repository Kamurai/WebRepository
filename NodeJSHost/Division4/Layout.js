var vUniversal = require('../Universal');
var vCustom = require('./Custom');

getNavigation = function (vLevel){
	var vResult = "";
	
	vResult += `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"./Index\">Downloadables</a></li>
			<li><a class=\"navlinkA\" href=\"./Project1\">Cube World</a></li>
			<li><a class=\"navlinkA\" href=\"./Project2\">Minecraft</a></li>
			<li><a class=\"navlinkA\" href=\"./Project3\">Game Maker</a></li>
			<li><a class=\"navlinkA\" href=\"./Project4\">Java</a></li>
			<li><a class=\"navlinkA\" href=\"./Project5\">C#</a></li>
		</ul>
	`;
    
	return vResult;
}

exports.getBody = function (vPage, vLevel){
    var vResult = "";
        
        vResult += "<body>";
            vResult += "<div id=\"idGeneralLayout\">";
				vResult += "<Header id=\"idHeaderRow\">";
					vResult += "<div id=\"idHeaderRowCenter\" colspan=\"3\">";
						vResult += vUniversal.getLogo(vLevel);
					vResult += "</div>";
				vResult += "</Header>";
				vResult += "<Nav id=\"idNavigationRow\">";
					vResult += "<div id=\"idNavigationBar\" colspan=\"3\">";
						vResult += vUniversal.getNavBar(vLevel);
					vResult += "</div>";
				vResult += "</Nav>";    
				vResult += "<div id=\"idCenterRow\">";
					vResult += "<div id=\"idCenterRowLeft\">";
						vResult += vUniversal.getNavigationHeader();
						vResult += getNavigation(vLevel);
					vResult += "</div>";
					vResult += "<div id=\"idCenterRowMain\">";
						vResult += vCustom.getTitle(vPage);
						vResult += vCustom.getContentHeader(vPage);
						vResult += vCustom.getContent(vPage);
					vResult += "</div>";
					vResult += "<div id=\"idCenterRowRight\">";
						vResult += vUniversal.getInformationHeader();
						vResult += vUniversal.getInformation();
						vResult += vCustom.getVersions(vPage);
					vResult += "</div>";
				vResult += "</div>";
				vResult += "<Footer id=\"idFooterRow\">";
					vResult += "<div id=\"idFooterMain\" colspan=\"3\">";
						vResult += "<div>";
							vResult += vUniversal.getWinRAR();
						vResult += "</div>";
						vResult += vUniversal.getFooter();
						vResult += vUniversal.getWebMaster();
					vResult += "</div>";
				vResult += "</Footer>";
			vResult += "</div>";
        vResult += "</body>";
    
	return vResult;
}

