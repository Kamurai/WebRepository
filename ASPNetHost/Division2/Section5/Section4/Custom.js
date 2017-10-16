function getTitle(vPage)
{
	vResult +="<title>";
		if(vPage == 0)
		{
			vResult +="Elvia";
		}
		else if(vPage == 1)
		{
			vResult +="Nine Card";
		}
	vResult +="</title>";
}

function getHeader(vPage)
{
	vResult +="<h2>";
		if(vPage == 0)
		{
			vResult +="Elvia";
		}
		else if(vPage == 1)
		{
			vResult +="Nine Card";
		}
	vResult +="</h2>";
}

function getContent(vPage)
{
	vResult +="<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			vResult +="Here are projects based in the Elvia Empire:</br>";
			vResult +="</br>";
			vResult +="Nine Card: a Tactical card game played through the Elvia Empire.</br>";
		}
		else if(vPage == 1)
		{
			vResult +="Nine Card is a Tactical card game played through the Elvia Empire.</br>";
		}
	vResult +="</p>";
}

function Versions(vPage, vExtension)
{
	vResult +="Other versions of this page are here:<br>";
	if(vPage == 0)
	{
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.html\">HTML</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.php\">PHP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Index.html\">HTML Javascript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Index.html\">JQuery</a><br>";
		if(vExtension == 1)
		{
			vResult +="<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Index.aspx\">ASP.NET Javascript</a><br>";
		}
		else if(vExtension == 2)
		{
			vResult +="<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Index.asp\">ASP Javascript</a><br>";
		}
		vResult +="<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Index\">Node JS</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.shtml\">Perl</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Index.jsp\">JSP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Index.xhtml\">JSF</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Index.aspx\">ASP.NET Webform</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Index\">ASP.NET MVC App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Index.html\">Apache SSI</a><br>";
	    vResult +="<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Index\">Python Web.py</a><br>";
        vResult +="<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Index\">Ruby On Rails</a><br>";
    }
	else if(vPage == 1)
	{
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html\">HTML</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php\">PHP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Project1.html\">HTML Javascript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Project1.html\">JQuery</a><br>";
		if(vExtension == 1)
		{
			vResult +="<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
		}
		else if(vExtension == 2)
		{
			vResult +="<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Project1.asp\">ASP Javascript</a><br>";
		}
		vResult +="<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Project1\">Node JS</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.shtml\">Perl</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.jsp\">JSP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml\">JSF</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Project1\">ASP.NET MVC App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html\">Apache SSI</a><br>";
	    vResult +="<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1\">Python Web.py</a><br>";
        vResult +="<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1\">Ruby On Rails</a><br>";
    }
    
}