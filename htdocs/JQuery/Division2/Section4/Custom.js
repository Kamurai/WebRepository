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
		vResult += "Warring Nations";
	}
	else if(vPage == 2)
	{
		vResult += "Psychodom: The One Empire";
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
	var vDefault = "Renley";
	
	var tableRowCenterMainHeader = document.createElement("h2");

	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "Warring Nations";
	}
	else if(vPage == 2)
	{
		vResult += "Psychodom: The One Empire";
	}
	else
    {
        vResult += vDefault;
    }
    tableRowCenterMainHeader.textContent = vResult;
	$( "#idCenterRowMain" ).append( tableRowCenterMainHeader );
}

function fillContent(vPage)
{
	var vResult = "";
	var vDefault = "";
	
	var tableRowCenterMainContent = document.createElement("p");
	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	if(vPage == 0)
	{
		vResult += vDefault;
		vResult += "This section is dedicated to projects centered in the Renley universe.";
	}
	else if(vPage == 1)
	{
		vResult += "Warring Nations is a Tactical RPG involving squad based battles.";
		vResult += "Characters advance classes based on their weapon proficiencies and/or currently equipped weapons.";
	}
	else if(vPage == 2)
	{
		vResult += "Psychodom: The One Empire is a 3rd person perspective Adventure / RPG.";
		vResult += "The protagonist is tasked with investigating various situations leading ";
		vResult += "to a conspiracy about who is really ruling the continent.";
	}
	else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowMain" ).append( tableRowCenterMainContent );
	$( "#idCenterContent" ).append( vResult );
}

function fillVersions(vPage)
{
	var vResult = "";
    var vDefault = "";
    vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Index.html\">HTML</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Index.php\">PHP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section4/Index.html\">HTML Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Index.aspx\">ASP.NET Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section4/Index.asp\">ASP VBscript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:84/Division2/Section4/Index\">Node JS</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Index.shtml\">Perl</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Index.jsp\">JSP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Index.xhtml\">JSF</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Index.cshtml\">ASP.NET Web App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section4/Index.aspx\">ASP.NET Webform</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section4/Index\">ASP.NET MVC App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section4/Index.html\">Apache SSI</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:82/Division2/Section4/Index\">Python Web.py</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:83/Division2/Section4/Index\">Ruby on Rails</a><br>";
    
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Project1.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Project1.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section4/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Project1.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section4/Project1.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section4/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Project1.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Project1.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Project1.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Project1.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section4/Project1.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section4/Project1\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section4/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section4/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section4/Project1\">Ruby on Rails</a><br>";
    }
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Project2.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Project2.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Division2/Section4/Project2.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Division2/Section4/Project2.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Division2/Section4/Project2.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Division2/Section4/Project2\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Division2/Section4/Project2.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Division2/Section4/Project2.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Division2/Section4/Project2.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Division2/Section4/Project2.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Division2/Section4/Project2.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Division2/Section4/Project2\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Division2/Section4/Project2.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Division2/Section4/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Division2/Section4/Project2\">Ruby on Rails</a><br>";
    }
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );
}