function getNavigation(vLevel){
	var vResult = "";
	
	vResult += "<ul class=\"navigationUl\">";
		vResult += "<li><a class=\"navlinkA\" href=\"./Index.aspx\">Board Games</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project1.aspx\">The Way</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project2.aspx\">Sacred Offerings</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project3.aspx\">Conversion</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project4.aspx\">Conspiratorium</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project5.aspx\">Monster Office Workplace</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project6.aspx\">MacCreedy's Mansion</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project7.aspx\">Dundered Acre Wood</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project8.aspx\">Conquer</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project9.aspx\">Assault</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project10.aspx\">Battle Princesses</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project11.aspx\">Armor Up</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project12.aspx\">Gynowars: Battle Arena</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project13.aspx\">Land of the Orcish Empire: Age of Magic</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project14.aspx\">Coliseum: Arena</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project15.aspx\">Nine Card</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project16.aspx\">Wars of Antarrea</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project17.aspx\">Antarrea RPG</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project18.aspx\">Super Dungeon Adventure</a></li>";
	vResult += "</ul>";
	
	return vResult;
}

function getLayout(vPage, vLevel){
    var vResult = "";

    vResult += "<body>";
		vResult += "<div id=\"idGeneralLayout\">";
			vResult += "<Header id=\"idHeaderRow\">";
				vResult += "<div id=\"idHeaderRowCenter\" colspan=\"3\">";
					vResult += getLogo(vLevel);
				vResult += "</div>";
			vResult += "</Header>";
			vResult += "<Nav id=\"idNavigationRow\">";
				vResult += "<div id=\"idNavigationBar\" colspan=\"3\">";
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
				vResult += "<div id=\"idFooterMain\" colspan=\"3\">";
					vResult += getFooter();
					vResult += getWebMaster();
				vResult += "</div>";
			vResult += "</Footer>";
		vResult += "</div>";
	vResult += "</body>";
	
	return vResult;
}
