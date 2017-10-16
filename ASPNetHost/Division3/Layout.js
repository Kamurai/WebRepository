function getNavigation(vLevel)
{
	vResult = "";
	
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project1.aspx\">Online Experience Downloads</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project2.aspx\">Game Maker Downloads</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project3.aspx\">Java Downloads</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project4.aspx\">C# Downloads</a><br><br>";
	vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project5.aspx\">C++ Downloads</a><br><br>";
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
