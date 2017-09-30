function Navigation(vLevel, vExtension)
{
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Index.html\">Basic HTML</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Index.php\">PHP</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index"+GetExtension(vExtension)+"\">Javascript</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/Section1/Index.shtml\">Perl</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index"+GetExtension(vExtension)+"\">Java</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index"+GetExtension(vExtension)+"\">ASP.Net</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index"+GetExtension(vExtension)+"\">Databases</a><br><br>");
        Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project1"+GetExtension(vExtension)+"\">Oracle</a><br><br>");
        Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project2"+GetExtension(vExtension)+"\">Derby</a><br><br>");
        Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project3"+GetExtension(vExtension)+"\">MySQL</a><br><br>");
        Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project4"+GetExtension(vExtension)+"\">SQL Server</a><br><br>");
        Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section6/Project5"+GetExtension(vExtension)+"\">Postgres</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br><br>");
    Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>");
	Response.Write("<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby On Rails</a><br>");
}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Database Programming");
		}
		else if(vPage == 1)
		{
			Response.Write("Oracle Programming");
		}
		else if(vPage == 2)
		{
			Response.Write("Derby Programming");
		}
		else if(vPage == 3)
		{
			Response.Write("MySQL Programming");
		}
		else if(vPage == 4)
		{
			Response.Write("SQL Server Programming");
		}
		else if(vPage == 5)
		{
			Response.Write("Postgres Programming");
		}
		else if(vPage == 6)
		{
			Response.Write("XML Programming");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Database Programming");
		}
		else if(vPage == 1)
		{
			Response.Write("Oracle Programming");
		}
		else if(vPage == 2)
		{
			Response.Write("Derby Programming");
		}
		else if(vPage == 3)
		{
			Response.Write("MySQL Programming");
		}
		else if(vPage == 4)
		{
			Response.Write("SQL Server Programming");
		}
		else if(vPage == 5)
		{
			Response.Write("Postgres Programming");
		}
		else if(vPage == 6)
		{
			Response.Write("XML Programming");
		}
	Response.Write("</h2>");
}

function Content(vPage)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
			Response.Write("This section is dedicated to database based programming.");
		}
		else if(vPage == 1)
		{
			Response.Write("This section is dedicated to Oracle based programming.");
			Response.Write("<table>");
				Response.Write("<tr>");
					Response.Write("<td>");
						Response.Write("Index");
					Response.Write("</td>");
					Response.Write("<td>");
						Response.Write("Color");
					Response.Write("</td>");
				Response.Write("</tr>");
				Response.Write("<tr>");
					Response.Write("<td>");
						//OracleMethod("1",0);
					Response.Write("</td>");
					Response.Write("<td>");
						//OracleMethod("Red",0);
					Response.Write("</td>");
				Response.Write("</tr>");
			Response.Write("</table>");
			
		}
		else if(vPage == 2)
		{
			Response.Write("This section is dedicated to Derby based programming.");
		}
		else if(vPage == 3)
		{
			Response.Write("This section is dedicated to MySQL based programming.");
		}
		else if(vPage == 4)
		{
			//SQLServerDataList();
		
			Response.Write("This section is dedicated to SQL Server based programming.");
			Response.Write("<table>");
				Response.Write("<tr>");
					Response.Write("<td>");
						Response.Write("Index");
					Response.Write("</td>");
					Response.Write("<td>");
						Response.Write("Color");
					Response.Write("</td>");
				Response.Write("</tr>");
				Response.Write("<tr>");
					Response.Write("<td>");
						//Response.Write("<%#Container.DataItem(\"Index\")%>");
					Response.Write("</td>");
					Response.Write("<td>");
						//Response.Write("<%#Container.DataItem(\"Color\")%>");
					Response.Write("</td>");
				Response.Write("</tr>");
			Response.Write("</table>");
			
		}
		else if(vPage == 5)
		{
			Response.Write("This section is dedicated to Postgres based programming.");
		}
		else if(vPage == 6)
		{
			Response.Write("This section is dedicated to XML based programming.");
		}
	Response.Write("</p>");
}

function Versions(vPage, vExtension)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Index.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Index.html\">JQuery</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Index\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Index.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Index\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Index\">Ruby On Rails</a><br>");
    }
	else if(vPage == 1)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project1.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project1.html\">JQuery</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Project1\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project1.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project1\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project1\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project1\">Ruby On Rails</a><br>");
    }
	else if(vPage == 2)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project2.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project2.html\">JQuery</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Project2\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project2.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project2\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project2\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project2\">Ruby On Rails</a><br>");
    }
	else if(vPage == 3)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section6/Project3.html\">HTML Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section6/Project3.html\">JQuery</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:84/Section1/Section6/Project3\">Node JS</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section1/Section6/Project3.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section6/Project3\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\">Apache SSI</a><br>");
	    Response.Write("<a href=\"http://htkb.dyndns.org:82/Section1/Section6/Project3\">Python Web.py</a><br>");
        Response.Write("<a href=\"http://htkb.dyndns.org:83/Section1/Section6/Project3\">Ruby On Rails</a><br>");
    }
    
}