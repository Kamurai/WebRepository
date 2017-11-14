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

    vResult += "<table id=\"idTableMain\">";
		vResult += "<tr id=\"idHeaderRow\">";
            vResult += "<td id=\"idHeaderRowCenter\" colspan=\"3\">";
                vResult += getLogo(vLevel);
			vResult += "</td>";
        vResult += "</tr>";
        vResult += "<tr id=\"idNavigationRow\">";
            vResult += "<td id=\"idNavigationBar\" colspan=\"3\">";
                vResult += getNavBar(vLevel);
            vResult += "</td>";
        vResult += "</tr>";    
        vResult += "<tr id=\"idCenterRow\">";
			vResult += "<td id=\"idCenterRowLeft\">";
				vResult += getNavigationHeader();
				vResult += getNavigation(vLevel);
			vResult += "</td>";
			vResult += "<td id=\"idCenterRowMain\">";
				vResult += getTitle(vPage);
				vResult += getContentHeader(vPage);
				vResult += getContent(vPage);
			vResult += "</td>";
			vResult += "<td id=\"idCenterRowRight\">";
				getInformationHeader();
				vResult += getInformation();
				vResult += getVersions(vPage);
			vResult += "</td>";
		vResult += "</tr>";
        vResult += "<tr id=\"idFooterRow\">";
			vResult += "<td id=\"idFooterMain\" colspan=\"3\">";
				vResult += "<p id=\"idFooterContent\">";
					vResult += getFooter();
				vResult += "</p>";
				vResult += "<p id=\"idFooterManagement\">";
					vResult += getWebMaster();
				vResult += "</p>";
			vResult += "</td>";
		vResult += "</tr>";
    vResult += "</table>";
	
	return vResult;
}