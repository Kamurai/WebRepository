##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "Renley";

	$vResult += "<title>";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Warring Nations";
		}
		elsif($vPage == 2)
		{
			$vResult += "Psychodom: The One Empire";
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
	
	$vDefault += "Renley";

	$vResult += "<h2>";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Warring Nations";
		}
		elsif($vPage == 2)
		{
			$vResult += "Psychodom: The One Empire";
		}
		else
		{
			$vResult += $vDefault;
		}
	$vResult += "</h2>";
	
	return $vResult;
}

##  Gets the content of the webpage
sub Content
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault += "This section is dedicated to projects centered in the Renley universe.";

	$vResult += "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult += $vDefault;
		}
		elsif($vPage == 1)
		{
			$vResult += "Warring Nations is a Tactical RPG involving squad based battles.";
			$vResult += "Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.";
		}
		elsif($vPage == 2)
		{
			$vResult += "Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.";
			$vResult += "The protagonist is tasked with investigating various situations leading ";
			$vResult += "to a conspiracy about who is really ruling the continent.";
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
	
	$vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section4/Index.html\">HTML</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section4/Index.php\">PHP</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section4/Index.html\">HTML Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section4/Index.html\">JQuery</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Index.asp\">ASP VBscript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:84/Section2/Section4/Index\">Node JS</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Index.jsp\">JSP</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Index.xhtml\">JSF</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Index\">ASP.NET MVC App</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Index.html\">Apache SSI</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:82/Section2/Section4/Index\">Python Web.py</a><br>";
	$vDefault += "<a href=\"http://htkb.dyndns.org:83/Section2/Section4/Index\">Ruby On Rails</a><br>";
	
	if($vPage <= 0)
	{
		$vResult += $vDefault;
	}
	elsif($vPage == 1)
	{
		$vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.html\">HTML</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section4/Project1.php\">PHP</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section4/Project1.html\">HTML Javascript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section4/Project1.html\">JQuery</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project1.asp\">ASP VBscript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section4/Project1\">Node JS</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project1.jsp\">JSP</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project1.xhtml\">JSF</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project1\">ASP.NET MVC App</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project1.html\">Apache SSI</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section4/Project1\">Python Web.py</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section4/Project1\">Ruby On Rails</a><br>";
	}
	elsif($vPage == 2)
	{
		$vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.html\">HTML</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section4/Project2.php\">PHP</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section4/Project2.html\">HTML Javascript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section4/Project2.html\">JQuery</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section4/Project2.asp\">ASP VBscript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project2.aspx\">ASP.NET Javascript</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section4/Project2\">Node JS</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project2.jsp\">JSP</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project2.xhtml\">JSF</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project2.cshtml\">ASP.NET Web App</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project2.aspx\">ASP.NET Webform</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project2\">ASP.NET MVC App</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section4/Project2.html\">Apache SSI</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section4/Project2\">Python Web.py</a><br>";
        $vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section4/Project2\">Ruby On Rails</a><br>";
	}
	else
	{
		$vResult += $vDefault;
	}
	
	return $vResult;
}

1;