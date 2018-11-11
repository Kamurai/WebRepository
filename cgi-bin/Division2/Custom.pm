##  Gets the Title of the webpage
sub getTitle
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "Private Projects";

	$vResult .= "<title>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 2)
		{
			$vResult .= "Assault CCG";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Mars Projects";
		}
		elsif($vPage == 6)
		{
			$vResult .= "Truth";
		}
		elsif($vPage == 7)
		{
			$vResult .= "Kingdoms";
		}
		elsif($vPage == 8)
		{
			$vResult .= "Terminal World";
		}
		elsif($vPage == 9)
		{
			$vResult .= "Monster Office Workplace";
		}
		elsif($vPage == 10)
		{
			$vResult .= "Battle Princesses";
		}
		elsif($vPage == 11)
		{
			$vResult .= "Sacred Offerings";
		}
		elsif($vPage == 12)
		{
			$vResult .= "The Way";
		}
		elsif($vPage == 13)
		{
			$vResult .= "Conspiratorium";
		}
		elsif($vPage == 14)
		{
			$vResult .= "Conversion";
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
	
	$vDefault .= "Private Projects";

	$vResult .= "<h2>";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 2)
		{
			$vResult .= "Assault CCG";
		}
		elsif($vPage == 3)
		{
			$vResult .= "Mars Projects";
		}
		elsif($vPage == 6)
		{
			$vResult .= "Truth";
		}
		elsif($vPage == 7)
		{
			$vResult .= "Kingdoms";
		}
		elsif($vPage == 8)
		{
			$vResult .= "Terminal World";
		}
		elsif($vPage == 9)
		{
			$vResult .= "Monster Office Workplace";
		}
		elsif($vPage == 10)
		{
			$vResult .= "Battle Princesses";
		}
		elsif($vPage == 11)
		{
			$vResult .= "Sacred Offerings";
		}
		elsif($vPage == 12)
		{
			$vResult .= "The Way";
		}
		elsif($vPage == 13)
		{
			$vResult .= "Conspiratorium";
		}
		elsif($vPage == 14)
		{
			$vResult .= "Conversion";
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
	
	$vDefault .= "This section is dedicated to HTKB projects.";

	$vResult .= "<div id=\"idCenterContent\">";
		if($vPage <= 0)
		{
			$vResult .= $vDefault;
		}
		elsif($vPage == 2)
		{
			$vResult .= "This section is dedicated CCG project \"Assault\".";
		}
		elsif($vPage == 3)
		{
			$vResult .= "This section is dedicated to the Mars centered project \"Opposition\".";
		}
		elsif($vPage == 6)
		{
			$vResult .= "This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
		}
		elsif($vPage == 7)
		{
			$vResult .= "This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world's Kingdoms, get rich, get strong and conquer.";
		}
		elsif($vPage == 8)
		{
			$vResult .= "This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
			$vResult .= "the zombies?  Can you survive?";
			
		}
		elsif($vPage == 9)
		{
			$vResult .= "This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.";
			$vResult .= "Can you earn the most credit and smooze your way into a promotion?";
			
		}
		elsif($vPage == 10)
		{
			$vResult .= "This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?";
			$vResult .= "These princess aren't your helpless maidens, but valiant warriors themselves.";
			
		}
		elsif($vPage == 11)
		{
			$vResult .= "This section is dedicated to the board game project \"Sacred Offerings\".";
			$vResult .= "Being a god is hard, you have to eat, but don't want to fall out favor with the people more than the other deities.";
			$vResult .= "Draw people to worship you, but be discerning about who is sacrificed.";
			
		}
		elsif($vPage == 12)
		{
			$vResult .= "This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.";
			$vResult .= "Escape the binds of the world and the board to reach enlightment and win.";
			
		}
		elsif($vPage == 13)
		{
			$vResult .= "This section is dedicated to the board game project \"Conspiratorium\".";
			$vResult .= "A game of assassins and CIA, you must remember who is friend and who is not.";
			
		}
		elsif($vPage == 14)
		{
			$vResult .= "This section is dedicated to the board game project \"Conversion\".";
			$vResult .= "Compete on the elemental market by processing elements and becoming the elemental kingpin.";
			
		}
		else
		{
			$vResult .= $vDefault;
		}
	$vResult .= "</div>";

	return $vResult;
}

