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
