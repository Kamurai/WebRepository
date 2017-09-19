exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project1\">Online Experience Downloads</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project2\">Game Maker Downloads</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project3\">Java Downloads</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project4\">C# Downloads</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project5\">C++ Downloads</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "Downloadable Projects";
		}
		else if(vPage == 1)
		{
			result += "Online Experience Downloads";
		}
		else if(vPage == 2)
		{
			result += "Game Maker Downloads";
		}
		else if(vPage == 3)
		{
			result += "Java Downloads";
		}
		else if(vPage == 4)
		{
			result += "C# Downloads";
		}
		else if(vPage == 5)
		{
			result += "C++ Downloads";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "Downloadable Projects";
		}
		else if(vPage == 1)
		{
			result += "Online Experience Downloads";
		}
		else if(vPage == 2)
		{
			result += "Game Maker Downloads";
		}
		else if(vPage == 3)
		{
			result += "Java Downloads";
		}
		else if(vPage == 4)
		{
			result += "C# Downloads";
		}
		else if(vPage == 5)
		{
			result += "C++ Downloads";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "This section is dedicated to downloadable projects.";
		}
		else if(vPage == 1)
		{
			result += "Here are downloads to play Cube World with us:</br>";
			result += "</br>";
			result += "Cube World:<t><a href=\"http://htkb.dyndns.org/downloads/CubeSetup3.exe\">Come play Cube World!</a></br>";
			result += "</br>";
			result += "DirectX:<t><a href=\"http://htkb.dyndns.org/downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>";
			result += "DirectX \"Web\":<t><a href=\"http://htkb.dyndns.org/downloads/dxwebsetup.exe\">Direct X Redistrutable</a></br>";
			result += "</br>";
		}
		else if(vPage == 2)
		{
			result += "Here are Game Maker Projects to play:</br>";
			result += "</br>";
			result += "\"Gamebox Client: v6.0\":<t><a href=\"http://htkb.dyndns.org/downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>";
			result += "\"Gamebox Server: v6.0\":<t><a href=\"http://htkb.dyndns.org/downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>";
			result += "\"39dll.dll: v2.5\":<t><a href=\"http://htkb.dyndns.org/downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>";
			result += "\"A Chess Server\":<t><a href=\"http://htkb.dyndns.org/downloads/Chess_Server.exe\">Host a Chess game.</a></br>";
			result += "\"A Chess Client\":<t><a href=\"http://htkb.dyndns.org/downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>";
			result += "\"I Dunno\":<t><a href=\"http://htkb.dyndns.org/downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>";
			result += "\"Purification\":<t><a href=\"http://htkb.dyndns.org/downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>";
			result += "\"Trail of the Undead: The Way Home\":<t><a href=\"http://htkb.dyndns.org/downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>";
			result += "\"Discovery\" (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>";
			result += "\"Twisted Tactics: Version 0.1\" (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>";
			result += "\"Skitzo Burrito (Alpha)\": <t><a href=\"http://htkb.dyndns.org/downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>";
		}
		else if(vPage == 3)
		{
			result += "Here are Java Programs to download:</br>";
			result += "</br>";
			result += "\"Blood Bowl Manager\":<t><a href=\"http://htkb.dyndns.org/downloads/pichaku.zip\">This is currently not available.</a></br>";
		}
		else if(vPage == 4)
		{
			result += "Here are C# Programs to download:</br>";
			result += "</br>";
			result += "\"Chess Program\":<t><a href=\"http://htkb.dyndns.org/downloads/pichaku.zip\">This is currently not available.</a></br>";
		}
		else if(vPage == 5)
		{
			result += "Here are C++ Programs to download:</br>";
			result += "</br>";
			result += "\"HTKB Bar Code System\":<t><a href=\"http://htkb.dyndns.org/downloads/pichaku.zip\">This is currently not available.</a></br>";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section3/index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section3/index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/index.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section3/index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section3/index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 1)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project1.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project1.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project1.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project1.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project1.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project1\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project1.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section3/Project1\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section3/Project1\">Ruby On Rails</a><br>";
	}
	else if(vPage == 2)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project2.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project2.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project2.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project2.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project2.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project2.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project2.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project2.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project2.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project2.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project2.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project2\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project2.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section3/Project2\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section3/Project2\">Ruby On Rails</a><br>";
	}
	else if(vPage == 3)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project3.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project3.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project3.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project3\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section3/Project3\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section3/Project3\">Ruby On Rails</a><br>";
	}
    return result;
}
