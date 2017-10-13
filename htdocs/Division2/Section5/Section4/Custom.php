<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Elvia';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Nine Card';
        }
        else
        {
            $vResult = $vResult.$Default;
        }
        
        $vResult = $vResult.'</title>';
        
        return $vResult;
    }

    function getContentHeader($vPage)
    {
        $vResult = '';
        $Default = 'Elvia';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Nine Card';
        }
        else
        {
            $vResult = $vResult.$Default;
        }
        
        return $vResult;
    }
    
    function getContent($vPage)
    {
        $vResult = '';
        $Default = '
			Here are projects based in the Elvia Empire:</br>
			</br>
			Nine Card: a Tactical card game played through the Elvia Empire.</br>
		';				
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                Nine Card is a Tactical card game played through the Elvia Empire.</br>
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                Here are Game Maker Projects to play:</br>
                </br>
                Gamebox Client: v6.0:<t><a href=\'./downloads/GameBox_Client_Installer_v6p0.exe\'>Play games from...well, anywhere.</a></br>
                Gamebox Server: v6.0:<t><a href=\'./downloads/GameBox_Server_Installer_v6p0.exe\'>Host GameBox.</a></br>
                39dll.dll: v2.5:<t><a href=\'./downloads/39dll.dll\'>You may need this in your \'user/AppData/Local/GameBox_Client\' folder.</a></br>
                A Chess Server:<t><a href=\'./downloads/Chess_Server.exe\'>Host a Chess game.</a></br>
                A Chess Client:<t><a href=\'./downloads/Chess_Client.exe\'>A game of Chess from anywhere.</a></br>
                I Dunno:<t><a href=\'./downloads/Idunno.exe\'>I dunno, it\'s a fun puzzle game though.</a></br>
                Purification:<t><a href=\'./downloads/Zombies.exe\'>Kill zombies...lots of zombies.</a></br>
                Trail of the Undead: The Way Home:<t><a href=\'./downloads/TrailoftheUndead.exe\'>An adventure of zombie killing goodness.</a></br>
                Discovery (buggy Alpha):<t><a href=\'./downloads/Discovery.exe\'>Play a game of discovery and survival.</a></br>
                Twisted Tactics: Version 0.1 (buggy Alpha):<t><a href=\'./downloads/Tactical.exe\'>Scrapped two player tactical system.</a></br>
                Skitzo Burrito (Alpha): <t><a href=\'./downloads/Emotive-Default-1.0.0.3.exe\'>An emotional platform survival game.</a></br>
            ';
        }
        else
        {
            $vResult = $vResult.$Default;
        }
        
        return $vResult;
    }
    
    function getVersions($vPage)
    {
        $vResult = '';
        $Default = '
            <a href=\'http://htkb.dyndns.org/Division2/Section5/Section4/Index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division2/Section5/Section4/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section4/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section4/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section4/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section4/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section4/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section4/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section4/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section4/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section4/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section4/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section4/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section4/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section4/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section4/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section4/Index\'>Node JS</a><br>
        ';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section5/Section4/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section5/Section4/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section4/Project1.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section4/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section4/Project1.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section4/Project1.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section4/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section4/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section4/Project1.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section4/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section4/Project1.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section4/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section4/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section4/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section4/Project1\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section4/Project1\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section4/Project1\'>Node JS</a><br>
            ';
        }
        else
        {
            $vResult = $Default;
        }
        
        return $vResult;
    }


?>