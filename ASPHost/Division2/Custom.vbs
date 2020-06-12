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
		ElseIf vPage = 15 Then
			vResult = vResult + "Conquer"
		ElseIf vPage = 16 Then
			vResult = vResult + "Armor Up!"
		ElseIf vPage = 17 Then
			vResult = vResult + "Goblins and Guardians"
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
		ElseIf vPage = 15 Then
			vResult = vResult + "Conquer"
		ElseIf vPage = 16 Then
			vResult = vResult + "Armor Up!"
		ElseIf vPage = 17 Then
			vResult = vResult + "Goblins and Guardians"
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
	
	vResult = vResult + "<div id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 2 Then
			vResult = vResult + "This section is dedicated CCG project ""Assault"".<br>"
		ElseIf vPage = 3 Then
			vResult = vResult + "This section is dedicated to the Mars centered project ""Opposition"".<br>"
		ElseIf vPage = 6 Then
			vResult = vResult + "This section is dedicated to the MMO RTS project ""Truth"".<br>"
			vResult = vResult + "Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.<br>"
		ElseIf vPage = 7 Then
			vResult = vResult + "This section is dedicated to the digital board game project ""Kingdoms"".<br>"
			vResult = vResult + "Explore the world""s Kingdoms, get rich, get strong and conquer.<br>"
		ElseIf vPage = 8 Then
			vResult = vResult + "This section is dedicated to the simulation MMO centered project ""Terminal World"".<br>"
			vResult = vResult + "This is a virtual environment where a zombie outbreak is about to happen.<br>"			
			vResult = vResult + "Can you beat the zombies?  Can you survive?<br>"
		ElseIf vPage = 9 Then
			vResult = vResult + "This section is dedicated to the card and board game project ""Monster Office Workplace"".<br>"
			vResult = vResult + "These monsters mean serious business.<br>"
			vResult = vResult + "Can you earn the most credit and smooze your way into a promotion?<br>"
		ElseIf vPage = 10 Then
			vResult = vResult + "This section is dedicated to the card game project ""Battle Princesses"".<br>"
			vResult = vResult + "Ever wanted to see your favorite princess battle for the kingdom?"
			vResult = vResult + "These princess aren""t your helpless maidens, but valiant warriors themselves.<br>"
		ElseIf vPage = 11 Then
			vResult = vResult + "This section is dedicated to the board game project ""Sacred Offerings"".<br>"			
			vResult = vResult + "Being a god is hard, you have to eat, but don""t want to fall out favor with the people more than the other deities.<br>"
			vResult = vResult + "Draw people to worship you, but be discerning about who is sacrificed.<br>"
		ElseIf vPage = 12 Then
			vResult = vResult + "This section is dedicated to the card game project ""The Way"".<br>"
			vResult = vResult + "You seek to find enlightment by contemplating the elements.<br>"
			vResult = vResult + "Escape the binds of the world and the board to reach enlightment and win.<br>"
		ElseIf vPage = 13 Then
			vResult = vResult + "This section is dedicated to the board game project ""Conspiratorium"".<br>"
			vResult = vResult + "A game of assassins and CIA, you must remember who is friend and who is not.<br>"
		ElseIf vPage = 14 Then
			vResult = vResult + "This section is dedicated to the board game project ""Conversion"".<br>"
			vResult = vResult + "Compete on the elemental market by processing elements and becoming the elemental kingpin.<br>"
		ElseIf vPage = 15 Then
			vResult = vResult + "This section is dedicated to the board game project ""Conquer"".<br>"
			vResult = vResult + "Battle other Kaiju for the right to rule over the ruins of a kingdom.<br>"
		ElseIf vPage = 16 Then
			vResult = vResult + "This section is dedicated to the board game project ""Armor Up!"".<br>"
			vResult = vResult + "Armor up your princess to battle the other princesses for the throne.<br>"
		ElseIf vPage = 17 Then
			vResult = vResult + "This section is dedicated to the board game project ""Goblins and Guardians"".<br>"
			vResult = vResult + "Goblins and guardians battle it out in a labrynth of a building.<br>"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</div>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division2/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Division2/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Index.html"">HTML Javascript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Index.html"">Angular JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx"">ASP.NET JavaScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Division2/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Division2/Index"">Ruby On Rails</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Division2/Index"">Node JS</a><br>"
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 2 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project2.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project2.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project2.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project2.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project2.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project2.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project2.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project2"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project2"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project2"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project2"">Node JS</a><br>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project3.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project3.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project3.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project3.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project3.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project3.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project3.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project3"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project3"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project3"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project3"">Node JS</a><br>"
	ElseIf vPage = 6 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project6.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project6.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project6.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project6.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project6.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project6.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project6.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project6.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project6.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project6.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project6.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project6"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project6"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project6"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project6"">Node JS</a><br>"
	ElseIf vPage = 7 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project7.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project7.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project7.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project7.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project7.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project7.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project7.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project7.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project7.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project7.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project7.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project7"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project7"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project7"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project7"">Node JS</a><br>"
	ElseIf vPage = 8 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project8.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project8.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project8.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project8.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project8.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project8.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project8.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project8.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project8.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project8.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project8.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project8"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project8"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project8"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project8"">Node JS</a><br>"
	ElseIf vPage = 9 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project9.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project9.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project9.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project9.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project9.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project9.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project9.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project9.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project9.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project9.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project9.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project9"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project9"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project9"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project9"">Node JS</a><br>"
	ElseIf vPage = 10 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project10.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project10.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project10.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project10.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project10.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project10.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project10.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project10.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project10.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project10.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project10.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project10"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project10"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project10"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project10"">Node JS</a><br>"
	ElseIf vPage = 11 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project11.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project11.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project11.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project11.html"">Apache SSI</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project11.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project11.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project11.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project11.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project11.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project11.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project11.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project11"">ASP.NET MVC App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project11"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project11"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project11"">Node JS</a><br>"
	ElseIf vPage = 12 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project12.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project12.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project12.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project12.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project12.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project12.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project12.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project12.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project12.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project12.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project12.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project12"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project12"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project12"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project12"">Node JS</a><br>"
	ElseIf vPage = 13 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project13.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project13.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project13.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project13.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project13.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project13.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project13.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project13.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project13.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project13.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project13.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project13"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project13"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project13"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project13"">Node JS</a><br>"
	ElseIf vPage = 14 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project14.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project14.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project14.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project14.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project14.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project14.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project14.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project14.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project14.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project14.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project14.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project14"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project14"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project14"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project14"">Node JS</a><br>"
	ElseIf vPage = 15 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project15.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project15.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project15.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project15.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project15.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project15.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project15.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project15.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project15.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project15.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project15.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project15.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project15.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project15"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project15"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project15"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project15"">Node JS</a><br>"
	ElseIf vPage = 16 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project16.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project16.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project16.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project16.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project16.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project16.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project16.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project16.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project16.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project16.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project16.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project16.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project16.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project16"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project16"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project16"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project16"">Node JS</a><br>"
	ElseIf vPage = 17 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project17.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project17.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division2/Project17.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division2/Project17.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division2/Project17.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division2/Project17.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division2/Project17.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division2/Project17.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project17.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division2/Project17.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division2/Project17.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division2/Project17.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division2/Project17.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division2/Project17"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division2/Project17"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division2/Project17"">Ruby On Rails</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division2/Project17"">Node JS</a><br>"
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult	    
End Function