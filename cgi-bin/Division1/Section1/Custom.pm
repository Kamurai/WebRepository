##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Database Programming";

	$vResult .= "<title>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "Oracle Programming";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Derby Programming";
		}
		elsif($vPage == 3)
		{
			$vResult .= "MySQL Programming";
		}
		elsif($vPage == 4)
		{
			$vResult .= "SQL Server Programming";
		}
		elsif($vPage == 5)
		{
			$vResult .= "Postgres Programming";
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
	
	$vDefault .= "Database Programming";

	$vResult .= "<h2>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "Oracle Programming";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Derby Programming";
		}
		elsif($vPage == 3)
		{
			$vResult .= "MySQL Programming";
		}
		elsif($vPage == 4)
		{
			$vResult .= "SQL Server Programming";
		}
		elsif($vPage == 5)
		{
			$vResult .= "Postgres Programming";
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
	
	$vDefault .= "This section is dedicated to database based programming.";

	$vResult .= "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "This section is dedicated to Oracle based programming.";
		}
		elsif($vPage == 2)
		{
			$vResult .= "This section is dedicated to Derby based programming.";
		}
		elsif($vPage == 3)
		{
			$vResult .= "This section is dedicated to MySQL based programming.";
		}
		elsif($vPage == 4)
		{
			$vResult .= "This section is dedicated to SQL Server based programming.";
		}
		elsif($vPage == 5)
		{
			$vResult .= "This section is dedicated to Postgres based programming.";
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
	
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.html\">HTML</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Index.php\">PHP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section6/Index.html\">HTML Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Index.html\">JQuery</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Index.asp\">ASP VBscript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Index\">Node JS</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Index.jsp\">JSP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Index.xhtml\">JSF</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Index\">ASP.NET MVC App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Index.html\">Apache SSI</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Index\">Python Web.py</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Index\">Ruby On Rails</a><br>";
	
	if($vPage <= 0)
	{
		$vResult .= $vDefault;
	}
	elsif($vPage == 1)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project1.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project1.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section6/Project1.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project1.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project1.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project1.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project1\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project1.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project1.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project1.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project1.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project1\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project1.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project1\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project1\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 2)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project2.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project2.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section6/Project2.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project2.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project2.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project2.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project2\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project2.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project2.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project2.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project2.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project2\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project2.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project2\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project2\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 3)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project3.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project3.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section6/Project3.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project3.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project3.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project3.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project3\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project3.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project3.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project3.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project3.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project3\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project3.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project3\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project3\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 4)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project4.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project4.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section6/Project4.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project4.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project4.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project4.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project4\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project4.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project4.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project4.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project4.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project4\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project4.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project4\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project4\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 5)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project5.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division1/Section6/Project5.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section6/Project5.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Section6/Project5.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section6/Project5.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section6/Project5.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division1/Section6/Project5\">Node JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section6/Project5.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section6/Project5.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section6/Project5.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section6/Project5.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section6/Project5\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section6/Project5.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division1/Section6/Project5\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division1/Section6/Project5\">Ruby On Rails</a><br>";
	}
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

1;