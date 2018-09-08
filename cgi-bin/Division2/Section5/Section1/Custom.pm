##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Global Antarrea";

	$vResult .= "<title>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "Team Tactical: Crash Ball";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Wars of Antarrea";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Revolutions: Invading Nations";
		}
		elsif($vPage == 4)
		{
			$vResult .= "Revolutions: Rebellion Against the Fist";
		}
		elsif($vPage == 5)
		{
			$vResult .= "Revolutions: Return to Arms";
		}
		elsif($vPage == 6)
		{
			$vResult .= "Revolutions: Post Wars";
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
	
	$vDefault .= "Global Antarrea";

	$vResult .= "<h2>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult .= "Team Tactical: Crash Ball";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Wars of Antarrea";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Revolutions: Invading Nations";
		}
		elsif($vPage == 4)
		{
			$vResult .= "Revolutions: Rebellion Against the Fist";
		}
		elsif($vPage == 5)
		{
			$vResult .= "Revolutions: Return to Arms";
		}
		elsif($vPage == 6)
		{
			$vResult .= "Revolutions: Post Wars";
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
	
	$vDefault .= "Here are projects based in the Antarrea universe:</br>";
	$vDefault .= "</br>";
	$vDefault .= "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
	$vDefault .= "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
	$vDefault .= "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
	$vDefault .= "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
	$vDefault .= "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
	$vDefault .= "Revoultions: Post Wars:    Tactical RPG, 4th story arc.</br>";
	
	$vResult .= "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			 $vResult .= $vDefault;         
		}
		elsif($vPage == 1)
		{
			$vResult .= "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>";
		}
		elsif($vPage == 2)
		{
			$vResult .= "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>";
		}
		elsif($vPage == 4)
		{
			$vResult .= "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>";
		}
		elsif($vPage == 5)
		{
			$vResult .= "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>";
		}
		elsif($vPage == 6)
		{
			$vResult .= "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>";
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
	
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Index.html\">HTML</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Index.php\">PHP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Index.html\">Apache SSI</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Index.html\">HTML Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Index.html\">JQuery</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Index.html\">Angular JS</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Index.xhtml\">JSF</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Index.jsp\">JSP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Index.jsp\">JSP Spring MVC</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Index.asp\">ASP VBscript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Index\">ASP.NET MVC App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Index\">Python Web.py</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Index\">Ruby On Rails</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Index\">Node JS</a><br>";
	
	if($vPage <= 0)
	{
		$vResult .= $vDefault;
	}
	elsif($vPage == 1)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project1.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project1.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project1.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Project1.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project1.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project1.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project1.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project1.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Project1.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project1.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project1\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project1\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project1\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project1\">Node JS</a><br>";
    }
	elsif($vPage == 2)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project2.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project2.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project2.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Project2.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project2.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project2.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project2.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project2.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Project2.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project2.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project2\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project2\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project2\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project2\">Node JS</a><br>";
    }
	elsif($vPage == 3)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project3.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project3.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project3.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Project3.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project3.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project3.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project3.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project3.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Project3.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project3.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project3\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project3\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project3\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project3\">Node JS</a><br>";
    }
	elsif($vPage == 4)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project4.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project4.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project4.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Project4.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project4.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project4.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project4.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project4.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Project4.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project4.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project4\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project4\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project4\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project4\">Node JS</a><br>";
    }
	elsif($vPage == 5)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project5.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project5.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project5.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Project5.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project5.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project5.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project5.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project5.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Project5.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project5.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project5.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project5.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project5.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project5\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project5\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project5\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project5\">Node JS</a><br>";
    }
	elsif($vPage == 6)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project6.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project6.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project6.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Section1/Project6.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project6.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project6.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project6.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project6.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section1/Project6.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project6.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project6.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project6.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project6.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project6\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project6\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project6\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project6\">Node JS</a><br>";
    }
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

1;