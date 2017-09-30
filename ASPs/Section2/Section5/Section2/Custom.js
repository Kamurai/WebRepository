function Navigation(vLevel, vExtension)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index"+GetExtension(vExtension)+"\">Gynowars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2"+GetExtension(vExtension)+"\">Assault</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3"+GetExtension(vExtension)+"\">Mars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index"+GetExtension(vExtension)+"\">Renley</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index"+GetExtension(vExtension)+"\">Antarrea</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section1/Index"+GetExtension(vExtension)+"\">Global</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Index"+GetExtension(vExtension)+"\">Grendol</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Project1"+GetExtension(vExtension)+"\">Land of the Orcish Empire: Age of Magic</a><br><br>");
			Response.Write("<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Project2"+GetExtension(vExtension)+"\">Coliseum: Arena</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/Index"+GetExtension(vExtension)+"\">Utopia</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Index"+GetExtension(vExtension)+"\">Elvia</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project6"+GetExtension(vExtension)+"\">Truth</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7"+GetExtension(vExtension)+"\">Kingdoms</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8"+GetExtension(vExtension)+"\">Terminal World</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9"+GetExtension(vExtension)+"\">Monster Office Workplace</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10"+GetExtension(vExtension)+"\">Battle Princesses</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11"+GetExtension(vExtension)+"\">Sacred Offerings</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12"+GetExtension(vExtension)+"\">The Way</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13"+GetExtension(vExtension)+"\">Conspiratorium</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14"+GetExtension(vExtension)+"\">Conversion</a><br><br>");

}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Grendol");
		}
		else if(vPage == 1)
		{
			Response.Write("Land of the Orcish Empire: Age of Magic");
		}
		else if(vPage == 2)
		{
			Response.Write("Coliseum: Arena");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Grendol");
		}
		else if(vPage == 1)
		{
			Response.Write("Land of the Orcish Empire: Age of Magic");
		}
		else if(vPage == 2)
		{
			Response.Write("Coliseum: Arena");
		}
	Response.Write("</h2>");
}

function Content(vPage)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			Response.Write("Here are projects based in the Grendol Empire:</br>");
			Response.Write("</br>");
			Response.Write("Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ");
			Response.Write("comprise the Grendol Empire.</br>");
			Response.Write("Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>");
		}
		else if(vPage == 1)
		{
			Response.Write("Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ");
			Response.Write("comprise the Grendol Empire.");
		}
		else if(vPage == 2)
		{
			Response.Write("Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.");
		}
	Response.Write("</p>");
}

function Versions(vPage, vExtension)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Index.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Index.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Index.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Index.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Index\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Index.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Index\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Index\">Ruby On Rails</a><br>");
    }
	else if(vPage == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project1.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project1.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project1.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project1.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Project1\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project1.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Project1\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Project1\">Ruby On Rails</a><br>");
    }
	else if(vPage == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project2.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project2.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project2.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project2.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Project2\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project2.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Project2\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Project2\">Ruby On Rails</a><br>");
    }

}