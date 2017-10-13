<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Database Programming';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'Oracle Programming';
        }
        else if($Page==2)
        {
            $Result = $Result.'Derby Programming';
        }
        else if($Page==3)
        {
            $Result = $Result.'MySQL Programming';
        }
        else if($Page==4)
        {
            $Result = $Result.'SQL Server Programming';
        }
        else if($Page==5)
        {
            $Result = $Result.'PostgreSQL Programming';
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
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section2/Index.php\'>Java Script</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Index.shtml\'>Perl</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section4/Index.php\'>Java</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section5/Index.php\'>ASP.Net</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section1/Section6/Index.php\'>Databases</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Section1/Section6/Project1.php\'>Oracle</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Section1/Section6/Project2.php\'>Derby</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Section1/Section6/Project3.php\'>MySQL</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Section1/Section6/Project4.php\'>SQL Server</a></br></br>
                <a class=\'navlinkB\' href=\''.Path($Level).'Section1/Section6/Project5.php\'>Postgres</a></br></br>
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
            $Result = $Result.'Oracle Programming';
        }
        else if($Page==2)
        {
            $Result = $Result.'Derby Programming';
        }
        else if($Page==3)
        {
            $Result = $Result.'MySQL Programming';
        }
        else if($Page==4)
        {
            $Result = $Result.'SQL Server Programming';
        }
        else if($Page==5)
        {
            $Result = $Result.'PostgreSQL Programming';
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
        $Default = 'This section is dedicated to Database based programming.';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
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
        else if($Page==2)
        {
            $Result = $Result.'
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
        else if($Page==3)
        {
            $Result = $Result.'
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
        else if($Page==4)
        {
            $Result = $Result.'
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
        else if($Page==5)
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
            <a href=\'http://htkb.dyndns.org/Section1/Section6/Index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section6/Index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/JQuery/Section1/Section6/Index.html\'>JQuery</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section6/Index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:84/Section1/Section6/Index\'>Node JS</a><br>
            <a href=\'http://htkb.dyndns.org/Section1/Section6/Index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section6/Index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section1/Section6/Index.html\'>Apache SSI</a><br>
            <a href=\'http://htkb.dyndns.org:82/Section1/Section6/Index\'>Python Web.py</a><br>
            <a href=\'http://htkb.dyndns.org:83/Section1/Section6/Index\'>Ruby on Rails</a><br>

        ';
        
        if($Page==0)
        {
            $Result = $Default;
        }
        else if($Page==1)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project1.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section6/Project1.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section1/Section6/Project1.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section6/Project1.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project1.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section1/Section6/Project1\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project1.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project1.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project1.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project1.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project1.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project1\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section1/Section6/Project1.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section1/Section6/Project1\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section1/Section6/Project1\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project2.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section6/Project2.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section1/Section6/Project2.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section6/Project2.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project2.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section1/Section6/Project2\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project2.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project2.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project2.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project2.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project2.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project2\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section1/Section6/Project2.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section1/Section6/Project2\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section1/Section6/Project2\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project3.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section6/Project3.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section1/Section6/Project3.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section6/Project3.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project3.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section1/Section6/Project3\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project3.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project3.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project3.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project3.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project3.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project3\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section1/Section6/Project3.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section1/Section6/Project3\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section1/Section6/Project3\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==4)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project4.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section6/Project4.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section1/Section6/Project4.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section6/Project4.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project4.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section1/Section6/Project4\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project4.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project4.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project4.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project4.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project4.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project4\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section1/Section6/Project4.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section1/Section6/Project4\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section1/Section6/Project4\'>Ruby on Rails</a><br>

            ';
        }
        else if($Page==5)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project5.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section1/Section6/Project5.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/JQuery/Section1/Section6/Project5.html\'>JQuery</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section1/Section6/Project5.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section1/Section6/Project5.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:84/Section1/Section6/Project5\'>Node JS</a><br>
                <a href=\'http://htkb.dyndns.org/Section1/Section6/Project5.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section1/Section6/Project5.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section1/Section6/Project5.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section1/Section6/Project5.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section1/Section6/Project5.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section1/Section6/Project5\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section1/Section6/Project5.html\'>Apache SSI</a><br>
                <a href=\'http://htkb.dyndns.org:82/Section1/Section6/Project5\'>Python Web.py</a><br>
                <a href=\'http://htkb.dyndns.org:83/Section1/Section6/Project5\'>Ruby on Rails</a><br>
            ';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }


?>