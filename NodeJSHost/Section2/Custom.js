exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index\">Gynowars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2\">Assault</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3\">Mars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index\">Renley</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index\">Antarrea</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project6\">Truth</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7\">Kingdoms</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8\">Terminal World</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9\">Monster Office Workplace</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10\">Battle Princesses</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11\">Sacred Offerings</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12\">The Way</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13\">Conspiratorium</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14\">Conversion</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "Private Projects";
		}
		else if(vPage == 2)
		{
			result += "Assault CCG";
		}
		else if(vPage == 3)
		{
			result += "Mars Projects";
		}
		else if(vPage == 6)
		{
			result += "Truth";
		}
		else if(vPage == 7)
		{
			result += "Kingdoms";
		}
		else if(vPage == 8)
		{
			result += "Terminal World";
		}
		else if(vPage == 9)
		{
			result += "Monster Office Workplace";
		}
		else if(vPage == 10)
		{
			result += "Battle Princesses";
		}
		else if(vPage == 11)
		{
			result += "Sacred Offerings";
		}
		else if(vPage == 12)
		{
			result += "The Way";
		}
		else if(vPage == 13)
		{
			result += "Conspiratorium";
		}
		else if(vPage == 14)
		{
			result += "Conversion";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "Private Projects";
		}
		else if(vPage == 2)
		{
			result += "Assault CCG";
		}
		else if(vPage == 3)
		{
			result += "Mars Projects";
		}
		else if(vPage == 6)
		{
			result += "Truth";
		}
		else if(vPage == 7)
		{
			result += "Kingdoms";
		}
		else if(vPage == 8)
		{
			result += "Terminal World";
		}
		else if(vPage == 9)
		{
			result += "Monster Office Workplace";
		}
		else if(vPage == 10)
		{
			result += "Battle Princesses";
		}
		else if(vPage == 11)
		{
			result += "Sacred Offerings";
		}
		else if(vPage == 12)
		{
			result += "The Way";
		}
		else if(vPage == 13)
		{
			result += "Conspiratorium";
		}		
		else if(vPage == 14)
		{
			result += "Conversion";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "This section is dedicated to HTKB projects.";
		}
		else if(vPage == 2)
		{
			result += "This section is dedicated CCG project \"Assault\".";
		}
		else if(vPage == 3)
		{
			result += "This section is dedicated to the Mars centered project \"Opposition\".";
		}
		else if(vPage == 6)
		{
			result += "This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
		}
		else if(vPage == 7)
		{
			result += "This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world\"s Kingdoms, get rich, get strong and conquer.";
		}
		else if(vPage == 8)
		{
			result += "This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
			result += "the zombies?  Can you survive?";
		}
		else if(vPage == 9)
		{
			result += "This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.";
			result += "Can you earn the most credit and smooze your way into a promotion?";
		}
		else if(vPage == 10)
		{
			result += "This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?";
			result += "These princess aren\"t your helpless maidens, but valiant warriors themselves.";
		}
		else if(vPage == 11)
		{
			result += "This section is dedicated to the board game project \"Sacred Offerings\".  Being a god is hard, you have to eat, but";
			result += "don\"t want to fall out favor with the people more than the other deities.";
			result += "Draw people to worship you, but be discerning about who is sacrificed.";
		}
		else if(vPage == 12)
		{
			result += "This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.";
			result += "Escape the binds of the world and the board to reach enlightment and win.";
		}
		else if(vPage == 13)
		{
			result += "This section is dedicated to the board game project \"Conspiratorium\".";
			result += "A game of assassins and CIA, you must remember who is friend and who is not.";
		}
		else if(vPage == 14)
		{
			result += "This section is dedicated to the board game project \"Conversion\".";
			result += "Compete on the elemental market by processing elements and becoming the elemental kingpin.";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Index.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 2)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project2.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project2.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project2.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project2.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project2.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project2.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project2.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project2.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project2\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project2.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project2\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project2\">Ruby On Rails</a><br>";
	}
	else if(vPage == 3)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project3.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project3.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project3.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project3.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project3.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project3.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project3.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project3.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project3.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project3.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project3.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project3\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project3.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project3\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project3\">Ruby On Rails</a><br>";
	}
	else if(vPage == 6)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project6.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project6.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project6.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project6.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project6.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project6.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project6.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project6.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project6.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project6.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project6.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project6\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project6.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project6\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project6\">Ruby On Rails</a><br>";
	}
	else if(vPage == 7)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project7.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project7.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project7.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project7.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project7.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project7.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project7.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project7.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project7.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project7.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project7.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project7\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project7.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project7\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project7\">Ruby On Rails</a><br>";
	}
	else if(vPage == 8)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project8.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project8.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project8.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project8.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project8.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project8.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project8.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project8.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project8.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project8.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project8.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project8\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project8.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project8\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project8\">Ruby On Rails</a><br>";
	}
	else if(vPage == 9)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project9.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project9.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project9.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project9.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project9.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project9.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project9.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project9.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project9.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project9.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project9.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project9\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project9.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project9\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project9\">Ruby On Rails</a><br>";
	}
	else if(vPage == 10)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project10.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project10.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project10.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project10.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project10.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project10.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project10.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project10.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project10.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project10.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project10.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project10\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project10.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project10\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project10\">Ruby On Rails</a><br>";
	}
	else if(vPage == 11)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project11.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project11.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project11.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project11.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project11.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project11.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project11.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project11.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project11.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project11.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project11.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project11\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project11.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project11\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project11\">Ruby On Rails</a><br>";
	}
	else if(vPage == 12)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project12.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project12.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project12.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project12.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project12.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project12.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project12.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project12.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project12.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project12.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project12.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project12\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project12.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project12\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project12\">Ruby On Rails</a><br>";
	}
	else if(vPage == 13)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project13.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project13.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project13.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project13.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project13.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project13.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project13.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project13.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project13.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project13.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project13.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project13\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project13.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project13\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project13\">Ruby On Rails</a><br>";
	}
	else if(vPage == 14)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project14.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project14.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Project14.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Project14.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project14.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project14.asp\">ASP VBscript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Project14.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project14.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project14.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project14.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project14.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project14\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project14.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Project14\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Project14\">Ruby On Rails</a><br>";
	}
	return result;
}