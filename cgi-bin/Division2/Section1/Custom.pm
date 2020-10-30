##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Crash Ball";

	$vResult .= "<title>";
		if($vPage <= 0){
			$vResult .= $vDefault;
		}elsif($vPage == 1){
			$vResult .= "Antarrea: Crash Ball";
		}elsif($vPage == 2){
			$vResult .= "Gynowars: Crash Ball";
		}else{
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
	
	$vDefault .= "Crash Ball";

	$vResult .= "<h2>";
		if($vPage <= 0){
			$vResult .= $vDefault;
		}elsif($vPage == 1){
			$vResult .= "Antarrea: Crash Ball";
		}elsif($vPage == 2){
			$vResult .= "Gynowars: Crash Ball";
		}else{
			$vResult .= $vDefault;
		}
	$vResult .= "</h2>";
	
	return $vResult;
}

##  Gets the content of the webpage
sub getContent{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "This section is dedicated to Crash Ball.";

	$vResult .= "<div id=\"idCenterContent\">";
		if($vPage <= 0){
			$vResult .= $vDefault;
		}elsif($vPage == 1){
			$vResult .= "Antarrea: Crash Ball is a tactical board game centered on a battle version of football.";
		}elsif($vPage == 2){
			$vResult .= "Gynowars: Crash Ball is a turn based strategy board game.  Basically it\'s gridiron with Gynos.";
		}else{
			$vResult .= $vDefault;
		}
	$vResult .= "</div>";

	return $vResult;
}

sub getVersions{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "
		<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Index.html\">HTML</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Index.php\">PHP</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Index.shtml\">Perl</a></li>
		<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Index.html\">Apache SSI</a></li>
		<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Index.html\">HTML Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Index.html\">JQuery</a></li>
		<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Index.html\">Angular JS</a></li>
		<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Section1/Index.html\">JSX</a></li>
		<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Section1/Index.xml\">XSLT</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Index.xhtml\">JSF</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Index.jsp\">JSP</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Index\">JSP Spring MVC</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Index.aspx\">ASP.NET Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Index.asp\">ASP VBscript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Index.cshtml\">ASP.NET Web App</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Index.aspx\">ASP.NET Webform</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Index\">ASP.NET MVC App</a></li>
		<li><a href=\"http://htkb.dyndns.org:82/Division2/Section1/Index\">Python Web.py</a></li>
		<li><a href=\"http://htkb.dyndns.org:83/Division2/Section1/Index\">Ruby on Rails</a></li>
		<li><a href=\"http://htkb.dyndns.org:84/Division2/Section1/Index\">Node JS</a></li>
		<li><a href=\"http://htkb.dyndns.org:85/Division2/Section1/Index\">Angular 2+</a></li>
		<li><a href=\"http://htkb.dyndns.org:86/Division2/Section1/Index\">ReactJS</a></li>
	";
	
	$vResult .= "<ul class=\"versionsUl\">";
		
	if($vPage <= 0){
		$vResult .= $vDefault;
	}elsif($vPage == 1){
		$vResult .= "
			<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project1.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project1.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project1.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project1.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project1.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Section1/Project1.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Section1/Project1.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project1.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project1.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project1\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project1.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project1.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project1.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project1.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project1\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project1\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project1\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project1\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division2/Section1/Project1\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division2/Section1/Project1\">ReactJS</a></li>
		";
    }elsif($vPage == 2){
		$vResult .= "
			<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division2/Section1/Project2.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division2/Section1/Project2.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division2/Section1/Project2.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division2/Section1/Project2.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section1/Project2.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division2/Section1/Project2.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division2/Section1/Project2.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project2.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project2.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section1/Project2\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project2.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section1/Project2.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project2.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project2.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section1/Project2\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division2/Section1/Project2\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division2/Section1/Project2\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division2/Section1/Project2\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division2/Section1/Project2\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division2/Section1/Project2\">ReactJS</a></li>
		";
    }else{
		$vResult .= $vDefault;
	}
	
	$vResult .= "</ul>";
	
	return $vResult;
}

1;