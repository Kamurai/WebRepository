<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Utopia';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Elemental Angels';
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
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section3/Index.php\'>Utopia:</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section3/Project1.php\'>Avia:Elemental Angels</a></br></br>
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
        $Default = 'Utopia';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Elemental Angels';
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
			Here are projects based in the Utopia Nation:</br>
			</br>
			Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>
		';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>
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
            <a href=\'http://htkb.dyndns.org/Section2/Section5/Section3/Index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/Index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Index.html\'>JQuery</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:84/Section2/Section5/Section3/Index\'>Node JS</a><br>
            <a href=\'http://htkb.dyndns.org/Section2/Section5/Section3/Index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Index.html\'>Apache SSI</a><br>
            <a href=\'http://htkb.dyndns.org:82/Section2/Section5/Section3/Index\'>Python Web.py</a><br>
            <a href=\'http://htkb.dyndns.org:83/Section2/Section5/Section3/Index\'>Ruby on Rails</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section3/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Project1.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section2/Section5/Section3/Project1\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Section5/Section3/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Project1.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section2/Section5/Section3/Project1\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section2/Section5/Section3/Project1\'>Ruby on Rails</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>