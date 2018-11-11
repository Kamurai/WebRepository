function getNavigation(vLevel)

	dim vResult
	
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section1/Index.asp"">Gynowars</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project2.asp"">Assault</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project3.asp"">Mars</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section4/Index.asp"">Renley</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section5/Index.asp"">Antarrea</a><br><br>"
		vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Index.asp"">Global</a><br><br>"
		vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section2/Index.asp"">Grendol</a><br><br>"
		vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section3/Index.asp"">Utopia</a><br><br>"
		vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section4/Index.asp"">Elvia</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project6.asp"">Truth</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project7.asp"">Kingdoms</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project8.asp"">Terminal World</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project9.asp"">Monster Office Workplace</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project10.asp"">Battle Princesses</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project11.asp"">Sacred Offerings</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project12.asp"">The Way</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project13.asp"">Conspiratorium</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project14.asp"">Conversion</a><br><br>"
	
	getNavigation = vResult
end function

function getBody(vPage, vLevel)

	dim vResult
	
	vResult = vResult + "<body>"
		vResult = vResult + "<div id=""idGeneralLayout"">"
			vResult = vResult + "<Header id=""idHeaderRow"">"
				vResult = vResult + "<div id=""idHeaderRowCenter"" colspan=""3"">"
					vResult = vResult + getLogo(vLevel)
				vResult = vResult + "</div>"
			vResult = vResult + "</Header>"
			vResult = vResult + "<nav id=""idNavigationRow"">"
				vResult = vResult + "<div id=""idNavigationBar"" colspan=""3"">"
					vResult = vResult + getNavBar(vLevel)
				vResult = vResult + "</div>"
			vResult = vResult + "</nav>"    
			vResult = vResult + "<div id=""idCenterRow"">"
				vResult = vResult + "<div id=""idCenterRowLeft"">"
					vResult = vResult + getNavigationHeader()
					vResult = vResult + getNavigation(vLevel)
				vResult = vResult + "</div>"
				vResult = vResult + "<div id=""idCenterRowMain"">"
					vResult = vResult + getTitle(vPage)
					vResult = vResult + getContentHeader(vPage)
					vResult = vResult + getContent(vPage)
				vResult = vResult + "</div>"
				vResult = vResult + "<div id=""idCenterRowRight"">"
					vResult = vResult + getInformationHeader()
					vResult = vResult + getInformation()
					vResult = vResult + getVersions(vPage)
				vResult = vResult + "</div>"
			vResult = vResult + "</div>"
			vResult = vResult + "<Footer id=""idFooterRow"">"
				vResult = vResult + "<div id=""idFooterMain"" colspan=""3"">"
					vResult = vResult + getFooter()
					vResult = vResult + getWebMaster()
				vResult = vResult + "</div>"
			vResult = vResult + "</Footer>"
		vResult = vResult + "</div>"
	vResult = vResult + "</body>"
	
	getBody = vResult
end function
