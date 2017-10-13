sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section1/Index.html'>Basic HTML</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Index.php'>PHP</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section2/Index.shtml'>Javascript</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Index.shtml'>Perl</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section4/Index.shtml'>Java</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section5/Index.shtml'>ASP.NET</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Index.cshtml'>Webpage Application</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:81/WebForm/Section1/Section5/Index.aspx'>Webform Application</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:81/MVC/Section1_5/Index'>MVC Application</a><br><br>";
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
			print "ASP.NET";
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
			print "ASP.NET";
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
			print "This section is dedicated to ASP.NET programming.";
		}
	print "</p>";

}

sub Versions
{
	my $vPage = $_[0];

	print "Other versions of this page are here:<br>";
	if($vPage <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section5/Index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Section5/Index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section5/Index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section5/Index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/Index.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Section5/Index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/Index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/Index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/Index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section5/Index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/Index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Section5/Index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Section5/Index\">Ruby On Rails</a><br>";
	}
	
}

1;