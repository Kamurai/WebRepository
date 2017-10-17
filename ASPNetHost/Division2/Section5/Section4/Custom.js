function getTitle(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	vDefault += "Elvia";
	
	vResult += "<title>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Nine Card";
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
	
	vDefault += "Elvia";
	
	vResult += "<h2>";
		if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Nine Card";
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
	
	vDefault += "Here are projects based in the Elvia Empire:</br>";
	vDefault += "</br>";
	vDefault += "Nine Card: a Tactical card game played through the Elvia Empire.</br>";
	
	vResult += "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			vResult += vDefault;
		}
		else if(vPage == 1)
		{
			vResult += "Nine Card is a Tactical card game played through the Elvia Empire.</br>";
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
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Index.html\">HTML Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Index.html\">JQuery</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Index.asp\">ASP VBscript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Index\">Node JS</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Index.html\">Apache SSI</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Index\">Python Web.py</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Index\">Ruby On Rails</a><br>";
	
	if(vPage == 0)
	{
		vResult += vDefault;
    }
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Project1.html\">HTML Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Project1.html\">JQuery</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Project1.asp\">ASP VBscript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Project1\">Node JS</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Project1\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html\">Apache SSI</a><br>";
	    vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1\">Ruby On Rails</a><br>";
    }
	else
	{
		vResult += vDefault;
	}
	
	return vResult;    
}