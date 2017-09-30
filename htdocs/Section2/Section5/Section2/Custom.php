<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Grendol';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Land of the Orcish Empire: Age of Magic';
        }
        else if($Page==2)
        {
            $Result = $Result.'Coliseum: Arena';
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
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section1/Index.php\'>Gynowars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project2.php\'>Assault</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project3.php\'>Mars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section4/Index.php\'>Renley</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/Index.php\'>Antarrea</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section1/Index.php\'>Global:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section2/Index.php\'>Grendol:</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section2/Project1.php\'>Land of the Orcish Empire: Age of Magic</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section2/Project2.php\'>Coliseum: Arena</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section3/Index.php\'>Utopia:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section4/Index.php\'>Elvia:</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project6.php\'>Truth</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project7.php\'>Kingdoms</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project8.php\'>Terminal World</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project9.php\'>Monster Office Workplace</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project10.php\'>Battle Princesses</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project11.php\'>Sacred Offerings</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project12.php\'>The Way</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project13.php\'>Conspiratorium</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project14.php\'>Conversion</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Grendol';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Land of the Orcish Empire: Age of Magic';
        }
        else if($Page==2)
        {
            $Result = $Result.'Coliseum: Arena';
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
        $Default = '
			Here are projects based in the Grendol Empire:</br>
			</br>
			Land of the Orcish Empire: Age of Magic: a CCG based on the different factions that 
			comprise the Grendol Empire.</br>
			Coliseum: Arena: a CCG representing the gladitorial arenas of Grendol.</br>
		';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Land of the Orcish Empire: Age of Magic: is a CCG based on the different factions that 
				comprise the Grendol Empire.
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                Coliseum: Arena is a CCG representing the gladitorial arenas of Grendol.
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
            <a href=\'http://htkb.dyndns.org/Section2/Section5/Section2/Index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Index.html\'>JQuery</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:84/Section2/Section5/Section2/Index\'>Node JS</a><br>
            <a href=\'http://htkb.dyndns.org/Section2/Section5/Section2/Index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Index.html\'>Apache SSI</a><br>
            <a href=\'http://htkb.dyndns.org:82/Section2/Section5/Section2/Index\'>Python Web.py</a><br>
            <a href=\'http://htkb.dyndns.org:83/Section2/Section5/Section2/Index\'>Ruby on Rails</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section2/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project1.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section2/Section5/Section2/Project1\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section2/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project1.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section2/Section5/Section2/Project1\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section2/Section5/Section2/Project1\'>Ruby on Rails</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section2/Project2.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section2/Project2.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section5/Section2/Project2.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section2/Project2.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section2/Project2.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section2/Section5/Section2/Project2\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section2/Project2.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section2/Project2.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section2/Project2.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section2/Project2.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section2/Project2.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section2/Project2\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section2/Project2.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section2/Section5/Section2/Project2\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section2/Section5/Section2/Project2\'>Ruby on Rails</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>