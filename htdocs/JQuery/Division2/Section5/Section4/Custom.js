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
		vResult += "Nine Card";
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
	var vDefault = "Elvia";		var tableRowCenterMainHeader = document.createElement("h2");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "Nine Card";
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
	var vDefault = "";		var tableRowCenterMainContent = document.createElement("p");	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	if(vPage == 0)
	{
		vResult += "Here are projects based in the Elvia Empire:</br>";
		vResult += "</br>";
		vResult += "Nine Card: a Tactical card game played through the Elvia Empire.</br>";
	}
	else if(vPage == 1)
	{
		vResult += "Nine Card is a Tactical card game played through the Elvia Empire.</br>";
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
	
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.html\">HTML</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.php\">PHP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Index.html\">HTML Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Index.aspx\">ASP.NET Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Index.asp\">ASP VBscript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Index\">Node JS</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Index.shtml\">Perl</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Index.jsp\">JSP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Index.xhtml\">JSF</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Index.aspx\">ASP.NET Webform</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Index\">ASP.NET MVC App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Index.html\">Apache SSI</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Index\">Python Web.py</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Index\">Ruby on Rails</a><br>";
    
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section4/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section4/Project1.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section4/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section4/Project1.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section4/Project1.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section4/Project1.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section4/Project1\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section4/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section4/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section4/Project1\">Ruby on Rails</a><br>";
    }
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );

}