sub Navigation
{
	##  Writes the navigation content of the webpage

	my $vPath = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Section1/Index.shtml'>Gynowars</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project2.shtml'>Assault</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project3.shtml'>Mars</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Section4/Index.shtml'>Renley</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Section5/Index.shtml'>Antarrea</a><br><br>";
		print "<a class=\"navlinkB\" href='".$vPath."Section2/Section5/Section1/Index.shtml'>Global</a><br><br>";
		print "<a class=\"navlinkB\" href='".$vPath."Section2/Section5/Section2/Index.shtml'>Grendol</a><br><br>";
			print "<a class=\"navlinkC\" href='".$vPath."Section2/Section5/Section2/Project1.shtml'>Land of the Orcish Empire: Age of Magic</a><br><br>";
			print "<a class=\"navlinkC\" href='".$vPath."Section2/Section5/Section2/Project2.shtml'>Coliseum: Arena</a><br><br>";
		print "<a class=\"navlinkB\" href='".$vPath."Section2/Section5/Section3/Index.shtml'>Utopia</a><br><br>";
		print "<a class=\"navlinkB\" href='".$vPath."Section2/Section5/Section4/Index.shtml'>Elvia</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project6.shtml'>Truth</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project7.shtml'>Kingdoms</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project8.shtml'>Terminal World</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project9.shtml'>Monster Office Workplace</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project10.shtml'>Battle Princesses</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project11.shtml'>Sacred Offerings</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project12.shtml'>The Way</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project13.shtml'>Conspiratorium</a><br><br>";
	print "<a class=\"navlinkA\" href='".$vPath."Section2/Project14.shtml'>Conversion</a><br><br>";

}

sub Title
{
	##  Writes the Title of the webpage

	my $vPage = $_[0];

	print "<title>";
		if($vPage <= 0)
		{
			print "Grendol";
		}
		elsif($vPage == 1)
		{
			print "Land of the Orcish Empire: Age of Magic";
		}
		elsif($vPage == 2)
		{
			print "Coliseum: Arena";
		}
	print "</title>";
}

sub Header
{
	##  Writes the header of the webpage content

	my $vPage = $_[0];

	if($vPage <= 0)
	{
		print "<h2>";
			print "Grendol";
		print "</h2>";
	}
	elsif($vPage == 1)
	{
		 print "<h2>";
			print "Land of the Orcish Empire: Age of Magic";
		print "</h2>";
	}
	elsif($vPage == 2)
	{
		 print "<h2>";
			print "Coliseum: Arena";
		print "</h2>";
	}
}

sub Content
{
	##  Writes the content of the webpage
	my $vPage = $_[0];

	print "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			print "Here are projects based in the Grendol Empire:</br>";
			print "</br>";
			print "Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ";
			print "comprise the Grendol Empire.</br>";
			print "Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>";
		}
		elsif($vPage == 1)
		{
			print "Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ";
			print "comprise the Grendol Empire.";
		}
		elsif($vPage == 2)
		{
			print "Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.";
		}
	print "</p>";


}

sub Versions
{
	my $vPage = $_[0];

	print "Other versions of this page are here:<br>";
	if($vPage <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Index.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Index\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project1.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project1.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project1.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project1.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Project1\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project1.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project1.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project1\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project1.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Project1\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Project1\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section2/Project2.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project2.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project2.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project2.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section2/Project2\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project2.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project2.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project2\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project2.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section2/Project2\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section2/Project2\">Ruby On Rails</a><br>";
	}
	
}

1;