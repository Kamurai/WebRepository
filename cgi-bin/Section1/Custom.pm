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
			print "Web Programming";
		}
		elsif($vPage == 2)
		{
			print "Javascript Programming";
		}
		elsif($vPage == 3)
		{
			print "Perl Programming";
		}
		elsif($vPage == 4)
		{
			print "Java Programming";
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
			print "Web Programming";
		print "</h2>";
	}
	elsif($vPage == 2)
	{
		print "<h2>";
			print "Javascript Programming";
		print "</h2>";
	}
	elsif($vPage == 3)
	{
		print "<h2>";
			print "Perl Programming";
		print "</h2>";
	}
	elsif($vPage == 4)
	{
		print "<h2>";
			print "Java Programming";
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
			print "This section is dedicated to web-based programming.";
		}
		elsif($vPage == 1)
		{
			print "This section is dedicated to Javascript based programming.";
		}
		elsif($vPage == 3)
		{
			print "This section is dedicated to Perl based programming.";
		}
		elsif($vPage == 4)
		{
			print "This section is dedicated to Java based programming.";
		}
	print "</p>";

}

sub Versions
{
	my $vPage = $_[0];

	print "Other versions of this page are here:<br>";
	if($vPage <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Index.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby On Rails</a><br>";		
	}
	elsif($vPage == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project1.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project1.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project1.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project1.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Project1\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project1.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project1.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project1\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project1.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Project1\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Project1\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 2)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project2.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Project2.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project2.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project2.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project2.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Project2\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project2.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project2.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project2\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project2.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Project2\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Project2\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 3)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project3.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Project3.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project3.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project3.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project3.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Project3\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project3.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project3.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project3\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project3.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Project3\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Project3\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 4)
	{
		print "<a href=\"http://htkb.dyndns.org/Section1/Project4.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section1/Project4.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project4.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project4.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project4.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section1/Project4\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project4.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project4.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project4\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project4.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section1/Project4\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section1/Project4\">Ruby On Rails</a><br>";
	}

}

1;