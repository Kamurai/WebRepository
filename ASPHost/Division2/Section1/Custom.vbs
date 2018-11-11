Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Gynowars"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Gynowars RPG"
		ElseIf vPage = 2 Then
			vResult = vResult + "Gynowars: Battle Arena CCG"
		ElseIf vPage = 3 Then
			vResult = vResult + "Gynowars: Crash Ball"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Gynowars"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Gynowars RPG"
		ElseIf vPage = 2 Then
			vResult = vResult + "Gynowars: Battle Arena CCG"
		ElseIf vPage = 3 Then
			vResult = vResult + "Gynowars: Crash Ball"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to projects centered in the Gynowars universe."
	
	vResult = vResult + "<div id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "The Gynowars RPG is a ""pokemon-like"" tactical RPG."
			vResult = vResult + "The protagonist uses creatures to fight battles against other creatures to progress through the storyline."
		ElseIf vPage = 2 Then
			vResult = vResult + "Gynowars: Battle Arena is a CCG that pits teams of creatures against each other "
			vResult = vResult + "in an arena-like environment.  There are several scenarios to run, to include:"
			vResult = vResult + "</br>"
			vResult = vResult + """Death Match"", ""Ring the Bell"", and ""Head Hunt""."""
		ElseIf vPage = 3 Then
			vResult = vResult + "Gynowars: Crash Ball is a turn based strategy board game.  Basically it""s gridiron with Gynos."
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</div>"
	
	getContent = vResult
End Function

Function getVersions(vPage)

	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Section1/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Section1/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Section1/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Division2/Section1/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Section1/Index.html"">HTML Javascript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Section1/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Section1/Index.html"">Angular JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Index.aspx"">ASP.NET JavaScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Section1/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Section1/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Division2/Section1/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Division2/Section1/Index"">Ruby On Rails</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Division2/Section1/Index"">Node JS</a><br>"
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project1.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project1.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project1.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Section1/Project1.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Section1/Project1.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Section1/Project1.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Section1/Project1.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project1.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project1.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project1.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project1.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project1.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project1.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Section1/Project1"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Section1/Project1"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Section1/Project1"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Section1/Project1"">Node JS</a><br>"
	ElseIf vPage = 2 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project2.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project2.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project2.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Section1/Project2.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Section1/Project2.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Section1/Project2.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Section1/Project2.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project2.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project2.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project2.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project2.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Section1/Project2"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Section1/Project2"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Section1/Project2"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Section1/Project2"">Node JS</a><br>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project3.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project3.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Section1/Project3.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Section1/Project3.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Section1/Project3.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Section1/Project3.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Section1/Project3.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project3.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project3.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project3.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project3.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Section1/Project3"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Section1/Project3"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Section1/Project3"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Section1/Project3"">Node JS</a><br>"
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult    
End Function