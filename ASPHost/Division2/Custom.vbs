Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Digital Board Games"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Kingdoms"
		ElseIf vPage = 2 Then
			vResult = vResult + "Goblins and Guardians"
		ElseIf vPage = 3 Then
			vResult = vResult + "Mega Fleets"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Digital Board Games"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Kingdoms"
		ElseIf vPage = 2 Then
			vResult = vResult + "Goblins and Guardians"
		ElseIf vPage = 3 Then
			vResult = vResult + "Mega Fleets"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to digital board game projects."
	
	vResult = vResult + "<div id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "This section is dedicated to the digital board game project Kingdoms.<br>"
			vResult = vResult + "Explore the world's Kingdoms, get rich, get strong and conquer."
		ElseIf vPage = 2 Then
			vResult = vResult + "This section is dedicated to the board game project ""Goblins and Guardians"".<br/>"
			vResult = vResult + "Goblins and Guardians battle it out in a labrynth of a building."
		ElseIf vPage = 3 Then
			vResult = vResult + "This section is dedicated to the board game project ""Mega Fleets""."
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</div>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division2/Index.html"">HTML</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division2/Index.php"">PHP</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Division2/Index.shtml"">Perl</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/SSI/Division2/Index.html"">Apache SSI</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/Javascript/Division2/Index.html"">HTML Javascript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/JQuery/Division2/Index.html"">JQuery</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division2/Index.html"">Angular JS</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/JSX/Division2/Index.html"">JSX</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org/XLST/Division2/Index.xml"">XSLT</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml"">JSF</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp"">JSP</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division2/Index"">JSP Spring MVC</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx"">ASP.NET Javascript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division2/Index.asp"">ASP VBscript</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml"">ASP.NET Web App</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx"">ASP.NET Webform</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division2/Index"">ASP.NET MVC App</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:82/Division2/Index"">Python Web.py</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:83/Division2/Index"">Ruby on Rails</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:84/Division2/Index"">Node JS</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:85/Division2/Index"">Angular 2+</a></li>"
	vDefault = vDefault + "<li><a href=""http://htkb.dyndns.org:86/Division2/Index"">ReactJS</a></li>"
	
	vResult = vResult + "<ul class=""versionsUl"">"
		
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project1.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project1.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project1.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division2/Project1.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division2/Project1.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division2/Project1.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division2/Project1.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division2/Project1.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division2/Project1.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project1.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project1.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division2/Project1"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project1.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division2/Project1.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project1.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project1.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division2/Project1"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division2/Project1"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division2/Project1"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division2/Project1"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division2/Project1"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division2/Project1"">ReactJS</a></li>"
	ElseIf vPage = 2 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project2.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project2.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project2.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division2/Project2.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division2/Project2.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division2/Project2.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division2/Project2.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division2/Project2.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division2/Project2.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division2/Project2"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division2/Project2.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division2/Project2"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division2/Project2"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division2/Project2"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division2/Project2"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division2/Project2"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division2/Project2"">ReactJS</a></li>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project3.html"">HTML</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project3.php"">PHP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Division2/Project3.shtml"">Perl</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/SSI/Division2/Project3.html"">Apache SSI</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/Javascript/Division2/Project3.html"">HTML Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JQuery/Division2/Project3.html"">JQuery</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/AngularJS/Division2/Project3.html"">Angular JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/JSX/Division2/Project3.html"">JSX</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org/XLST/Division2/Project3.xml"">XSLT</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml"">JSF</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp"">JSP</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:8080/SpringMVC/Division2/Project3"">JSP Spring MVC</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx"">ASP.NET Javascript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/ASP/Division2/Project3.asp"">ASP VBscript</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml"">ASP.NET Web App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx"">ASP.NET Webform</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:81/MVC/Division2/Project3"">ASP.NET MVC App</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:82/Division2/Project3"">Python Web.py</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:83/Division2/Project3"">Ruby on Rails</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:84/Division2/Project3"">Node JS</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:85/Division2/Project3"">Angular 2+</a></li>"
		vResult = vResult + "<li><a href=""http://htkb.dyndns.org:86/Division2/Project3"">ReactJS</a></li>"
	Else
		vResult = vResult + vDefault
	End If
	
	vResult = vResult + "</ul>"
		
	getVersions = vResult	    
End Function