sub getVersions
{
	my $vPage = $_[0];
	my $vResult = "";
	my $vDefault = "";
	
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Index.html\">HTML</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Division2/Index.php\">PHP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Index.html\">Apache SSI</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Index.html\">HTML Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Index.html\">JQuery</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Index.html\">Angular JS</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml\">JSF</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp\">JSP</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Index.jsp\">JSP Spring MVC</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx\">ASP.NET Javascript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Index.asp\">ASP VBscript</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml\">ASP.NET Web App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx\">ASP.NET Webform</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Index\">ASP.NET MVC App</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:82/Division2/Index\">Python Web.py</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:83/Division2/Index\">Ruby On Rails</a><br>";
	$vDefault .= "<a href=\"http://htkb.dyndns.org:84/Division2/Index\">Node JS</a><br>";
	
	if($vPage <= 0)
	{
		$vResult .= $vDefault;
	}
	elsif($vPage == 2)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project2.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project2.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project2.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project2.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project2.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project2.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project2.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project2.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project2\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project2\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project2\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project2\">Node JS</a><br>";
    }
	elsif($vPage == 3)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project3.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project3.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project3.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project3.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project3.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project3.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project3.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project3.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project3\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project3\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project3\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project3\">Node JS</a><br>";
    }
	elsif($vPage == 6)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project6.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project6.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project6.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project6.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project6.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project6.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project6.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project6.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project6.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project6.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project6.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project6.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project6\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project6\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project6\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project6\">Node JS</a><br>";
    }
	elsif($vPage == 7)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project7.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project7.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project7.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project7.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project7.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project7.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project7.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project7.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project7.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project7.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project7.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project7.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project7\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project7\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project7\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project7\">Node JS</a><br>";
    }
	elsif($vPage == 8)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project8.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project8.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project8.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project8.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project8.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project8.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project8.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project8.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project8.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project8.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project8.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project8.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project8\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project8\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project8\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project8\">Node JS</a><br>";
    }
	elsif($vPage == 9)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project9.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project9.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project9.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project9.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project9.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project9.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project9.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project9.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project9.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project9.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project9.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project9.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project9\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project9\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project9\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project9\">Node JS</a><br>";
    }
	elsif($vPage == 10)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project10.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project10.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project10.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project10.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project10.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project10.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project10.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project10.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project10.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project10.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project10.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project10.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project10\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project10\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project10\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project10\">Node JS</a><br>";
    }
	elsif($vPage == 11)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project11.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project11.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project11.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project11.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project11.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project11.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project11.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project11.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project11.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project11.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project11.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project11\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project11.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project11\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project11\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project11\">Node JS</a><br>";
    }
	elsif($vPage == 12)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project12.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project12.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project12.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project12.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project12.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project12.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project12.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project12.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project12.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project12.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project12.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project12\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project12.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project12\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project12\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project12\">Node JS</a><br>";
    }
	elsif($vPage == 13)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project13.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project13.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project13.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project13.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project13.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project13.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project13.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project13.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project13.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project13.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project13.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project13\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project13.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project13\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project13\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project13\">Node JS</a><br>";
    }
	elsif($vPage == 14)
	{
		$vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project14.html\">HTML</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Division2/Project14.php\">PHP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Project14.html\">HTML Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project14.html\">JQuery</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project14.html\">Angular JS</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project14.xhtml\">JSF</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.jsp\">JSP</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project14.jsp\">JSP Spring MVC</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project14.aspx\">ASP.NET Javascript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project14.asp\">ASP VBscript</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project14.cshtml\">ASP.NET Web App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project14.aspx\">ASP.NET Webform</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project14\">ASP.NET MVC App</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project14.html\">Apache SSI</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:82/Division2/Project14\">Python Web.py</a><br>";
        $vResult .= "<a href=\"http://htkb.dyndns.org:83/Division2/Project14\">Ruby On Rails</a><br>";
	    $vResult .= "<a href=\"http://htkb.dyndns.org:84/Division2/Project14\">Node JS</a><br>";
    }
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

1;