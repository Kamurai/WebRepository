function Navigation(vLevel)
{
	Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Index.html\">Basic HTML</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Index.php\">PHP</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index.aspx\">Javascript</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Index.html\">HTML Javascript</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Index.html\">JQuery</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Index.asp\">ASP Javascript</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Index.aspx\">ASP.NET Javascript</a><br><br>");
        Response.Write("<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:84/Section1/Index\">Node JS</a><br>");
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Index.shtml\">Perl</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index.aspx\">Java</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index.aspx\">ASP.Net</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index.aspx\">Databases</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>");
	Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby On Rails</a><br>");
}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Javascript");
		}
		else if(vPage == 2)
		{
			Response.Write("ASP Javascript");
		}
		else if(vPage == 3)
		{
			Response.Write("ASP.NET Javascript");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Javascript");
		}
		else if(vPage == 2)
		{
			Response.Write("ASP Javascript");
		}
		else if(vPage == 3)
		{
			Response.Write("ASP.NET Javascript");
		}
	Response.Write("</h2>");

}

function Content(vPage)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			Response.Write("This section is dedicated to Javascript based programming.");
		}
		else if(vPage == 2)
		{
			Response.Write("This section is dedicated to ASP Javascript based programming.");
		}
		else if(vPage == 3)
		{
			Response.Write("This section is dedicated to ASP.NET Javascript based programming.");
		}
	Response.Write("</p>");
}

function Versions(vPage, vExtension)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Index.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Index.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Index.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Index.asp\">ASP Javascript</a><br>");
        }
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section2/Index\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Index.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section2/Index\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section2/Index\">Ruby On Rails</a><br>");
    }
	else if(vPage == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Project2.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Project2.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project2.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section2/Project2\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Project2.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section2/Project2\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section2/Project2\">Ruby On Rails</a><br>");
    }
	else if(vPage == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Project3.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Project3.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project3.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section2/Project3\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Project3.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section2/Project3\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section2/Project3\">Ruby On Rails</a><br>");
    }

}