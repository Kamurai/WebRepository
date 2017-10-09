sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section1/Index.html'>Basic HTML</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Index.php'>PHP</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section2/Index.shtml'>Javascript</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Index.shtml'>Perl</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section4/Index.html'>Java</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.jsp'>JSP Programming</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml'>JSF Programming</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section5/Index.shtml'>ASP.Net</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section6/Index.shtml'>Databases</a><br><br>";
	print "<a class=\"navlinkA\" href='http://htkb.dyndns.org/SSI/Section1/Index.html'>Apache SSI</a><br><br>";
    print "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Index\">Python Web.py</a><br>";
    print "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Index\">Ruby On Rails</a><br>";
}

sub Title
{
	##  Writes the Title of the webpage

	my $vPage = $_[0];

	print "<title>";
		if($vPage <= 0)
		{
			print "Java Programming";
		}
		if($vPage == 1)
		{
			print "JSP Programming";
		}
		if($vPage == 2)
		{
			print "JSF Programming";
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
			print "";
				print "Java Programming";
			print "";
		print "</h2>";
	}
	elsif($vPage == 1)
	{
		print "<h2>";
			print "JSP Programming";
		print "</h2>";
	}
	elsif($vPage == 2)
	{
		print "<h2>";
			print "JSF Programming";
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
			print "This section is dedicated to Java based programming.";
		}
		elsif($vPage == 1)
		{
			print "This section is dedicated to JSP based programming.";
		}
		elsif($vPage == 2)
		{
			print "This section is dedicated to JSF based programming.";
		}
	print "</p>";

}

sub Versions
{
	my $vPage = $_[0];

	print "Other versions of this page are here:<br>";
	if($vPage <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section4/Index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Section4/Index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section4/Index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section4/Index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/Index.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/Index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Section4/Index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/Index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section4/Index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/Index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Section4/Index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Section4/Index\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section4/Project1.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Section4/Project1.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section4/Project1.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section4/Project1.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/Project1.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Section4/Project1\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project1.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section4/Project1\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/Project1.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Section4/Project1\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Section4/Project1\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section4/Project2.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Section4/Project2.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section4/Project2.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section4/Project2.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/Project2.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/Project2.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Section4/Project2\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project2.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/Project2.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/Project2.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section4/Project2\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/Project2.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Section4/Project2\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Section4/Project2\">Ruby On Rails</a><br>";
	}
	
}

1;