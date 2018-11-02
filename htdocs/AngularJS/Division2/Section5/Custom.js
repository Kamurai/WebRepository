vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Antarrea Projects";
		
		$scope.vResult += "<title>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
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
		
		$scope.vDefault += "Antarrea Projects";
		
		$scope.vResult += "<h2>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
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
		
			$scope.vDefault += "Global:";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
			$scope.vDefault += "Here are projects based in the Antarrea universe:</br>";
			$scope.vDefault += "</br>";
			$scope.vDefault += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
			$scope.vDefault += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
			$scope.vDefault += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
			$scope.vDefault += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
			$scope.vDefault += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
			$scope.vDefault += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
				$scope.vDefault += "Grendol:";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
			$scope.vDefault += "Here are projects based in the Grendol universe:</br>";
			$scope.vDefault += "</br>";
			$scope.vDefault += "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
			$scope.vDefault += "Grendol: Coliseum: Arena:                         CCG.</br>";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
				$scope.vDefault += "Utopia:";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
			$scope.vDefault += "Here are projects based in the Utopia universe:</br>";
			$scope.vDefault += "</br>";
			$scope.vDefault += "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
				$scope.vDefault += "Elvia:";
		$scope.vDefault += "<br/>";
		$scope.vDefault += "<br/>";
			$scope.vDefault += "Here are projects based in the Elvia universe:</br>";
			$scope.vDefault += "</br>";
			$scope.vDefault += "Nine Card: Tactical card game.</br>";
		
		$scope.vResult += "<p id=\"idCenterContent\">";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
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
		
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.html\">HTML</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.php\">PHP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section5/Index.shtml\">Perl</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section5/Index.html\">Apache SSI</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division2/Section5/Index.html\">JQuery</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division2/Section5/Index.html\">Angular JS</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Index.xhtml\">JSF</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Index.jsp\">JSP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division2/Section5/Index.jsp\">JSP Spring MVC</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section5/Index.asp\">ASP VBscript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section5/Index.aspx\">ASP.NET Webform</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section5/Index\">ASP.NET MVC App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section5/Index\">Python Web.py</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section5/Index\">Ruby on Rails</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Section5/Index\">Node JS</a><br>";
		
		if(vPage == 0)
		{
			$scope.vResult += $scope.vDefault;
		}
		else
		{
			$scope.vResult += $scope.vDefault;
		}
		
		return $sce.trustAsHtml($scope.vResult);
	};
}]);