##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Antarrea Projects";

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
	
	$vDefault .= "Antarrea Projects";

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
	
	$vDefault .= "Global:";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
		$vDefault .= "Here are projects based in the Antarrea universe:</br>";
		$vDefault .= "</br>";
		$vDefault .= "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
		$vDefault .= "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
		$vDefault .= "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
		$vDefault .= "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
		$vDefault .= "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
		$vDefault .= "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
			$vDefault .= "Grendol:";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
		$vDefault .= "Here are projects based in the Grendol universe:</br>";
		$vDefault .= "</br>";
		$vDefault .= "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
		$vDefault .= "Grendol: Coliseum: Arena:                         CCG.</br>";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
			$vDefault .= "Utopia:";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
		$vDefault .= "Here are projects based in the Utopia universe:</br>";
		$vDefault .= "</br>";
		$vDefault .= "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
			$vDefault .= "Elvia:";
	$vDefault .= "<br>";
	$vDefault .= "<br>";
		$vDefault .= "Here are projects based in the Elvia universe:</br>";
		$vDefault .= "</br>";
		$vDefault .= "Nine Card: Tactical card game.</br>";
		
	$vResult .= "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
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
	
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.html\">HTML</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.php\">PHP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section5/Index.html\">HTML Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Index.html\">JQuery</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Index.asp\">ASP VBscript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Index\">Node JS</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Index.jsp\">JSP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Index.xhtml\">JSF</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Index\">ASP.NET MVC App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Index.html\">Apache SSI</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Index\">Python Web.py</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Index\">Ruby On Rails</a><br>";
	
	if($vPage <= 0)
	{
		$vResult .= $vDefault;
	}
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

1;