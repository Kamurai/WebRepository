<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Downloadable Projects';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Online Experience Downloads';
        }
        else if($Page==2)
        {
            $Result = $Result.'Game Maker Downloads';
        }
        else if($Page==3)
        {
            $Result = $Result.'Java Downloads';
        }
        else if($Page==4)
        {
            $Result = $Result.'C# Downloads';
        }
        else if($Page==5)
        {
            $Result = $Result.'C++ Downloads';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        $Result = $Result.'</title>';
        
        return $Result;
    }

    function Navigation($Level)
    {
        $Result = '
            <a class=\'navlinkA\' href=\''.Path($Level).'Section3/Project1.php\'>Online Experience Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section3/Project2.php\'>Game Maker Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section3/Project3.php\'>Java Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section3/Project4.php\'>C# Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section3/Project5.php\'>C++ Downloads</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Downloadable Projects';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Online Experience Downloads';
        }
        else if($Page==2)
        {
            $Result = $Result.'Game Maker Downloads';
        }
        else if($Page==3)
        {
            $Result = $Result.'Java Downloads';
        }
        else if($Page==4)
        {
            $Result = $Result.'C# Downloads';
        }
        else if($Page==5)
        {
            $Result = $Result.'C++ Downloads';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }
    
    function Content($Page)
    {
        $Result = '';
        $Default = 'This section is dedicated to downloadable projects.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Here are downloads to play Cube World with us:</br>
                </br>
                Cube World:<t><a href=\'./downloads/CubeSetup3.exe\'>Come play Cube World!</a></br>
                </br>
                DirectX:<t><a href=\'./downloads/directx_Jun2010_redist.exe\'>Direct X Redistrutable</a></br>
                DirectX \'Web\':<t><a href=\'./downloads/dxwebsetup.exe\'>Direct X Redistrutable</a></br>
                </br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
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
        else if($Page==3)
        {
            $Result = $Result.'
                Here are Java Programs to download:</br>
                </br>
                Blood Bowl Manager:<t><a href=\'../downloads/pichaku.zip\'>This is currently not available.</a></br>
            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                Here are C# Programs to download:</br>
                </br>
                Chess Program:<t><a href=\'../downloads/pichaku.zip\'>This is currently not available.</a></br>
            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
                Here are C++ Programs to download:</br>
                </br>
                HTKB Bar Code System:<t><a href=\'../downloads/pichaku.zip\'>This is currently not available.</a></br>
            ';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }
    
    function Versions($Page)
    {
        $Result = '';
        $Default = '
            <a href=\'http://htkb.dyndns.org/Section3/Index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section3/Index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/JQuery/Section3/Index.html\'>JQuery</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:84/Section3/Index\'>Node JS</a><br>
            <a href=\'http://htkb.dyndns.org/Section3/Index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section3/Index.html\'>Apache SSI</a><br>
            <a href=\'http://htkb.dyndns.org:82/Section3/Index\'>Python Web.py</a><br>
            <a href=\'http://htkb.dyndns.org:83/Section3/Index\'>Ruby on Rails</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section3/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section3/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section3/Project1.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section3/Project1\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section3/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section3/Project1.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section3/Project1\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section3/Project1\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section3/Project2.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section3/Project2.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section3/Project2.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Project2.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Project2.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section3/Project2\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section3/Project2.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Project2.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Project2.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Project2.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Project2.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Project2\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section3/Project2.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section3/Project2\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section3/Project2\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section3/Project3.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section3/Project3.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section3/Project3.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Project3.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Project3.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section3/Project3\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section3/Project3.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Project3.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Project3.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Project3.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Project3.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Project3\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section3/Project3.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section3/Project3\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section3/Project3\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section3/Project4.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section3/Project4.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section3/Project4.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Project4.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Project4.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section3/Project4\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section3/Project4.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Project4.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Project4.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Project4.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Project4.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Project4\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section3/Project4.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section3/Project4\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section3/Project4\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section3/Project5.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section3/Project5.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section3/Project5.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section3/Project5.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section3/Project5.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section3/Project5\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section3/Project5.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section3/Project5.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section3/Project5.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section3/Project5.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section3/Project5.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section3/Project5\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section3/Project5.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section3/Project5\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section3/Project5\'>Ruby on Rails</a><br>

            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>