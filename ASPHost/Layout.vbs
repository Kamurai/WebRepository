Function getNavigation(vLevel)
	dim vResult
	
    vResult = vResult + "<ul class=""navigationUl"">"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./AboutUs.asp"">About Us</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Media.asp"">Media</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./GitHubs.asp"">Git Hubs</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./WebApps.asp"">Web Apps</a></li>"
	vResult = vResult + "</ul>"
	
	getNavigation = vResult
end Function

Function getBody(vPage, vLevel)
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
			vResult = vResult + "</div>"
		vResult = vResult + "</div>"
	vResult = vResult + "</body>"
	
	getBody = vResult
end Function
