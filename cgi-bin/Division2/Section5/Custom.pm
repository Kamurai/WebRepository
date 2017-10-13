sub Navigation
{
	##  Writes the navigation content of the webpage

	my $Path = $_[0];
	my $DownPath = $_[1];
	
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section1/Index.shtml'>Gynowars</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project2.shtml'>Assault</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project3.shtml'>Mars</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section4/Index.shtml'>Renley</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Section5/Index.shtml'>Antarrea</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section1/Index.shtml'>Global</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section2/Index.shtml'>Grendol</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section3/Index.shtml'>Utopia</a><br><br>";
		print "<a class=\"navlinkB\" href='".$Path."Section2/Section5/Section4/Index.shtml'>Elvia</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project6.shtml'>Truth</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project7.shtml'>Kingdoms</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project8.shtml'>Terminal World</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project9.shtml'>Monster Office Workplace</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project10.shtml'>Battle Princesses</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project11.shtml'>Sacred Offerings</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project12.shtml'>The Way</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project13.shtml'>Conspiratorium</a><br><br>";
	print "<a class=\"navlinkA\" href='".$Path."Section2/Project14.shtml'>Conversion</a><br><br>";

}

sub Title
{
	##  Writes the Title of the webpage

	my $vPage = $_[0];

	print "<title>";
		if($vPage <= 0)
		{
			print "Antarrea Projects";
		}
	print "</title>";
}

sub Header
{
	##  Writes the header of the webpage content

	my $vPage = $_[0];

	if($vPage <= 0)
	{
		print "<h2>";
			print "Antarrea Projects";
		print "</h2>";
	}
}

sub Content
{
	##  Writes the content of the webpage
	my $vPage = $_[0];

	print "<p id=\"idCenterContent\">";
		if($vPage <= 0)
		{
					print "Global:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Antarrea universe:</br>";
				print "</br>";
				print "Team Tactical: Crash Ball:               Tactical board game centered on a battle version of football.</br>";
				print "Wars of Antarrea:                        Table-top game where two or more armies battle for supremacy.</br>";
				print "Revolutions: Invading Nations:           Tactical RPG, 1st story arc.</br>";
				print "Revolutions: Rebellion Against the Fist: Tactical RPG, 2nd story arc.</br>";
				print "Revolutions: Return to Arms:             Tactical RPG, 3rd story arc.</br>";
				print "Revoultions: Post Wars:                  Tactical RPG, 4th story arc.</br>";
			print "<br>";
			print "<br>";
					print "Grendol:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Grendol universe:</br>";
				print "</br>";
				print "Grendol: Land of the Orcish Empire: Age of Magic: CCG.</br>";
				print "Grendol: Coliseum: Arena:                         CCG.</br>";
			print "<br>";
			print "<br>";
					print "Utopia:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Utopia universe:</br>";
				print "</br>";
				print "Avia: Elemental Angels: Adventure game with RPG elements.</br>";
			print "<br>";
			print "<br>";
					print "Elvia:";
			print "<br>";
			print "<br>";
				print "Here are projects based in the Elvia universe:</br>";
				print "</br>";
				print "Nine Card: Tactical card game.</br>";
		
		}
	print "</p>";


}

sub Versions
{
	my $vPage = $_[0];

	print "Other versions of this page are here:<br>";
	if($vPage <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Index.asp\">ASP VBscript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Index\">Ruby On Rails</a><br>";
	}

}

1;