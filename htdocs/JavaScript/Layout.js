function getNavigation(vLevel)
{
	var vResult = "";
	
    vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"AboutUs.html\">About Us</a><br/><br/>";
    vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Media.html\">Media</a><br/><br/>";
    vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Minecraft.html\">Minecraft!</a><br/><br/>";
	
	return vResult;
}

function getBody(vPage, vLevel)
{
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
					vResult += "<div id=\"idFooterContent\">";
						vResult += getFooter();
					vResult += "</div>";
					vResult += "<div id=\"idFooterManagement\">";
						vResult += getWebMaster();
					vResult += "</div>";
				vResult += "</div>";
			vResult += "</Footer>";
		vResult += "</div>";
	vResult += "</body>";
	
	return vResult;
}
