function Navigation(vLevel)
{
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.html\">Basic HTML</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.php\">PHP</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/index.html\">Javascript</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project3.shtml\">Perl</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index.html\">Java</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index.html\">ASP.Net</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index.html\">Databases</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");

}

function Title(vPage)
{
	var vDefault = "HTKB Home Page"; 
	var vResult = "";
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "Javascript Programming";
	}
	else if(vPage == 4)
	{
		vResult += "Java Programming";
	}
	else if(vPage == 5)
	{
		vResult += "ASP.NET Programming";
	}
	else if(vPage == 6)
	{
		vResult += "Database Programming";
	}
	else
    {
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function Header(vPage)
{
	var vDefault = "Web Programming";
	var vResult = "";

	var tableRowCenterMainHeader = document.createElement("h2");

	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "Javascript Programming";
	}
	else if(vPage == 4)
	{
		vResult += "Java Programming";
	}
	else if(vPage == 5)
	{
		vResult += "ASP.NET Programming";
	}
	else if(vPage == 6)
	{
		vResult += "Database Programming";
	}
	else
    {
        vResult += vDefault;
    }
	
    tableRowCenterMainHeader.textContent = vResult;
	$( "#idCenterRowMain" ).append( tableRowCenterMainHeader );
}

function Content(vPage)
{
	var vDefault = "";
	var vResult = "";

	var tableRowCenterMainContent = document.createElement("p");
	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	
	if(vPage == 0)
	{
		vResult += "This section is dedicated to web-based programming.";
	}
	else if(vPage == 2)
	{
		vResult += "This section is dedicated to Javascript based programming.";
	}
	else if(vPage == 4)
	{
		vResult += "This section is dedicated to Java based programming.";
	}
	else if(vPage == 5)
	{
		vResult += "This section is dedicated to ASP.NET based programming.";
	}
	else if(vPage == 6)
	{
		vResult += "This section is dedicated to Database based programming.";
	}
	else
    {
        vResult += vDefault;
    } 
    $( "#idCenterRowMain" ).append( tableRowCenterMainContent );
	$( "#idCenterContent" ).append( vResult );
}

function Versions(vPage)
{
	var vDefault = "";
	vDefault = "<a href=\"http://htkb.dyndns.org/Section1/index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/index.asp\">ASP Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br>";
	var vResult = "";
    
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project2.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project2.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project2\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project2.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 4)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project4.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project4.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project4.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project4.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project4.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project4.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project4\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project4.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 5)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project5.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project5.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project5.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project5.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project5.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project5.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project5.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project5.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project5.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project5\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project5.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 6)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project6.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project6.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Project6.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Project6.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Project6.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Project6.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Project6.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Project6.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Project6.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Project6\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Project6.html\">Apache SSI</a><br>";
	
	}
	else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );
}
