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
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section1/index.php\'>Gynowars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project2.php\'>Assault</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project3.php\'>Mars</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section4/index.php\'>Renley</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/index.php\'>Antarrea</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section1/index.php\'>Global:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section2/index.php\'>Grendol:</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section3/index.php\'>Utopia:</a></br></br>
					<a class=\'navlinkC\' href=\''.Path($Level).'Section2/Section5/Section3/Project1.php\'>Avia:Elemental Angels</a></br></br>
				<a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section5/Section4/index.php\'>Elvia:</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section6/index.php\'>Editations</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project7.php\'>Truth</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project8.php\'>Kingdoms</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project9.php\'>Terminal World</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project10.php\'>Monster Office Workplace</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project11.php\'>Battle Princesses</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project12.php\'>Sacred Offerings</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project13.php\'>The Way</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project14.php\'>Conspiratorium</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project15.php\'>Conversion</a></br></br>
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
            <a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/index.asp\'>ASP Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Section5/Section3/index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section3/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Section3/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Section3/Project1.asp\'>ASP Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Section3/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/Division2/Section5/Section3/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Section3/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Section3/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Section3/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Section3/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Division2/Section5/Section3/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Section3/Project1.html\'>Apache SSI</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>