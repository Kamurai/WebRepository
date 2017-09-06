function Navigation(vLevel)
{
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index.html\">Gynowars</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2.html\">Assault</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3.html\">Mars</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index.html\">Renley</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index.html\">Antarrea</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section6/Index.html\">Editations</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7.html\">Truth</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8.html\">Kingdoms</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9.html\">Terminal World</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10.html\">Monster Office Workplace</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11.html\">Battle Princesses</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12.html\">Sacred Offerings</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13.html\">The Way</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14.html\">Conspiratorium</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project15.html\">Conversion</a><br><br>");

}

function Title(vPage)
{
	var vDefault = "HTKB Home Page"; 	var vResult = "";
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "Assault CCG";
	}
	else if(vPage == 3)
	{
		vResult += "Mars Projects";
	}
	else if(vPage == 7)
	{
		vResult += "Truth";
	}
	else if(vPage == 8)
	{
		vResult += "Kingdoms";
	}
	else if(vPage == 9)
	{
		vResult += "Terminal World";
	}
	else if(vPage == 10)
	{
		vResult += "Monster Office Workplace";
	}
	else if(vPage == 11)
	{
		vResult += "Battle Princesses";
	}
	else if(vPage == 12)
	{
		vResult += "Sacred Offerings";
	}
	else if(vPage == 13)
	{
		vResult += "The Way";
	}
	else if(vPage == 14)
	{
		vResult += "Conspiratorium";
	}
	else if(vPage == 15)
	{
		vResult += "Conversion";
	}
	else
    {
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function Header(vPage)
{
	var vDefault = "Private Projects";	var vResult = "";	var tableRowCenterMainHeader = document.createElement("h2");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "Assault CCG";
	}
	else if(vPage == 3)
	{
		vResult += "Mars Projects";
	}
	else if(vPage == 7)
	{
		vResult += "Truth";
	}
	else if(vPage == 8)
	{
		vResult += "Kingdoms";
	}
	else if(vPage == 9)
	{
		vResult += "Terminal World";
	}
	else if(vPage == 10)
	{
		vResult += "Monster Office Workplace";
	}
	else if(vPage == 11)
	{
		vResult += "Battle Princesses";
	}
	else if(vPage == 12)
	{
		vResult += "Sacred Offerings";
	}
	else if(vPage == 13)
	{
		vResult += "The Way";
	}
	else if(vPage == 14)
	{
		vResult += "Conspiratorium";
	}		
	else if(vPage == 15)
	{
		vResult += "Conversion";
	}
	else
    {
        vResult += vDefault;
    }
    tableRowCenterMainHeader.textContent = vResult;	$( "#idCenterRowMain" ).append( tableRowCenterMainHeader );
}

function Content(vPage)
{
	var vDefault = "This section is dedicated to HTKB projects.";	var vResult = "";	var tableRowCenterMainContent = document.createElement("p");	tableRowCenterMainContent.setAttribute("id", "idCenterContent");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "This section is dedicated CCG project \"Assault\".";
	}
	else if(vPage == 3)
	{
		vResult += "This section is dedicated to the Mars centered project \"Opposition\".";
	}
	else if(vPage == 7)
	{
		vResult += "This section is dedicated to the MMO RTS project \"Truth\".  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.";
	}
	else if(vPage == 8)
	{
		vResult += "This section is dedicated to the digital board game project \"Kingdoms\".  Explore the world\"s Kingdoms, get rich, get strong and conquer.";
	}
	else if(vPage == 9)
	{
		vResult += "This section is dedicated to the simulation MMO centered project \"Terminal World\".  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat";
		vResult += "the zombies?  Can you survive?";
	}
	else if(vPage == 10)
	{
		vResult += "This section is dedicated to the card and board game project \"Monster Office Workplace\".  These monsters mean serious business.";
		vResult += "Can you earn the most credit and smooze your way into a promotion?";
	}
	else if(vPage == 11)
	{
		vResult += "This section is dedicated to the card game project \"Battle Princesses\".  Ever wanted to see your favorite princess battle for the kingdom?";
		vResult += "These princess aren\"t your helpless maidens, but valiant warriors themselves.";
	}
	else if(vPage == 12)
	{
		vResult += "This section is dedicated to the board game project \"Sacred Offerings\".  Being a god is hard, you have to eat, but";
		vResult += "don\"t want to fall out favor with the people more than the other deities.";
		vResult += "Draw people to worship you, but be discerning about who is sacrificed.";
	}
	else if(vPage == 13)
	{
		vResult += "This section is dedicated to the card game project \"The Way\".  You seek to find enlightment by contemplating the elements.";
		vResult += "Escape the binds of the world and the board to reach enlightment and win.";
	}
	else if(vPage == 14)
	{
		vResult += "This section is dedicated to the board game project \"Conspiratorium\".";
		vResult += "A game of assassins and CIA, you must remember who is friend and who is not.";
	}
	else if(vPage == 15)
	{
		vResult += "This section is dedicated to the board game project \"Conversion\".";
		vResult += "Compete on the elemental market by processing elements and becoming the elemental kingpin.";
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
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/index.asp\">ASP Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/index.html\">Apache SSI</a><br>";
	var vResult = "";
	
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project2.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project2.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project2\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project2.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project3.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project3.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project3.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project3.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project3.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project3.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project3.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project3.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project3.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project3\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project3.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 7)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project7.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project7.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project7.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project7.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project7.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project7.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project7.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project7.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project7.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project7\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project7.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 8)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project8.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project8.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project8.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project8.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project8.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project8.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project8.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project8.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project8.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project8\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project8.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 9)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project9.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project9.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project9.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project9.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project9.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project9.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project9.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project9.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project9.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project9\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project9.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 10)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project10.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project10.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project10.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project10.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project10.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project10.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project10.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project10.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project10.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project10\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project10.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 11)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project11.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project11.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project11.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project11.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project11.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project11.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project11.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project11.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project11.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project11\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project11.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 12)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project12.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project12.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project12.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project12.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project12.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project12.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project12.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project12.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project12.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project12\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project12.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 13)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project13.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project13.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project13.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project13.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project13.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project13.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project13.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project13.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project13.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project13\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project13.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 14)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project14.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project14.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project14.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project14.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project14.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project14.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project14.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project14.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project14.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project14\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project14.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 15)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project15.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project15.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Project15.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Project15.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Project15.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Project15.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Project15.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Project15.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Project15.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Project15\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Project15.html\">Apache SSI</a><br>";
	}
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );

}