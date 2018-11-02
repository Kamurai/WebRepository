vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Web Programming";
	
		$scope.vResult += "<title>";
			if(vPage <= 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Javascript Programming";
			}
			else if(vPage == 4)
			{
				$scope.vResult += "Java Programming";
			}
			else if(vPage == 5)
			{
				$scope.vResult += "ASP.NET Programming";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "Database Programming";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</title>";
		
			return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.getContentHeader = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "Web Programming";
	
		$scope.vResult += "<h2>";
			if(vPage == 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 2)
			{
				$scope.vResult += "Javascript Programming";
			}
			else if(vPage == 4)
			{
				$scope.vResult += "Java Programming";
			}
			else if(vPage == 5)
			{
				$scope.vResult += "ASP.NET Programming";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "Database Programming";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</h2>";
			
			return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.Content = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault = "This section is dedicated to web-based programming.";
	
		$scope.vResult += "<p id=\"idCenterContent\">";
			if(vPage <= 0)
			{
				$scope.vResult += $scope.vDefault;
			}
			else if(vPage == 2)
			{
				$scope.vResult += "This section is dedicated to Javascript based programming.";
			}
			else if(vPage == 4)
			{
				$scope.vResult += "This section is dedicated to Java based programming.";
			}
			else if(vPage == 5)
			{
				$scope.vResult += "This section is dedicated to ASP.NET based programming.";
			}
			else if(vPage == 6)
			{
				$scope.vResult += "This section is dedicated to Database based programming.";
			}
			else
			{
				$scope.vResult += $scope.vDefault;
			}
		$scope.vResult += "</p>";
		
			return $sce.trustAsHtml($scope.vResult);
	};
	
	$scope.Versions = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Index.html\">HTML</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Index.php\">PHP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Index.shtml\">Perl</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Index.html\">Apache SSI</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Index.html\">JQuery</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Index.html\">Angular JS</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml\">JSF</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp\">JSP</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Index.jsp\">JSP Spring MVC</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Index.aspx\">ASP.NET Javascript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Index.asp\">ASP VBscript</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml\">ASP.NET Web App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx\">ASP.NET Webform</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Index\">ASP.NET MVC App</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:82/Division1/Index\">Python Web.py</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:83/Division1/Index\">Ruby on Rails</a><br>";
		$scope.vDefault += "<a href=\"http://htkb.dyndns.org:84/Division1/Index\">Node JS</a><br>";
		
		if(vPage == 0)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Index.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Index.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Index.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Index.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Index.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Index.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Index.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Index.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Index.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Index\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Index\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Index\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Index\">Node JS</a><br>";
		}
		else if(vPage == 2)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project2.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project2.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project2.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Project2.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Project2.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project2.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project2.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project2.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project2.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project2.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project2.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project2.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project2.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project2\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Project2\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Project2\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Project2\">Node JS</a><br>";
		}
		else if(vPage == 4)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project4.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project4.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project4.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Project4.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Project4.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project4.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project4.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project4.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project4.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project4.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project4.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project4.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project4.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project4\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Project4\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Project4\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Project4\">Node JS</a><br>";
		}
		else if(vPage == 5)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project5.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project5.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project5.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Project5.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Project5.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project5.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project5.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project5.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project5.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project5.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project5.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project5.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project5.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project5\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Project5\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Project5\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Project5\">Node JS</a><br>";
		}
		else if(vPage == 6)
		{
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project6.html\">HTML</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project6.php\">PHP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/Division1/Project6.shtml\">Perl</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Project6.html\">Apache SSI</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/JQuery/Division1/Project6.html\">JQuery</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org/AngularJS/Division1/Project6.html\">Angular JS</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Project6.xhtml\">JSF</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Project6.jsp\">JSP</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division1/Project6.jsp\">JSP Spring MVC</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Project6.aspx\">ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Project6.asp\">ASP VBscript</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Project6.cshtml\">ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Project6.aspx\">ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Project6\">ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Project6\">Python Web.py</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Project6\">Ruby on Rails</a><br>";
			$scope.vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Project6\">Node JS</a><br>";
		}
		else
		{
			$scope.vResult += $scope.vDefault;
		}
			
			return $sce.trustAsHtml($scope.vResult);
	};

}]);
	



