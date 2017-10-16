function getNavigation(vLevel)
{
	dim vResult = "";
	
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section1/Index.asp"">Gynowars</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project2.asp"">Assault</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project3.asp"">Mars</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section4/Index.asp"">Renley</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section5/Index.asp"">Antarrea</a><br><br>";
		vResult += "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Index.asp"">Global</a><br><br>";
		vResult += "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section2/Index.asp"">Grendol</a><br><br>";
		vResult += "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section3/Index.asp"">Utopia</a><br><br>";
		vResult += "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section4/Index.asp"">Elvia</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project6.asp"">Truth</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project7.asp"">Kingdoms</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project8.asp"">Terminal World</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project9.asp"">Monster Office Workplace</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project10.asp"">Battle Princesses</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project11.asp"">Sacred Offerings</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project12.asp"">The Way</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project13.asp"">Conspiratorium</a><br><br>";
	vResult += "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project14.asp"">Conversion</a><br><br>";
	
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
