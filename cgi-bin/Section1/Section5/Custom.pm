sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section1/index.html'>Basic HTML</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/index.php'>PHP</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section2/index.shtml'>Javascript</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/index.shtml'>Perl</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section4/index.shtml'>Java</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section5/index.shtml'>ASP.NET</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:81/WebApplication/Section1/Section5/index.cshtml'>Webpage Application</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:81/WebForm/Section1/Section5/index.aspx'>Webform Application</a><br><br>";
		print "<a class=\"navlinkB\" href='http://htkb.dyndns.org:81/MVC/Section1_5/index'>MVC Application</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section1/Section6/index.shtml'>Databases</a><br><br>";
	print "<a class=\"navlinkA\" href='http://htkb.dyndns.org/SSI/Section1/index.html'>Apache SSI</a><br><br>";
    print "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/index\">Python Web.py</a><br>";
    print "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/index\">Ruby On Rails</a><br>";
}

sub Title
{
	##  Writes the Title of the webpage

	my $Page = $_[0];

	print "<title>";
		if($Page <= 0)
		{
			print "ASP.NET";
		}
	print "</title>";
}

sub Header
{
	##  Writes the header of the webpage content

	my $Page = $_[0];

	if($Page <= 0)
	{
		print "<h2>";
			print "ASP.NET";
		print "</h2>";
	}
}

sub Content
{
	##  Writes the content of the webpage
	my $Page = $_[0];

	print "<p id=\"idCenterContent\">";
		if($Page <= 0)
		{
			print "This section is dedicated to ASP.NET programming.";
		}
	print "</p>";

}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Section5/index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Section5/index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section5/index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Section5/index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section5/index.asp\">ASP Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section5/index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Section5/index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section5/index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section5/index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section5/index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section5/index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section5/index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section5/index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Section5/index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Section5/index\">Ruby On Rails</a><br>";
	}
	
}

1;