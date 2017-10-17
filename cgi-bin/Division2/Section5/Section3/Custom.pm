##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "Utopia";

	$vResult += "<title>";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Elemental Angels";
		}
		else
		{
			$vResult += $vDefault;
		}
	$vResult += "</title>";
	
	return $vResult;
}

##  Gets the header of the webpage content
sub getContentHeader
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "Utopia";

	$vResult += "<h2>";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Elemental Angels";
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
	
	$vDefault += "Here are projects based in the Utopia Nation:</br>";
	$vDefault += "</br>";
	$vDefault += "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>";
			
	$vResult += "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>";
		}
		else
		{
			$vResult += $vDefault;
		}
	$vResult += "</p>";

	return $vResult;
}

## Gets Version links
sub getVersions
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Index.html\">HTML</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Index.php\">PHP</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/Index.html\">HTML Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Index.html\">JQuery</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Index.asp\">ASP VBscript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section3/Index\">Node JS</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Index.jsp\">JSP</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Index.xhtml\">JSF</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Index\">ASP.NET MVC App</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Index.html\">Apache SSI</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section3/Index\">Python Web.py</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section3/Index\">Ruby On Rails</a><br>";
		
	if($vPage <= 0)
	{
		$vResult += $vDefault;
	}
	elsif($vPage == 1)
	{
		$vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.html\">HTML</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.php\">PHP</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/Project1.html\">HTML Javascript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Project1.html\">JQuery</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Project1.asp\">ASP VBscript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Project1.aspx\">ASP.NET Javascript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section3/Project1\">Node JS</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Project1.jsp\">JSP</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Project1.xhtml\">JSF</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Project1.cshtml\">ASP.NET Web App</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Project1.aspx\">ASP.NET Webform</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Project1\">ASP.NET MVC App</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Project1.html\">Apache SSI</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section3/Project1\">Python Web.py</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section3/Project1\">Ruby On Rails</a><br>";
	}
	else
	{
		$vResult += $vDefault;
	}
	
	return $vResult;
}

1;