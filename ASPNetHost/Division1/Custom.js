function getTitle(vPage)
{
	vResult +="<title>";
		if(vPage <= 0)
		{
			vResult +="Web Programming";
		}
	vResult +="</title>";
}

function getHeader(vPage)
{
	vResult +="<h2>";
		if(vPage == 0)
		{
			vResult +="Web Programming";
		}
	vResult +="</h2>";
}

function getContent(vPage)
{
	vResult +="<p id=\"idCenterContent\">";
    	if(vPage <= 0)
		{
			vResult +="This section is dedicated to web-based programming.";
		}
	vResult +="</p>";
}

function getVersions(vPage)
{
	vResult +="Other versions of this page are here:<br>";
	if(vPage == 0)
	{
		vResult +="<a href=\"http://htkb.dyndns.org/Section1/Index.html\">HTML</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section1/Index.php\">PHP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project3.html\">HTML Javascript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project3.html\">JQuery</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Index.asp\">ASP VBscript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:84/Section1/Project3\">Node JS</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section1/Index.shtml\">Perl</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Index.jsp\">JSP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Index.xhtml\">JSF</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Index.aspx\">ASP.NET Webform</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Index\">ASP.NET MVC App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br>";
	    vResult +="<a href=\"http://htkb.dyndns.org:82/Section1/Project3\">Python Web.py</a><br>";
        vResult +="<a href=\"http://htkb.dyndns.org:83/Section1/Project3\">Ruby On Rails</a><br>";
    }
    
}
