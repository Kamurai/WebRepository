<?php
    function getTitle($vPage){
        $vResult = "";
        $vDefault = "";
		
		$vDefault = $vDefault."Antarrea";
        
        $vResult = $vResult."<title>";
			if($vPage==0){
				$vResult = $vResult.$vDefault;
			}else if($vPage==1){
				$vResult = $vResult."Revolutions: Invading Nations";
			}else if($vPage==2){
				$vResult = $vResult."Revolutions: Rebellion Against the Fist";
			}else if($vPage==3){
				$vResult = $vResult."Revolutions: Return to Arms";
			}else if($vPage==4){
				$vResult = $vResult."Revolutions: Post Wars";
			}else if($vPage==5){
				$vResult = $vResult."Avia: Elemental Angel";
			}else{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult."</title>";
        
        return $vResult;
    }

    function getContentHeader($vPage){
        $vResult = "";
        $vDefault = "";
        
		$vDefault = $vDefault."Antarrea";
        
        $vResult = $vResult."<h2>";
			if($vPage==0){
				$vResult = $vResult.$vDefault;
			}else if($vPage==1){
				$vResult = $vResult."Revolutions: Invading Nations";
			}else if($vPage==2){
				$vResult = $vResult."Revolutions: Rebellion Against the Fist";
			}else if($vPage==3){
				$vResult = $vResult."Revolutions: Return to Arms";
			}else if($vPage==4){
				$vResult = $vResult."Revolutions: Post Wars";
			}else if($vPage==5){
				$vResult = $vResult."Avia: Elemental Angel";
			}else{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult."</h2>";
		
        return $vResult;
    }
    
    function getContent($vPage){
        $vResult = "";
        $vDefault = "";
		
		$vDefault = $vDefault."
			Revolutions:  Invading Nations:           	Tactical RPG, 1st story arc.</br>
			Revolutions:  Rebellion Against the Fist 	Tactical RPG, 2nd story arc.</br>
			Revolutions:  Return to Arms:            	Tactical RPG, 3rd story arc.</br>
			Revoultions:  Post Wars:                  	Tactical RPG, 4th story arc.</br>
			Avia:  Elemental Angel                       Avia: Elemental Angels: Adventure game with RPG elements.
		";
		
        if($vPage==0){
            $vResult = $vResult.$vDefault;
        }else if($vPage==1){
            $vResult = $vResult."
				Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.
			";
        }else if($vPage==2){
            $vResult = $vResult."
				Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.
			";
        }else if($vPage==3){
            $vResult = $vResult."
				Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.
			";
        }else if($vPage==4){
            $vResult = $vResult."
				Revolutions is a Tactical RPG with Post Wars as its 4th story arc.
			";
        }else if($vPage==5){
			$vResult = $vResult."
				Elemental Angels: An adventure game with RPG elements based in the Avia Nation.
			";
        }else{
            $vResult = $vResult.$vDefault;
        }
        
        return $vResult;
    }
    
    function getVersions($vPage){
        $vResult = "";
        $vDefault = "";
		
		$vDefault = $vDefault."
			<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Index.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Index.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Index.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Index.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Index.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Index.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Index.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Index.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Index.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Index.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Index.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Index\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Index.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Index.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Index.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Index.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Index\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Index\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Index\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Index\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Index\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Index\">ReactJS</a></li>
		";
		
		$vResult = $vResult."<ul class=\"versionsUl\">";
		
        if($vPage==0){
            $vResult = $vResult.$vDefault;
        }else if($vPage==1){
			$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project1\">ReactJS</a></li>
			";
		}else if($vPage==2){
        	$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project2\">ReactJS</a></li>
			";
		}else if($vPage==3){
        	$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project3\">ReactJS</a></li>
			";
		}else if($vPage==4){
        	$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project4\">ReactJS</a></li>
			";
		}else if($vPage==5){
        	$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division3/Section1/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division3/Section1/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division3/Section1/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division3/Section1/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division3/Section1/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division3/Section1/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division3/Section1/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division3/Section1/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division3/Section1/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division3/Section1/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division3/Section1/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division3/Section1/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division3/Section1/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division3/Section1/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division3/Section1/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division3/Section1/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division3/Section1/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division3/Section1/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division3/Section1/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division3/Section1/Project5\">ReactJS</a></li>
			";
		}else{
            $vResult = $vDefault;
        }
        
        $vResult = $vResult."</ul>";
        
        return $vResult;
    }


?>