function getNavigation(vLevel)
{
	vResult = "";
	
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index.aspx\">Gynowars</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2.aspx\">Assault</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3.aspx\">Mars</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index.aspx\">Renley</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index.aspx\">Antarrea</a><br><br>";
		vResult +="<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section1/Index.aspx\">Global</a><br><br>";
		vResult +="<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Index.aspx\">Grendol</a><br><br>";
			vResult +="<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Project1.aspx\">Land of the Orcish Empire: Age of Magic</a><br><br>";
			vResult +="<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Project2.aspx\">Coliseum: Arena</a><br><br>";
		vResult +="<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/Index.aspx\">Utopia</a><br><br>";
		vResult +="<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Index.aspx\">Elvia</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project6.aspx\">Truth</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7.aspx\">Kingdoms</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8.aspx\">Terminal World</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9.aspx\">Monster Office Workplace</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10.aspx\">Battle Princesses</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11.aspx\">Sacred Offerings</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12.aspx\">The Way</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13.aspx\">Conspiratorium</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14.aspx\">Conversion</a><br><br>";

}

function getLayout(vPage, vLevel)
{
    vResult +="<table id=\"idTableMain\">";
		vResult +="<tr id=\"idHeaderRow\">";
            vResult +="<td id=\"idHeaderRowCenter\" colspan=\"3\">";
                getLogo(vLevel);
			vResult +="</td>";
        vResult +="</tr>";
        vResult +="<tr id=\"idNavigationRow\">";
            vResult +="<td id=\"idNavigationBar\" colspan=\"3\">";
                getNavBar(vLevel);
            vResult +="</td>";
        vResult +="</tr>";    
        vResult +="<tr id=\"idCenterRow\">";
			vResult +="<td id=\"idCenterRowLeft\">";
				getNavigationHeader();
				getNavigation(vLevel);
			vResult +="</td>";
			vResult +="<td id=\"idCenterRowMain\">";
				getTitle(vPage);
				getHeader(vPage);
				getContent(vPage);
			vResult +="</td>";
			vResult +="<td id=\"idCenterRowRight\">";
				getInformationHeader();
				getInformation();
				getVersions(vPage);
			vResult +="</td>";
		vResult +="</tr>";
        vResult +="<tr id=\"idFooterRow\">";
			vResult +="<td id=\"idFooterMain\" colspan=\"3\">";
				vResult +="<p id=\"idFooterContent\">";
					getFooter();
				vResult +="</p>";
				vResult +="<p id=\"idFooterManagement\">";
					getWebMaster();
				vResult +="</p>";
			vResult +="</td>";
		vResult +="</tr>";
    vResult +="</table>";
}
