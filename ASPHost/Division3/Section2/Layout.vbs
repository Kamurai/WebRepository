function getNavigation(vLevel)
	dim vResult
	
	vResult = vResult + "<ul class=""navigationUl"">"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Indx.asp"">Video Games</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Project1.asp"">Truth</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Project2.asp"">The Wrong Ninja</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Project3.asp"">Gynowars</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Project4.asp"">Terminal World</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Project5.asp"">Mars: Opposition</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Section1/Index.asp"">Antarrea</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""../Section2/Index.asp"">Renley</a></li>"
		vResult = vResult + "<ul class=""navigationUl"">"
			vResult = vResult + "<li><a class=""navlinkB"" href=""./Project1.asp"">Warring Nations</a></li>"
			vResult = vResult + "<li><a class=""navlinkB"" href=""./Project2.asp"">Psychodom: The One Empire</a></li>"
		vResult = vResult + "</ul>"
	vResult = vResult + "</ul>"
	
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
