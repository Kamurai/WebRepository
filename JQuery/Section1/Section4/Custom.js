function Navigation(vLevel)
{
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.html\">Basic HTML</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project1.php\">PHP</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section2/Index.html\">Javascript</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel+1)+"Section1/Project3.shtml\">Perl</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section4/Index.html\">Java</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/Project1.jsp\">JSP Programming</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/Project2.xhtml\">JSF Programming</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section5/Index.html\">ASP.Net</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section1/Section6/Index.html\">Databases</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\"http://htkb.dyndns.org/SSI/Section1/index.html\">Apache SSI</a><br><br>");

}

function Title(vPage)
{
	var vDefault = "HTKB Home Page"; 	var vResult = "";
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else
    {
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function Header(vPage)
{
	var vDefault = "Java Programming";	var vResult = "";	var tableRowCenterMainHeader = document.createElement("h2");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else
    {
        vResult += vDefault;
    }
    tableRowCenterMainHeader.textContent = vResult;	$( "#idCenterRowMain" ).append( tableRowCenterMainHeader );
}

function Content(vPage)
{
	var vDefault = "This section is dedicated to Java based programming.";	var vResult = "";	var tableRowCenterMainContent = document.createElement("p");	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else
    {
        vResult += vDefault;
    } 
    $( "#idCenterRowMain" ).append( tableRowCenterMainContent );	$( "#idCenterContent" ).append( vResult );
}

function Versions(vPage)
{
	var vDefault = "<a href=\"http://htkb.dyndns.org/Section1/Section4/index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section4/index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section1/Section4/index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section1/Section4/index.asp\">ASP Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section1/Section4/index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section1/Section4/index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section1/Section4/index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section1/Section4/index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section1/Section4/index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Section1/Section4/index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section1/Section4/index.html\">Apache SSI</a><br>";
	var vResult = "";
	
	if(vPage == 0)
	{
		vResult += vDefault;
	}
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );

}