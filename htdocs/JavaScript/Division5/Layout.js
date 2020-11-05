function getNavigation(vLevel){
	var vResult = "";
	
	vResult += `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"./Index.html\">Database Work</a></li>
			<li><a class=\"navlinkA\" href=\"./Project1.html\">Oracle</a></li>
			<li><a class=\"navlinkA\" href=\"./Project2.html\">Derby</a></li>
			<li><a class=\"navlinkA\" href=\"./Project3.html\">MySQL</a></li>
			<li><a class=\"navlinkA\" href=\"./Project4.html\">SQL Server</a></li>
			<li><a class=\"navlinkA\" href=\"./Project5.html\">Postgres</a></li>
		</ul>
	`;
	
	return vResult;
}

function getBody(vPage, vLevel){
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
