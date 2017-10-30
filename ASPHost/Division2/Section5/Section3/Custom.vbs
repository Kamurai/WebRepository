Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Utopia"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Elemental Angels"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Utopia"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Elemental Angels"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Here are projects based in the Utopia Nation:</br>"
	vDefault = vDefault + "</br>"
	vDefault = vDefault + "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>"
	
	vResult = vResult + "<p id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</p>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section3/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section3/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section3/Index.html"">HTML VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Index.aspx"">ASP.NET VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section3/Index"">Node JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section3/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Index.vbsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section3/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section3/Index"">Ruby On Rails</a><br>"
	
    ElseIf vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section3/Project1.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section3/Project1.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section3/Project1.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Project1.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Project1.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section3/Project1"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section3/Project1.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Project1.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Project1.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Project1.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Project1.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Project1"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Project1.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section3/Project1"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section3/Project1"">Ruby On Rails</a><br>"
    Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult
End Function