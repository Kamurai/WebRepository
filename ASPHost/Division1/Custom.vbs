Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Web Programming"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Web Programming"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to web-based programming."
	
	vResult = vResult + "<p id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</p>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section1/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section1/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/VBScript/Section1/Project3.html"">HTML VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Section1/Project3.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section1/Index.aspx"">ASP.NET VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Section1/Project3"">Node JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section1/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section1/Index.vbsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section1/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section1/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Section1/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Section1/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Section1/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Section1/Project3"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Section1/Project3"">Ruby On Rails</a><br>"

	If vPage = 0 Then
		vResult = vResult + vDefault
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult    
End If
