exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\"href=\"http://hktb.dyndns.org/Section1/Index\">Basic HTML</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"href=\"http://hktb.dyndns.org/Section3/Index.php\">PHP</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index\">Javascript</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"href=\"http://hktb.dyndns.org/Javascript/Section1/Section2/Index.html\">HTML Javascript</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"href=\"http://hktb.dyndns.org/JQuery/Section1/Section2/Index.html\">JQuery</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Index.asp\">ASP VBscript</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Index.aspx\">ASP.NET Javascript</a><br><br>";
		result += "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:84/Section1/Section2/Index\">Node JS</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"href=\"http://hktb.dyndns.org/Section1/Index.shtml\">Perl</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index\">Java</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index\">ASP.Net</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index\">Databases</a><br><br>";
	result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br><br>";
    result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br><br>";
    result += "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby on Rails</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "Javascript Programming";
		}
		else if(vPage == 4)
		{
			result += "Node JS Programming";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "Javascript";
		}
		else if(vPage == 4)
		{
			result += "Node JS Programming";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "This section is dedicated to Javascript based programming.";
		}
		else if(vPage == 4)
		{
			result += "This section is dedicated to Node JS based programming.";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section2/Index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section2/Index.php\">PHP</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Index.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Section2/Index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section2/Index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Index.html\">Apache SSI</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:82/Section1/Section2/Index\">Python Web.py</a><br><br>";
        result += "<a href=\"http://htkb.dyndns.org:83/Section1/Section2/Index\">Ruby on Rails</a><br><br>";
    }
    else if(vPage == 4)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section1/S.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section2/Index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project3.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section1/Project3.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Project1.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Project2.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section5/Project3\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project7.html\">Apache SSI</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:82/Section1/Project8\">Python Web.py</a><br><br>";
        result += "<a href=\"http://htkb.dyndns.org:83/Section1/Project9\">Ruby on Rails</a><br><br>";
    }
    return result;
}