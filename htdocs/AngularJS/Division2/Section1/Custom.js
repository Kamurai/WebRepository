vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		document.write("<title>");
			if(vPage == 0)
			{
				document.write("Gynowars");
			}
			else if(vPage == 1)
			{
				document.write("Gynowars RPG");
			}
			else if(vPage == 2)
			{
				document.write("Gynowars: Battle Arena CCG");
			}
			else if(vPage == 3)
			{
				document.write("Gynowars: Crash Ball");
			}
		document.write("</title>");
	}

	$scope.getContentHeader = function()
	{
			if(vPage == 0)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Gynowars");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 1)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Gynowars RPG");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 2)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Gynowars: Battle Arena CCG");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 3)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Gynowars: Crash Ball");
					document.write("</u>");
				document.write("</h2>");
			}
	}

	$scope.getContent = function()
	{
		document.write("<p align='left'>");
			if(vPage == 0)
			{
				document.write("This section is dedicated to projects centered in the Gynowars universe.");
			}
			else if(vPage == 1)
			{
				document.write("The Gynowars RPG is a 'pokemon-like' tactical RPG.");
				document.write("The protagonist uses creatures to fight battles against other creatures to progress through the storyline.");
			}
			else if(vPage == 2)
			{
				document.write("Gynowars: Battle Arena is a CCG that pits teams of creatures against each other ");
				document.write("in an arena-like environment.  There are several scenarios to run, to include:");
				document.write("</br>");
				document.write("'Death Match', 'Ring the Bell', and 'Head Hunt'.");
			}
			else if(vPage == 3)
			{
				document.write("Gynowars: Crash Ball is a turn based strategy board game.  Basically it's gridiron with Gynos.");
			}
		document.write("</p>");
	}
	
	$scope.getVersions = function()
	{
		$scope.vResult = "";
		$scope.vDefault = "";
		
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org/Index.html\'>HTML</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org/Index.php\'>PHP</a><br>";
        $scope.vDefault += "<a href=\'http://htkb.dyndns.org/Javascript/Index.html\'>HTML Javascript</a><br>";
        $scope.vDefault += "<a href=\'http://htkb.dyndns.org/JQuery/Index.html\'>JQuery</a><br>";
        $scope.vDefault += "<a href=\'http://htkb.dyndns.org:81/ASP/Index.asp\'>ASP VBscript</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:81/ASPNET/Index.aspx\'>ASP.NET Javascript</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:84/Index\'>Node JS</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org/Index.shtml\'>Perl</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Index.jsp\'>JSP</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Index.xhtml\'>JSF</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:81/WebApplication/Index.cshtml\'>ASP.NET Web App</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:81/WebForm/Index.aspx\'>ASP.NET Webform</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:81/MVC/Index\'>ASP.NET MVC App</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org/SSI/Index.html\'>Apache SSI</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:82/Index\'>Python Web.py</a><br>";
		$scope.vDefault += "<a href=\'http://htkb.dyndns.org:83/Index\'>Ruby on Rails</a><br>";
		
		if(vPage == 0)
		{
			$scope.vResult += $scope.vDefault;
		}
		else if(vPage == 1)
		{
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/AboutUs.html\'>HTML</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/AboutUs.php\'>PHP</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/AboutUs.html\'>HTML Javascript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/JQuery/AboutUs.html\'>JQuery</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/AboutUs.asp\'>ASP VBscript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\'>ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:84/AboutUs\'>Node JS</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/AboutUs.shtml\'>Perl</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\'>JSP</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\'>JSF</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\'>ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\'>ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/AboutUs\'>ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/AboutUs.html\'>Apache SSI</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:82/AboutUs\'>Python Web.py</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:83/AboutUs\'>Ruby on Rails</a><br>";
		}
		else if(vPage == 2)
		{
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Media.html\'>HTML</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Media.php\'>PHP</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/Media.html\'>HTML Javascript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/JQuery/Media.html\'>JQuery</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/Media.asp\'>ASP VBscript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/Media.aspx\'>ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:84/Media\'>Node JS</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Media.shtml\'>Perl</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\'>JSP</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\'>JSF</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/Media.cshtml\'>ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/Media.aspx\'>ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/Media\'>ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/Media.html\'>Apache SSI</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:82/Media\'>Python Web.py</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:83/Media\'>Ruby on Rails</a><br>";
		}
		else if(vPage == 3)
		{
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Minecraft.html\'>HTML</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Minecraft.php\'>PHP</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/Minecraft.html\'>HTML Javascript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/JQuery/Minecraft.html\'>JQuery</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/Minecraft.asp\'>ASP VBscript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\'>ASP.NET Javascript</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:84/Minecraft\'>Node JS</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/Minecraft.shtml\'>Perl</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\'>JSP</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\'>JSF</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\'>ASP.NET Web App</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\'>ASP.NET Webform</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/Minecraft\'>ASP.NET MVC App</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/Minecraft.html\'>Apache SSI</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:82/Minecraft\'>Python Web.py</a><br>";
			$scope.vResult += "<a href=\'http://htkb.dyndns.org:83/Minecraft\'>Ruby on Rails</a><br>";
		}
		else
		{
			$scope.vResult += $scope.vDefault;
		}
			
		return $sce.trustAsHtml($scope.vResult);
	};
}]);