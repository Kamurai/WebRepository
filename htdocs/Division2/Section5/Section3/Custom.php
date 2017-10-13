<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Utopia';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Elemental Angels';
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
        $Default = 'Utopia';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Elemental Angels';
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
			Here are projects based in the Utopia Nation:</br>
			</br>
			Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>
		';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>
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
            <a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section3/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section3/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section3/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section3/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section3/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section3/Index\'>Node JS</a><br>
        ';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Project1.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Section3/Project1.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Section3/Project1.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Section3/Project1.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Project1.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Section3/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Section3/Project1\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Section3/Project1\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Section3/Project1\'>Node JS</a><br>
            ';
        }
        else
        {
            $vResult = $Default;
        }
        
        return $vResult;
    }


?>