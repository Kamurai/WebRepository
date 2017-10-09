function Navigation(vLevel)
{
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project1.html\">Online Experience Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project2.html\">Game Maker Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project3.html\">Java Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project4.html\">C# Downloads</a><br><br>");
	document.write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project5.html\">C++ Downloads</a><br><br>");
}

function Title(vPage)
{
	document.write("<title>");
		if(vPage == 0)
		{
			document.write("Downloadable Projects");
		}
		else if(vPage == 1)
		{
			document.write("Online Experience Downloads");
		}
		else if(vPage == 2)
		{
			document.write("Game Maker Downloads");
		}
		else if(vPage == 3)
		{
			document.write("Java Downloads");
		}
		else if(vPage == 4)
		{
			document.write("C# Downloads");
		}
		else if(vPage == 5)
		{
			document.write("C++ Downloads");
		}
	document.write("</title>");
}

function Header(vPage)
{
	document.write("<h2>");
		if(vPage == 0)
		{
			document.write("Downloadable Projects");
		}
		else if(vPage == 1)
		{
			document.write("Online Experience Downloads");
		}
		else if(vPage == 2)
		{
			document.write("Game Maker Downloads");
		}
		else if(vPage == 3)
		{
			document.write("Java Downloads");
		}
		else if(vPage == 4)
		{
			document.write("C# Downloads");
		}
		else if(vPage == 5)
		{
			document.write("C++ Downloads");
		}
	document.write("</h2>");
}

function Content(vPage, vLevel)
{
	document.write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			document.write("This section is dedicated to downloadable projects.");
		}
		else if(vPage == 1)
		{
			document.write("Here are downloads to play Cube World with us:</br>");
			document.write("</br>");
			document.write("Cube World:<t><a href=\""+GetPath(vLevel+1)+"/downloads/CubeSetup3.exe\">Come play Cube World!</a></br>");
			document.write("</br>");
			document.write("DirectX:<t><a href=\""+GetPath(vLevel+1)+"/downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>");
			document.write("DirectX \"Web\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/dxwebsetup.exe\">Direct X Redistrutable</a></br>");
			document.write("</br>");
		}
		else if(vPage == 2)
		{
			document.write("Here are Game Maker Projects to play:</br>");
			document.write("</br>");
			document.write("\"Gamebox Client: v6.0\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>");
			document.write("\"Gamebox Server: v6.0\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>");
			document.write("\"39dll.dll: v2.5\":<t><a href=\""+GetPath(vLevel+1)+"downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>");
			document.write("\"A Chess Server\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/Chess_Server.exe\">Host a Chess game.</a></br>");
			document.write("\"A Chess Client\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>");
			document.write("\"I Dunno\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>");
			document.write("\"Purification\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>");
			document.write("\"Trail of the Undead: The Way Home\":<t><a href=\""+GetPath(vLevel+1)+"/downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>");
			document.write("\"Discovery\" (buggy Alpha):<t><a href=\""+GetPath(vLevel+1)+"/downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>");
			document.write("\"Twisted Tactics: Version 0.1\" (buggy Alpha):<t><a href=\""+GetPath(vLevel+1)+"/downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>");
			document.write("\"Skitzo Burrito (Alpha)\": <t><a href=\""+GetPath(vLevel+1)+"/downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>");
		}
		else if(vPage == 3)
		{
			document.write("Here are Java Programs to download:</br>");
			document.write("</br>");
			document.write("\"Blood Bowl Manager\":<t><a href=\"."+GetPath(vLevel+1)+"/downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
		else if(vPage == 4)
		{
			document.write("Here are C# Programs to download:</br>");
			document.write("</br>");
			document.write("\"Chess Program\":<t><a href=\"."+GetPath(vLevel+1)+"/downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
		else if(vPage == 5)
		{
			document.write("Here are C++ Programs to download:</br>");
			document.write("</br>");
			document.write("\"HTKB Bar Code System\":<t><a href=\"."+GetPath(vLevel+1)+"/downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
	document.write("</p>");
}

function Versions(vPage)
{
	if(vPage == 0)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Index.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Index.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Index.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Index.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Index.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section3/Index\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section3/Index.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Index.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Index.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Index.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Index.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Index\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Index.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section3/Index\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section3/Index\">Ruby on Rails</a><br>");
    }
	else if(vPage == 1)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project1.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project1.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project1.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section3/Project1\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section3/Project1.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project1\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project1.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section3/Project1\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section3/Project1\">Ruby on Rails</a><br>");
    }
	else if(vPage == 2)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project2.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project2.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project2.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project2.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project2.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section3/Project2\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section3/Project2.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project2.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project2.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project2.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project2.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project2\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project2.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section3/Project2\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section3/Project2\">Ruby on Rails</a><br>");
    }
	else if(vPage == 3)
	{
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project3.php\">JQuery</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP VBscript</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:84/Section3/Project3\">Node JS</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project3.jsp\">JSP</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org:81/MVC/Section3/Project3\">ASP.NET MVC App</a><br>");
		document.write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:82/Section3/Project3\">Python Web.py</a><br>");
        document.write("<a href=\"http://htkb.dyndns.org:83/Section3/Project3\">Ruby on Rails</a><br>");
    }
    
}
