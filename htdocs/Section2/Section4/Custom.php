<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Renley';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Warring Nations';
        }
        else if($Page==2)
        {
            $Result = $Result.'Psychodom: The One Empire';
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
                <a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section4/Project1.php\'>Warring Nations</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Section2/Section4/Project2.php\'>Psychodom: The One Empire</a></br></br>
			<a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/Index.php\'>Antarrea</a></br></br>
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
        $Default = 'Renley';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Warring Nations';
        }
        else if($Page==2)
        {
            $Result = $Result.'Psychodom: The One Empire';
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
        $Default = 'This section is dedicated to projects centered in the Renley universe.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                Warring Nations is a Tactical RPG involving squad based battles.  
						Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.  
				The protagonist is tasked with investigating various situations leading 
				to a conspiracy about who is really ruling the continent.
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
            <a href=\'http://htkb.dyndns.org/Section2/Section4/Index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/Index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section4/Index.html\'>JQuery</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/Index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:84/Section2/Section4/Index\'>Node JS</a><br>
            <a href=\'http://htkb.dyndns.org/Section2/Section4/Index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/Index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/Index.html\'>Apache SSI</a><br>
            <a href=\'http://htkb.dyndns.org:82/Section2/Section4/Index\'>Python Web.py</a><br>
            <a href=\'http://htkb.dyndns.org:83/Section2/Section4/Index\'>Ruby on Rails</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section4/Project1.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section2/Section4/Project1\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/Project1.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section2/Section4/Project1\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section2/Section4/Project1\'>Ruby on Rails</a><br>
            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project2.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/Project2.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section4/Project2.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/Project2.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project2.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section2/Section4/Project2\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project2.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project2.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project2.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project2.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project2.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project2\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/Project2.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section2/Section4/Project2\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section2/Section4/Project2\'>Ruby on Rails</a><br>
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project3.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Section4/Project3.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section2/Section4/Project3.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Section4/Project3.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Section4/Project3.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section2/Section4/Project3\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Section4/Project3.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Section4/Project3.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Section4/Project3.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Section4/Project3.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Section4/Project3.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Section4/Project3\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Section4/Project3.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section2/Section4/Project3\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section2/Section4/Project3\'>Ruby on Rails</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>