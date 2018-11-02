vApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
{
	$scope.getTitle = function()
	{
		document.write("<title>");
			if(vPage == 0)
			{
				document.write("Private Projects");
			}
			else if(vPage == 2)
			{
				document.write("Assault CCG");
			}
			else if(vPage == 3)
			{
				document.write("Mars Projects");
			}
			else if(vPage == 7)
			{
				document.write("Truth");
			}
			else if(vPage == 8)
			{
				document.write("Kingdoms");
			}
			else if(vPage == 9)
			{
				document.write("Terminal World");
			}
			else if(vPage == 10)
			{
				document.write("Monster Office Workplace");
			}
			else if(vPage == 11)
			{
				document.write("Battle Princesses");
			}
			else if(vPage == 12)
			{
				document.write("Sacred Offerings");
			}
			else if(vPage == 13)
			{
				document.write("The Way");
			}
			else if(vPage == 14)
			{
				document.write("Conspiratorium");
			}
			else if(vPage == 15)
			{
				document.write("Conversion");
			}
		document.write("</title>");
	}

	$scope.getContentHeader = function()
	{
			if(vPage == 0)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Private Projects");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 2)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Assault CCG");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 3)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Mars Projects");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 7)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Truth");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 8)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Kingdoms");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 9)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Terminal World");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 10)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Monster Office Workplace");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 11)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Battle Princesses");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 12)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Sacred Offerings");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 13)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("The Way");
					document.write("</u>");
				document.write("</h2>");
			}
			else if(vPage == 14)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Conspiratorium");
					document.write("</u>");
				document.write("</h2>");
			}		
			else if(vPage == 15)
			{
				document.write("<h2>");
					document.write("<u>");
						document.write("Conversion");
					document.write("</u>");
				document.write("</h2>");
			}		
	}

	$scope.getContent = function()
	{
		document.write("<p align='left'>");
			if(vPage == 0)
			{
				document.write("This section is dedicated to HTKB projects.");
			}
			else if(vPage == 2)
			{
				document.write("This section is dedicated CCG project \"Assault\".");
			}
			else if(vPage == 3)
			{
				document.write("This section is dedicated to the Mars centered project \"Opposition\".");
			}
			else if(vPage == 7)
			{
				document.write("This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.");
			}
			else if(vPage == 8)
			{
				document.write("This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world's Kingdoms, get rich, get strong and conquer.");
			}
			else if(vPage == 9)
			{
				document.write("This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat");
				document.write("the zombies?  Can you survive?");
			}
			else if(vPage == 10)
			{
				document.write("This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.");
				document.write("Can you earn the most credit and smooze your way into a promotion?");
			}
			else if(vPage == 11)
			{
				document.write("This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?");
				document.write("These princess aren't your helpless maidens, but valiant warriors themselves.");
			}
			else if(vPage == 12)
			{
				document.write("This section is dedicated to the board game project \"Sacred Offerings\".  Being a god is hard, you have to eat, but");
				document.write("don't want to fall out favor with the people more than the other deities.");
				document.write("Draw people to worship you, but be discerning about who is sacrificed.");
			}
			else if(vPage == 13)
			{
				document.write("This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.");
				document.write("Escape the binds of the world and the board to reach enlightment and win.");
			}
			else if(vPage == 14)
			{
				document.write("This section is dedicated to the board game project \"Conspiratorium\".");
				document.write("A game of assassins and CIA, you must remember who is friend and who is not.");
			}
			else if(vPage == 15)
			{
				document.write("This section is dedicated to the board game project \"Conversion\".");
				document.write("Compete on the elemental market by processing elements and becoming the elemental kingpin.");
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