<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Web Programming';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'PHP Programming';
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
        $Default = 'Web Programming';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'PHP Programming';
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
        $Default = 'This section is dedicated to web-based programming.';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                This section is dedicated to PHP based programming.
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
            <a href=\'http://htkb.dyndns.org/Division1/Index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division1/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division1/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division1/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division1/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division1/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division1/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division1/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division1/Index\'>Node JS</a><br>
        ';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else
        {
            $vResult = $vResult.$Default;
        }
        
        return $vResult;
    }


?>