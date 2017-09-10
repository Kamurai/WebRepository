function Navigation(level, extension)
{
	Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project1.html\">Basic HTML</a><br><br>");
	Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section2/Index"+GetExtension(extension)+"\">Javascript</a><br><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Project1.html\">HTML Javascript</a><br><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\">ASP Javascript</a><br><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\">ASP.NET Javascript</a><br><br>");
	Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Project3.shtml\">Perl</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section4/Index"+GetExtension(extension)+"\">Java</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section5/Index"+GetExtension(extension)+"\">ASP.Net</a><br><br>");
	Response.Write("<a href=\""+GetPath(level)+"Section1/Section6/Index"+GetExtension(extension)+"\">Databases</a><br><br>");
	Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");

}

function Title(input)
{
	Response.Write("<title>");
		if(input == 0)
		{
			Response.Write("Javascript");
		}
		else if(input == 2)
		{
			Response.Write("ASP Javascript");
		}
		else if(input == 3)
		{
			Response.Write("ASP.NET Javascript");
		}
	Response.Write("</title>");
}

function Header(input)
{
	Response.Write("<h2>");
		if(input == 0)
		{
			Response.Write("Javascript");
		}
		else if(input == 2)
		{
			Response.Write("ASP Javascript");
		}
		else if(input == 3)
		{
			Response.Write("ASP.NET Javascript");
		}
	Response.Write("</h2>");

}

function Content(input)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(input == 0)
		{
			Response.Write("This section is dedicated to Javascript based programming.");
		}
		else if(input == 2)
		{
			Response.Write("This section is dedicated to ASP Javascript based programming.");
		}
		else if(input == 3)
		{
			Response.Write("This section is dedicated to ASP.NET Javascript based programming.");
		}
	Response.Write("</p>");
}

function Versions(input)
{
	Response.Write("Other versions of this page are here:<br>");
	if(input == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/index.html\">Apache SSI</a><br>");
	}
	else if(input == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project2.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Project2.html\">Apache SSI</a><br>");
	}
	else if(input == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project3.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section2/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Project3.html\">Apache SSI</a><br>");
	}

}