function getNavigation(vLevel){
	var vResult = "";
	
	vResult += "<ul class=\"navigationUl\">";
		vResult += "<li><a class=\"navlinkA\" href=\"./Index.aspx\">Downloadables</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project1.aspx\">Cube World</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project2.aspx\">Minecraft</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project3.aspx\">Game Maker</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project4.aspx\">Java</a></li>";
		vResult += "<li><a class=\"navlinkA\" href=\"./Project5.aspx\">C#</a></li>";
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
