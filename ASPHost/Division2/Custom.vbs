Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Private Projects"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 2 Then
			vResult = vResult + "Assault CCG"
		ElseIf vPage = 3 Then
			vResult = vResult + "Mars Projects"
		ElseIf vPage = 6 Then
			vResult = vResult + "Truth"
		ElseIf vPage = 7 Then
			vResult = vResult + "Kingdoms"
		ElseIf vPage = 8 Then
			vResult = vResult + "Terminal World"
		ElseIf vPage = 9 Then
			vResult = vResult + "Monster Office Workplace"
		ElseIf vPage = 10 Then
			vResult = vResult + "Battle Princesses"
		ElseIf vPage = 11 Then
			vResult = vResult + "Sacred Offerings"
		ElseIf vPage = 12 Then
			vResult = vResult + "The Way"
		ElseIf vPage = 13 Then
			vResult = vResult + "Conspiratorium"
		ElseIf vPage = 14 Then
			vResult = vResult + "Conversion"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Private Projects"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 2 Then
			vResult = vResult + "Assault CCG"
		ElseIf vPage = 3 Then
			vResult = vResult + "Mars Projects"
		ElseIf vPage = 6 Then
			vResult = vResult + "Truth"
		ElseIf vPage = 7 Then
			vResult = vResult + "Kingdoms"
		ElseIf vPage = 8 Then
			vResult = vResult + "Terminal World"
		ElseIf vPage = 9 Then
			vResult = vResult + "Monster Office Workplace"
		ElseIf vPage = 10 Then
			vResult = vResult + "Battle Princesses"
		ElseIf vPage = 11 Then
			vResult = vResult + "Sacred Offerings"
		ElseIf vPage = 12 Then
			vResult = vResult + "The Way"
		ElseIf vPage = 13 Then
			vResult = vResult + "Conspiratorium"
		ElseIf vPage = 14 Then
			vResult = vResult + "Conversion"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to HTKB projects."
	
	vResult = vResult + "<p id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 2 Then
			vResult = vResult + "This section is dedicated CCG project ""Assault""."
		ElseIf vPage = 3 Then
			vResult = vResult + "This section is dedicated to the Mars centered project ""Opposition""."
		ElseIf vPage = 6 Then
			vResult = vResult + "This section is dedicated to the MMO RTS project ""Truth"".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries."
		ElseIf vPage = 7 Then
			vResult = vResult + "This section is dedicated to the digital board game project ""Kingdoms"".  Explore the world""s Kingdoms, get rich, get strong and conquer."
		ElseIf vPage = 8 Then
			vResult = vResult + "This section is dedicated to the simulation MMO centered project ""Terminal World"".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat"
			vResult = vResult + "the zombies?  Can you survive?"
		ElseIf vPage = 9 Then
			vResult = vResult + "This section is dedicated to the card and board game project ""Monster Office Workplace"".  These monsters mean serious business."
			vResult = vResult + "Can you earn the most credit and smooze your way into a promotion?"
		ElseIf vPage = 10 Then
			vResult = vResult + "This section is dedicated to the card game project ""Battle Princesses"".  Ever wanted to see your favorite princess battle for the kingdom?"
			vResult = vResult + "These princess aren""t your helpless maidens, but valiant warriors themselves."
		ElseIf vPage = 11 Then
			vResult = vResult + "This section is dedicated to the board game project ""Sacred Offerings"".  Being a god is hard, you have to eat, but"
			vResult = vResult + "don""t want to fall out favor with the people more than the other deities."
			vResult = vResult + "Draw people to worship you, but be discerning about who is sacrificed."
		ElseIf vPage = 12 Then
			vResult = vResult + "This section is dedicated to the card game project ""The Way"".  You seek to find enlightment by contemplating the elements."
			vResult = vResult + "Escape the binds of the world and the board to reach enlightment and win."
		ElseIf vPage = 13 Then
			vResult = vResult + "This section is dedicated to the board game project ""Conspiratorium""."
			vResult = vResult + "A game of assassins and CIA, you must remember who is friend and who is not."
		ElseIf vPage = 14 Then
			vResult = vResult + "This section is dedicated to the board game project ""Conversion""."
			vResult = vResult + "Compete on the elemental market by processing elements and becoming the elemental kingpin."
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</p>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Index.html"">HTML VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx"">ASP.NET VBScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Division2/Index"">Node JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.vbsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Division2/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Division2/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Division2/Index"">Ruby On Rails</a><br>"
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 2 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project2.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project2.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project2.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project2.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project2"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project2.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project2"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project2.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project2"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project2"">Ruby On Rails</a><br>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project3.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project3.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project3.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project3.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project3"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project3.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project3"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project3.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project3"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project3"">Ruby On Rails</a><br>"
	ElseIf vPage = 6 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project6.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project6.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project6.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project6.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project6.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project6"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project6.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project6.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project6.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project6.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project6"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project6.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project6"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project6"">Ruby On Rails</a><br>"
	ElseIf vPage = 7 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project7.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project7.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project7.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project7.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project7.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project7"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project7.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project7.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project7.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project7.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project7"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project7.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project7"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project7"">Ruby On Rails</a><br>"
	ElseIf vPage = 8 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project8.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project8.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project8.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project8.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project8.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project8"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project8.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project8.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project8.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project8.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project8"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project8.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project8"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project8"">Ruby On Rails</a><br>"
	ElseIf vPage = 9 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project9.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project9.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project9.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project9.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project9.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project9"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project9.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project9.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project9.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project9.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project9"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project9.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project9"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project9"">Ruby On Rails</a><br>"
	ElseIf vPage = 10 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project10.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project10.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project10.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project10.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project10.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project10"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project10.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project10.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project10.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project10.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project10"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project10.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project10"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project10"">Ruby On Rails</a><br>"
	ElseIf vPage = 11 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project11.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project11.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project11.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project11.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project11.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project11"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project11.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project11.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project11.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project11.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project11"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project11.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project11"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project11"">Ruby On Rails</a><br>"
	ElseIf vPage = 12 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project12.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project12.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project12.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project12.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project12.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project12"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project12.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project12.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project12.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project12.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project12"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project12.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project12"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project12"">Ruby On Rails</a><br>"
	ElseIf vPage = 13 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project13.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project13.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project13.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project13.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project13.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project13"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project13.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project13.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project13.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project13.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project13"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project13.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project13"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project13"">Ruby On Rails</a><br>"
	ElseIf vPage = 14 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project14.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project14.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/VBScript/Section2/Project14.html"">HTML VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project14.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project14.aspx"">ASP.NET VBScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project14"">Node JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project14.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.vbsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project14.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project14.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project14.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project14"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project14.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project14"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project14"">Ruby On Rails</a><br>"
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult	    
End Function