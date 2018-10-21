function getTitle(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault = "Downloadable Projects";
	
	vResult += "<title>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Online Experience Downloads";
		}
		else if(vPage == 2)
		{
			vResult += "Game Maker Downloads";
		}
		else if(vPage == 3)
		{
			vResult += "Java Downloads";
		}
		else if(vPage == 4)
		{
			vResult += "C# Downloads";
		}
		else if(vPage == 5)
		{
			vResult += "C++ Downloads";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</title>";
	
	return vResult;
}

function getContentHeader(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Downloadable Projects";
	
	vResult += "<h2>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Online Experience Downloads";
		}
		else if(vPage == 2)
		{
			vResult += "Game Maker Downloads";
		}
		else if(vPage == 3)
		{
			vResult += "Java Downloads";
		}
		else if(vPage == 4)
		{
			vResult += "C# Downloads";
		}
		else if(vPage == 5)
		{
			vResult += "C++ Downloads";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</h2>";
	
	return vResult;
}

function getContent(vPage, vLevel)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "This section is dedicated to downloadable projects.";
	
	vResult += "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Here are downloads to play Cube World with us:</br>";
			vResult += "</br>";
			vResult += "Cube World:<t><a href=\""+getPath(vLevel)+"/downloads/CubeSetup3.exe\">Come play Cube World!</a></br>";
			vResult += "</br>";
			vResult += "DirectX:<t><a href=\""+getPath(vLevel)+"/downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>";
			vResult += "DirectX \"Web\":<t><a href=\""+getPath(vLevel)+"/downloads/dxwebsetup.exe\">Direct X Redistrutable</a></br>";
			vResult += "</br>";
		}
		else if(vPage == 2)
		{
			vResult += "Here are Game Maker Projects to play:</br>";
			vResult += "</br>";
			vResult += "\"Gamebox Client: v6.0\":<t><a href=\""+getPath(vLevel)+"/downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>";
			vResult += "\"Gamebox Server: v6.0\":<t><a href=\""+getPath(vLevel)+"/downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>";
			vResult += "\"39dll.dll: v2.5\":<t><a href=\""+getPath(vLevel)+"downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>";
			vResult += "\"A Chess Server\":<t><a href=\""+getPath(vLevel)+"/downloads/Chess_Server.exe\">Host a Chess game.</a></br>";
			vResult += "\"A Chess Client\":<t><a href=\""+getPath(vLevel)+"/downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>";
			vResult += "\"I Dunno\":<t><a href=\""+getPath(vLevel)+"/downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>";
			vResult += "\"Purification\":<t><a href=\""+getPath(vLevel)+"/downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>";
			vResult += "\"Trail of the Undead: The Way Home\":<t><a href=\""+getPath(vLevel)+"/downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>";
			vResult += "\"Discovery\" (buggy Alpha):<t><a href=\""+getPath(vLevel)+"/downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>";
			vResult += "\"Twisted Tactics: Version 0.1\" (buggy Alpha):<t><a href=\""+getPath(vLevel)+"/downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>";
			vResult += "\"Skitzo Burrito (Alpha)\": <t><a href=\""+getPath(vLevel)+"/downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>";
		}
		else if(vPage == 3)
		{
			vResult += "Here are Java Programs to download:</br>";
			vResult += "</br>";
			vResult += "\"Blood Bowl Manager\":<t><a href=\"."+getPath(vLevel)+"/downloads/pichaku.zip\">This is currently not available.</a></br>";
		}
		else if(vPage == 4)
		{
			vResult += "Here are C# Programs to download:</br>";
			vResult += "</br>";
			vResult += "\"Chess Program\":<t><a href=\"."+getPath(vLevel)+"/downloads/pichaku.zip\">This is currently not available.</a></br>";
		}
		else if(vPage == 5)
		{
			vResult += "Here are C++ Programs to download:</br>";
			vResult += "</br>";
			vResult += "\"HTKB Bar Code System\":<t><a href=\"."+getPath(vLevel)+"/downloads/pichaku.zip\">This is currently not available.</a></br>";
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</p>";
	
	return vResult;
}

function getVersions(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division3/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division3/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division3/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Index.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Index.html\">Angular JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Index.jsp\">JSP Spring MVC</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division3/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division3/Index\">Ruby on Rails</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Division3/Index\">Node JS</a><br>";
	
	if(vPage == 0)
	{
		vResult += vDefault;
    }
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Project1.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Project1.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project1.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project1.xhtml\">JSF</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project1.jsp\">JSP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project1.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project1.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project1\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division3/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division3/Project1\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division3/Project1\">Node JS</a><br>";
    }
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project2.php\">PHP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Project2.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Project2.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project2.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project2.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project2.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project2\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division3/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division3/Project2\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division3/Project2\">Node JS</a><br>";
    }
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project3.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project3.php\">PHP</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org/Division3/Project3.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division3/Project3.html\">Apache SSI</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division3/Project3.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project3.html\">Angular JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project3.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project3.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project3.jsp\">JSP Spring MVC</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project3.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project3.asp\">ASP VBscript</a><br>";
    	vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project3.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project3.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project3\">ASP.NET MVC App</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Division3/Project3\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division3/Project3\">Ruby on Rails</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division3/Project3\">Node JS</a><br>";
    }
	else
	{
		vResult += vDefault;
	}
	
	return vResult;
}
