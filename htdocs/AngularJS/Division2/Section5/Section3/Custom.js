vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Utopia";
		
		$scope.vResult += "<title>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 1)
			{
				$scope.vResult += "Elemental Angels";
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
		
		$scope.vDefault += "Utopia";
		
		$scope.vResult += "<h2>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 1)
			{
				$scope.vResult += "Elemental Angels";
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
		
		$scope.vDefault += "Here are projects based in the Utopia Nation:</br>";
		$scope.vDefault += "</br>";
		$scope.vDefault += "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>";
		
		$scope.vResult += "<div id=\"idCenterContent\">";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 1)
			{
				$scope.vResult += "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>";
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
		
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Index.html\">HTML</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Index.php\">PHP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Index.shtml\">Perl</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Index.html\">Apache SSI</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Index.html\">JQuery</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section3/Index.html\">Angular JS</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Index.xhtml\">JSF</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Index.jsp\">JSP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section3/Index\">JSP Spring MVC</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Index.aspx\">ASP.NET Javascript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Index.asp\">ASP VBscript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Index.cshtml\">ASP.NET Web App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Index.aspx\">ASP.NET Webform</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section3/Index\">ASP.NET MVC App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section3/Index\">Python Web.py</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section3/Index\">Ruby on Rails</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section3/Index\">Node JS</a><br>";
		
		if(vPage == 0)
		{
			$scope.vResult += $scope.vDefault;
		}
		else if(vPage == 1)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Project1.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Project1.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Section3/Project1.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Project1.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Project1.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Section3/Project1.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Project1.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Project1.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Section3/Project1\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Project1.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Project1.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Project1.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Project1.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Section3/Project1\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Section3/Project1\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Section3/Project1\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Section3/Project1\">Node JS</a><br>";
		}
		else
		{
			$scope.vResult += $scope.vDefault;
		}
		
		return $sce.trustAsHtml($scope.vResult);
	};
}]);