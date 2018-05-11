<?php
    function getTitle($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'Antarrea Projects';
        
        $vResult = $vResult.'<title>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
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
        
		$vDefault = $vDefault.'Antarrea Projects';
        
        $vResult = $vResult.'<h2>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
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
		$vDefault = $vDefault.'Global:';
		$vDefault = $vDefault.'<br/>';
		$vDefault = $vDefault.'<br/>';
		$vDefault = $vDefault.'<br/>';
		$vDefault = $vDefault.'Here are projects based in the Antarrea universe:</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>';
		$vDefault = $vDefault.'Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>';
		$vDefault = $vDefault.'Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>';
		$vDefault = $vDefault.'Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>';
		$vDefault = $vDefault.'Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>';
		$vDefault = $vDefault.'Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Grendol:';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Here are projects based in the Grendol universe:</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>';
		$vDefault = $vDefault.'Grendol: Coliseum: Arena:                         CCG.</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Utopia:';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Here are projects based in the Utopia universe:</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Avia: Elemental Angels: Adventure game with RPG elements.</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Elvia:';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Here are projects based in the Elvia universe:</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Nine Card: Tactical card game.</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'</br>';
		
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
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
		
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Index.html\'>HTML</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Index.shtml\'>Perl</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Index.html\'>Apache SSI</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Index.html\'>HTML Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Index.html\'>JQuery</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/AngularJS/Division2/Section5/Index.html\'>Angular JS</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Index.xhtml\'>JSF</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Index.jsp\'>JSP</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Index.jsp\'>JSP Spring MVC</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Index.aspx\'>ASP.NET Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Index.asp\'>ASP VBscript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Index.cshtml\'>ASP.NET Web App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Index.aspx\'>ASP.NET Webform</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Index\'>ASP.NET MVC App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Index\'>Python Web.py</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Index\'>Ruby on Rails</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Index\'>Node JS</a><br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else
        {
            $vResult = $vDefault;
        }
        
        return $vResult;
    }


?>