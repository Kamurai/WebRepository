<?php
    function getTitle($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'Utopia';
        
        $vResult = $vResult.'<title>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==1)
			{
				$vResult = $vResult.'Elemental Angels';
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
        
		$vDefault = $vDefault.'Utopia';
        
        $vResult = $vResult.'<h2>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==1)
			{
				$vResult = $vResult.'Elemental Angels';
			}
			else
			{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult.'</h2>';
		
        return $vResult;
    }
    
    function getContent($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'Here are projects based in the Utopia Nation:</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>';
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
		
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Index.html\'>HTML</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Index.shtml\'>Perl</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Index.html\'>Apache SSI</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Index.html\'>HTML Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Index.html\'>JQuery</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Section5/Section3/Index.html\'>Angular JS</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Index.xhtml\'>JSF</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Index.jsp\'>JSP</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section3/Index.jsp\'>JSP Spring MVC</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Index.aspx\'>ASP.NET Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Index.asp\'>ASP VBscript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Index.cshtml\'>ASP.NET Web App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Index.aspx\'>ASP.NET Webform</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section3/Index\'>ASP.NET MVC App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section3/Index\'>Python Web.py</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section3/Index\'>Ruby on Rails</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section3/Index\'>Node JS</a><br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==1)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Project1.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Project1.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Project1.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Project1.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Project1.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Section5/Section3/Project1.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Project1.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Project1.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section3/Project1.jsp\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Project1.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Project1.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Project1.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Project1.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section3/Project1\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section3/Project1\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section3/Project1\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section3/Project1\'>Node JS</a><br>';
        }
        else
        {
            $vResult = $vDefault;
        }
        
        return $vResult;
    }


?>