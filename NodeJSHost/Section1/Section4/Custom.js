exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1\">Basic HTML</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.php\">PHP</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/index\">Javascript</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project3.shtml\">Perl</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/index\">Java</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp\">JSP Programming</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml\">JSF Programming</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/index\">ASP.Net</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/index\">Databases</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index\">Apache SSI</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage <= 0)
		{
			result += "Java Programming";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
        if(vPage == 0)
        {
            result += "Java Programming";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage <= 0)
		{
			result += "This section is dedicated to Java based programming.";
		}

	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section4/index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section4/index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section4/index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section4/index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/index.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section4/index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section4/index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section4/index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section4/index\">Ruby On Rails</a><br>";
	}
    return result;
}