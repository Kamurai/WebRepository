function getTitle(vPage)
{
	vResult +="<title>";
		if(vPage == 0)
		{
			vResult +="Grendol";
		}
		else if(vPage == 1)
		{
			vResult +="Land of the Orcish Empire: Age of Magic";
		}
		else if(vPage == 2)
		{
			vResult +="Coliseum: Arena";
		}
	vResult +="</title>";
}

function getHeader(vPage)
{
	vResult +="<h2>";
		if(vPage == 0)
		{
			vResult +="Grendol";
		}
		else if(vPage == 1)
		{
			vResult +="Land of the Orcish Empire: Age of Magic";
		}
		else if(vPage == 2)
		{
			vResult +="Coliseum: Arena";
		}
	vResult +="</h2>";
}

function getContent(vPage)
{
	vResult +="<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			vResult +="Here are projects based in the Grendol Empire:</br>";
			vResult +="</br>";
			vResult +="Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ";
			vResult +="comprise the Grendol Empire.</br>";
			vResult +="Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>";
		}
		else if(vPage == 1)
		{
			vResult +="Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ";
			vResult +="comprise the Grendol Empire.";
		}
		else if(vPage == 2)
		{
			vResult +="Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.";
		}
	vResult +="</p>";
}

function Versions(vPage, vExtension)
{
	vResult +="Other versions of this page are here:<br>";
	if(vPage == 0)
	{
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.html\">HTML</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.php\">PHP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Index.html\">HTML Javascript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Index.html\">JQuery</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Index.asp\">ASP VBscript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Index\">Node JS</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.shtml\">Perl</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Index.jsp\">JSP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Index.xhtml\">JSF</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Index.cshtml\">ASP.NET Web App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Index.aspx\">ASP.NET Webform</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Index\">ASP.NET MVC App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Index.html\">Apache SSI</a><br>";
	    vResult +="<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Index\">Python Web.py</a><br>";
        vResult +="<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Index\">Ruby On Rails</a><br>";
    }
	else if(vPage == 1)
	{
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.html\">HTML</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.php\">PHP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project1.html\">HTML Javascript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project1.html\">JQuery</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project1.asp\">ASP VBscript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Project1\">Node JS</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.shtml\">Perl</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project1.jsp\">JSP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project1.xhtml\">JSF</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project1\">ASP.NET MVC App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project1.html\">Apache SSI</a><br>";
	    vResult +="<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Project1\">Python Web.py</a><br>";
        vResult +="<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Project1\">Ruby On Rails</a><br>";
    }
	else if(vPage == 2)
	{
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.html\">HTML</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.php\">PHP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project2.html\">HTML Javascript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project2.html\">JQuery</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project2.asp\">ASP VBscript</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Project2\">Node JS</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.shtml\">Perl</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project2.jsp\">JSP</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project2.xhtml\">JSF</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project2\">ASP.NET MVC App</a><br>";
		vResult +="<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project2.html\">Apache SSI</a><br>";
	    vResult +="<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Project2\">Python Web.py</a><br>";
        vResult +="<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Project2\">Ruby On Rails</a><br>";
    }

}