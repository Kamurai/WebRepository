function getNavigation(vLevel){
	var vResult = "";
	
	vResult += `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"./Index.html\">Board Games</a></li>
			<li><a class=\"navlinkA\" href=\"./Project1.html\">The Way</a></li>
			<li><a class=\"navlinkA\" href=\"./Project2.html\">Sacred Offerings</a></li>
			<li><a class=\"navlinkA\" href=\"./Project3.html\">Conversion</a></li>
			<li><a class=\"navlinkA\" href=\"./Project4.html\">Conspiratorium</a></li>
			<li><a class=\"navlinkA\" href=\"./Project5.html\">Monster Office Workplace</a></li>
			<li><a class=\"navlinkA\" href=\"./Project6.html\">MacCreedy's Mansion</a></li>
			<li><a class=\"navlinkA\" href=\"./Project7.html\">Dundered Acre Wood</a></li>
			<li><a class=\"navlinkA\" href=\"./Project8.html\">Conquer</a></li>
			<li><a class=\"navlinkA\" href=\"./Project9.html\">Assault</a></li>
			<li><a class=\"navlinkA\" href=\"./Project10.html\">Battle Princesses</a></li>
			<li><a class=\"navlinkA\" href=\"./Project11.html\">Armor Up</a></li>
			<li><a class=\"navlinkA\" href=\"./Project12.html\">Gynowars: Battle Arena</a></li>
			<li><a class=\"navlinkA\" href=\"./Project13.html\">Land of the Orcish Empire: Age of Magic</a></li>
			<li><a class=\"navlinkA\" href=\"./Project14.html\">Coliseum: Arena</a></li>
			<li><a class=\"navlinkA\" href=\"./Project15.html\">Nine Card</a></li>
			<li><a class=\"navlinkA\" href=\"./Project16.html\">Wars of Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"./Project17.html\">Antarrea RPG</a></li>
			<li><a class=\"navlinkA\" href=\"./Project18.html\">Super Dungeon Adventure</a></li>
		</ul>
	`;
    
	return vResult;
}

function getBody(vPage, vLevel){
	var vResult = "";
	
	vResult += "<body>";
		vResult += "<div id=\"idGeneralLayout\">";
			vResult += "<Header id=\"idHeaderRow\">";
				vResult += "<div id=\"idHeaderRowCenter\">";
					vResult += getLogo(vLevel);
				vResult += "</div>";
			vResult += "</Header>";
			vResult += "<Nav id=\"idNavigationRow\">";
				vResult += "<div id=\"idNavigationBar\">";
					vResult += getNavBar(vLevel);
				vResult += "</div>";
			vResult += "</Nav>";    
			vResult += "<div id=\"idCenterRow\">";
				vResult += "<div id=\"idCenterRowLeft\">";
					vResult += getNavigationHeader();
					vResult += getNavigation(vLevel);
				vResult += "</div>";
				vResult += "<div id=\"idCenterRowMain\">";
					vResult += getTitle(vPage);
					vResult += getContentHeader(vPage);
					vResult += getContent(vPage);
				vResult += "</div>";
				vResult += "<div id=\"idCenterRowRight\">";
					vResult += getInformationHeader();
					vResult += getInformation();
					vResult += getVersions(vPage);
				vResult += "</div>";
			vResult += "</div>";
			vResult += "<Footer id=\"idFooterRow\">";
				vResult += "<div id=\"idFooterMain\">";
					vResult += getFooter();
					vResult += getWebMaster();
				vResult += "</div>";
			vResult += "</Footer>";
		vResult += "</div>";
	vResult += "</body>";
	
	return vResult;
}
