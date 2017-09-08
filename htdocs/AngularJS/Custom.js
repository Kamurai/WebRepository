//var Custom = angular.module("Custom", []);

TestApp.controller("CustomController", ['$scope', '$sce', function ($scope, $sce)
	{

		$scope.Navigation = function(vLevel)
		{
			$scope.vResult = "";
			$scope.vResult += "<span class='navlink'>";
				$scope.vResult += "<a href='"+$scope.GetPath(vLevel)+"AboutUs.html'>About Us</a>";
			$scope.vResult += "</span>";
			$scope.vResult += "<br>";
			$scope.vResult += "<span class='navlink'>";
				$scope.vResult += "<a href='"+$scope.GetPath(vLevel)+"Media.html'>Media</a>";
			$scope.vResult += "</span>";
			$scope.vResult += "<br>";
			$scope.vResult += "<span class='navlink'>";
				$scope.vResult += "<a href='"+$scope.GetPath(vLevel)+"Minecraft.html'>Minecraft!</a>";
			$scope.vResult += "</span>";
			$scope.vResult += "<br>";
			return $sce.trustAsHtml($scope.vResult);
		};
		
		$scope.Title = function(vPage)
		{
			$scope.vResult = "";
			$scope.vResult += "<title>";
				if(vPage <= 0)
				{
					$scope.vResult += "HTKB Home Page";
				}
				else if(vPage == 1)
				{
					$scope.vResult += "About Us";
				}
				else if(vPage == 2)
				{
					$scope.vResult += "Media";
				}
				else if(vPage == 3)
				{
					$scope.vResult += "Minecraft!";
				}
			$scope.vResult += "</title>");
			return $sce.trustAsHtml($scope.vResult);
		};
		
		$scope.Header = function(vPage)
		{
			$scope.vResult = "";
				if(vPage == 0)
				{
					$scope.vResult += "<h2>";
						$scope.vResult += "<u>";
							$scope.vResult += "Welcome to the House That Kamurai Built!";
						$scope.vResult += "</u>";
					$scope.vResult += "</h2>";
				}
				else if(vPage == 1)
				{
					$scope.vResult += "<h2>";
						$scope.vResult += "<u>";
							$scope.vResult += "About Us";
						$scope.vResult += "</u>";
					$scope.vResult += "</h2>";
				}
				else if(vPage == 2)
				{
					$scope.vResult += "<h2>";
						$scope.vResult += "<u>";
							$scope.vResult += "Media";
						$scope.vResult += "</u>";
					$scope.vResult += "</h2>";
				}
				else if(vPage == 3)
				{
					$scope.vResult += "<h2>";
						$scope.vResult += "<u>";
							$scope.vResult += "Minecraft!";
						$scope.vResult += "</u>";
					$scope.vResult += "</h2>";
				}
			return $sce.trustAsHtml($scope.vResult);
		};
		
		$scope.Content = function(vPage)
		{
			$scope.vResult = "";
			$scope.vResult += "<p align='left'>";
				if(vPage == 0)
				{
					$scope.vResult += "The House That Kamurai Built is an entertainment company with the primary focus ";
					$scope.vResult += "of increasing awesome by stimulating intelligent conversation and entertainment via discussion and ";
					$scope.vResult += "game design.<br>";
					$scope.vResult += "Increase the Awesome with us!<br>";
				}
				else if(vPage == 1)
				{
					$scope.vResult += "We are working to build this into a better place.</br>";
					$scope.vResult += "If you found this, then you must be at least (Awesome/2).</br>";
					$scope.vResult += "Stay tuned, right now it's all about laying foundation for the future.</br>";
				}
				else if(vPage == 2)
				{
					$scope.vResult += "<p align='left'>";
						$scope.vResult += "You can find us at all these different places:</br>";
					$scope.vResult += "</p>";
					$scope.vResult += "<p align='left'>";
						$scope.vResult += "<h3>";
							$scope.vResult += "<p align='left'>";
								$scope.vResult += "#WeAreMovieClub:";
							$scope.vResult += "</p>";
						$scope.vResult += "</h3>";
						$scope.vResult += "<p align='left'>";
							$scope.vResult += "<a href='http://www.youtube.com/WeAreMovieClub'>Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>";
							$scope.vResult += "<a href='http://WeAreMovieClub.tumblr.com'>WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>";
							$scope.vResult += "<a href='http://www.twitter.com/WeAreMovieClub'>@WeArMovieClub on Twitter: Let us know about your movie thoughts.</a></br>";
							$scope.vResult += "<a href='http://www.facebook.com/WeAreMovieClub'>facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>";
						$scope.vResult += "</p>";
						$scope.vResult += "<h3>";
							$scope.vResult += "<p align='left'>";
								$scope.vResult += "HTKB Productions";
							$scope.vResult += "</p>";
						$scope.vResult += "</h3>";
						$scope.vResult += "<p align='left'>";
							$scope.vResult += "<a href='http://www.youtube.com/GamingDivision528'>Gaming Division:  A Youtube Channel for game stuff.</a></br>";
							$scope.vResult += "<a href='http://www.youtube.com/JamOnToast528'>Jam On Toast:  A Youtube Channel for media stuff.</a></br>";
							$scope.vResult += "<a href='http://www.ustream.tv/HTKB'>UStream:  Streams show up here too.</a></br>";
							$scope.vResult += "<a href='http://www.firetalk.com/HTKB'>FireTalk:  Streams show up here too.</a></br>";
							$scope.vResult += "<a href='http://www.younow.com/HTKB'>YouNow:  Streams show up here too.</a></br>";
							$scope.vResult += "<a href='http://www.soundcloud.com/HTKB'>Sound Cloud:  Listen to our podcasts.</a></br>";
							$scope.vResult += "<a href='http://HTKB.podbean.com/'>Pod Bean:  Listen to our podcasts.</a></br>";
							$scope.vResult += "<a href='http://www.youtube.com/HTKB'>Youtube:  Thoughts and life discussions.</a></br>";
							$scope.vResult += "<a href='http://www.patreon.com/HTKBProductions'>Patreon:  You can help make our dreams reality.</a></br>";
							$scope.vResult += "<a href='http://www.facebook.com/HouseThatKamuraiBuilt'>Facebook: Talk about movie with us.</a></br>";
							$scope.vResult += "<a href='http://HouseThatKamuraiBuilt.tumblr.com'>HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>";
							$scope.vResult += "<a href='http://myspace.com/HouseThatKamuraiBuilt'>Myspace: Wow, there's even a MySpace!</a></br>";
						$scope.vResult += "</p>";
					$scope.vResult += "</p>";
					$scope.vResult += "<p align='left'>";
						$scope.vResult += "Here are some of our member's pages:</br>";
					$scope.vResult += "</p>";
					$scope.vResult += "<h3>";
						$scope.vResult += "<p align='left'>";
							$scope.vResult += "Kamurai:";
						$scope.vResult += "</p>";
					$scope.vResult += "</h3>";
					$scope.vResult += "<p align='left'>";
						$scope.vResult += "<a href='http://twitter.com/#!/Kamurai25'>Kamurai's Twitter.</a></br>";
						$scope.vResult += "<a href='http://Instagram.com/Kamurai25'>Kamurai's Instagram.</a></br>";
						$scope.vResult += "<a href='./.'>Kamurai's Snapchat: Kamurai</a></br>";
						$scope.vResult += "<a href='http://www.facebook.com/cris.kamurai'>Kamurai's Facebook.</a></br>";
						$scope.vResult += "<a href='https://www.gplus.com/Members/Cris-Kamurai'>Kamurai's Google Plus.</a></br>";
						$scope.vResult += "<a href='http://www.yoyogames.com/users/Kamurai'>Kamurai's YoYo Games page:  See some of the games he's posted.</a></br>";
					$scope.vResult += "</p>";
				}
				else if(vPage == 3)
				{
					$scope.vResult += "<p align='left'>";
						$scope.vResult += "If you would like to play Minecraft with us, then you're welcome to join us here:</br>";
						$scope.vResult += "htkb.dyndns.org:25565</br>";
						$scope.vResult += "The server is running Minecraft version 1.7.10.</br>";
						$scope.vResult += "This is a list of mods that we are using on the server, compatible with 1.7.10.</br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/forge-1.7.10-10.13.2.1236-installer.jar'>Forge</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip'>Dr Zhark's Mo Creatures</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/CustomMobSpawner 3.3.0.zip'>Custom Mob Spawner</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar'>Rei's Minimap</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar'>iPixeli's Gender Mod</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/BspkrsCore-1.7.10.jar'>Bspkrs Core</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar'>Tree Capitator</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/MoarFood-5.8.0.jar'>Moar Food</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/MoarOres-2.4.5.jar'>Moar Ores</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar'>Biblio Craft</a></br>";
						$scope.vResult += "<a href='../Section3/Downloads/Minecraft/skin_template.png'>Steve skin template</a></br>";
					$scope.vResult += "</p>";
					$scope.vResult += "<p align='left'>";
						$scope.vResult += "For first time setups, please follow these steps to make your client compatible with the server:</br>";
						$scope.vResult += " 0) If you don't have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>";
						$scope.vResult += " 1) From the launcher create a new profile and change its version to 1.7.10.</br>";
						$scope.vResult += " 2) Save the Profile, select the new profile and click play.</br>";
						$scope.vResult += " 3) Exit the program.</br>";
						$scope.vResult += " 4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>";
						$scope.vResult += "	Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>";
						$scope.vResult += "	Mac: 'Go to' ~/Library/Application Support/minecraft</br>";
						$scope.vResult += " 5) Place the Mo Creatures, Custom Mob Spawner, iPixeli's Gender Mod, Bspkers Core, Tree Capitator, Moar Food, Moar Ores, Biblio Craft and Rei's Minimap files into .minecraft/mods.  You may have to make the mods folder.</br>";
						$scope.vResult += " 6) Open the Minecraft Launcher, edit your 1.7.10 profile to use the forge version of 1.7.10.</br>";
						$scope.vResult += " 7) Save the Profile, select the new profile and click play.</br>";
						$scope.vResult += " 8) You should see the mods listed on the side of the Minecraft window.</br>";
						$scope.vResult += " 9) Go to multiplayer and click add server.</br>";
						$scope.vResult += "10) Name the server something distinct and put 'htkb.dyndns.org' or 'htkb.dyndns.org:25565' in the address bar.</br>";
						$scope.vResult += "11) Save the server entry.  You should see a connection to the server.  Double click to join.</br>";
					$scope.vResult += "</p>");
				}
			$scope.vResult += "</p>";
			return $sce.trustAsHtml($scope.vResult);
		};
		
		$scope.Versions = function(vPage)
		{
			$scope.vResult = "";
			if(vPage == 0)
			{
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/index.html\'>HTML</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/index.html\'>HTML Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/index.asp\'>ASP Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/index.aspx\'>ASP.NET Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/index.shtml\'>Perl</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/index.jsp\'>JSP</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/index.xhtml\'>JSF</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/index.cshtml\'>ASP.NET Web App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/index.aspx\'>ASP.NET Webform</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/Main/index\'>ASP.NET MVC App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/index.html\'>Apache SSI</a><br>";
			}
			else if(vPage == 1)
			{
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/AboutUs.html\'>HTML</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/AboutUs.html\'>HTML Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/AboutUs.asp\'>ASP Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\'>ASP.NET Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/AboutUs.shtml\'>Perl</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\'>JSP</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\'>JSF</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\'>ASP.NET Web App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\'>ASP.NET Webform</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/Main/AboutUs\'>ASP.NET MVC App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/AboutUs.html\'>Apache SSI</a><br>";
			}
			else if(vPage == 2)
			{
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Media.html\'>HTML</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/Media.html\'>HTML Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/Media.asp\'>ASP Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/Media.aspx\'>ASP.NET Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Media.shtml\'>Perl</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\'>JSP</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\'>JSF</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/Media.cshtml\'>ASP.NET Web App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/Media.aspx\'>ASP.NET Webform</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/Main/Media\'>ASP.NET MVC App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/Media.html\'>Apache SSI</a><br>";
			}
			else if(vPage == 3)
			{
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Minecraft.html\'>HTML</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Javascript/Minecraft.html\'>HTML Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASP/Minecraft.asp\'>ASP Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\'>ASP.NET Javascript</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/Minecraft.shtml\'>Perl</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\'>JSP</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\'>JSF</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\'>ASP.NET Web App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\'>ASP.NET Webform</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org:81/MVC/Main/Minecraft\'>ASP.NET MVC App</a><br>";
				$scope.vResult += "<a href=\'http://htkb.dyndns.org/SSI/Minecraft.html\'>Apache SSI</a><br>";
			}
			return $sce.trustAsHtml($scope.vResult);
		};
	});








