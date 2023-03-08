var vUniversal = require('../Universal');
var vCustom = require('./Custom');

getNavigation = function (vLevel){
	var vResult = "";
	
	vResult += `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"./Index\">Board Games</a></li>
			<li><a class=\"navlinkA\" href=\"./Project1\">The Way</a></li>
			<li><a class=\"navlinkA\" href=\"./Project2\">Sacred Offerings</a></li>
			<li><a class=\"navlinkA\" href=\"./Project3\">Conversion</a></li>
			<li><a class=\"navlinkA\" href=\"./Project4\">Conspiratorium</a></li>
			<li><a class=\"navlinkA\" href=\"./Project5\">Monster Office Workplace</a></li>
			<li><a class=\"navlinkA\" href=\"./Project6\">MacCreedy's Mansion</a></li>
			<li><a class=\"navlinkA\" href=\"./Project7\">Dundered Acre Wood</a></li>
			<li><a class=\"navlinkA\" href=\"./Project8\">Conquer</a></li>
			<li><a class=\"navlinkA\" href=\"./Project9\">Assault</a></li>
			<li><a class=\"navlinkA\" href=\"./Project10\">Battle Princesses</a></li>
			<li><a class=\"navlinkA\" href=\"./Project11\">Armor Up</a></li>
			<li><a class=\"navlinkA\" href=\"./Project12\">Gynowars: Battle Arena</a></li>
			<li><a class=\"navlinkA\" href=\"./Project13\">Land of the Orcish Empire: Age of Magic</a></li>
			<li><a class=\"navlinkA\" href=\"./Project14\">Coliseum: Arena</a></li>
			<li><a class=\"navlinkA\" href=\"./Project15\">Nine Card</a></li>
			<li><a class=\"navlinkA\" href=\"./Project16\">Wars of Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"./Project17\">Antarrea RPG</a></li>
			<li><a class=\"navlinkA\" href=\"./Project18\">Super Dungeon Adventure</a></li>
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
