function getNavigation(vLevel)
{
	var vResult = "";
	
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division1/Section1/Index.html\">Databases</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project1.html\">Oracle</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project2.html\">Derby</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project3.html\">MySQL</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project4.html\">SQL Server</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project5.html\">PostgreSQL</a><br><br>";
    
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
					vResult += getFooter();
					vResult += getWebMaster();
				vResult += "</div>";
			vResult += "</Footer>";
		vResult += "</div>";
	vResult += "</body>";
	
	return vResult;
}
