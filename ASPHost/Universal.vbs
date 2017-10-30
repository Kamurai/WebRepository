function getHead(vLevel, vDivision)
	dim vResult

	vResult = "<head>"
		vResult = vResult + "<meta http-equiv='Content-Type' content='text/html charset=ISO-8859-1'>"
		vResult = vResult + "<link runat='server' rel='shortcut icon' href='"+getPath(vLevel)+"/Pictures/favicon.ico')' type='image/x-icon' />"
		vResult = vResult + "<link runat='server' rel='icon' href='"+getPath(vLevel)+"/Pictures/favicon.ico' type='image/ico' />"
		
		vResult = vResult + getStyle(vLevel, vDivision)
	vResult = vResult +  "</head>"
	
	getHead = vResult
end function

function getStyle(vLevel, vDivision)
	dim vResult
	
	vResult = vResult + "<link href='"
	vResult = vResult + getPath(vLevel)+"Styles/"
	vResult = vResult + getStyleFile(vDivision)
	vResult = vResult + "' rel='stylesheet' type='text/CSS'>"

	getStyle = vResult
end function

function getStyleFile(vDivision)
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
	Else
		vResult = vResult + vDefault
	End If
	
	getStyleFile = vResult
end function

function getLogo(vLevel)
    dim vResult
	vResult = vResult + "<img id=""idLogo"" src='"+getPath(vLevel)+"Pictures/logoHTKB.jpg'><br>"
	getLogo = vResult
end function

function getWebMaster()
	dim vResult
	vResult = vResult + "Website managed by Kamurai."
	getWebMaster = vResult
end function

function getNavBar(vLevel)
    dim vResult
	vResult = vResult + "<a class=""navBar"" href='"+getPath(vLevel)+"Index.asp'>Home</a>"
	vResult = vResult + "<a class=""navBar"" href='"+getPath(vLevel)+"Section1/Index.asp'>Web Programming</a>"
	vResult = vResult + "<a class=""navBar"" href='"+getPath(vLevel)+"Section2/Index.asp'>Private Projects</a>"
	vResult = vResult + "<a class=""navBar"" href='"+getPath(vLevel)+"Section3/Index.asp'>Downloadable Projects</a>"
	getNavBar = vResult
end function

function getNavigationHeader()
	dim vResult
	vResult = vResult + "<h4>"
	vResult = vResult + "Navigation"
	vResult = vResult + "</h4>"        
	getNavigationHeader = vResult
end function

function getInformationHeader()
	dim vResult
	vResult = vResult + "<h4>"
	vResult = vResult + "Information"
	vResult = vResult + "</h4>"	
	getInformationHeader = vResult
end function

function getInformation()
    dim vResult
	vResult = vResult + "This is written with classic ASP and VBScript."
	getInformation = vResult
end function

function getGDR()
	dim vResult
	vResult = vResult + "<a href='http://htkb.dyndns.org/Section3/downloads/GDR.zip'>You can download my Games Development Report here.</a></br>"
	getGDR = vResult
end function

function getWinRar()
	dim vResult
	vResult = vResult + "<a href='http://htkb.dyndns.org/Section3/downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>"	
	getWinRar = vResult
end function

function getFooter()
	dim vResult
	vResult = vResult + "© Copyright 2012 All rights reserved<br>"    
	vResult = vResult + "House That Kamurai Built<br>"
	getFooter = vResult
end function

function getPath(vLevel)
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
end function