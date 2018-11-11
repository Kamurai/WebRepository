function getNavigation(vLevel)
{
	var vResult = "";
	
    vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division1/Section1/Index.aspx\">Databases</a><br><br>";
        vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project1.aspx\">Oracle</a><br><br>";
        vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project2.aspx\">Derby</a><br><br>";
        vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project3.aspx\">MySQL</a><br><br>";
        vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project4.aspx\">SQL Server</a><br><br>";
        vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division1/Section1/Project5.aspx\">Postgres</a><br><br>";
	
	return vResult;
}

function getLayout(vPage, vLevel)
{
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
