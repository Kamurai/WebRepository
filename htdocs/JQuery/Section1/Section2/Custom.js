function Navigation(vLevel)
{
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.html\">Basic HTML</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section3/Project1.php\">PHP</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index.html\">Javascript</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section1/Section2/Project1.html\">HTML Javascript</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project2.asp\">ASP Javascript</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project3.aspx\">ASP.NET Javascript</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:84/Section1/Section2/Project3\">Node JS</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project3.shtml\">Perl</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index.html\">Java</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index.html\">ASP.Net</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index.html\">Databases</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");
    $( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:82/Section1/index.html\">Python Web.py</a><br><br>");
    $( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org:83/Section1/index.html\">Ruby on Rails</a><br><br>");
}

function Title(vPage)
{
	var vDefault = "HTKB Home Page"; 	var vResult = "";
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "HTML Javascript Programming";
	}
	else
    {
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function Header(vPage)
{
	var vDefault = "Javascript";	var vResult = "";	var tableRowCenterMainHeader = document.createElement("h2");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "HTML Javascript";
	}
	else
    {
        vResult += vDefault;
    }
    tableRowCenterMainHeader.textContent = vResult;	$( "#idCenterRowMain" ).append( tableRowCenterMainHeader );
}

function Content(vPage)
{
	var vDefault = "";	var vResult = "";	var tableRowCenterMainContent = document.createElement("p");	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	
	if(vPage == 0)
	{
		vResult += "This section is dedicated to Javascript based programming.";
	}
	else if(vPage == 1)
	{
		vResult += "This section is dedicated to HTML Javascript based programming.";
	}
	else
    {
        vResult += vDefault;
    } 
	$( "#idCenterRowMain" ).append( tableRowCenterMainContent );	$( "#idCenterContent" ).append( vResult );
}

function Versions(vPage)
{
	var vDefault = "";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section2/index.html\">HTML</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section2/index.php\">PHP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/index.html\">HTML Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/index.aspx\">ASP.NET Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/index.asp\">ASP Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:84/Section1/Section2/index\">Node JS</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section2/index.shtml\">Perl</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/index.jsp\">JSP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/index.xhtml\">JSF</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/index.cshtml\">ASP.NET Web App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/index.aspx\">ASP.NET Webform</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section2/index\">ASP.NET MVC App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/index.html\">Apache SSI</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:82/Section1/Section2/index\">Python Web.py</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:83/Section1/Section2/index.html\">Ruby on Rails</a><br>";
    var vResult = "";
    
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section2/Project1.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section2/Project1.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section1/Section2/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section2/Project1.asp\">ASP Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section1/Section2/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section1/Section2/Project1.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section2/Project1.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section2/Project1.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section1/Section2/Project1\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section2/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section1/Section2/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section1/Section2/Project1\">Ruby on Rails</a><br>";
    }
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );
}