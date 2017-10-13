<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Antarrea Projects';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
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
        $Default = 'Antarrea Projects';
        
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
    
    function getContent($vPage)
    {
        $vResult = '';
        $Default = '
			Global:
			<br/>
			<br/>
			<br/>
				Here are projects based in the Antarrea universe:</br>
			</br>
				Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>
				Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>
				Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>
				Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>
				Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>
				Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>
			</br>
			</br>
					Grendol:
			</br>
			</br>
				Here are projects based in the Grendol universe:</br>
				</br>
				Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>
				Grendol: Coliseum: Arena:                         CCG.</br>
			</br>
			</br>
					Utopia:
			</br>
			</br>
				Here are projects based in the Utopia universe:</br>
			</br>
				Avia: Elemental Angels: Adventure game with RPG elements.</br>
			</br>
			</br>
					Elvia:
			</br>
			</br>
				Here are projects based in the Elvia universe:</br>
			</br>
				Nine Card: Tactical card game.</br>
			</br>
			</br>
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
    
    function getVersions($vPage)
    {
        $vResult = '';
        $Default = '
            <a href=\'http://htkb.dyndns.org/Division2/Section5/Index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division2/Section5/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division2/Section5/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division2/Section5/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division2/Section5/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division2/Section5/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division2/Section5/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division2/Section5/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division2/Section5/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division2/Section5/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division2/Section5/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division2/Section5/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division2/Section5/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division2/Section5/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division2/Section5/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division2/Section5/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division2/Section5/Index\'>Node JS</a><br>
        ';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else
        {
            $vResult = $Default;
        }
        
        return $vResult;
    }


?>