var vUniversal = require('../../Universal');
var vCustom = require('./Custom');

getNavigation = function (vLevel){
	var vResult = "";
	
	vResult += `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"../Indx\">Video Games</a></li>
			<li><a class=\"navlinkA\" href=\"../Project1\">Truth</a></li>
			<li><a class=\"navlinkA\" href=\"../Project2\">The Wrong Ninja</a></li>
			<li><a class=\"navlinkA\" href=\"../Project3\">Gynowars</a></li>
			<li><a class=\"navlinkA\" href=\"../Project4\">Terminal World</a></li>
			<li><a class=\"navlinkA\" href=\"../Project5\">Mars: Opposition</a></li>
			<li><a class=\"navlinkA\" href=\"../Section1/Index\">Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"../Section2/Index\">Renley</a></li>
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkB\" href=\"./Project1\">Warring Nations</a></li>
				<li><a class=\"navlinkB\" href=\"./Project2\">Psychodom: The One Empire</a></li>
			</ul>
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
							vResult += vUniversal.getGDR();
						vResult += "</div>";
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
