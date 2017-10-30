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
require "./Custom.pm";

print getHead($vLevel, $vDivision);
print getBody($vPage, $vLevel);


##  Gets the navigation content of the webpage
sub getNavigation
{
	my $vLevel = $_[0];
	my $vResult = "";

	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Section1/Index.shtml'>Gynowars</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project2.shtml'>Assault</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project3.shtml'>Mars</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Section4/Index.shtml'>Renley</a><br><br>";
		$vResult .= "<a class=\"navlinkB\" href='".getPath($vLevel)."Division2/Section4/Project1.shtml'>Warring Nations</a><br><br>";
		$vResult .= "<a class=\"navlinkB\" href='".getPath($vLevel)."Division2/Section4/Project2.shtml'>Psychodom: The One Empire</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Section5/Index.shtml'>Antarrea</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project6.shtml'>Truth</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project7.shtml'>Kingdoms</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project8.shtml'>Terminal World</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project9.shtml'>Monster Office Workplace</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project10.shtml'>Battle Princesses</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project11.shtml'>Sacred Offerings</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project12.shtml'>The Way</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project13.shtml'>Conspiratorium</a><br><br>";
	$vResult .= "<a class=\"navlinkA\" href='".getPath($vLevel)."Division2/Project14.shtml'>Conversion</a><br><br>";
	
	return $vResult;
}

sub getBody
{
	my $vPage = $_[0];
	my $vLevel = $_[1];
	my $vResult = "";

	$vResult .= "<body id=\"idBody\">";
		$vResult .= "<table id=\"idTableMain\">";
			$vResult .= "<tr id=\"idHeaderRow\">";
				$vResult .= "<td id=\"idHeaderRowCenter\" colspan=\"3\">";
					#from Universal
					$vResult .= getLogo($vLevel);
				$vResult .= "</td>";
			$vResult .= "</tr>";
			$vResult .= "<tr id=\"idNavigationRow\">";
				$vResult .= "<td id=\"idNavigationBar\" colspan=\"3\">";
					#from Universal
					$vResult .= getNavBar($vLevel);
				$vResult .= "</td>";
			$vResult .= "</tr>";
			$vResult .= "<tr id=\"idCenterRow\">";
				$vResult .= "<td id=\"idCenterRowLeft\">";
					#from Universal
					$vResult .= getNavigationHeader();
					#from Layout
					$vResult .= getNavigation($vLevel);
				$vResult .= "</td>";
				$vResult .= "<td id=\"idCenterRowMain\">";
					#from Custom
					$vResult .= getTitle($vPage);
					$vResult .= getContentHeader($vPage);
					$vResult .= getContent($vPage);
				$vResult .= "</td>";
				$vResult .= "<td id=\"idCenterRowRight\">";
					#from Universal
					$vResult .= getInformationHeader();
					$vResult .= getInformation($vPage);
					$vResult .= getVersions($vPage);
				$vResult .= "</td>";
			$vResult .= "</tr>";
			$vResult .= "<tr id=\"idFooterRow\">";
				$vResult .= "<td id=\"idFooterMain\" colspan=\"3\">";
					#from Universal
					$vResult .= getFooter();
					$vResult .= getWebMaster();
				$vResult .= "</td>";
			$vResult .= "</tr>";
		$vResult .= "</table>";
	$vResult .= "</body>";
	
	return $vResult;
}
