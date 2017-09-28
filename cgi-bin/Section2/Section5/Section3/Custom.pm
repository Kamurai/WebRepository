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
			print "<a class=\"navlinkC\" href='".$Path."Section2/Section5/Section3/Project1.shtml'>Avia:Elemental Angels</a><br><br>";
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

	my $Page = $_[0];

	print "<title>";
		if($Page <= 0)
		{
			print "Utopia";
		}
		elsif($Page == 1)
		{
			print "Elemental Angels";
		}
	print "</title>";
}

sub Header
{
	##  Writes the header of the webpage content

	my $Page = $_[0];

	if($Page <= 0)
	{
		print "<h2>";
			print "Utopia";
		print "</h2>";
	}
	elsif($Page == 1)
	{
		 print "<h2>";
			print "Elemental Angels";
		print "</h2>";
	}
}

sub Content
{
	##  Writes the content of the webpage
	my $Page = $_[0];

	print "<p id=\"idCenterContent\">";
		if($Page <= 0)
		{
			print "Here are projects based in the Utopia Nation:</br>";
			print "</br>";
			print "Elemental Angels: An adventure game with RPG elements based in the Avia Nation.</br>";
		}
		elsif($Page == 1)
		{
			print "Elemental Angels: Adventure game with RPG elements based in the Avia Nation.</br>";
		}
	print "</p>";


}

sub Versions
{
	my $Page = $_[0];

	print "Other versions of this page are here:<br>";
	if($Page <= 0)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/index.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/index.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/index.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/index.asp\">ASP Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/index.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section3/index\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/index.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/index.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/index.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/index.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/index\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/index.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section3/index\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section3/index\">Ruby On Rails</a><br>";
		
	}
	elsif($Page == 1)
	{
		print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.html\">HTML</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Section2/Section5/Section3/Project1.php\">PHP</a><br>";
        print "<a href=\"http://htkb.dyndns.org/Javascript/Section2/Section5/Section3/Project1.html\">HTML Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org/JQuery/Section2/Section5/Section3/Project1.html\">JQuery</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASP/Section2/Section5/Section3/Project1.asp\">ASP Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/ASPNET/Section2/Section5/Section3/Project1.aspx\">ASP.NET Javascript</a><br>";
        print "<a href=\"http://htkb.dyndns.org:84/Section2/Section5/Section3/Project1\">Node JS</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSPApplication/Section2/Section5/Section3/Project1.jsp\">JSP</a><br>";
        print "<a href=\"http://htkb.dyndns.org:8080/JSFApplication/Section2/Section5/Section3/Project1.xhtml\">JSF</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebApplication/Section2/Section5/Section3/Project1.cshtml\">ASP.NET Web App</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/WebForm/Section2/Section5/Section3/Project1.aspx\">ASP.NET Webform</a><br>";
        print "<a href=\"http://htkb.dyndns.org:81/MVC/Main/Section2/Section5/Section3/Project1\">ASP.NET MVC App</a><br>";
        print "<a href=\"http://htkb.dyndns.org/SSI/Section2/Section5/Section3/Project1.html\">Apache SSI</a><br>";
        print "<a href=\"http://htkb.dyndns.org:82/Section2/Section5/Section3/Project1\">Python Web.py</a><br>";
        print "<a href=\"http://htkb.dyndns.org:83/Section2/Section5/Section3/Project1\">Ruby On Rails</a><br>";
	}
	
}

1;