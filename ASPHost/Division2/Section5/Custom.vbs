Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Antarrea Projects"
	
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
	
	vDefault = vDefault + "Antarrea Projects"
	
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
	
	vDefault = vDefault + "Global:"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
		vDefault = vDefault + "Here are projects based in the Antarrea universe:</br>"
		vDefault = vDefault + "</br>"
		vDefault = vDefault + "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>"
		vDefault = vDefault + "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>"
		vDefault = vDefault + "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>"
		vDefault = vDefault + "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>"
		vDefault = vDefault + "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>"
		vDefault = vDefault + "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
			vDefault = vDefault + "Grendol:"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
		vDefault = vDefault + "Here are projects based in the Grendol universe:</br>"
		vDefault = vDefault + "</br>"
		vDefault = vDefault + "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>"
		vDefault = vDefault + "Grendol: Coliseum: Arena:                         CCG.</br>"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
			vDefault = vDefault + "Utopia:"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
		vDefault = vDefault + "Here are projects based in the Utopia universe:</br>"
		vDefault = vDefault + "</br>"
		vDefault = vDefault + "Avia: Elemental Angels: Adventure game with RPG elements.</br>"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
			vDefault = vDefault + "Elvia:"
	vDefault = vDefault + "<br/>"
	vDefault = vDefault + "<br/>"
		vDefault = vDefault + "Here are projects based in the Elvia universe:</br>"
		vDefault = vDefault + "</br>"
		vDefault = vDefault + "Nine Card: Tactical card game.</br>"
	
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
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/VBScript/Section21/Section5/Index.html"">HTML VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Section21/Section5/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Index.aspx"">ASP.NET VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Section21/Section5/Index"">Node JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Index.vbsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Section21/Section5/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Section21/Section5/Index"">Ruby On Rails</a><br>"	
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult    
End Function