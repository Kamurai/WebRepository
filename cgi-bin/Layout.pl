#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
use CGI;

##  Gets the structure of the webpage

print "Content-type: text/html\n\n"; 

my $CGI            = CGI->new();
my $vPage          = $CGI->param('vPage');
my $vLevel         = $CGI->param('vLevel');
my $vDivision	   = $CGI->param('vDivision');

require "../../Universal.pm";
require getPath($vLevel)."Custom.pm";

print getHead($vLevel, $vDivision)

print getLayout($vPage, $vLevel);


##  Gets the navigation content of the webpage
sub Navigation
{
	my $vLevel = $_[0];
	my $vResult = "";

	$vResult += "<a class=\"navlinkA\" href='".getPath($vLevel).$DownPath."AboutUs.shtml'>About Us</a><br><br>";
	$vResult += "<a class=\"navlinkA\" href='".getPath($vLevel).$DownPath."Media.shtml'>Media</a><br><br>";
	$vResult += "<a class=\"navlinkA\" href='".getPath($vLevel).$DownPath."Minecraft.shtml'>Minecraft!</a><br><br>";
	
	return $vResult;
}

sub getLayout
{
	my $vPage = $_[0];
	my $vLevel = $_[1];
	my $vResult = "";

	$vResult += "<table id=\"idTableMain\">";
		$vResult += "<tr id=\"idHeaderRow\">";
			$vResult += "<td id=\"idHeaderRowCenter\" colspan=\"3\">";
				#from Universal
				$vResult += getLogo($vLevel);
			$vResult += "</td>";
		$vResult += "</tr>";
		$vResult += "<tr id=\"idNavigationRow\">";
			$vResult += "<td id=\"idNavigationBar\" colspan=\"3\">";
				#from Universal
				$vResult += getNavBar($vLevel);
			$vResult += "</td>";
		$vResult += "</tr>";
		$vResult += "<tr id=\"idCenterRow\">";
			$vResult += "<td id=\"idCenterRowLeft\">";
				#from Universal
				$vResult += getNavigationHeader();
				#from Layout
				$vResult += getNavigation($vLevel);
			$vResult += "</td>";
			$vResult += "<td id=\"idCenterRowMain\">";
				#from Custom
				$vResult += getTitle($vPage);
				$vResult += getContentHeader($vPage);
				$vResult += getContent($vPage);
			$vResult += "</td>";
			$vResult += "<td id=\"idCenterRowRight\">";
				#from Universal
				$vResult += getInformationHeader();
				$vResult += getInformation($vPage);
				$vResult += getVersions($vPage);
			$vResult += "</td>";
		$vResult += "</tr>";
		$vResult += "<tr id=\"idFooterRow\">";
			$vResult += "<td id=\"idFooterMain\" colspan=\"3\">";
				#from Universal
				$vResult += getFooter();
				$vResult += getWebMaster();
			$vResult += "</td>";
		$vResult += "</tr>";
	$vResult += "</table>";

	return $vResult;
}
