function Navigation(vLevel, vExtension)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project1"+GetExtension(vExtension)+"\">Online Experience Downloads</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project2"+GetExtension(vExtension)+"\">Game Maker Downloads</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project3"+GetExtension(vExtension)+"\">Java Downloads</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project4"+GetExtension(vExtension)+"\">C# Downloads</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section3/Project5"+GetExtension(vExtension)+"\">C++ Downloads</a><br><br>");
}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Downloadable Projects");
		}
		else if(vPage == 1)
		{
			Response.Write("Online Experience Downloads");
		}
		else if(vPage == 2)
		{
			Response.Write("Game Maker Downloads");
		}
		else if(vPage == 3)
		{
			Response.Write("Java Downloads");
		}
		else if(vPage == 4)
		{
			Response.Write("C# Downloads");
		}
		else if(vPage == 5)
		{
			Response.Write("C++ Downloads");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Downloadable Projects");
		}
		else if(vPage == 1)
		{
			Response.Write("Online Experience Downloads");
		}
		else if(vPage == 2)
		{
			Response.Write("Game Maker Downloads");
		}
		else if(vPage == 3)
		{
			Response.Write("Java Downloads");
		}
		else if(vPage == 4)
		{
			Response.Write("C# Downloads");
		}
		else if(vPage == 5)
		{
			Response.Write("C++ Downloads");
		}
	Response.Write("</h2>");
}

function Content(vPage)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			Response.Write("This section is dedicated to downloadable projects.");
		}
		else if(vPage == 1)
		{
			Response.Write("Here are downloads to play Cube World with us:</br>");
			Response.Write("</br>");
			Response.Write("Cube World:<t><a href=\"http://htkb.dyndns.org/Downloads/CubeSetup3.exe\">Come play Cube World!</a></br>");
			Response.Write("</br>");
			Response.Write("DirectX:<t><a href=\"http://htkb.dyndns.org/Downloads/directx_Jun2010_redist.exe\">Direct X Redistrutable</a></br>");
			Response.Write("DirectX \"Web\":<t><a href=\"http://htkb.dyndns.org/Downloads/dxwebsetup.exe\">Direct X Redistrutable</a></br>");
			Response.Write("</br>");
		}
		else if(vPage == 2)
		{
			Response.Write("Here are Game Maker Projects to play:</br>");
			Response.Write("</br>");
			Response.Write("\"Gamebox Client: v6.0\":<t><a href=\"http://htkb.dyndns.org/Downloads/GameBox_Client_Installer_v6p0.exe\">Play games from...well, anywhere.</a></br>");
			Response.Write("\"Gamebox Server: v6.0\":<t><a href=\"http://htkb.dyndns.org/Downloads/GameBox_Server_Installer_v6p0.exe\">Host GameBox.</a></br>");
			Response.Write("\"39dll.dll: v2.5\":<t><a href=\"http://htkb.dyndns.org/Downloads/39dll.dll\">You may need this in your \"user/AppData/Local/GameBox_Client\" folder.</a></br>");
			Response.Write("\"A Chess Server\":<t><a href=\"http://htkb.dyndns.org/Downloads/Chess_Server.exe\">Host a Chess game.</a></br>");
			Response.Write("\"A Chess Client\":<t><a href=\"http://htkb.dyndns.org/Downloads/Chess_Client.exe\">A game of Chess from anywhere.</a></br>");
			Response.Write("\"I Dunno\":<t><a href=\"http://htkb.dyndns.org/Downloads/Idunno.exe\">I dunno, it\"s a fun puzzle game though.</a></br>");
			Response.Write("\"Purification\":<t><a href=\"http://htkb.dyndns.org/Downloads/Zombies.exe\">Kill zombies...lots of zombies.</a></br>");
			Response.Write("\"Trail of the Undead: The Way Home\":<t><a href=\"http://htkb.dyndns.org/Downloads/TrailoftheUndead.exe\">An adventure of zombie killing goodness.</a></br>");
			Response.Write("\"Discovery\" (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/Downloads/Discovery.exe\">Play a game of discovery and survival.</a></br>");
			Response.Write("\"Twisted Tactics: Version 0.1\" (buggy Alpha):<t><a href=\"http://htkb.dyndns.org/Downloads/Tactical.exe\">Scrapped two player tactical system.</a></br>");
			Response.Write("\"Skitzo Burrito (Alpha)\": <t><a href=\"http://htkb.dyndns.org/Downloads/Emotive-Default-1.0.0.3.exe\">An emotional platform survival game.</a></br>");
		}
		else if(vPage == 3)
		{
			Response.Write("Here are Java Programs to download:</br>");
			Response.Write("</br>");
			Response.Write("\"Blood Bowl Manager\":<t><a href=\"http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
		else if(vPage == 4)
		{
			Response.Write("Here are C# Programs to download:</br>");
			Response.Write("</br>");
			Response.Write("\"Chess Program\":<t><a href=\"http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
		else if(vPage == 5)
		{
			Response.Write("Here are C++ Programs to download:</br>");
			Response.Write("</br>");
			Response.Write("\"HTKB Bar Code System\":<t><a href=\"http://htkb.dyndns.org/Downloads/pichaku.zip\">This is currently not available.</a></br>");
		}
	Response.Write("</p>");
}

function Versions(vPage, vExtension)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section3/Index.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Index.html\">JQuery</a><br>");
        if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Index.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Index.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section3/Index\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Index.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section3/Index\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section3/Index\">Ruby On Rails</a><br>");
    }
	else if(vPage == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project1.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project1.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section3/Project1\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project1.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section3/Project1\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section3/Project1\">Ruby On Rails</a><br>");
    }
	else if(vPage == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project2.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project2.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project2.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project2.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section3/Project2\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project2.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section3/Project2\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section3/Project2\">Ruby On Rails</a><br>");
    }
	else if(vPage == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section3/Project3.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section3/Project3.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section3/Project3\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section3/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section3/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section3/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section3/Project3.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section3/Project3\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section3/Project3\">Ruby On Rails</a><br>");
    }
    
}
