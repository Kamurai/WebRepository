<?php
    include './Universal.php';
	
    function getTitle($vPage)
    {
        $vResult = '<title>';
        $Default = 'Database Programming';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'Oracle Programming';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Derby Programming';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'MySQL Programming';
        }
        else if($vPage==4)
        {
            $vResult = $vResult.'SQL Server Programming';
        }
        else if($vPage==5)
        {
            $vResult = $vResult.'PostgreSQL Programming';
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
            $vResult = $vResult.'Oracle Programming';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'Derby Programming';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'MySQL Programming';
        }
        else if($vPage==4)
        {
            $vResult = $vResult.'SQL Server Programming';
        }
        else if($vPage==5)
        {
            $vResult = $vResult.'PostgreSQL Programming';
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
        $Default = 'This section is dedicated to Database based programming.';
        
        if($vPage==0)
        {
            $vResult = $vResult.$Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                This section is dedicated to Oracle based programming.
                </br>
                </br>
                <table>
                    <tr>
                        <td>
                            Index
                        </td>
                        <td>
                            Color
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'1\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Red\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'2\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Orange\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'3\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Yellow\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'4\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Green\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'5\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Blue\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'6\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Indigo\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            OracleMethod(\'7\',\'0\')
                        </td>
                        <td>
                            OracleMethod(\'Violet\',\'1\')
                        </td>
                    </tr>
                </table>
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                This section is dedicated to Derby based programming.
                </br>
                </br>
                <table>
                    <tr>
                        <td>
                            Index
                        </td>
                        <td>
                            Color
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'1\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Red\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'2\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Orange\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'3\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Yellow\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'4\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Green\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'5\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Blue\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'6\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Indigo\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            DerbyMethod(\'7\',\'0\')
                        </td>
                        <td>
                            DerbyMethod(\'Violet\',\'1\')
                        </td>
                    </tr>
                    
                </table>
            ';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'
                This section is dedicated to MySQL based programming.
                </br>
                </br>
                <table>
                    <tr>
                        <td>
                            Index
                        </td>
                        <td>
                            Color
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'1\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Red\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'2\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Orange\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'3\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Yellow\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'4\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Green\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'5\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Blue\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'6\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Indigo\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            MySQLMethod(\'7\',\'0\')
                        </td>
                        <td>
                            MySQLMethod(\'Violet\',\'1\')
                        </td>
                    </tr>
                </table>
            ';
        }
        else if($vPage==4)
        {
            $vResult = $vResult.'
                This section is dedicated to SQL Server based programming.
                </br>
                </br>
                <table>
                    <tr>
                        <td>
                          SQL Server Instance  
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            Index
                        </td>
                        <td>
                            Color
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'1\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Red\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'2\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Orange\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'3\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Yellow\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'4\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Green\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'5\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Blue\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'6\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Indigo\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerMethod(\'7\',\'0\')
                        </td>
                        <td>
                            SQLServerMethod(\'Violet\',\'1\')
                        </td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr>
                        <td>
                          SQL Server Express Instance  
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>
                            Index
                        </td>
                        <td>
                            Color
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'1\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Red\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'2\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Orange\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'3\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Yellow\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'4\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Green\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'5\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Blue\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'6\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Indigo\',\'1\')
                        </td>
                    </tr>
                    <tr>
                        <td>
                            SQLServerExpressMethod(\'7\',\'0\')
                        </td>
                        <td>
                            SQLServerExpressMethod(\'Violet\',\'1\')
                        </td>
                    </tr>
                </table>
            ';
        }
        else if($vPage==5)
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
            <a href=\'http://htkb.dyndns.org/Division1/Section1/Index.html\'>HTML</a><br>
			<a href=\'http://htkb.dyndns.org/Division1/Section1/Index.shtml\'>Perl</a><br>
			<a href=\'http://htkb.dyndns.org/SSI/Division1/Section1/Index.html\'>Apache SSI</a><br>
			<a href=\'http://htkb.dyndns.org/Javascript/Division1/Section1/Index.html\'>HTML Javascript</a><br>
			<a href=\'http://htkb.dyndns.org/JQuery/Division1/Section1/Index.html\'>JQuery</a><br>
			<a href=\'http://htkb.dyndns.org/Angular/Division1/Section1/Index.html\'>Angular JS</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Index.xhtml\'>JSF</a><br>
			<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Index.jsp\'>JSP</a><br>
			<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Section1/Index.jsp\'>JSP Spring MVC</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Index.aspx\'>ASP.NET Javascript</a><br>
			<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Section1/Index.asp\'>ASP VBscript</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Index.cshtml\'>ASP.NET Web App</a><br>
			<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Section1/Index.aspx\'>ASP.NET Webform</a><br>
			<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Section1/Index\'>ASP.NET MVC App</a><br>
			<a href=\'http://htkb.dyndns.org:82/Division1/Section1/Index\'>Python Web.py</a><br>
			<a href=\'http://htkb.dyndns.org:83/Division1/Section1/Index\'>Ruby on Rails</a><br>
			<a href=\'http://htkb.dyndns.org:84/Division1/Section1/Index\'>Node JS</a><br>

        ';
        
        if($vPage==0)
        {
            $vResult = $Default;
        }
        else if($vPage==1)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division1/Section1/Project1.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division1/Section1/Project1.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division1/Section1/Project1.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division1/Section1/Project1.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division1/Section1/Project1.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division1/Section1/Project1.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project1.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project1.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Section1/Project1.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project1.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Section1/Project1.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project1.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project1.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Section1/Project1\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division1/Section1/Project1\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division1/Section1/Project1\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division1/Section1/Project1\'>Node JS</a><br>
            ';
        }
        else if($vPage==2)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division1/Section1/Project2.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division1/Section1/Project2.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division1/Section1/Project2.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division1/Section1/Project2.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division1/Section1/Project2.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division1/Section1/Project2.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project2.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project2.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Section1/Project2.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project2.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Section1/Project2.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project2.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project2.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Section1/Project2\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division1/Section1/Project2\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division1/Section1/Project2\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division1/Section1/Project2\'>Node JS</a><br>
            ';
        }
        else if($vPage==3)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division1/Section1/Project3.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division1/Section1/Project3.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division1/Section1/Project3.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division1/Section1/Project3.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division1/Section1/Project3.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division1/Section1/Project3.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project3.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project3.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Section1/Project3.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project3.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Section1/Project3.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project3.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project3.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Section1/Project3\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division1/Section1/Project3\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division1/Section1/Project3\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division1/Section1/Project3\'>Node JS</a><br>
            ';
        }
        else if($vPage==4)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division1/Section1/Project4.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division1/Section1/Project4.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division1/Section1/Project4.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division1/Section1/Project4.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division1/Section1/Project4.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division1/Section1/Project4.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project4.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project4.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Section1/Project4.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project4.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Section1/Project4.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project4.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project4.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Section1/Project4\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division1/Section1/Project4\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division1/Section1/Project4\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division1/Section1/Project4\'>Node JS</a><br>
            ';
        }
        else if($vPage==5)
        {
            $vResult = $vResult.'
                <a href=\'http://htkb.dyndns.org/Division1/Section1/Project5.html\'>HTML</a><br>
				<a href=\'http://htkb.dyndns.org/Division1/Section1/Project5.shtml\'>Perl</a><br>
				<a href=\'http://htkb.dyndns.org/SSI/Division1/Section1/Project5.html\'>Apache SSI</a><br>
				<a href=\'http://htkb.dyndns.org/Javascript/Division1/Section1/Project5.html\'>HTML Javascript</a><br>
				<a href=\'http://htkb.dyndns.org/JQuery/Division1/Section1/Project5.html\'>JQuery</a><br>
				<a href=\'http://htkb.dyndns.org/Angular/Division1/Section1/Project5.html\'>Angular JS</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project5.xhtml\'>JSF</a><br>
				<a href=\'http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project5.jsp\'>JSP</a><br>
				<a href=\'http://htkb.dyndns.org:8080/ProjectSpringTestSite/Division1/Section1/Project5.jsp\'>JSP Spring MVC</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project5.aspx\'>ASP.NET Javascript</a><br>
				<a href=\'http://htkb.dyndns.org:81/ASP/Division1/Section1/Project5.asp\'>ASP VBscript</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project5.cshtml\'>ASP.NET Web App</a><br>
				<a href=\'http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project5.aspx\'>ASP.NET Webform</a><br>
				<a href=\'http://htkb.dyndns.org:81/MVC/Main/Division1/Section1/Project5\'>ASP.NET MVC App</a><br>
				<a href=\'http://htkb.dyndns.org:82/Division1/Section1/Project5\'>Python Web.py</a><br>
				<a href=\'http://htkb.dyndns.org:83/Division1/Section1/Project5\'>Ruby on Rails</a><br>
				<a href=\'http://htkb.dyndns.org:84/Division1/Section1/Project5\'>Node JS</a><br>
            ';
        }
        else
        {
            $vResult = $vResult.$Default;
        }
        
        return $vResult;
    }


?>