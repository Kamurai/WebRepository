Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Global Antarrea"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Team Tactical: Crash Ball"
		ElseIf vPage = 2 Then
			vResult = vResult + "Wars of Antarrea"
		ElseIf vPage = 3 Then
			vResult = vResult + "Revolutions: Invading Nations"
		ElseIf vPage = 4 Then
			vResult = vResult + "Revolutions: Rebellion Against the Fist"
		ElseIf vPage = 5 Then
			vResult = vResult + "Revolutions: Return to Arms"
		ElseIf vPage = 6 Then
			vResult = vResult + "Revolutions: Post Wars"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Global Antarrea"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Team Tactical: Crash Ball"
		ElseIf vPage = 2 Then
			vResult = vResult + "Wars of Antarrea"
		ElseIf vPage = 3 Then
			vResult = vResult + "Revolutions: Invading Nations"
		ElseIf vPage = 4 Then
			vResult = vResult + "Revolutions: Rebellion Against the Fist"
		ElseIf vPage = 5 Then
			vResult = vResult + "Revolutions: Return to Arms"
		ElseIf vPage = 6 Then
			vResult = vResult + "Revolutions: Post Wars"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Here are projects based in the Antarrea universe:</br>"
	vDefault = vDefault + "</br>"
	vDefault = vDefault + "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>"
	vDefault = vDefault + "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>"
	vDefault = vDefault + "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>"
	vDefault = vDefault + "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>"
	vDefault = vDefault + "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>"
	vDefault = vDefault + "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>"
	
	vResult = vResult + "<p id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>"
		ElseIf vPage = 2 Then
			vResult = vResult + "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>"
		ElseIf vPage = 3 Then
			vResult = vResult + "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>"
		ElseIf vPage = 4 Then
			vResult = vResult + "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>"
		ElseIf vPage = 5 Then
			vResult = vResult + "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>"
		ElseIf vPage = 6 Then
			vResult = vResult + "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</p>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Index.html"">HTML VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Index.aspx"">ASP.NET VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Index"">Node JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Index.vbsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Index"">Ruby On Rails</a><br>"
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project1.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project1.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project1.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project1.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project1.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project1"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project1.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project1.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project1.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project1.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project1.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project1"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project1.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project1"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project1"">Ruby On Rails</a><br>"
    ElseIf vPage = 2 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project2.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project2.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project2.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project2.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project2.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project2"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project2.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project2.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project2.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project2.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project2.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project2"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project2.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project2"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project2"">Ruby On Rails</a><br>"
    ElseIf vPage = 3 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project3.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project3.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project3.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project3.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project3.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project3"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project3.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project3.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project3.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project3.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project3.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project3"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project3.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project3"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project3"">Ruby On Rails</a><br>"
    ElseIf vPage = 4 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project4.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project4.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project4.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project4.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project4.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project4"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project4.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project4.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project4.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project4.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project4.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project4"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project4.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project4"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project4"">Ruby On Rails</a><br>"
    Else if(vPage == 5)
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project5.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project5.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project5.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project5.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project5.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project5"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project5.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project5.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project5.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project5.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project5.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project5"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project5.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project5"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project5"">Ruby On Rails</a><br>"
    ElseIf vPage = 6 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project6.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project6.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project6.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project6.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project6.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project6"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project6.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project6.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project6.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project6.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project6.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project6"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project6.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project6"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project6"">Ruby On Rails</a><br>"
    Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult    
End If