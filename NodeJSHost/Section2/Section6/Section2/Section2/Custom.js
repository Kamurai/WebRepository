exports.Navigation = function (vLevel)
{
	var result = "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/index\">Gynowars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2\">Assault</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3\">Mars</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/index\">Renley</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/index\">Antarrea</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section6/index\">Editations</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section6/Project1\">Magic: The Tactical</a><br><br>";
		result += "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/index\">Warhammer 40K</a><br><br>";
			result += "<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section6/Project1\">Mission!</a><br><br>";
			result += "<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/index\">HTKB Armies</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project1\">Ad Infinitum</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project2\">Avia</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project3\">De Luna</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project4\">Eve</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project5\">Geo Marines</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project6\">Twin Fists</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project7\">Voboulids</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project8\">Fungi</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project9\">Synergy</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project10\">The Dark</a><br><br>";
				result += "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project11\">Vivus Mortem</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7\">Truth</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8\">Kingdoms</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9\">Terminal World</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10\">Monster Office Workplace</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11\">Battle Princesses</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12\">Sacred Offerings</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13\">The Way</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14\">Conspiratorium</a><br><br>";
	result += "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project15\">Conversion</a><br><br>";
    return result;
}

exports.Title = function (vPage)
{
	var result = "<title>";
		if(vPage == 0)
		{
			result += "HTKB Armies";
		}
		else if(vPage == 1)
		{
			result += "Ad Infinitum";
		}
		else if(vPage == 2)
		{
			result += "Avia";
		}
		else if(vPage == 3)
		{
			result += "De Luna";
		}
		else if(vPage == 4)
		{
			result += "Eve";
		}
		else if(vPage == 5)
		{
			result += "Geo Marines";
		}
		else if(vPage == 6)
		{
			result += "Twin Fists";
		}
		else if(vPage == 7)
		{
			result += "Voboulids";
		}
		else if(vPage == 8)
		{
			result += "Fungi";
		}
		else if(vPage == 9)
		{
			result += "Synergy";
		}
		else if(vPage == 10)
		{
			result += "The Dark";
		}
		else if(vPage == 11)
		{
			result += "Vivus Mortem";
		}
	result += "</title>";
    return result;
}

exports.Header = function (vPage)
{
	var result = "<h2>";
		if(vPage == 0)
		{
			result += "HTKB Armies";
		}
		else if(vPage == 1)
		{
			result += "Ad Infinitum";
		}
		else if(vPage == 2)
		{
			result += "Avia";
		}
		else if(vPage == 3)
		{
			result += "De Luna";
		}
		else if(vPage == 4)
		{
			result += "Eve";
		}
		else if(vPage == 5)
		{
			result += "Geo Marines";
		}
		else if(vPage == 6)
		{
			result += "Twin Fists";
		}
		else if(vPage == 7)
		{
			result += "Voboulids";
		}
		else if(vPage == 8)
		{
			result += "Fungi";
		}
		else if(vPage == 9)
		{
			result += "Synergy";
		}
		else if(vPage == 10)
		{
			result += "The Dark";
		}
		else if(vPage == 11)
		{
			result += "Vivus Mortem";
		}
	result += "</h2>";
    return result;
}

exports.Content = function (vPage)
{
	var result = "<p id=\"idCenterContent\">";
    	if(vPage == 0)
		{
			result += "This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.";
		}
		else if(vPage == 1)
		{
			result += "Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ";
			result += "as they are not known to negotiate.  While some technology has been recovered, it is rare ";
			result += "to find anything viable after battles.";
		}
		else if(vPage == 2)
		{
			result += "The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ";
			result += "glide for short times without technological assistance.";
		}
		else if(vPage == 3)
		{
			result += "De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ";
			result += "While De Luna are automated vehicles, wreckage has determine that there are seats for ";
			result += "pilots.  Theories range from A.I. control to remote communication.";
		}
		else if(vPage == 4)
		{
			result += "The Eve are a race of terrifying beast creatures. ";
			result += "These Xenos somewhat resemble large cats.";
		}
		else if(vPage == 5)
		{
			result += "Geo Marines are a specialized Chapter concentrating equipment speciality.";
		}
		else if(vPage == 6)
		{
			result += "This lost Chapter spent far too long stranded outside the reach of civilisation.  ";
			result += "The Twin Fists specialize in close combat battles.";
		}
		else if(vPage == 7)
		{
			result += "Vouboulids are a plant-like group of entities.  Using a hive structure, ";
			result += "these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.";
		}
		else if(vPage == 8)
		{
			result += "These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ";
			result += "Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.";
		}
		else if(vPage == 9)
		{
			result += "These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.";
		}
		else if(vPage == 10)
		{
			result += "The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.";
		}
		else if(vPage == 11)
		{
			result += "Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ";
			result += "have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ";
			result += "take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ";
			result += "and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to \"turn to ash\".";
		}
	result += "</p>";
    return result;
}

exports.Versions = function (vPage)
{
	var result = "";
	if(vPage == 0)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/index.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/index.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/index.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/index.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/index.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/index.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/index\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/index.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/index\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/index\">Ruby On Rails</a><br>";
	}
	else if(vPage == 1)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project1.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project1.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project1.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project1.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project1.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project1\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project1.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project1\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project1\">Ruby On Rails</a><br>";
	}
	else if(vPage == 2)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project2.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project2.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project2.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project2.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project2.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project2\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project2.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project2\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project2\">Ruby On Rails</a><br>";
	}
	else if(vPage == 3)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project3.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project3.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project3.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project3.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project3.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project3.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project3\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project3.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project3\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project3\">Ruby On Rails</a><br>";
	}
	else if(vPage == 4)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project4.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project4.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project4.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project4.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project4.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project4.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project4\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project4.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project4\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project4\">Ruby On Rails</a><br>";
	}
	else if(vPage == 5)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project5.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project5.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project5.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project5.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project5.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project5.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project5\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project5.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project5\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project5\">Ruby On Rails</a><br>";
	}
	else if(vPage == 6)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project6.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project6.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project6.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project6.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project6.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project6.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project6\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project6.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project6\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project6\">Ruby On Rails</a><br>";
	}
	else if(vPage == 7)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project7.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project7.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project7.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project7.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project7.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project7.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project7\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project7.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project7\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project7\">Ruby On Rails</a><br>";
	}
	else if(vPage == 8)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project8.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project8.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project8.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project8.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project8.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project8.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project8\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project8.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project8\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project8\">Ruby On Rails</a><br>";
	}
	else if(vPage == 9)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project9.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project9.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project9.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project9.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project9.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project9.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project9\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project9.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project9\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project9\">Ruby On Rails</a><br>";
	}
	else if(vPage == 10)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project10.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project10.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project10.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project10.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project10.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project10.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project10\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project10.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project10\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project10\">Ruby On Rails</a><br>";
	}
	else if(vPage == 11)
	{
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.html\">HTML</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.php\">PHP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section6/Section2/Section2/Project11.html\">HTML Javascript</a><br>";
        result += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section6/Section2/Section2/Project11.html\">JQuery</a><br>";
        result += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project11.asp\">ASP Javascript</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.shtml\">Perl</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project11.jsp\">JSP</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project11.xhtml\">JSF</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project11.cshtml\">ASP.NET Web App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Webform</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project11\">ASP.NET MVC App</a><br>";
		result += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project11.html\">Apache SSI</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:82/Section2/Section6/Section2/Section2/Project11\">Python Web.py</a><br>";
		result += "<a href=\"http://htkb.dyndns.org:83/Section2/Section6/Section2/Section2/Project11\">Ruby On Rails</a><br>";
	}
    return result;
}