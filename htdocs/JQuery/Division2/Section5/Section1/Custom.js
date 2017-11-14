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
		vResult += "Team Tactical: Crash Ball";
	}
	else if(vPage == 2)
	{
		vResult += "Wars of Antarrea";
	}
	else if(vPage == 3)
	{
		vResult += "Revolutions: Invading Nations";
	}
	else if(vPage == 4)
	{
		vResult += "Revolutions: Rebellion Against the Fist";
	}
	else if(vPage == 5)
	{
		vResult += "Revolutions: Return to Arms";
	}
	else if(vPage == 6)
	{
		vResult += "Revolutions: Post Wars";
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
	var vDefault = "Global Antarrea";
	
	var tableRowCenterMainHeader = document.createElement("h2");

	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "Team Tactical: Crash Ball";
	}
	else if(vPage == 2)
	{
		vResult += "Wars of Antarrea";
	}
	else if(vPage == 3)
	{
		vResult += "Revolutions: Invading Nations";
	}
	else if(vPage == 4)
	{
		vResult += "Revolutions: Rebellion Against the Fist";
	}
	else if(vPage == 5)
	{
		vResult += "Revolutions: Return to Arms";
	}
	else if(vPage == 6)
	{
		vResult += "Revolutions: Post Wars";
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
		vResult += "Here are projects based in the Antarrea universe:</br>";
		vResult += "</br>";
		vResult += "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
		vResult += "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
		vResult += "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
		vResult += "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
		vResult += "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
		vResult += "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
	}
	else if(vPage == 1)
	{
		vResult += "Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>";
	}
	else if(vPage == 2)
	{
		vResult += "Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>";
	}
	else if(vPage == 3)
	{
		vResult += "Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>";
	}
	else if(vPage == 4)
	{
		vResult += "Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>";
	}
	else if(vPage == 5)
	{
		vResult += "Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>";
	}
	else if(vPage == 6)
	{
		vResult += "Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>";
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
    vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Index.html\">HTML</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Index.php\">PHP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Index.html\">HTML Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Index.aspx\">ASP.NET Javascript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Index.asp\">ASP VBscript</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Index\">Node JS</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Index.shtml\">Perl</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Index.jsp\">JSP</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Index.xhtml\">JSF</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Index.cshtml\">ASP.NET Web App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Index.aspx\">ASP.NET Webform</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Index\">ASP.NET MVC App</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Index.html\">Apache SSI</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Index\">Python Web.py</a><br>";
    vDefault += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Index\">Ruby on Rails</a><br>";
    
	
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project1.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project1.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project1.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Project1\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project1.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project1.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project1.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project1.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project1.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project1\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project1.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Project1\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Project1\">Ruby on Rails</a><br>";
    }
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project2.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project2.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project2.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Project2\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project2.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project2.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project2.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project2.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project2.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project2\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project2.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Project2\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Project2\">Ruby on Rails</a><br>";
    }
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project3.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project3.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project3.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Project3\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project3.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project3.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project3.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project3.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project3.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project3\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project3.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Project3\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Project3\">Ruby on Rails</a><br>";
    }
	else if(vPage == 4)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project4.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project4.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project4.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Project4\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project4.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project4.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project4.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project4.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project4.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project4\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project4.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Project4\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Project4\">Ruby on Rails</a><br>";
    }
	else if(vPage == 5)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project5.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project5.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project5.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Project5\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project5.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project5.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project5.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project5.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project5.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project5\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project5.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Project5\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Project5\">Ruby on Rails</a><br>";
    }
	else if(vPage == 6)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.html\">HTML</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.php\">PHP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section1/Project6.html\">HTML Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project6.aspx\">ASP.NET Javascript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section1/Project6.asp\">ASP VBscript</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section1/Project6\">Node JS</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section1/Project6.shtml\">Perl</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project6.jsp\">JSP</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project6.xhtml\">JSF</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project6.cshtml\">ASP.NET Web App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project6.aspx\">ASP.NET Webform</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project6\">ASP.NET MVC App</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project6.html\">Apache SSI</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section1/Project6\">Python Web.py</a><br>";
        vResult += "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section1/Project6\">Ruby on Rails</a><br>";
    }
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );

}