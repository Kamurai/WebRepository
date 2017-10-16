function getNavigation(vLevel)
{
	vResult = "";
	
    vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"AboutUs.aspx\">About Us</a><br/><br/>";
    vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Media.aspx\">Media</a><br/><br/>";
    vResult +="<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Minecraft.aspx\">Minecraft!</a><br/><br/>";
}

function getLayout(vPage, vLevel)
{
    vResult +="<body id=\"idBody\">";
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
					vResult +="<h4>";
						vResult +="Navigation";
					vResult +="</h4>";
					getNavigation(vLevel);
				vResult +="</td>";
				vResult +="<td id=\"idCenterRowMain\">";
					getTitle(vPage);
					getHeader(vPage);
					getContent(vPage);
				vResult +="</td>";
				vResult +="<td id=\"idCenterRowRight\">";
					vResult +="<h4>";
						vResult +="Information";
					vResult +="</h4>";
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
	vResult +="</body>";
}
