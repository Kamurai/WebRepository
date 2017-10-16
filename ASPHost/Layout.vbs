function getNavigation(vLevel)
{
	dim vResult = "";
	
    vResult += "<a class=""navlinkA"" href="+getPath(vLevel)+"AboutUs.asp"">About Us</a><br/><br/>";
    vResult += "<a class""navlinkA"" href="+getPath(vLevel)+"Media.asp"">Media</a><br/><br/>";
    vResult += "<a class=""navlinkA"" href="+getPath(vLevel)+"Minecraft.asp"">Minecraft!</a><br/><br/>";
	
	return vResult;
}

function getLayout(vPage, vLevel)
{
	dim vResult = "";
	
	vResult += "<body id=""idBody"">";
		vResult += "<table id=""idTableMain"">";
			vResult += "<tr id=""idHeaderRow"">";
				vResult += "<td id=""idHeaderRowCenter"" colspan=""3"">";
					vResult += getLogo(vLevel);
				vResult += "</td>";
			vResult += "</tr>";
			vResult += "<tr id=""idNavigationRow"">";
				vResult += "<td id=""idNavigationBar"" colspan=""3"">";
					vResult += getNavBar(vLevel);
				vResult += "</td>";
			vResult += "</tr>";    
			vResult += "<tr id=""idCenterRow"">";
				vResult += "<td id=""idCenterRowLeft"">";
					vResult += getNavigationHeader();
					vResult += getNavigation(vLevel);
				vResult += "</td>";
				vResult += "<td id=""idCenterRowMain"">";
					vResult += getTitle(vPage);
					vResult += getContentHeader(vPage);
					vResult += getContent(vPage);
				vResult += "</td>";
				vResult += "<td id=""idCenterRowRight"">";
					vResult += getGetInformationHeader();
					vResult += getGetInformation();
					vResult += getVersions(vPage);
				vResult += "</td>";
			vResult += "</tr>";
			vResult += "<tr id=""idFooterRow"">";
				vResult += "<td id=""idFooterMain"" colspan=""3"">";
					vResult += "<p id=""idFooterContent"">";
						vResult += getFooter();
					vResult += "</p>";
					vResult += "<p id=""idFooterManagement"">";
						vResult += getWebMaster();
					vResult += "</p>";
				vResult += "</td>";
			vResult += "</tr>";
		vResult += "</table>";
	vResult += "</body>";
	
	return vResult;
}
