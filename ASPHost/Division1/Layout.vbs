function getNavigation(vLevel)

	dim vResult
	
	vResult = vResult + "<ul class=""navigationUl"">"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Index.asp"">Board Games</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project1.asp"">The Way</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project2.asp"">Sacred Offerings</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project3.asp"">Conversion</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project4.asp"">Conspiratorium</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project5.asp"">Monster Office Workplace</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project6.asp"">MacCreedy's Mansion</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project7.asp"">Dundered Acre Wood</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project8.asp"">Conquer</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project9.asp"">Assault</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project10.asp"">Battle Princesses</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project11.asp"">Armor Up</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project12.asp"">Gynowars: Battle Arena</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project13.asp"">Land of the Orcish Empire: Age of Magic</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project14.asp"">Coliseum: Arena</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project15.asp"">Nine Card</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project16.asp"">Wars of Antarrea</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project17.asp"">Antarrea RPG</a></li>"
		vResult = vResult + "<li><a class=""navlinkA"" href=""./Project18.asp"">Super Dungeon Adventure</a></li>"
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
