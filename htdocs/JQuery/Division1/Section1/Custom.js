function fillTitle(vPage)
{
	var vResult = "";
	var vDefault = "HTKB Home Page"; 
		if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "Oracle Programming";
	}
	else if(vPage == 2)
	{
		vResult += "Derby Programming";
	}
	else if(vPage == 3)
	{
		vResult += "MySQL Programming";
	}
	else if(vPage == 4)
	{
		vResult += "SQL Server Programming";
	}
	else if(vPage == 5)
	{
		vResult += "PostgreSQL Programming";
	}
	else
    {
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function fillHeader(vPage)
{
	var vResult = "";
	var vDefault = "Database Programming";		var tableRowCenterMainHeader = document.createElement("h2");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "Oracle Programming";
	}
	else if(vPage == 2)
	{
		vResult += "Derby Programming";
	}
	else if(vPage == 3)
	{
		vResult += "MySQL Programming";
	}
	else if(vPage == 4)
	{
		vResult += "SQL Server Programming";
	}
	else if(vPage == 5)
	{
		vResult += "PostgreSQL Programming";
	}
	else
    {
        vResult += vDefault;
    }
    tableRowCenterMainHeader.textContent = vResult;	$( "#idCenterRowMain" ).append( tableRowCenterMainHeader );
}

function fillContent(vPage)
{
	var vResult = "";
	var vDefault = "This section is dedicated to database based programming.";		var tableRowCenterMainContent = document.createElement("p");	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "This section is dedicated to Oracle based programming.";
	}
	else if(vPage == 2)
	{
		vResult += "This section is dedicated to Derby based programming.";
	}
	else if(vPage == 3)
	{
		vResult += "This section is dedicated to MySQL based programming.";
	}
	else if(vPage == 4)
	{
		vResult += "This section is dedicated to SQL Server based programming.";
	}
	else if(vPage == 5)
	{
		vResult += "This section is dedicated to PostgreSQL based programming.";
	}
	else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowMain" ).append( tableRowCenterMainContent );	$( "#idCenterContent" ).append( vResult );
}

function fillVersions(vPage)
{
	var vResult = "";
	var vDefault = "";
    vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Index.html\">HTML</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Index.php\">PHP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section1/Index.html\">HTML Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Index.asp\">ASP VBscript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Index\">Node JS</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Index.shtml\">Perl</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Index.jsp\">JSP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Index.xhtml\">JSF</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Index.aspx\">ASP.NET Webform</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Index\">ASP.NET MVC App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Index.html\">Apache SSI</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Index\">Python Web.py</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Index\">Ruby on Rails</a><br>";
    
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project1.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project1.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section1/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Project1.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project1.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project1.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project1.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Project1\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Project1\">Ruby on Rails</a><br>";
    }
	else if(vPage == 2)
	{
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project2.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project2.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section1/Project2.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Project2.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Project2\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project2.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project2.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project2.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Project2\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Project2.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Project2\">Ruby on Rails</a><br>";
    }
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project3.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project3.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section1/Project3.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Project3.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Project3\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project3.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project3.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project3.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Project3\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Project3.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Project3\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Project3\">Ruby on Rails</a><br>";
    }
    else if(vPage == 4)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project4.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project4.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section1/Project4.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Project4.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Project4\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project4.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project4.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project4.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Project4\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Project4.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Project4\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Project4\">Ruby on Rails</a><br>";
    }
    else if(vPage == 5)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project5.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project5.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division1/Section1/Project5.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division1/Section1/Project5.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division1/Section1/Project5.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division1/Section1/Project5\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division1/Section1/Project5.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division1/Section1/Project5.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division1/Section1/Project5.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division1/Section1/Project5.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division1/Section1/Project5.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division1/Section1/Project5\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division1/Section1/Project5.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division1/Section1/Project5\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division1/Section1/Project5\">Ruby on Rails</a><br>";
    }
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );
    
}