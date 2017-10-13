<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Gynowars';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Gynowars RPG';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Gynowars: Battle Arena CCG';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'Gynowars: Crash Ball';
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
        $Default = 'Downloadable Projects';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Gynowars RPG';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Gynowars: Battle Arena CCG';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'Gynowars: Crash Ball';
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
        $Default = 'This section is dedicated to projects centered in the Gynowars universe.';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                The Gynowars RPG is a pokemon-like tactical RPG.  
				The protagonist uses creatures to fight battles against other creatures to progress through the storyline.
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                Gynowars: Battle Arena is a CCG that pits teams of creatures against each other 
						in an arena-like environment.  There are several scenarios to run, to include:
						</br>
						Death Match, Ring the Bell, and Head Hunt.
            ';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'
                Gynowars: Crash Ball is a turn based strategy board game.  Basically it\'s gridiron with Gynos..
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
            <a href=\'http://htkb.dyndns.org/Division2/Section1/Index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division2/Section1/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division2/Section1/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section1/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section1/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division2/Section1/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section1/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section1/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section1/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section1/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division2/Section1/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division2/Section1/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division2/Section1/Index\'>Node JS</a><br>
        ';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section1/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section1/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section1/Project1.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section1/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section1/Project1.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section1/Project1.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section1/Project1.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section1/Project1.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section1/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section1/Project1\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section1/Project1\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section1/Project1\'>Node JS</a><br>
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section1/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section1/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section1/Project2.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section1/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section1/Project2.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section1/Project2.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section1/Project2.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section1/Project2.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section1/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section1/Project2\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section1/Project2\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section1/Project2\'>Node JS</a><br>
            ';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section1/Project3.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section1/Project3.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section1/Project3.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section1/Project3.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section1/Project3.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section1/Project3.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section1/Project3.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section1/Project3.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section1/Project3.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section1/Project3.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section1/Project3.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section1/Project3.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section1/Project3.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section1/Project3\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section1/Project3\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section1/Project3\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section1/Project3\'>Node JS</a><br>
            ';
        }
        else
        {
            $vResult = $Default;
        }
        
        return $vResult;
    }


?>