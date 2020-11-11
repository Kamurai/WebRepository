<?php
    function getTitle($vPage){
        $vResult = "";
        $vDefault = "";
		
		$vDefault = $vDefault."Database Programming";
        
        $vResult = $vResult."<title>";
			if($vPage==0){
				$vResult = $vResult.$vDefault;
			}else if($vPage==1){
				$vResult = $vResult."Oracle Programming";
			}else if($vPage==2){
				$vResult = $vResult."Derby Programming";
			}else if($vPage==3){
				$vResult = $vResult."MySQL Programming";
			}else if($vPage==4){
				$vResult = $vResult."SQL Server Programming";
			}else if($vPage==5){
				$vResult = $vResult."PostgreSQL Programming";
			}else{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult."</title>";
        
        return $vResult;
    }

    function getContentHeader($vPage){
        $vResult = "";
        $vDefault = "";
        
		$vDefault = $vDefault."Database Programming";
        
        $vResult = $vResult."<h2>";
			if($vPage==0){
				$vResult = $vResult.$vDefault;
			}else if($vPage==1){
				$vResult = $vResult."Oracle Programming";
			}else if($vPage==2){
				$vResult = $vResult."Derby Programming";
			}else if($vPage==3){
				$vResult = $vResult."MySQL Programming";
			}else if($vPage==4){
				$vResult = $vResult."SQL Server Programming";
			}else if($vPage==5){
				$vResult = $vResult."PostgreSQL Programming";
			}else{
				$vResult = $vResult.$vDefault;
			}
        $vResult = $vResult."</h2>";
		
        return $vResult;
    }
    
    function getContent($vPage){
        $vResult = "";
        $vDefault = "";
		
		$vDefault = $vDefault."This section is dedicated to database based programming.";
        
        if($vPage==0){
            $vResult = $vResult.$vDefault;
        }else if($vPage==1){
			$vResult = $vResult."This section is dedicated to Oracle based programming.";
			$vResult = $vResult."</br>";
			$vResult = $vResult."</br>";
			$vResult = $vResult."<div>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Index";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Color";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"1\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Red\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"2\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Orange\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"3\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Yellow\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"4\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Green\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"5\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Blue\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"6\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Indigo\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"7\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."OracleMethod(\"Violet\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
			$vResult = $vResult."</div>";
        }else if($vPage==2){
			$vResult = $vResult."This section is dedicated to Derby based programming.";
			$vResult = $vResult."</br>";
			$vResult = $vResult."</br>";
			$vResult = $vResult."<div>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Index";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Color";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"1\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Red\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"2\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Orange\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"3\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Yellow\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"4\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Green\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"5\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Blue\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"6\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Indigo\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"7\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."DerbyMethod(\"Violet\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
			$vResult = $vResult."</div>";
        }else if($vPage==3){
			$vResult = $vResult."This section is dedicated to MySQL based programming.";
			$vResult = $vResult."</br>";
			$vResult = $vResult."</br>";
			$vResult = $vResult."<div>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Index";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Color";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"1\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Red\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"2\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Orange\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"3\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Yellow\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"4\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Green\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"5\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Blue\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"6\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Indigo\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"7\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."MySQLMethod(\"Violet\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
			$vResult = $vResult."</div>";
        }else if($vPage==4){
			$vResult = $vResult."This section is dedicated to SQL Server based programming.";
			$vResult = $vResult."</br>";
			$vResult = $vResult."</br>";
			$vResult = $vResult."<div>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
					  $vResult = $vResult."SQL Server Instance";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td></td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Index";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Color";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"1\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"Red\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"2\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"Orange\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"3\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"Yellow\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"4\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"Green\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"5\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"Blue\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"6\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"Indigo\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerMethod(\"7\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQServerMethod(\"Violet\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr></tr>";
				$vResult = $vResult."<tr></tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
					  $vResult = $vResult."SQL Server Express Instance";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td></td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Index";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."Color";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"1\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Red\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"2\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Orange\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"3\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Yellow\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"4\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Green\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"5\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Blue\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"6\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Indigo\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
				$vResult = $vResult."<tr>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"7\",\"0\")";
					$vResult = $vResult."</td>";
					$vResult = $vResult."<td>";
						$vResult = $vResult."SQLServerExpressMethod(\"Violet\",\"1\")";
					$vResult = $vResult."</td>";
				$vResult = $vResult."</tr>";
			$vResult = $vResult."</div>";
        }else if($vPage==5){
            $vResult = $vResult."This section is dedicated to PostgreSQL based programming.";
        }else{
            $vResult = $vResult.$vDefault;
        }
        
        return $vResult;
    }
    
    function getVersions($vPage){
        $vResult = "";
        $vDefault = "";
		
		$vDefault = $vDefault."
			<li><a href=\"http://htkb.dyndns.org/Division5/Index.html\">HTML</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division5/Index.php\">PHP</a></li>
			<li><a href=\"http://htkb.dyndns.org/Division5/Index.shtml\">Perl</a></li>
			<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Index.html\">Apache SSI</a></li>
			<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Index.html\">HTML Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Index.html\">JQuery</a></li>
			<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Index.html\">Angular JS</a></li>
			<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Index.html\">JSX</a></li>
			<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Index.xml\">XSLT</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Index.xhtml\">JSF</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Index.jsp\">JSP</a></li>
			<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Index\">JSP Spring MVC</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Index.aspx\">ASP.NET Javascript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Index.asp\">ASP VBscript</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Index.cshtml\">ASP.NET Web App</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Index.aspx\">ASP.NET Webform</a></li>
			<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Index\">ASP.NET MVC App</a></li>
			<li><a href=\"http://htkb.dyndns.org:82/Division5/Index\">Python Web.py</a></li>
			<li><a href=\"http://htkb.dyndns.org:83/Division5/Index\">Ruby on Rails</a></li>
			<li><a href=\"http://htkb.dyndns.org:84/Division5/Index\">Node JS</a></li>
			<li><a href=\"http://htkb.dyndns.org:85/Division5/Index\">Angular 2+</a></li>
			<li><a href=\"http://htkb.dyndns.org:86/Division5/Index\">ReactJS</a></li>
		";
		
		$vResult = $vResult."<ul class=\"versionsUl\">";
		
        if($vPage==0){
            $vResult = $vResult.$vDefault;
        }else if($vPage==1){
			$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division5/Project1.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project1.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project1.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project1.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project1.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project1.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project1.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project1.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project1.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project1.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project1.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project1\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project1.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project1.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project1.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project1.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project1\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project1\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project1\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project1\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project1\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project1\">ReactJS</a></li>
			";
        }else if($vPage==2){
			$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division5/Project2.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project2.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project2.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project2.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project2.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project2.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project2.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project2.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project2.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project2.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project2.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project2\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project2.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project2.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project2.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project2.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project2\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project2\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project2\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project2\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project2\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project2\">ReactJS</a></li>
			";
        }else if($vPage==3){
			$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division5/Project3.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project3.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project3.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project3.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project3.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project3.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project3.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project3.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project3.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project3.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project3.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project3\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project3.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project3.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project3.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project3.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project3\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project3\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project3\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project3\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project3\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project3\">ReactJS</a></li>
			";
        }else if($vPage==4){
			$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division5/Project4.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project4.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project4.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project4.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project4.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project4.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project4.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project4.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project4.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project4.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project4.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project4\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project4.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project4.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project4.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project4.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project4\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project4\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project4\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project4\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project4\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project4\">ReactJS</a></li>
			";
        }else if($vPage==5){
			$vResult = $vResult."
				<li><a href=\"http://htkb.dyndns.org/Division5/Project5.html\">HTML</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project5.php\">PHP</a></li>
				<li><a href=\"http://htkb.dyndns.org/Division5/Project5.shtml\">Perl</a></li>
				<li><a href=\"http://htkb.dyndns.org/SSI/Division5/Project5.html\">Apache SSI</a></li>
				<li><a href=\"http://htkb.dyndns.org/Javascript/Division5/Project5.html\">HTML Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org/JQuery/Division5/Project5.html\">JQuery</a></li>
				<li><a href=\"http://htkb.dyndns.org/AngularJS/Division5/Project5.html\">Angular JS</a></li>
				<li><a href=\"http://htkb.dyndns.org/JSX/Division5/Project5.html\">JSX</a></li>
				<li><a href=\"http://htkb.dyndns.org/XLST/Division5/Project5.xml\">XSLT</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division5/Project5.xhtml\">JSF</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division5/Project5.jsp\">JSP</a></li>
				<li><a href=\"http://htkb.dyndns.org:8080/SpringMVC/Division5/Project5\">JSP Spring MVC</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASPNET/Division5/Project5.aspx\">ASP.NET Javascript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/ASP/Division5/Project5.asp\">ASP VBscript</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebApplication/Division5/Project5.cshtml\">ASP.NET Web App</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/WebForm/Division5/Project5.aspx\">ASP.NET Webform</a></li>
				<li><a href=\"http://htkb.dyndns.org:81/MVC/Division5/Project5\">ASP.NET MVC App</a></li>
				<li><a href=\"http://htkb.dyndns.org:82/Division5/Project5\">Python Web.py</a></li>
				<li><a href=\"http://htkb.dyndns.org:83/Division5/Project5\">Ruby on Rails</a></li>
				<li><a href=\"http://htkb.dyndns.org:84/Division5/Project5\">Node JS</a></li>
				<li><a href=\"http://htkb.dyndns.org:85/Division5/Project5\">Angular 2+</a></li>
				<li><a href=\"http://htkb.dyndns.org:86/Division5/Project5\">ReactJS</a></li>
			";
        }else{
            $vResult = $vResult.$vDefault;
        }
		
		$vResult = $vResult."</ul>";
        
        return $vResult;
    }


?>