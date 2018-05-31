<?php
    function getTitle($vPage)
    {
        $vResult = '';
        $vDefault = '';
		
		$vDefault = $vDefault.'Web Programming';
        
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
        
		$vDefault = $vDefault.'Web Programming';
        
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
		
		$vDefault = $vDefault.'This section is dedicated to web-based programming.';
        
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
		
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division1/Index.html\'>HTML</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Division1/Index.shtml\'>Perl</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/SSI/Division1/Index.html\'>Apache SSI</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/Javascript/Division1/Index.html\'>HTML Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/JQuery/Division1/Index.html\'>JQuery</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org/AngularJS/Division1/Index.html\'>Angular JS</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml\'>JSF</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp\'>JSP</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Index\'>JSP Spring MVC</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Index.aspx\'>ASP.NET Javascript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Index.asp\'>ASP VBscript</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml\'>ASP.NET Web App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx\'>ASP.NET Webform</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:81/MVC/Division1/Index\'>ASP.NET MVC App</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:82/Division1/Index\'>Python Web.py</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:83/Division1/Index\'>Ruby on Rails</a><br>';
		$vDefault = $vDefault.'<a href=\'http://htkb.dyndns.org:84/Division1/Index\'>Node JS</a><br>';
        
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


?>