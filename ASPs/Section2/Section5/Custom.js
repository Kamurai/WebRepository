function Navigation(vLevel, vExtension)
{
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section1/Index"+GetExtension(vExtension)+"\">Gynowars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project2"+GetExtension(vExtension)+"\">Assault</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project3"+GetExtension(vExtension)+"\">Mars</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section4/Index"+GetExtension(vExtension)+"\">Renley</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section5/Index"+GetExtension(vExtension)+"\">Antarrea</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section1/Index"+GetExtension(vExtension)+"\">Global</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section2/Index"+GetExtension(vExtension)+"\">Grendol</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section3/Index"+GetExtension(vExtension)+"\">Utopia</a><br><br>");
		Response.Write("<a class=\"navlinkB\" href=\""+GetPath(vLevel)+"Section2/Section5/Section4/Index"+GetExtension(vExtension)+"\">Elvia</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Section6/Index"+GetExtension(vExtension)+"\">Editations</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project7"+GetExtension(vExtension)+"\">Truth</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project8"+GetExtension(vExtension)+"\">Kingdoms</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project9"+GetExtension(vExtension)+"\">Terminal World</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project10"+GetExtension(vExtension)+"\">Monster Office Workplace</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project11"+GetExtension(vExtension)+"\">Battle Princesses</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project12"+GetExtension(vExtension)+"\">Sacred Offerings</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project13"+GetExtension(vExtension)+"\">The Way</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project14"+GetExtension(vExtension)+"\">Conspiratorium</a><br><br>");
	Response.Write("<a class=\"navlinkA\" href=\""+GetPath(vLevel)+"Section2/Project15"+GetExtension(vExtension)+"\">Conversion</a><br><br>");

}

function Title(vPage)
{
	Response.Write("<title>");
		if(vPage == 0)
		{
			Response.Write("Antarrea Projects");
		}
	Response.Write("</title>");
}

function Header(vPage)
{
	Response.Write("<h2>");
		if(vPage == 0)
		{
			Response.Write("Antarrea Projects");
		}
	Response.Write("</h2>");

}

function Content(vPage)
{
	Response.Write("<p id=\"idCenterContent\">");
    	if(vPage == 0)
		{
					Response.Write("Global:");
			Response.Write("<br/>");
			Response.Write("<br/>");
				Response.Write("Here are projects based in the Antarrea universe:</br>");
				Response.Write("</br>");
				Response.Write("Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>");
				Response.Write("Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>");
				Response.Write("Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>");
				Response.Write("Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>");
				Response.Write("Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>");
				Response.Write("Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>");
			Response.Write("<br/>");
			Response.Write("<br/>");
					Response.Write("Grendol:");
			Response.Write("<br/>");
			Response.Write("<br/>");
				Response.Write("Here are projects based in the Grendol universe:</br>");
				Response.Write("</br>");
				Response.Write("Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>");
				Response.Write("Grendol: Coliseum: Arena:                         CCG.</br>");
			Response.Write("<br/>");
			Response.Write("<br/>");
					Response.Write("Utopia:");
			Response.Write("<br/>");
			Response.Write("<br/>");
				Response.Write("Here are projects based in the Utopia universe:</br>");
				Response.Write("</br>");
				Response.Write("Avia: Elemental Angels: Adventure game with RPG elements.</br>");
			Response.Write("<br/>");
			Response.Write("<br/>");
					Response.Write("Elvia:");
			Response.Write("<br/>");
			Response.Write("<br/>");
				Response.Write("Here are projects based in the Elvia universe:</br>");
				Response.Write("</br>");
				Response.Write("Nine Card: Tactical card game.</br>");
		}
	Response.Write("</p>");
}

function Versions(vPage)
{
	Response.Write("Other versions of this page are here:<br>");
	if(vPage == 0)
	{
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/index.html\">HTML</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/index.php\">PHP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/index.aspx\">ASP.NET Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/index.asp\">ASP Javascript</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/Section2/Section5/index.shtml\">Perl</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/index.jsp\">JSP</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/index.xhtml\">JSF</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/index.cshtml\">ASP.NET Web App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/index.aspx\">ASP.NET Webform</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/index\">ASP.NET MVC App</a><br>");
		Response.Write("<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/index.html\">Apache SSI</a><br>");
	}
    
}