function Navigation(vLevel)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index.aspx\">Gynowars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2.aspx\">Assault</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3.aspx\">Mars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index.aspx\">Renley</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section4/Project1.aspx\">Warring Nations</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section4/Project2.aspx\">Psychodom: The One Empire</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index.aspx\">Antarrea</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project6.aspx\">Truth</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7.aspx\">Kingdoms</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8.aspx\">Terminal World</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9.aspx\">Monster Office Workplace</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10.aspx\">Battle Princesses</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11.aspx\">Sacred Offerings</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12.aspx\">The Way</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13.aspx\">Conspiratorium</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14.aspx\">Conversion</a><br><br>");

}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Renley");
		}
		else if(vPage == 1)
		{
			Response.Write("Warring Nations");
		}
		else if(vPage == 2)
		{
			Response.Write("Psychodom: The One Empire");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Renley");
		}
		else if(vPage == 1)
		{
			Response.Write("Warring Nations");
		}
		else if(vPage == 2)
		{
			Response.Write("Psychodom: The One Empire");
		}
	Response.Write("</h2>");

}

function Content(vPage)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			Response.Write("This section is dedicated to projects centered in the Renley universe.");
		}
		else if(vPage == 1)
		{
			Response.Write("Warring Nations is a Tactical RPG involving squad based battles.");
			Response.Write("Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.");
		}
		else if(vPage == 2)
		{
			Response.Write("Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.");
			Response.Write("The protagonist is tasked with investigating various situations leading ");
			Response.Write("to a conspiracy about who is really ruling the continent.");
		}
	Response.Write("</p>");
}

function Versions(vPage, vExtension)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section4/Index.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section4/Index.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Index.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Index.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section2/Section4/Index\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Index.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section2/Section4/Index\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section2/Section4/Index\">Ruby On Rails</a><br>");
    }
	else if(vPage == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section4/Project1.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section4/Project1.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project1.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project1.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section2/Section4/Project1\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project1.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section2/Section4/Project1\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section2/Section4/Project1\">Ruby On Rails</a><br>");
    }
	else if(vPage == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section4/Project2.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section4/Project2.html\">JQuery</a><br>");
		if(vExtension == 1)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project2.aspx\">ASP.NET Javascript</a><br>");
		}
		else if(vExtension == 2)
		{
			Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project2.asp\">ASP Javascript</a><br>");
		}
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section2/Section4/Project2\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project2.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section2/Section4/Project2\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section2/Section4/Project2\">Ruby On Rails</a><br>");
    }
    
}