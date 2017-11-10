<?php
    function getTitle($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'Grendol';
        
        $vResult = $vResult.'<title>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==1)
			{
				$vResult = $vResult.'Land of the Orcish Empire: Age of Magic';
			}
			else if($vPage==2)
			{
				$vResult = $vResult.'Coliseum: Arena';
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
        
		$vDefault = $vDefault.'Grendol';
        
        $vResult = $vResult.'<h2>';
			if($vPage==0)
			{
				$vResult = $vResult.$vDefault;
			}
			else if($vPage==1)
			{
				$vResult = $vResult.'Land of the Orcish Empire: Age of Magic';
			}
			else if($vPage==2)
			{
				$vResult = $vResult.'Coliseum: Arena';
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
		
		$vDefault = $vDefault.'Here are projects based in the Grendol Empire:</br>';
		$vDefault = $vDefault.'</br>';
		$vDefault = $vDefault.'Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that ';
		$vDefault = $vDefault.'comprise the Grendol Empire.</br>';
		$vDefault = $vDefault.'Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==1)
        {
			$vResult = $vResult.'Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that ';
			$vResult = $vResult.'comprise the Grendol Empire.';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.';
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
		
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section2/Index.html\'>HTML</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section2/Index.shtml\'>Perl</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Index.html\'>Apache SSI</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section2/Index.html\'>HTML Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Index.html\'>JQuery</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section2/Index.html\'>Angular JS</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Index.xhtml\'>JSF</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Index.jsp\'>JSP</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section2/Index.jsp\'>JSP Spring MVC</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Index.aspx\'>ASP.NET Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Index.asp\'>ASP VBscript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Index.cshtml\'>ASP.NET Web App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Index.aspx\'>ASP.NET Webform</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section2/Index\'>ASP.NET MVC App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section2/Index\'>Python Web.py</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section2/Index\'>Ruby on Rails</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section2/Index\'>Node JS</a><br>';
        
        if($vPage==0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vPage==1)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section2/Project1.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section2/Project1.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Project1.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section2/Project1.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Project1.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section2/Project1.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Project1.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Project1.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section2/Project1.jsp\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Project1.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Project1.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Project1.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Project1.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section2/Project1\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section2/Project1\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section2/Project1\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section2/Project1\'>Node JS</a><br>';
        }
        else if($vPage==2)
        {
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section2/Project2.html\'>HTML</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Division2/Section5/Section2/Project2.shtml\'>Perl</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section2/Project2.html\'>Apache SSI</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section2/Project2.html\'>HTML Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section2/Project2.html\'>JQuery</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section2/Project2.html\'>Angular JS</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section2/Project2.xhtml\'>JSF</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section2/Project2.jsp\'>JSP</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section2/Project2.jsp\'>JSP Spring MVC</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section2/Project2.aspx\'>ASP.NET Javascript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section2/Project2.asp\'>ASP VBscript</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section2/Project2.cshtml\'>ASP.NET Web App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section2/Project2.aspx\'>ASP.NET Webform</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section2/Project2\'>ASP.NET MVC App</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section2/Project2\'>Python Web.py</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section2/Project2\'>Ruby on Rails</a><br>';
			$vResult = $vResult.'<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section2/Project2\'>Node JS</a><br>';
        }
        else
        {
            $vResult = $vDefault;
        }
        
        return $vResult;
    }


?>