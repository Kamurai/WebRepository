function getNavigation(vLevel)

	dim vResult
	
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section1/Index.asp"">Gynowars</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project2.asp"">Assault</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Project3.asp"">Mars</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section4/Index.asp"">Renley</a><br><br>"
	vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division2/Section5/Index.asp"">Antarrea</a><br><br>"
		vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Index.asp"">Global</a><br><br>"
			vResult = vResult + "<a class=""navlinkC"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Project1.asp"">Team Tactial: Crash Ball</a><br><br>"
			vResult = vResult + "<a class=""navlinkC"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Project2.asp"">Wars of Antarrea</a><br><br>"
			vResult = vResult + "<a class=""navlinkC"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Project3.asp"">Revolutions: Invading Nations</a><br><br>"
			vResult = vResult + "<a class=""navlinkC"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Project4.asp"">Revolutions: Rebellion Against the Fist</a><br><br>"
			vResult = vResult + "<a class=""navlinkC"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Project5.asp"">Revolutions: Return to Arms</a><br><br>"
			vResult = vResult + "<a class=""navlinkC"" href="""+getPath(vLevel)+"Division2/Section5/Section1/Project6.asp"">Revolutions: Post Wars</a><br><br>"
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
	
	vResult = vResult + "<body id=""idBody"">"
		vResult = vResult + "<table id=""idTableMain"">"
			vResult = vResult + "<tr id=""idHeaderRow"">"
				vResult = vResult + "<td id=""idHeaderRowCenter"" colspan=""3"">"
					vResult = vResult + getLogo(vLevel)
				vResult = vResult + "</td>"
			vResult = vResult + "</tr>"
			vResult = vResult + "<tr id=""idNavigationRow"">"
				vResult = vResult + "<td id=""idNavigationBar"" colspan=""3"">"
					vResult = vResult + getNavBar(vLevel)
				vResult = vResult + "</td>"
			vResult = vResult + "</tr>"    
			vResult = vResult + "<tr id=""idCenterRow"">"
				vResult = vResult + "<td id=""idCenterRowLeft"">"
					vResult = vResult + getNavigationHeader()
					vResult = vResult + getNavigation(vLevel)
				vResult = vResult + "</td>"
				vResult = vResult + "<td id=""idCenterRowMain"">"
					vResult = vResult + getTitle(vPage)
					vResult = vResult + getContentHeader(vPage)
					vResult = vResult + getContent(vPage)
				vResult = vResult + "</td>"
				vResult = vResult + "<td id=""idCenterRowRight"">"
					vResult = vResult + getInformationHeader()
					vResult = vResult + getInformation()
					vResult = vResult + getVersions(vPage)
				vResult = vResult + "</td>"
			vResult = vResult + "</tr>"
			vResult = vResult + "<tr id=""idFooterRow"">"
				vResult = vResult + "<td id=""idFooterMain"" colspan=""3"">"
					vResult = vResult + "<p id=""idFooterContent"">"
						vResult = vResult + getFooter()
					vResult = vResult + "</p>"
					vResult = vResult + "<p id=""idFooterManagement"">"
						vResult = vResult + getWebMaster()
					vResult = vResult + "</p>"
				vResult = vResult + "</td>"
			vResult = vResult + "</tr>"
		vResult = vResult + "</table>"
	vResult = vResult + "</body>"
	
	getBody = vResult
end function
