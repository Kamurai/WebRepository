vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Private Projects";
	
		$scope.vResult += "<title>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Assault CCG";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "Mars Projects";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "Truth";
			}
			else if(vPage == 7)
			{
				$scope.vResult += "Kingdoms";
			}
			else if(vPage == 8)
			{
				$scope.vResult += "Terminal World";
			}
			else if(vPage == 9)
			{
				$scope.vResult += "Monster Office Workplace";
			}
			else if(vPage == 10)
			{
				$scope.vResult += "Battle Princesses";
			}
			else if(vPage == 11)
			{
				$scope.vResult += "Sacred Offerings";
			}
			else if(vPage == 12)
			{
				$scope.vResult += "The Way";
			}
			else if(vPage == 13)
			{
				$scope.vResult += "Conspiratorium";
			}
			else if(vPage == 14)
			{
				$scope.vResult += "Conversion";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</title>";
	
			return $sce.trustAsHtml($scope.vResult);
	}

	$scope.getContentHeader = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Private Projects";
	
		$scope.vResult += "<h2>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Assault CCG";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "Mars Projects";
			}
			else if(vPage == 7)
			{
				$scope.vResult += "Truth";
			}
			else if(vPage == 8)
			{
				$scope.vResult += "Kingdoms";
			}
			else if(vPage == 9)
			{
				$scope.vResult += "Terminal World";
			}
			else if(vPage == 10)
			{
				$scope.vResult += "Monster Office Workplace";
			}
			else if(vPage == 11)
			{
				$scope.vResult += "Battle Princesses";
			}
			else if(vPage == 12)
			{
				$scope.vResult += "Sacred Offerings";
			}
			else if(vPage == 13)
			{
				$scope.vResult += "The Way";
			}
			else if(vPage == 14)
			{
				$scope.vResult += "Conspiratorium";
			}		
			else if(vPage == 15)
			{
				$scope.vResult += "Conversion";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</h2>";
	
			return $sce.trustAsHtml($scope.vResult);
	}

	$scope.getContent = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "This section is dedicated to HTKB projects.";
	
		$scope.vResult += "<p id=\"idCenterContent\">";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 2)
			{
				$scope.vResult += "This section is dedicated CCG project \"Assault\".";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "This section is dedicated to the Mars centered project \"Opposition\".";
			}
			else if(vPage == 7)
			{
				$scope.vResult += "This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
			}
			else if(vPage == 8)
			{
				$scope.vResult += "This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world\"s Kingdoms, get rich, get strong and conquer.";
			}
			else if(vPage == 9)
			{
				$scope.vResult += "This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
				$scope.vResult += "the zombies?  Can you survive?";
			}
			else if(vPage == 10)
			{
				$scope.vResult += "This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.";
				$scope.vResult += "Can you earn the most credit and smooze your way into a promotion?";
			}
			else if(vPage == 11)
			{
				$scope.vResult += "This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?";
				$scope.vResult += "These princess aren\"t your helpless maidens, but valiant warriors themselves.";
			}
			else if(vPage == 12)
			{
				$scope.vResult += "This section is dedicated to the board game project \"Sacred Offerings\".  Being a god is hard, you have to eat, but";
				$scope.vResult += "don\"t want to fall out favor with the people more than the other deities.";
				$scope.vResult += "Draw people to worship you, but be discerning about who is sacrificed.";
			}
			else if(vPage == 13)
			{
				$scope.vResult += "This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.";
				$scope.vResult += "Escape the binds of the world and the board to reach enlightment and win.";
			}
			else if(vPage == 14)
			{
				$scope.vResult += "This section is dedicated to the board game project \"Conspiratorium\".";
				$scope.vResult += "A game of assassins and CIA, you must remember who is friend and who is not.";
			}
			else if(vPage == 15)
			{
				$scope.vResult += "This section is dedicated to the board game project \"Conversion\".";
				$scope.vResult += "Compete on the elemental market by processing elements and becoming the elemental kingpin.";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</p>";
		
		return $sce.trustAsHtml($scope.vResult);
	}
	
	$scope.getVersions = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Index.html\">HTML</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Index.php\">PHP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Index.shtml\">Perl</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Index.html\">Apache SSI</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Index.html\">JQuery</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Index.html\">Angular JS</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml\">JSF</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp\">JSP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Index.jsp\">JSP Spring MVC</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx\">ASP.NET Javascript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Index.asp\">ASP VBscript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml\">ASP.NET Web App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx\">ASP.NET Webform</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Index\">ASP.NET MVC App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Index\">Python Web.py</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Index\">Ruby on Rails</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Index\">Node JS</a><br>";
		
		if(vPage == 0)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Index.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Index.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Index.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Index.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Index.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Index.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Index.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Index.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Index.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Index.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Index.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Index.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Index.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Index\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Index\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Index\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Index\">Node JS</a><br>";
		}
		else if(vPage == 2)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project2.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project2.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project2.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project2.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project2.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project2.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project2.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project2.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project2.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project2.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project2.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project2.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project2.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project2\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project2\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project2\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project2\">Node JS</a><br>";
		}
		else if(vPage == 3)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project3.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project3.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project3.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project3.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project3.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project3.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project3.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project3.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project3.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project3.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project3.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project3.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project3.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project3\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project3\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project3\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project3\">Node JS</a><br>";
		}
		else if(vPage == 6)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project6.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project6.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project6.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project6.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project6.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project6.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project6.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project6.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project6.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project6.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project6.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project6.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project6.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project6\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project6\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project6\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project6\">Node JS</a><br>";
		}
		else if(vPage == 7)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project7.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project7.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project7.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project7.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project7.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project7.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project7.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project7.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project7.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project7.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project7.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project7.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project7.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project7\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project7\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project7\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project7\">Node JS</a><br>";
		}
		else if(vPage == 8)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project8.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project8.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project8.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project8.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project8.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project8.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project8.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project8.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project8.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project8.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project8.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project8.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project8.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project8\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project8\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project8\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project8\">Node JS</a><br>";
		}
		else if(vPage == 9)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project9.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project9.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project9.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project9.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project9.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project9.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project9.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project9.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project9.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project9.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project9.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project9.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project9.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project9\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project9\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project9\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project9\">Node JS</a><br>";
		}
		else if(vPage == 10)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project10.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project10.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project10.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project10.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project10.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project10.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project10.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project10.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project10.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project10.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project10.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project10.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project10.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project10\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project10\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project10\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project10\">Node JS</a><br>";
		}
		else if(vPage == 11)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project11.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project11.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project11.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project11.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project11.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project11.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project11.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project11.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project11.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project11.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project11.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project11.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project11.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project11\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project11\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project11\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project11\">Node JS</a><br>";
		}
		else if(vPage == 12)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project12.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project12.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project12.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project12.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project12.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project12.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project12.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project12.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project12.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project12.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project12.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project12.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project12.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project12\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project12\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project12\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project12\">Node JS</a><br>";
		}    
		else if(vPage == 13)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project13.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project13.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project13.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project13.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project13.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project13.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project13.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project13.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project13.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project13.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project13.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project13.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project13.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project13\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project13\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project13\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project13\">Node JS</a><br>";
		}
		else if(vPage == 14)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project14.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project14.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Project14.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Project14.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Project14.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Project14.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Project14.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Project14.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Project14.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Project14.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Project14.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Project14.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Project14.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Project14\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Project14\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Project14\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Project14\">Node JS</a><br>";
		}
		else
		{
			$scope.vResult += $scope.vDefault;
		}
		
		return $sce.trustAsHtml($scope.vResult);
	};
}]);