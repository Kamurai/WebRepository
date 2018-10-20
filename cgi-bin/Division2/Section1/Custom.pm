##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Gynowars";

	$vResult .= "<title>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "Gynowars RPG";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Gynowars: Battle Arena CCG";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Gynowars: Crash Ball";
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
	
	$vDefault .= "Gynowars";

	$vResult .= "<h2>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "Gynowars RPG";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Gynowars: Battle Arena CCG";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Gynowars: Crash Ball";
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
	
	$vDefault .= "This section is dedicated to projects centered in the Gynowars universe.";

	$vResult .= "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "The Gynowars RPG is a 'pokemon-like' tactical RPG.";
			$vResult .= "The protagonist uses creatures to fight battles against other creatures to progress through the storyline.";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ";
			$vResult .= "in an arena-like environment.  There are several scenarios to run, to include:";
			$vResult .= "</br>";
			$vResult .= "'Death Match', 'Ring the Bell', and 'Head Hunt'.";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.";
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
	
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Index.html\">HTML</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Index.php\">PHP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Index.html\">Apache SSI</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Index.html\">HTML Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Index.html\">JQuery</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Index.html\">Angular JS</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Index.xhtml\">JSF</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Index.jsp\">JSP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Index.jsp\">JSP Spring MVC</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Index.asp\">ASP VBscript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Index\">ASP.NET MVC App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section1/Index\">Python Web.py</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section1/Index\">Ruby On Rails</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section1/Index\">Node JS</a><br>";
		
	if($vPage <= 0)
	{
		$vResult .= $vDefault;
	}
	elsif($vPage == 1)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project1.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project1.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project1.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project1.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project1.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project1.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project1.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project1.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project1\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project1\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project1\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project1\">Node JS</a><br>";
    }
	elsif($vPage == 2)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project2.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project2.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project2.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project2.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project2.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project2.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project2.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project2.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project2\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project2\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project2\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project2\">Node JS</a><br>";
    }
	elsif($vPage == 3)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Project3.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section1/Project3.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project3.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project3.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project3.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project3.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project3.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project3.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project3.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project3.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project3\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project3\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project3\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project3\">Node JS</a><br>";
    }
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

1;