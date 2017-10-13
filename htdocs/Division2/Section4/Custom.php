<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Renley';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Warring Nations';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Psychodom: The One Empire';
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
        $Default = 'Renley';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Warring Nations';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Psychodom: The One Empire';
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
        $Default = 'This section is dedicated to projects centered in the Renley universe.';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                Warring Nations is a Tactical RPG involving squad based battles.  
						Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.  
				The protagonist is tasked with investigating various situations leading 
				to a conspiracy about who is really ruling the continent.
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
            <a href=\'http://htkb.dyndns.org/Division2/Section4/Project1.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division2/Section4/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division2/Section4/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section4/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section4/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division2/Section4/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section4/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section4/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section4/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section4/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division2/Section4/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division2/Section4/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division2/Section4/Index\'>Node JS</a><br>
        ';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section4/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section4/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section4/Project1.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section4/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section4/Project1.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section4/Project1.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section4/Project1.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section4/Project1.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section4/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section4/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section4/Project1\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section4/Project1\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section4/Project1\'>Node JS</a><br>
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section4/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section4/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section4/Project2.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section4/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section4/Project2.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section4/Project2.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section4/Project2.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section4/Project2.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section4/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section4/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section4/Project2\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section4/Project2\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section4/Project2\'>Node JS</a><br>
            ';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section4/Project3.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section4/Project3.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section4/Project3.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section4/Project3.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section4/Project3.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section4/Project3.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Project3.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Project3.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section4/Project3.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Project3.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section4/Project3.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Project3.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section4/Project3.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section4/Project3\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section4/Project3\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section4/Project3\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section4/Project3\'>Node JS</a><br>
            ';
        }
        else
        {
            $vResult = $Default;
        }
        
        return $vResult;
    }


?>