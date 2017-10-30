function getNavigation(vLevel)

	dim vResult
	
    vResult = vResult + "<a class=""navlinkA"" href="""+getPath(vLevel)+"Division1/Section1/Index.asp"">Databases</a><br><br>"
        vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division1/Section1/Project1.asp"">Oracle</a><br><br>"
        vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division1/Section1/Project2.asp"">Derby</a><br><br>"
        vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division1/Section1/Project3.asp"">MySQL</a><br><br>"
        vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division1/Section1/Project4.asp"">SQL Server</a><br><br>"
        vResult = vResult + "<a class=""navlinkB"" href="""+getPath(vLevel)+"Division1/Section1/Project5.asp"">Postgres</a><br><br>"
	
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
