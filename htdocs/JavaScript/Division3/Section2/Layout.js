function getNavigation(vLevel){
	var vResult = "";
	
	vResult += `
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"../Index.html\">Vidoe Games</a></li>
			<li><a class=\"navlinkA\" href=\"../Project1.html\">Truth</a></li>
			<li><a class=\"navlinkA\" href=\"../Project2.html\">The Wrong Ninja</a></li>
			<li><a class=\"navlinkA\" href=\"../Project3.html\">Gynowars</a></li>
			<li><a class=\"navlinkA\" href=\"../Project4.html\">Terminal World</a></li>
			<li><a class=\"navlinkA\" href=\"../Project5.html\">Mars: Opposition</a></li>
			<li><a class=\"navlinkA\" href=\"../Section1/Index.html\">Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"../Section2/Index.html\">Renley</a></li>
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkB\" href=\"./Project1.html\">Warring Nations</a></li>
				<li><a class=\"navlinkB\" href=\"./Project2.html\">Psychodom: The One Empire</a></li>
			</ul>
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
