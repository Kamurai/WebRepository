##  Gets the Title of the webpage
sub getTitle{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Video Games";

	$vResult .= "<title>";
		if($vPage <= 0){
			$vResult .= $vDefault;
		}elsif($vPage == 1){
			$vResult .= "Truth";
		}elsif($vPage == 2){
			$vResult .= "The Wrong Ninja";
		}elsif($vPage == 3){
			$vResult .= "Terminal World";
		}elsif($vPage == 4){
			$vResult .= "Mars: Opposition";
		}else{
			$vResult .= $vDefault;
		}
	$vResult .= "</title>";
	
	return $vResult;
}

##  Gets the header of the webpage content
sub getContentHeader{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Video Games";

	$vResult .= "<h2>";
		if($vPage <= 0){
			$vResult .= $vDefault;
		}elsif($vPage == 1){
			$vResult .= "Truth";
		}elsif($vPage == 2){
			$vResult .= "The Wrong Ninja";
		}elsif($vPage == 3){
			$vResult .= "Terminal World";
		}elsif($vPage == 4){
			$vResult .= "Mars: Opposition";
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
	
	$vDefault .= "This section is dedicated to video game projects.";

	$vResult .= "<div id=\"idCenterContent\">";
		if($vPage <= 0){
			$vResult .= $vDefault;
		}elsif($vPage == 1){
			$vResult .= "This section is dedicated to the MMO RTS project \"Truth\".<br>";
			$vResult .= "Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.<br>";
		}elsif($vPage == 2){
		    $vResult .= "This section is dedicated to the 2D platformer project \"The Wrong Ninja\".<br>";
			$vResult .= "Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.<br>";
        }elsif($vPage == 3){
			$vResult .= "This section is dedicated to the simulation MMO centered project \"Terminal World\".<br>";
			$vResult .= "This is a virtual environment where a zombie outbreak is about to happen.<br>";			
			$vResult .= "Can you beat the zombies?  Can you survive?";
		}elsif($vPage == 4){
			$vResult .= "This section is dedicated to the Mars centered project \"Opposition\".<br>";
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
		<li><a href=\"http://htkb.dyndns.org/Division3/Index.html\">HTML</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division3/Index.php\">PHP</a></li>
		<li><a href=\"http://htkb.dyndns.org/Division3/Index.shtml\">Perl</a></li>
		<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Index.html\">Apache SSI</a></li>
		<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Index.html\">HTML Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Index.html\">JQuery</a></li>
		<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Index.html\">Angular JS</a></li>
		<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Index.html\">JSX</a></li>
		<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Index.xml\">XSLT</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Index.xhtml\">JSF</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Index.jsp\">JSP</a></li>
		<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Index\">JSP Spring MVC</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Index.aspx\">ASP.NET Javascript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Index.asp\">ASP VBscript</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Index.cshtml\">ASP.NET Web App</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Index.aspx\">ASP.NET Webform</a></li>
		<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Index\">ASP.NET MVC App</a></li>
		<li><a href=\"http://htkb.dyndns.org:82/Division3/Index\">Python Web.py</a></li>
		<li><a href=\"http://htkb.dyndns.org:83/Division3/Index\">Ruby on Rails</a></li>
		<li><a href=\"http://htkb.dyndns.org:84/Division3/Index\">Node JS</a></li>
		<li><a href=\"http://htkb.dyndns.org:85/Division3/Index\">Angular 2+</a></li>
		<li><a href=\"http://htkb.dyndns.org:86/Division3/Index\">ReactJS</a></li>
	";
	
	$vResult .= "<ul class=\"versionsUl\">";
        
	if($vPage <= 0){
		$vResult .= $vDefault;
	}elsif($vPage == 1){
		$vResult .= "
			<li><a href=\"http://htkb.dyndns.org/Division3/Project1.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project1.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project1.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project1.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project1.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project1.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project1.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project1.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project1.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project1.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project1.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project1\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project1.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project1.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project1.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project1.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project1\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division3/Project1\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division3/Project1\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division3/Project1\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division3/Project1\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division3/Project1\">ReactJS</a></li>
		";
    }elsif($vPage == 2){
		$vResult .= "
			<li><a href=\"http://htkb.dyndns.org/Division3/Project2.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project2.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project2.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project2.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project2.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project2.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project2.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project2.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project2.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project2.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project2.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project2\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project2.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project2.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project2.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project2.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project2\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division3/Project2\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division3/Project2\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division3/Project2\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division3/Project2\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division3/Project2\">ReactJS</a></li>
		";
    }elsif($vPage == 3){
		$vResult .= "
			<li><a href=\"http://htkb.dyndns.org/Division3/Project3.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project3.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project3.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project3.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project3.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project3.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project3.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project3.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project3.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project3.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project3.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project3\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project3.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project3.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project3.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project3.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project3\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division3/Project3\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division3/Project3\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division3/Project3\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division3/Project3\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division3/Project3\">ReactJS</a></li>
		";
    }elsif($vPage == 4){
		$vResult .= "
			<li><a href=\"http://htkb.dyndns.org/Division3/Project4.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project4.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Project4.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Project4.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Project4.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Project4.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Project4.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Project4.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Project4.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Project4.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Project4.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Project4\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Project4.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Project4.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Project4.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Project4.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Project4\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division3/Project4\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division3/Project4\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division3/Project4\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division3/Project4\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division3/Project4\">ReactJS</a></li>
		";
    }else{
		$vResult .= $vDefault;
	}
	
	$vResult .= "</ul>";
	
	return $vResult;
}

1;