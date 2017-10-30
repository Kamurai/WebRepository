function getNavigation(vLevel)
{
	var vResult = "";
	
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section1/Index.html\">Gynowars</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project2.html\">Assault</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project3.html\">Mars</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section4/Index.html\">Renley</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Section5/Index.html\">Antarrea</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section1/Index.html\">Global</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section2/Index.html\">Grendol</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section3/Index.html\">Utopia</a><br><br>";
			vResult += "<a class=\"navlinkC\" href=\""+getPath(vLevel)+"Division2/Section5/Section3/Project1.html\">Avia:Elemental Angels</a><br><br>";
		vResult += "<a class=\"navlinkB\" href=\""+getPath(vLevel)+"Division2/Section5/Section4/Index.html\">Elvia</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project7.html\">Truth</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project8.html\">Kingdoms</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project9.html\">Terminal World</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project10.html\">Monster Office Workplace</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project11.html\">Battle Princesses</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project12.html\">Sacred Offerings</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project13.html\">The Way</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project14.html\">Conspiratorium</a><br><br>";
	vResult += "<a class=\"navlinkA\" href=\""+getPath(vLevel)+"Division2/Project15.html\">Conversion</a><br><br>";
    
	return vResult;
}

function getBody(vPage, vLevel)
{
	var vResult = "";
	
	vResult += "<body id=\"idBody\">";
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
					vResult += getInformationHeader();
					vResult += getInformation();
					vResult += getVersions(vPage);
				vResult += "</td>";
			vResult += "</tr>";
			vResult += "<tr id=\"idFooterRow\">";
				vResult += "<td id=\"idFooterMain\" colspan=\"3\">";
					vResult += getFooter();
					vResult += getWebMaster();
				vResult += "</td>";
			vResult += "</tr>";
		vResult += "</table>";
	vResult += "</body>";
	
	return vResult;
}
