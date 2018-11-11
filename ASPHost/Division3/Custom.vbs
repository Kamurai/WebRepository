Function getTitle(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Downloadable Projects"
	
	vResult = vResult + "<title>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Online Experience Downloads"
		ElseIf vPage = 2 Then
			vResult = vResult + "Game Maker Downloads"
		ElseIf vPage = 3 Then
			vResult = vResult + "Java Downloads"
		ElseIf vPage = 4 Then
			vResult = vResult + "C# Downloads"
		ElseIf vPage = 5 Then
			vResult = vResult + "C++ Downloads"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</title>"
	
	getTitle = vResult
End Function

Function getContentHeader(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "Downloadable Projects"
	
	vResult = vResult + "<h2>"
		If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Online Experience Downloads"
		ElseIf vPage = 2 Then
			vResult = vResult + "Game Maker Downloads"
		ElseIf vPage = 3 Then
			vResult = vResult + "Java Downloads"
		ElseIf vPage = 4 Then
			vResult = vResult + "C# Downloads"
		ElseIf vPage = 5 Then
			vResult = vResult + "C++ Downloads"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</h2>"
	
	getContentHeader = vResult
End Function

Function getContent(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "This section is dedicated to downloadable projects."
	
	vResult = vResult + "<div id=""idCenterContent"">"
    	If vPage = 0 Then
			vResult = vResult + vDefault
		ElseIf vPage = 1 Then
			vResult = vResult + "Here are downloads to play Cube World with us:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + "Cube World:<t><a href=""http://htkb.dyndns.org/Downloads/CubeSetup3.exe"">Come play Cube World!</a></br>"
			vResult = vResult + "</br>"
			vResult = vResult + "DirectX:<t><a href=""http://htkb.dyndns.org/Downloads/directx_Jun2010_redist.exe"">Direct X Redistrutable</a></br>"
			vResult = vResult + "DirectX ""Web"":<t><a href=""http://htkb.dyndns.org/Downloads/dxwebsetup.exe"">Direct X Redistrutable</a></br>"
			vResult = vResult + "</br>"
		ElseIf vPage = 2 Then
			vResult = vResult + "Here are Game Maker Projects to play:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """Gamebox Client: v6.0"":<t><a href=""http://htkb.dyndns.org/Downloads/GameBox_Client_Installer_v6p0.exe"">Play games from...well, anywhere.</a></br>"
			vResult = vResult + """Gamebox Server: v6.0"":<t><a href=""http://htkb.dyndns.org/Downloads/GameBox_Server_Installer_v6p0.exe"">Host GameBox.</a></br>"
			vResult = vResult + """39dll.dll: v2.5"":<t><a href=""http://htkb.dyndns.org/Downloads/39dll.dll"">You may need this in your ""user/AppData/Local/GameBox_Client"" folder.</a></br>"
			vResult = vResult + """A Chess Server"":<t><a href=""http://htkb.dyndns.org/Downloads/Chess_Server.exe"">Host a Chess game.</a></br>"
			vResult = vResult + """A Chess Client"":<t><a href=""http://htkb.dyndns.org/Downloads/Chess_Client.exe"">A game of Chess from anywhere.</a></br>"
			vResult = vResult + """I Dunno"":<t><a href=""http://htkb.dyndns.org/Downloads/Idunno.exe"">I dunno, it""s a fun puzzle game though.</a></br>"
			vResult = vResult + """Purification"":<t><a href=""http://htkb.dyndns.org/Downloads/Zombies.exe"">Kill zombies...lots of zombies.</a></br>"
			vResult = vResult + """Trail of the Undead: The Way Home"":<t><a href=""http://htkb.dyndns.org/Downloads/TrailoftheUndead.exe"">An adventure of zombie killing goodness.</a></br>"
			vResult = vResult + """Discovery"" (buggy Alpha):<t><a href=""http://htkb.dyndns.org/Downloads/Discovery.exe"">Play a game of discovery and survival.</a></br>"
			vResult = vResult + """Twisted Tactics: Version 0.1"" (buggy Alpha):<t><a href=""http://htkb.dyndns.org/Downloads/Tactical.exe"">Scrapped two player tactical system.</a></br>"
			vResult = vResult + """Skitzo Burrito (Alpha)"": <t><a href=""http://htkb.dyndns.org/Downloads/Emotive-Default-1.0.0.3.exe"">An emotional platform survival game.</a></br>"
		ElseIf vPage = 3 Then
			vResult = vResult + "Here are Java Programs to download:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """Blood Bowl Manager"":<t><a href=""http://htkb.dyndns.org/Downloads/pichaku.zip"">This is currently not available.</a></br>"
		ElseIf vPage = 4 Then
			vResult = vResult + "Here are C# Programs to download:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """Chess Program"":<t><a href=""http://htkb.dyndns.org/Downloads/pichaku.zip"">This is currently not available.</a></br>"
		ElseIf vPage = 5 Then
			vResult = vResult + "Here are C++ Programs to download:</br>"
			vResult = vResult + "</br>"
			vResult = vResult + """HTKB Bar Code System"":<t><a href=""http://htkb.dyndns.org/Downloads/pichaku.zip"">This is currently not available.</a></br>"
		Else
			vResult = vResult + vDefault
		End If
	vResult = vResult + "</div>"
	
	getContent = vResult
End Function

Function getVersions(vPage)
	dim vResult
	dim vDefault
	
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division3/Index.html"">HTML</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division3/Index.php"">PHP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Division3/Index.shtml"">Perl</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/SSI/Division3/Index.html"">Apache SSI</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/Javascript/Division3/Index.html"">HTML Javascript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/JQuery/Division3/Index.html"">JQuery</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org/AngularJS/Division3/Index.html"">Angular JS</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division3/Index.xhtml"">JSF</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Index.jsp"">JSP</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division3/Index.aspx"">ASP.NET JavaScript</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division3/Index.cshtml"">ASP.NET Web App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/WebForm/Division3/Index.aspx"">ASP.NET Webform</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:81/MVC/Division3/Index"">ASP.NET MVC App</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:82/Division3/Index"">Python Web.py</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:83/Division3/Index"">Ruby On Rails</a><br>"
	vDefault = vDefault + "<a href=""http://htkb.dyndns.org:84/Division3/Index"">Node JS</a><br>"
	
	If vPage = 0 Then
		vResult = vResult + vDefault
	ElseIf vPage = 1 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project1.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project1.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project1.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division3/Project1.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division3/Project1.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division3/Project1.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division3/Project1.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division3/Project1.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Project1.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Project1.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division3/Project1.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division3/Project1.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division3/Project1.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division3/Project1"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division3/Project1"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division3/Project1"">Ruby On Rails</a><br>"
    	vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division3/Project1"">Node JS</a><br>"
	ElseIf vPage = 2 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project2.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project2.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project2.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division3/Project2.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division3/Project2.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division3/Project2.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division3/Project2.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division3/Project2.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Project2.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division3/Project2.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division3/Project2.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division3/Project2.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division3/Project2"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division3/Project2"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division3/Project2"">Ruby On Rails</a><br>"
    	vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division3/Project2"">Node JS</a><br>"
	ElseIf vPage = 3 Then
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project3.html"">HTML</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project3.php"">PHP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Division3/Project3.shtml"">Perl</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/SSI/Division3/Project3.html"">Apache SSI</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/Javascript/Division3/Project3.html"">HTML Javascript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/JQuery/Division3/Project3.html"">JQuery</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org/AngularJS/Division3/Project3.html"">Angular JS</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Division3/Project3.xhtml"">JSF</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Division3/Project3.jsp"">JSP</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/ASPNET/Division3/Project3.aspx"">ASP.NET JavaScript</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebApplication/Division3/Project3.cshtml"">ASP.NET Web App</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/WebForm/Division3/Project3.aspx"">ASP.NET Webform</a><br>"
		vResult = vResult + "<a href=""http://htkb.dyndns.org:81/MVC/Division3/Project3"">ASP.NET MVC App</a><br>"
	    vResult = vResult + "<a href=""http://htkb.dyndns.org:82/Division3/Project3"">Python Web.py</a><br>"
        vResult = vResult + "<a href=""http://htkb.dyndns.org:83/Division3/Project3"">Ruby On Rails</a><br>"
    	vResult = vResult + "<a href=""http://htkb.dyndns.org:84/Division3/Project3"">Node JS</a><br>"
	Else
		vResult = vResult + vDefault
	End If
	
	getVersions = vResult
End Function
