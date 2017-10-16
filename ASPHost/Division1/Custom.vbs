function getTitle(vPage)
{
	dim vResult = "";
	dim vDefault = "";
	
	vDefault = "Web Programming";
	
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
	dim vResult = "";
	dim vDefault = "";
	
	vDefault = "Web Programming";
	
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

function getContent(vPage);
{
	dim vResult = "";
	dim vDefault = "";
	
	vDefault = "This section is dedicated to web-based programming.";
	
	vResult += "<p id=""idCenterContent"">";
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
	dim vResult = "";
	dim vDefault = "";
	
	vResult += "<a href=""http://htkb.dyndns.org/Section1/Index.html"">HTML</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org/Section1/Index.php"">PHP</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org/VBScript/Section1/Project3.html"">HTML VBScript</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org/JQuery/Section1/Project3.html"">JQuery</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:81/ASPNET/Section1/Index.aspx"">ASP.NET VBScript</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:84/Section1/Project3"">Node JS</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org/Section1/Index.shtml"">Perl</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section1/Index.vbsp"">JSP</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section1/Index.xhtml"">JSF</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:81/WebApplication/Section1/Index.cshtml"">ASP.NET Web App</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:81/WebForm/Section1/Index.aspx"">ASP.NET Webform</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:81/MVC/Section1/Index"">ASP.NET MVC App</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org/SSI/Section1/Index.html"">Apache SSI</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:82/Section1/Project3"">Python Web.py</a><br>";
	vResult += "<a href=""http://htkb.dyndns.org:83/Section1/Project3"">Ruby On Rails</a><br>";

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
