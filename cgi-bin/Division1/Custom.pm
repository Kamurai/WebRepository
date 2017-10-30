##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Web Programming";

	$vResult .= "<title>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		else
		{
			$vResult .= $vDefault;
		}
	$vResult .= "</title>";
	
	return $vResult;
}

##  Gets the header of the webpage content
sub getContentHeader
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Web Programming";

	$vResult .= "<h2>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		else
		{
			$vResult .= $vDefault;
		}
	$vResult .= "</h2>";
	
	return $vResult;
}

##  Gets the content of the webpage
sub getContent
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "This section is dedicated to web-based programming.";
	
	$vResult .= "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult .= $vDefault; 
		}
		elsif($vPage == 1)
		{
			$vResult .= "This section is dedicated to Javascript based programming.";
		}
		elsif($vPage == 3)
		{
			$vResult .= "This section is dedicated to Perl based programming.";
		}
		elsif($vPage == 4)
		{
			$vResult .= "This section is dedicated to Java based programming.";
		}
		else
		{
			$vResult .= $vDefault;
		}
	$vResult .= "</p>";

	return $vResult;
}

sub getVersions
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Section1/Index.html\">HTML</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Section1/Index.php\">PHP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Index.html\">HTML Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Index.html\">JQuery</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Index.asp\">ASP VBscript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:84/Section1/Index\">Node JS</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Index.jsp\">JSP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Index.xhtml\">JSF</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Index\">ASP.NET MVC App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/SSI/Section1/Index.html\">Apache SSI</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:82/Section1/Index\">Python Web.py</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:83/Section1/Index\">Ruby On Rails</a><br>";
	
	if($vPage <= 0)
	{
		$vResult .= $vDefault;
	}
	elsif($vPage == 1)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project1.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project1.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project1.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project1.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project1.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Section1/Project1\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project1.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project1.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project1\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project1.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Section1/Project1\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Section1/Project1\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 2)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project2.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project2.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project2.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project2.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project2.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Section1/Project2\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project2.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project2.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project2\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project2.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Section1/Project2\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Section1/Project2\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 3)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project3.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project3.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project3.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project3.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project3.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Section1/Project3\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project3.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project3.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project3\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project3.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Section1/Project3\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Section1/Project3\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 4)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project4.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Section1/Project4.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Project4.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Section1/Project4.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project4.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Section1/Project4\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project4.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project4.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Project4\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project4.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Section1/Project4\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Section1/Project4\">Ruby On Rails</a><br>";
	}
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

1;