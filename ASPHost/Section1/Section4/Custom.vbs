function Navigation(vLevel)
{
	Response.Write("<a class=""navlinkA"" href=""http://htkb.dyndns.org/Section1/Index.html"">Basic HTML</a><br><br>");
	Response.Write("<a class=""navlinkA"" href=""http://htkb.dyndns.org/Section1/Index.php"">PHP</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section1/Section2/Index.asp"">VBScript</a><br><br>");
	Response.Write("<a class=""navlinkA"" href=""http://htkb.dyndns.org/Section1/Index.shtml"">Perl</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section1/Section4/Index.asp"">Java</a><br><br>");
		Response.Write("<a class=""navlinkB"" href=""http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.vbsp"">JSP Programming</a><br><br>");
		Response.Write("<a class=""navlinkB"" href=""http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml"">JSF Programming</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section1/Section5/Index.asp"">ASP.Net</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section1/Section6/Index.asp"">Databases</a><br><br>");
	Response.Write("<a class=""navlinkA"" href=""http://htkb.dyndns.org/SSI/Section1/Index.html"">Apache SSI</a><br><br>");
    Response.Write("<a class=""navlinkA"" href=""http://htkb.dyndns.org:82/Section1/Index"">Python Web.py</a><br>");
	Response.Write("<a class=""navlinkA"" href=""http://htkb.dyndns.org:83/Section1/Index"">Ruby On Rails</a><br>");
}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Java Programming");
		}

	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Java Programming");
		}
	Response.Write("</h2>");
}

function Content(vPage)
{
	Response.Write("<p id=""idCenterContent"">");
    	if(vPage == 0)
		{
			Response.Write("This section is dedicated to Java based programming.");
		}

	Response.Write("</p>");
}

function Versions(vPage)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section1/Section4/Index.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section1/Section4/Index.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section1/Section4/Index.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section1/Section4/Index.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section1/Section4/Index.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section1/Section4/Index"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section1/Section4/Index.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section1/Section4/Index.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section1/Section4/Index.aspx"">ASP.NET Webform</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section1/Section4/Index"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section1/Section4/Index"">Ruby On Rails</a><br>");
    }
    
}