function Navigation(vLevel)
{
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index.html\">Gynowars</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2.html\">Assault</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3.html\">Mars</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index.html\">Renley</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index.html\">Antarrea</a><br><br>");
	$( "#idCenterRowLeft" ).append( "<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section6/Index.html\">Editations</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section6/Project1.html\">Magic: The Tactical</a><br><br>");
		$( "#idCenterRowLeft" ).append( "<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Index.html\">Warhammer 40K</a><br><br>");
			$( "#idCenterRowLeft" ).append( "<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section6/Project1.html\">Mission!</a><br><br>");
			$( "#idCenterRowLeft" ).append( "<a class=\"navlinkC\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Index.html\">HTKB Armies</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project1.html\">Ad Infinitum</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project2.html\">Avia</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project3.html\">De Luna</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project4.html\">Eve</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project5.html\">Geo Marines</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project6.html\">Twin Fists</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project7.html\">Voboulids</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project8.html\">Fungi</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project9.html\">Synergy</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project10.html\">The Dark</a><br><br>");
				$( "#idCenterRowLeft" ).append( "<a class=\"navlinkD\" href=\""+GetPath(vLevel)+"Section2/Section6/Section2/Section2/Project11.html\">Vivus Mortem</a><br><br>");
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
	else if(vPage == 1)
	{
		vResult += "Ad Infinitum";
	}
	else if(vPage == 2)
	{
		vResult += "Avia";
	}
	else if(vPage == 3)
	{
		vResult += "De Luna";
	}
	else if(vPage == 4)
	{
		vResult += "Eve";
	}
	else if(vPage == 5)
	{
		vResult += "Geo Marines";
	}
	else if(vPage == 6)
	{
		vResult += "Twin Fists";
	}
	else if(vPage == 7)
	{
		vResult += "Voboulids";
	}
	else if(vPage == 8)
	{
		vResult += "Fungi";
	}
	else if(vPage == 9)
	{
		vResult += "Synergy";
	}
	else if(vPage == 10)
	{
		vResult += "The Dark";
	}
	else if(vPage == 11)
	{
		vResult += "Vivus Mortem";
	}
	else
    {
        vResult += vDefault;
    }
    $(document).prop("title", vResult);
}

function Header(vPage)
{
	var vDefault = "HTKB Armies";	var vResult = "";	var tableRowCenterMainHeader = document.createElement("h2");
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "Ad Infinitum";
	}
	else if(vPage == 2)
	{
		vResult += "Avia";
	}
	else if(vPage == 3)
	{
		vResult += "De Luna";
	}
	else if(vPage == 4)
	{
		vResult += "Eve";
	}
	else if(vPage == 5)
	{
		vResult += "Geo Marines";
	}
	else if(vPage == 6)
	{
		vResult += "Twin Fists";
	}
	else if(vPage == 7)
	{
		vResult += "Voboulids";
	}
	else if(vPage == 8)
	{
		vResult += "Fungi";
	}
	else if(vPage == 9)
	{
		vResult += "Synergy";
	}
	else if(vPage == 10)
	{
		vResult += "The Dark";
	}
	else if(vPage == 11)
	{
		vResult += "Vivus Mortem";
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
		vResult += "This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.";
	}
	else if(vPage == 1)
	{
		vResult += "Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ";
		vResult += "as they are not known to negotiate.  While some technology has been recovered, it is rare ";
		vResult += "to find anything viable after battles.";
	}
	else if(vPage == 2)
	{
		vResult += "The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ";
		vResult += "glide for short times without technological assistance.";
	}
	else if(vPage == 3)
	{
		vResult += "De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ";
		vResult += "While De Luna are automated vehicles, wreckage has determine that there are seats for ";
		vResult += "pilots.  Theories range from A.I. control to remote communication.";
	}
	else if(vPage == 4)
	{
		vResult += "The Eve are a race of terrifying beast creatures. ";
		vResult += "These Xenos somewhat resemble large cats.";
	}
	else if(vPage == 5)
	{
		vResult += "Geo Marines are a specialized Chapter concentrating equipment speciality.";
	}
	else if(vPage == 6)
	{
		vResult += "This lost Chapter spent far too long stranded outside the reach of civilisation.  ";
		vResult += "The Twin Fists specialize in close combat battles.";
	}
	else if(vPage == 7)
	{
		vResult += "Vouboulids are a plant-like group of entities.  Using a hive structure, ";
		vResult += "these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.";
	}
	else if(vPage == 8)
	{
		vResult += "These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ";
		vResult += "Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.";
	}
	else if(vPage == 9)
	{
		vResult += "These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.";
	}
	else if(vPage == 10)
	{
		vResult += "The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.";
	}
	else if(vPage == 11)
	{
		vResult += "Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ";
		vResult += "have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ";
		vResult += "take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ";
		vResult += "and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to \"turn to ash\".";
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
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.html\">HTML</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.php\">PHP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/index.asp\">ASP Javascript</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/index.shtml\">Perl</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/index.jsp\">JSP</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/index.xhtml\">JSF</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/index.cshtml\">ASP.NET Web App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/index.aspx\">ASP.NET Webform</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/index\">ASP.NET MVC App</a><br>";
	vDefault += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/index.html\">Apache SSI</a><br>";

	var vResult = "";
    
	if(vPage == 0)
	{
		vResult += vDefault;
	}
	else if(vPage == 1)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project1.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project1.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project1.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project1.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project1.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project1.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project1\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project1.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 2)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project2.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project2.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project2.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project2.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project2.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project2.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project2\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project2.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 3)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project3.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project3.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project3.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project3.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project3.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project3.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project3\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project3.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 4)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project4.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project4.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project4.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project4.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project4.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project4.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project4\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project4.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 5)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project5.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project5.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project5.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project5.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project5.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project5.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project5\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project5.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 6)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project6.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project6.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project6.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project6.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project6.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project6.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project6\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project6.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 7)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project7.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project7.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project7.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project7.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project7.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project7.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project7\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project7.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 8)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project8.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project8.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project8.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project8.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project8.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project8.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project8\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project8.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 9)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project9.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project9.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project9.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project9.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project9.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project9.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project9\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project9.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 10)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project10.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project10.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project10.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project10.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project10.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project10.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project10\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project10.html\">Apache SSI</a><br>";
	
	}
	else if(vPage == 11)
	{
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.html\">HTML</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.php\">PHP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section6/Section2/Section2/Project11.asp\">ASP Javascript</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/Section2/Section6/Section2/Section2/Project11.shtml\">Perl</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section6/Section2/Section2/Project11.jsp\">JSP</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section6/Section2/Section2/Project11.xhtml\">JSF</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section6/Section2/Section2/Project11.cshtml\">ASP.NET Web App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section6/Section2/Section2/Project11.aspx\">ASP.NET Webform</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section6/Section2/Section2/Project11\">ASP.NET MVC App</a><br>";
		vResult += "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section6/Section2/Section2/Project11.html\">Apache SSI</a><br>";
	
	}
    else
    {
		vResult += vDefault;
	}
	$( "#idCenterRowRight" ).append( vResult );

}