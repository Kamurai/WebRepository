function getTitle(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Web Programming";
	
	vResult += "<title>";
		if(vPage <= 0)
		{
			vResult += vDefault;
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</title>";
	
	return vResult;
}

function getContentHeader(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Web Programming";
	
	vResult += "<h2>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</h2>";
	
	return vResult;
}

function getContent(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "This section is dedicated to web-based programming.";
	
	vResult += "<p id=\"idCenterContent\">";
    	if(vPage <= 0)
		{
			vResult += vDefault;
		}
		else
		{
			vResult += vDefault;
		}
	vResult += "</p>";
	
	return vResult;
}

function getVersions(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Project3.html\">HTML Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Project3.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Division1/Project3\">Node JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Division1/Project3\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Division1/Project3\">Ruby On Rails</a><br>";
		
	if(vPage == 0)
	{
		vResult += vDefault;
    }
	else
	{
		vResult += vDefault;
	}
	
	return vResult;
}
