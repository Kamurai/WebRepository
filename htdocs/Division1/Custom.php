<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Web Programming';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'PHP Programming';
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
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Index.html\'>Basic HTML</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Index.php\'>PHP</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section2/Index.php\'>Javascript</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Index.shtml\'>Perl</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section4/Index.php\'>Java</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section5/Index.php\'>ASP.Net</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section6/Index.php\'>Databases</a></br></br>
            <a class=\'navlinkA\' href=\'http://htkb.dyndns.org/SSI/Section1/Index.html\'>Apache SSI</a></br></br>
            <a class=\'navlinkA\' href=\'http://htkb.dyndns.org:82/Section1/Index\'>Python Web.py</a></br></br>
            <a class=\'navlinkA\' href=\'http://htkb.dyndns.org:83/Section1/Index\'>Ruby on Rails</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Web Programming';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'PHP Programming';
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
        $Default = 'This section is dedicated to web-based programming.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                This section is dedicated to PHP based programming.
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
            <a href=\'http://htkb.dyndns.org/Section1/Index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section1/Index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/JQuery/Section1/Index.html\'>JQuery</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:84/Section1/Index\'>Node JS</a><br>
            <a href=\'http://htkb.dyndns.org/Section1/Index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section1/Index.html\'>Apache SSI</a><br>
            <a href=\'http://htkb.dyndns.org:82/Section1/Index\'>Python Web.py</a><br>
            <a href=\'http://htkb.dyndns.org:83/Section1/Index\'>Ruby on Rails</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section1/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section1/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section1/Project1.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section1/Project1\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section1/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section1/Project1.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section1/Project1\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section1/Project1\'>Ruby on Rails</a><br>

            ';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }


?>