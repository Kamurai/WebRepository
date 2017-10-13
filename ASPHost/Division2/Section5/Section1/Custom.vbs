function Navigation(vLevel)
{
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Section1/Index.asp"">Gynowars</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project2.asp"">Assault</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project3.asp"">Mars</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Section4/Index.asp"">Renley</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Section5/Index.asp"">Antarrea</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Index.asp"">Global</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Project1.asp"">Team Tactial: Crash Ball</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Project2.asp"">Wars of Antarrea</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Project3.asp"">Revolutions: Invading Nations</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Project4.asp"">Revolutions: Rebellion Against the Fist</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Project5.asp"">Revolutions: Return to Arms</a><br><br>");
			Response.Write("<a class=""navlinkC"" href="""+GetPath(vLevel)+"Section2/Section5/Section1/Project6.asp"">Revolutions: Post Wars</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section2/Index.asp"">Grendol</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section3/Index.asp"">Utopia</a><br><br>");
		Response.Write("<a class=""navlinkB"" href="""+GetPath(vLevel)+"Section2/Section5/Section4/Index.asp"">Elvia</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project6.asp"">Truth</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project7.asp"">Kingdoms</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project8.asp"">Terminal World</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project9.asp"">Monster Office Workplace</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project10.asp"">Battle Princesses</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project11.asp"">Sacred Offerings</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project12.asp"">The Way</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project13.asp"">Conspiratorium</a><br><br>");
	Response.Write("<a class=""navlinkA"" href="""+GetPath(vLevel)+"Section2/Project14.asp"">Conversion</a><br><br>");

}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Global Antarrea");
		}
		else if(vPage == 1)
		{
			Response.Write("Team Tactical: Crash Ball");
		}
		else if(vPage == 2)
		{
			Response.Write("Wars of Antarrea");
		}
		else if(vPage == 3)
		{
			Response.Write("Revolutions: Invading Nations");
		}
		else if(vPage == 4)
		{
			Response.Write("Revolutions: Rebellion Against the Fist");
		}
		else if(vPage == 5)
		{
			Response.Write("Revolutions: Return to Arms");
		}
		else if(vPage == 6)
		{
			Response.Write("Revolutions: Post Wars");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Global Antarrea");
		}
		else if(vPage == 1)
		{
			Response.Write("Team Tactical: Crash Ball");
		}
		else if(vPage == 2)
		{
			Response.Write("Wars of Antarrea");
		}
		else if(vPage == 3)
		{
			Response.Write("Revolutions: Invading Nations");
		}
		else if(vPage == 4)
		{
			Response.Write("Revolutions: Rebellion Against the Fist");
		}
		else if(vPage == 5)
		{
			Response.Write("Revolutions: Return to Arms");
		}
		else if(vPage == 6)
		{
			Response.Write("Revolutions: Post Wars");
		}
	Response.Write("</h2>");
}

function Content(vPage)
{
	Response.Write("<p id=""idCenterContent"">");
    	if(vPage == 0)
		{
			Response.Write("Here are projects based in the Antarrea universe:</br>");
			Response.Write("</br>");
			Response.Write("Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>");
			Response.Write("Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>");
			Response.Write("Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>");
			Response.Write("Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>");
			Response.Write("Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>");
			Response.Write("Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>");
		}
		else if(vPage == 1)
		{
			Response.Write("Team Tactical: Crash Ball is a tactical board game centered on a battle version of football.</br>");
		}
		else if(vPage == 2)
		{
			Response.Write("Wars of Antarrea is a table-top game where two or more armies battle for supremacy.</br>");
		}
		else if(vPage == 3)
		{
			Response.Write("Revolutions is a Tactical RPG with Invading Nations as its 1st story arc.</br>");
		}
		else if(vPage == 4)
		{
			Response.Write("Revolutions is a Tactical RPG with Rebellion Against the Fist as its 2nd story arc.</br>");
		}
		else if(vPage == 5)
		{
			Response.Write("Revolutions is a Tactical RPG with Return to Arms as its 3rd story arc.</br>");
		}
		else if(vPage == 6)
		{
			Response.Write("Revolutions is a Tactical RPG with Post Wars as its 4th story arc.</br>");
		}
	Response.Write("</p>");
}
function Versions(vPage)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Index.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Index.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Index.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Index.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Index.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Index"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Index.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Index.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Index.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Index.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Index.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Index"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Index.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Index"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Index"">Ruby On Rails</a><br>");
    }
	else if(vPage == 1)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project1.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project1.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project1.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project1.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project1.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project1"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project1.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project1.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project1.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project1.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project1.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project1"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project1.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project1"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project1"">Ruby On Rails</a><br>");
    }
	else if(vPage == 2)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project2.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project2.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project2.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project2.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project2.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project2"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project2.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project2.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project2.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project2.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project2.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project2"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project2.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project2"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project2"">Ruby On Rails</a><br>");
    }
	else if(vPage == 3)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project3.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project3.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project3.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project3.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project3.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project3"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project3.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project3.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project3.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project3.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project3.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project3"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project3.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project3"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project3"">Ruby On Rails</a><br>");
    }
	else if(vPage == 4)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project4.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project4.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project4.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project4.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project4.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project4"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project4.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project4.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project4.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project4.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project4.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project4"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project4.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project4"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project4"">Ruby On Rails</a><br>");
    }
	else if(vPage == 5)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project5.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project5.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project5.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project5.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project5.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project5"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project5.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project5.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project5.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project5.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project5.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project5"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project5.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project5"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project5"">Ruby On Rails</a><br>");
    }
	else if(vPage == 6)
	{
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project6.html"">HTML</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project6.php"">PHP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/VBScript/Section2/Section5/Section1/Project6.html"">HTML VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/JQuery/Section2/Section5/Section1/Project6.html"">JQuery</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section1/Project6.aspx"">ASP.NET VBScript</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:84/Section2/Section5/Section1/Project6"">Node JS</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/Section2/Section5/Section1/Project6.shtml"">Perl</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section1/Project6.vbsp"">JSP</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section1/Project6.xhtml"">JSF</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section1/Project6.cshtml"">ASP.NET Web App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section1/Project6.aspx"">ASP.NET Webform</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section1/Project6"">ASP.NET MVC App</a><br>");
		Response.Write("<a href=""http://htkb.dyndns.org/SSI/Section2/Section5/Section1/Project6.html"">Apache SSI</a><br>");
	    Response.Write("<a href=""http://htkb.dyndns.org:82/Section2/Section5/Section1/Project6"">Python Web.py</a><br>");
        Response.Write("<a href=""http://htkb.dyndns.org:83/Section2/Section5/Section1/Project6"">Ruby On Rails</a><br>");
    }
    
}