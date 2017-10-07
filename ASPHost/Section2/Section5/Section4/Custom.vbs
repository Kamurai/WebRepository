function Navigation(vLevel)
{
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Section1/Index.asp"">Gynowars</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project2.asp"">Assault</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project3.asp"">Mars</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Section4/Index.asp"">Renley</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Section5/Index.asp"">Antarrea</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Index.asp"">Global</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section2/Index.asp"">Grendol</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section3/Index.asp"">Utopia</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section4/Index.asp"">Elvia</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section4/Project1.asp"">Nine Card</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project6.asp"">Truth</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project7.asp"">Kingdoms</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project8.asp"">Terminal World</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project9.asp"">Monster Office Workplace</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project10.asp"">Battle Princesses</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project11.asp"">Sacred Offerings</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project12.asp"">The Way</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project13.asp"">Conspiratorium</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project14.asp"">Conversion</a><br><br>");

}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Elvia");
		}
		else if(vPage == 1)
		{
			Response.Write("Nine Card");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Elvia");
		}
		else if(vPage == 1)
		{
			Response.Write("Nine Card");
		}
	Response.Write("</h2>");
}

function Content(vPage)
{
	Response.Write("<p id=""idCenterContent"">");
    	if(vPage == 0)
		{
			Response.Write("Here are projects based in the Elvia Empire:</br>");
			Response.Write("</br>");
			Response.Write("Nine Card: a Tactical card game played through the Elvia Empire.</br>");
		}
		else if(vPage == 1)
		{
			Response.Write("Nine Card is a Tactical card game played through the Elvia Empire.</br>");
		}
	Response.Write("</p>");
}

function Versions(vPage)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section4/Index.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section4/Index.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section4/Index.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Index.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Index.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section4/Index"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section4/Index.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Index.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Index.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Index.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Index.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Index"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Index.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section4/Index"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section4/Index"">Ruby On Rails</a><br>");
    }
	else if(vPage == 1)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section4/Project1.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Project1.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Project1.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section4/Project1"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section4/Project1.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Project1"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1"">Ruby On Rails</a><br>");
    }
    
}