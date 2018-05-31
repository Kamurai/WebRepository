<?php
    function getTitle($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'HTKB Home Page';
        
        $vResult = $vResult.'<title>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==1)
			{
				$vResult = $vResult.'About Us';
			}
			else if($vPage==2)
			{
				$vResult = $vResult.'Media';
			}
			else if($vPage==3)
			{
				$vResult = $vResult.'Minecraft!';
			}
			else if($vPage==4)
			{
				$vResult = $vResult.'The Show';
			}
			else
			{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult.'</title>';
        
        return $vResult;
    }

    function getContentHeader($vPage)
    {
        $vResult = '';
        $vDefault = '';
        
		$vDefault = $vDefault.'Welcome to the House That Kamurai Built!';
        
        $vResult = $vResult.'<h2>';
			if($vPage==0)
			{
				$vResult = $vDefault;
			}
			else if($vPage==1)
			{
				$vResult = 'About Us';
			}
			else if($vPage==2)
			{
				$vResult = 'Media';
			}
			else if($vPage==3)
			{
				$vResult = 'Minecraft!';
			}
			else if($vPage==4)
			{
				$vResult = 'The Show';
			}
			else
			{
				$vResult = $vDefault;
			}
		$vResult = $vResult.'</h2>';
        
        return $vResult;
    }
    
    function getContent($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'We are working to build this into a better place.</br>';
		$vDefault = $vDefault.'If you found this, then you must be at least (Awesome/2).</br>';
		$vDefault = $vDefault.'Stay tuned, right now it\'s all about laying foundation for the future.</br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'We are working to build this into a better place.</br>';
            $vResult = $vResult.'If you found this, then you must be at least (Awesome/2).</br>';
            $vResult = $vResult.'Stay tuned, right now it\'s all about laying foundation for the future.</br>';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'You can find us at all these different places:</br>';
				$vResult = $vResult.'<br/>';
				$vResult = $vResult.'<br/>';
					$vResult = $vResult.'#WeAreMovieClub:';
				$vResult = $vResult.'<br/>';
				$vResult = $vResult.'<br/>';
					$vResult = $vResult.'<a href=\'http://www.youtube.com/WeAreMovieClub\'>Youtube.com/WeAreMovieClub:  A place for movie discussion.</a></br>';
					$vResult = $vResult.'<a href=\'http://WeAreMovieClub.tumblr.com\'>WeAreMovieClub.tumblr.com: We have a tumblr!</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.twitter.com/WeAreMovieClub\'>@WeAreMovieClub on Twitter: Let us know about your movie thoughts.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.facebook.com/WeAreMovieClub\'>facebook.com/WeAreMovieClub: Talk about movie with us.</a></br>';
                $vResult = $vResult.'<br/>';
                $vResult = $vResult.'<br/>';
                    $vResult = $vResult.'HTKB Productions';
                $vResult = $vResult.'<br/>';
                $vResult = $vResult.'<br/>';
                    $vResult = $vResult.'<a href=\'http://www.youtube.com/GamingDivision528\'>Gaming Division:  A Youtube Channel for game stuff.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.youtube.com/JamOnToast528\'>Jam On Toast:  A Youtube Channel for media stuff.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.ustream.tv/channel/Kamurai\'>UStream:  Streams show up here too.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.firetalk.com/HTKB\'>FireTalk:  Streams show up here too.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.younow.com/HTKB\'>YouNow:  Streams show up here too.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.soundcloud.com/HTKB\'>Sound Cloud:  Listen to our podcasts.</a></br>';
                    $vResult = $vResult.'<a href=\'http://HTKB.podbean.com/\'>Pod Bean:  Listen to our podcasts.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.youtube.com/HTKB\'>Youtube:  Thoughts and life discussions.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.patreon.com/HTKBProductions\'>Patreon:  You can help make our dreams reality.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.facebook.com/HouseThatKamuraiBuilt\'>Facebook: Talk about movie with us.</a></br>';
                    $vResult = $vResult.'<a href=\'http://HouseThatKamuraiBuilt.tumblr.com\'>HouseThatKamuraiBuilt.tumblr.com: We have a tumblr!</a></br>';
                    $vResult = $vResult.'<a href=\'http://myspace.com/HouseThatKamuraiBuilt\'>Myspace: Wow, there\'s even a MySpace!</a></br>';
                $vResult = $vResult.'<br/>';
                    $vResult = $vResult.'Here are some of our member\'s pages:</br>';
                $vResult = $vResult.'<br/>';
                        $vResult = $vResult.'Kamurai:';
                $vResult = $vResult.'<br/>';
                $vResult = $vResult.'<br/>';
                    $vResult = $vResult.'<a href=\'http://twitter.com/#!/Kamurai25\'>Kamurai\'s Twitter.</a></br>';
                    $vResult = $vResult.'<a href=\'http://Instagram.com/Kamurai25\'>Kamurai\'s Instagram.</a></br>';
                    $vResult = $vResult.'<a href=\'./.\'>Kamurai\'s Snapchat: Kamurai</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.facebook.com/cris.kamurai\'>Kamurai\'s Facebook.</a></br>';
                    $vResult = $vResult.'<a href=\'https://www.gplus.com/Members/Cris-Kamurai\'>Kamurai\'s Google Plus.</a></br>';
                    $vResult = $vResult.'<a href=\'http://www.yoyogames.com/users/Kamurai\'>Kamurai\'s YoYo Games page:  See some of the games he\'s posted.</a></br>';
        }
        else if($vPage==3)
        {
			$vResult = $vResult.'If you would like to play Minecraft with us, we have several different servers:</br>';
				$vResult = $vResult.'Mo Creatures Server: (1.7.10) htkb.dyndns.org:25565</br>';
				$vResult = $vResult.'Creative Server:     (1.7.10) htkb.dyndns.org:25567</br>';
					$vResult = $vResult.'This is a list of mods that we are using on the server, compatible with 1.7.10.</br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/forge-1.7.10-10.13.3.1401-1710ls-installer.jar\'>Forge 1.7.10</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/DrZharks MoCreatures Mod v6.3.1.zip\'>Dr Zhark\'s Mo Creatures</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/CustomMobSpawner 3.3.0.zip\'>Custom Mob Spawner</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/[1.7.10]Gender-1.0.2.jar\'>iPixeli\'s Gender Mod</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/BspkrsCore-1.7.10.jar\'>Bspkrs Core</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/[1.7.10]Treecapitator-universal-2.0.4.jar\'>Tree Capitator</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/MoarFood-5.8.0.jar\'>Moar Food</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/MoarOres-2.4.5.jar\'>Moar Ores</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/BiblioCraft[v1.10.4][MC1.7.10].jar\'>Biblio Craft</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/Fossils_Archeology_Revival-1.7.10_Build-6.4b.jar\'>Fossils and Archaeology</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/Reis-Minimap-Mod-1.7.10.jar\'>Rei\'s Minimap</a></br>';
					$vResult = $vResult.'<a href=\'./Downloads/Minecraft/Xaeros_Minimap_1.10.8_Forge_1.7.10.jar\'>Xaero\'s Minimap</a></br>';
				$vResult = $vResult.'Vanilla Server:      htkb.dyndns.org:25566</br>';
				$vResult = $vResult.'Here is a skin template to make custom skins:</br>';
				$vResult = $vResult.'<a href=\'./Downloads/Minecraft/skin_template.png\'>Steve skin template</a></br>';
			$vResult = $vResult.'<br/>';
			$vResult = $vResult.'<br/>';
				$vResult = $vResult.'For first time setups, please follow these steps to make your client compatible with the server:</br>';
					 $vResult = $vResult.'0) If you don\'t have Minecraft, go to Minecraft.net and download the latest version of the launcher.</br>';
					 $vResult = $vResult.'1) From the launcher create a new profile and change its version to the relevant version (e.g. 1.7.10).</br>';
					 $vResult = $vResult.'2) Save the Profile, select the new profile and click play.</br>';
					 $vResult = $vResult.'3) Exit the program.</br>';
					 $vResult = $vResult.'4) Install Forge.  If it is not automatically selected, then browse to your .minecraft folder.</br>';
						$vResult = $vResult.'Windows: It is in a hidden folder: c:\Users\*Username*\Appdata\Roaming\.minecraft</br>';
						$vResult = $vResult.'Mac: \'Go to\' ~/Library/Application Support/minecraft</br>';
					 $vResult = $vResult.'5) If you are managing multiple non-compatible mods, then you man have to make folders like:</br>';
						$vResult = $vResult.'\'..\Roaming\MoCreatures\'</br>';
					 $vResult = $vResult.'6) If your folder doesn\'t have a /Mods folder, create one. Place the files from the mod list into the /mods folder.</br>';
						$vResult = $vResult.'Even if it works, don\'t put two minimap mods in the same folder.</br>';
					 $vResult = $vResult.'7) Open the Minecraft Launcher, edit your version (e.g. 1.7.10) profile to use the forge version of the same.</br>';
					 $vResult = $vResult.'8) If you are using a different folder, then remember to change the Game Directory in the profile.</br>';
					 $vResult = $vResult.'9) Save the Profile, select the new profile and click play.</br>';
					$vResult = $vResult.'10) You should see the mods listed on the side of the Minecraft window.</br>';
					$vResult = $vResult.'11) Go to multiplayer and click add server.</br>';
					$vResult = $vResult.'12) Name the server something distinct and put \'htkb.dyndns.org:2556x\' in the address bar where \'x\' is the relevant port.</br>';
					$vResult = $vResult.'13) Save the server entry.  You should see a connection to the server.  Double click to join.</br>';
        }
        else if($vPage==4)
        {
			$vResult = $vResult.'<video width="400" controls>';
				$vResult = $vResult.'<source src="./Show/Show.mp4" type="video/mp4">';
			$vResult = $vResult.'</video>';
		}
		else
        {
            $vResult = $vResult.$vDefault;
        }
        
        return $vResult;
    }
    
    function getVersions($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Index.html\'>HTML</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Index.shtml\'>Perl</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/SSI/Index.html\'>Apache SSI</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Javascript/Index.html\'>HTML Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/JQuery/Index.html\'>JQuery</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/AngularJS/Index.html\'>Angular JS</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Index.xhtml\'>JSF</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Index.jsp\'>JSP</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Index\'>JSP Spring MVC</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Index.aspx\'>ASP.NET Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASP/Index.asp\'>ASP VBscript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Index.cshtml\'>ASP.NET Web App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebForm/Index.aspx\'>ASP.NET Webform</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/MVC/Index\'>ASP.NET MVC App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:82/Index\'>Python Web.py</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:83/Index\'>Ruby on Rails</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:84/Index\'>Node JS</a><br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==1)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AboutUs.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AboutUs.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/AboutUs.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/AboutUs.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/AboutUs.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/AboutUs.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/AboutUs.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/AboutUs.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/AboutUs\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/AboutUs.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/AboutUs.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/AboutUs.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/AboutUs.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/AboutUs\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/AboutUs\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/AboutUs\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/AboutUs\'>Node JS</a><br>';
        }
        else if($vPage==2)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Media.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Media.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Media.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Media.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Media.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Media.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Media.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Media.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Media\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Media.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Media.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Media.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Media.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Media\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Media\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Media\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Media\'>Node JS</a><br>';
        }
        else if($vPage==3)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Minecraft.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Minecraft.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Minecraft.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Minecraft.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Minecraft.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Minecraft.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Minecraft.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Minecraft.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Minecraft\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Minecraft.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Minecraft.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Minecraft.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Minecraft.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Minecraft\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Minecraft\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Minecraft\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Minecraft\'>Node JS</a><br>';
        }
        else if($vPage==4)
        {
			$vResult = $vResult.'Welcome to the Show!';
		}
		else
        {
            $vResult = $vResult.$vDefault;
        }
        
        return $vResult;
    }


?>