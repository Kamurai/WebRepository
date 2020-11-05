Function getHead(vLevel, vDivision)
	dim vResult

	vResult = "<head>"
		vResult = vResult + "<meta http-equiv=""Content-Type"" content=""text/html charset=ISO-8859-1"">"
		vResult = vResult + "<link runat=""server"" rel=""shortcut icon"" href=""/Pictures/favicon.ico"")"" type=""image/x-icon"" />"
		vResult = vResult + "<link runat=""server"" rel=""icon"" href=""/Pictures/favicon.ico"" type=""image/ico"" />"
		
		vResult = vResult + getStyle(vLevel, vDivision)
	vResult = vResult +  "</head>"
	
	getHead = vResult
end Function

Function getStyle(vLevel, vDivision)
	dim vResult
	
	vResult = vResult + "<link href=""http://htkb.dyndns.org/Styles/"
	vResult = vResult + getStyleFile(vDivision)
	vResult = vResult + """ rel=""stylesheet"" type=""text/CSS"">"

	getStyle = vResult
end Function

Function getStyleFile(vDivision)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Main.css"
	
	if vDivision = 0 Then
		vResult = vResult + vDefault
	ElseIf vDivision = 1 Then
		vResult = vResult + "Division1.css"
	ElseIf vDivision = 2 Then
		vResult = vResult + "Division2.css"
	ElseIf vDivision = 3 Then
		vResult = vResult + "Division3.css"
	ElseIf vDivision = 4 Then
		vResult = vResult + "Division4.css"
	ElseIf vDivision = 5 Then
		vResult = vResult + "Division5.css"
	ElseIf vDivision = 6 Then
		vResult = vResult + "Division6.css"
	ElseIf vDivision = 7 Then
		vResult = vResult + "Division7.css"
	Else
		vResult = vResult + vDefault
	End If
	
	getStyleFile = vResult
end Function

Function getLogo(vLevel)
    dim vResult
	vResult = vResult + "<img id=""idLogo"" src=""http://htkb.dyndns.org/Pictures/logoHTKB.jpg""><br>"
	getLogo = vResult
end Function

Function getNavBar(vLevel)
    dim vResult
	
	vResult = vResult + "<ul class=""navBarUl"">"
		vResult = vResult + "<li><a class=""navBar"" href=""/ASP/Index.asp"">Home</a></li>"
		vResult = vResult + "<li><a class=""navBar"" href=""/ASP/Division1/Index.asp"">Board Games</a></li>"
		vResult = vResult + "<li><a class=""navBar"" href=""/ASP/Division2/Index.asp"">Digital Board Games</a></li>"
		vResult = vResult + "<li><a class=""navBar"" href=""/ASP/Division3/Index.asp"">Video Games</a></li>"
		vResult = vResult + "<li><a class=""navBar"" href=""/ASP/Division4/Index.asp"">Downloadables</a></li>"
		vResult = vResult + "<li><a class=""navBar"" href=""/ASP/Division5/Index.asp"">Database Work</a></li>"
	vResult = vResult + "</ul>"
	
	getNavBar = vResult
end Function

Function getNavigationHeader()
	dim vResult
	vResult = vResult + "<h4 class=""headerColorBlack"">"
	vResult = vResult + "Navigation"
	vResult = vResult + "</h4>"        
	getNavigationHeader = vResult
end Function

Function getInformationHeader()
	dim vResult
	vResult = vResult + "<h4 class=""headerColorBlack"">"
	vResult = vResult + "Information"
	vResult = vResult + "</h4>"	
	getInformationHeader = vResult
end Function

Function getInformation()
    dim vResult
	vResult = vResult + "This is written with classic ASP and VBScript.<br><br>"
	vResult = vResult + "Other versions can be found here:<br>"
	getInformation = vResult
end Function

Function getGDR()
	dim vResult
	
	vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/downloads/GDR.zip"">You can download my Games Development Report here.</a></br>"
	
	getGDR = vResult
end Function

Function getWinRar()
	dim vResult
	
	vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/downloads/wrar371.exe"">You may need WinRar to open zip files from this site.</a></br>"	

	getWinRar = vResult
end Function

Function getFooter()
	dim vResult
	vResult = vResult + "<div id=""idFooterContent"">"
		vResult = vResult + "© Copyright 2012 All rights reserved<br>"    
		vResult = vResult + "House That Kamurai Built<br>"
	vResult = vResult + "</div>"
	getFooter = vResult
end Function

Function getWebMaster()
	dim vResult
	
	vResult = vResult + "<div id=""idFooterManagement"">"
		vResult = vResult + "Website managed by Kamurai."
	vResult = vResult + "</div>"
	
	getWebMaster = vResult
end Function

Function getPath(vLevel)
	dim vResult
	
    If vLevel <= 0 Then
        vResult = vResult + "./"
    ElseIf vLevel = 1 Then
            vResult = vResult + "../"
    ElseIf vLevel = 2 Then
        vResult = vResult + "../../"
    ElseIf vLevel = 3 Then
        vResult = vResult + "../../../"
    ElseIf vLevel = 4 Then
        vResult = vResult + "../../../../"
    ElseIf vLevel = 5 Then
        vResult = vResult + "../../../../../"
    ElseIf vLevel = 6 Then
        vResult = vResult + "../../../../../../"
    ElseIf vLevel = 7 Then
        vResult = vResult + "../../../../../../../"
    End If
	
	getPath = vResult
end Function