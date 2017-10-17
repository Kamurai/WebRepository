##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "Elvia";

	$vResult += "<title>";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Nine Card";
		}
		else
		{
			$vResult += $vDefault;
		}
	$vResult = "</title>";
	
	return $vResult;
}

##  Gets the header of the webpage content
sub getContentHeader
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "Elvia";

	$vResult += "<h2>";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Nine Card";
		}
		else
		{
			$vResult += $vDefault;
		}
	$vResult = "</h2>";
	
	return $vResult;
}

##  Gets the content of the webpage
sub Content
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "Here are projects based in the Elvia Empire:</br>";
	$vDefault += "</br>";
	$vDefault += "Nine Card: a Tactical card game played through the Elvia Empire.</br>";
	
	$vResult += "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Nine Card is a Tactical card game played through the Elvia Empire.</br>";
		}
		else
		{
			$vResult += $vDefault;
		}
	$vResult += "</p>";

	return $vResult;
}

sub getVersions
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "<a href=\"http://htkb.dyndns.org/Index.html\">HTML</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/Index.php\">PHP</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Index.html\">Apache SSI</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Index.html\">HTML Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Index.html\">JQuery</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Index.html\">Angular JS</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Index.xhtml\">JSF</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Index.jsp\">JSP</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Index\">JSP</a><br>";$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Index.asp\">ASP VBscript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Index\">ASP.NET MVC App</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:82/Index\">Python Web.py</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:83/Index\">Ruby On Rails</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:84/Index\">Node JS</a><br>";
	
	if($vPage <= 0)
	{
		$vResult += $vDefault;
	}
	elsif($vPage == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Project1.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section4/Project1.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Project1.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Project1\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Project1\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1\">Ruby On Rails</a><br>";
	}
	else
	{
		$vResult += $vDefault;
	}
	
	return $vResult;
}

1;