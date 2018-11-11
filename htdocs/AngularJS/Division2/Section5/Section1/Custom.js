vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Global Antarrea";
		
		$scope.vResult += "<title>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 1)
			{
				$scope.vResult += "Team Tactical: Crash Ball";
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Wars of Antarrea";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "Revolutions: Invading Nations";
			}
			else if(vPage == 4)
			{
				$scope.vResult += "Revolutions: Rebellion Against the Fist";
			}
			else if(vPage == 5)
			{
				$scope.vResult += "Revolutions: Return to Arms";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "Revolutions: Post Wars";
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
		
		$scope.vDefault += "Global Antarrea";
		
		$scope.vResult += "<h2>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 1)
			{
				$scope.vResult += "Team Tactical: Crash Ball";
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Wars of Antarrea";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "Revolutions: Invading Nations";
			}
			else if(vPage == 4)
			{
				$scope.vResult += "Revolutions: Rebellion Against the Fist";
			}
			else if(vPage == 5)
			{
				$scope.vResult += "Revolutions: Return to Arms";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "Revolutions: Post Wars";
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
		
		$scope.vDefault += "Here are projects based in the Antarrea universe:</br>";
		$scope.vDefault += "</br>";
		$scope.vDefault += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
		$scope.vDefault += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
		$scope.vDefault += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
		$scope.vDefault += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
		$scope.vDefault += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
		$scope.vDefault += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
		
		$scope.vResult += "<div id=\"idCenterContent\">";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 1)
			{
				$scope.vResult += "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>";
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>";
			}
			else if(vPage == 4)
			{
				$scope.vResult += "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>";
			}
			else if(vPage == 5)
			{
				$scope.vResult += "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</div>";
		
		return $sce.trustAsHtml($scope.vResult);
	}
	
	$scope.getVersions = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Index.html\">HTML</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Index.php\">PHP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Index.shtml\">Perl</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Index.html\">Apache SSI</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Index.html\">JQuery</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Index.html\">Angular JS</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Index.xhtml\">JSF</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Index.jsp\">JSP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Index.jsp\">JSP Spring MVC</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Index.asp\">ASP VBscript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Index.aspx\">ASP.NET Webform</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Index\">ASP.NET MVC App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Index\">Python Web.py</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Index\">Ruby on Rails</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Index\">Node JS</a><br>";
		
		if(vPage == 0)
		{
			$scope.vResult += $scope.vDefault;
		}
		else if(vPage == 1)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project1.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project1.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project1.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project1.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project1.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project1.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project1.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project1.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project1.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project1.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project1\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project1\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project1\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project1\">Node JS</a><br>";
		}
		else if(vPage == 2)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project2.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project2.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project2.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project2.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project2.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project2.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project2.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project2.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project2.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project2.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project2\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project2\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project2\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project2\">Node JS</a><br>";
		}
		else if(vPage == 3)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project3.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project3.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project3.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project3.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project3.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project3.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project3.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project3.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project3.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project3.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project3\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project3\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project3\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project3\">Node JS</a><br>";
		}
		else if(vPage == 4)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project4.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project4.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project4.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project4.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project4.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project4.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project4.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project4.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project4.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project4.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project4\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project4\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project4\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project4\">Node JS</a><br>";
		}
		else if(vPage == 5)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project5.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project5.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project5.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project5.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project5.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project5.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project5.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project5.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project5.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project5.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project5.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project5.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project5.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project5\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project5\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project5\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project5\">Node JS</a><br>";
		}
		else if(vPage == 6)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project6.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project6.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section1/Project6.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section1/Project6.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section1/Project6.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section1/Project6.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section1/Project6.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section1/Project6.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section1/Project6.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section1/Project6.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section1/Project6.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section1/Project6.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section1/Project6.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section1/Project6\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section1/Project6\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section1/Project6\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section1/Project6\">Node JS</a><br>";
		}
		else
		{
			$scope.vResult += $scope.vDefault;
		}
		
		return $sce.trustAsHtml($scope.vResult);
	};
}]);