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

require "../Universal.pm";
require "./Custom.pm";

print getHead($vLevel, $vDivision);
print getBody($vPage, $vLevel);


##  gets the navigation content of the webpage
sub getNavigation{
	my $vLevel = $_[0];
	my $vResult = "";
	
	$vResult .= "
		<ul class=\"navigationUl\">
			<li><a class=\"navlinkA\" href=\"./Index.shtml\">Board Games</a></li>
			<li><a class=\"navlinkA\" href=\"./Project1.shtml\">The Way</a></li>
			<li><a class=\"navlinkA\" href=\"./Project2.shtml\">Sacred Offerings</a></li>
			<li><a class=\"navlinkA\" href=\"./Project3.shtml\">Conversion</a></li>
			<li><a class=\"navlinkA\" href=\"./Project4.shtml\">Conspiratorium</a></li>
			<li><a class=\"navlinkA\" href=\"./Project5.shtml\">Monster Office Workplace</a></li>
			<li><a class=\"navlinkA\" href=\"./Project6.shtml\">MacCreedy's Mansion</a></li>
			<li><a class=\"navlinkA\" href=\"./Project7.shtml\">Dundered Acre Wood</a></li>
			<li><a class=\"navlinkA\" href=\"./Project8.shtml\">Conquer</a></li>
			<li><a class=\"navlinkA\" href=\"./Project9.shtml\">Assault</a></li>
			<li><a class=\"navlinkA\" href=\"./Project10.shtml\">Battle Princesses</a></li>
			<li><a class=\"navlinkA\" href=\"./Project11.shtml\">Armor Up</a></li>
			<li><a class=\"navlinkA\" href=\"./Project12.shtml\">Gynowars: Battle Arena</a></li>
			<li><a class=\"navlinkA\" href=\"./Project13.shtml\">Land of the Orcish Empire: Age of Magic</a></li>
			<li><a class=\"navlinkA\" href=\"./Project14.shtml\">Coliseum: Arena</a></li>
			<li><a class=\"navlinkA\" href=\"./Project15.shtml\">Nine Card</a></li>
			<li><a class=\"navlinkA\" href=\"./Project16.shtml\">Wars of Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"./Project17.shtml\">Antarrea RPG</a></li>
			<li><a class=\"navlinkA\" href=\"./Project18.shtml\">Super Dungeon Adventure</a></li>
		</ul>
	";

	return $vResult;
}

sub getBody{
	my $vPage = $_[0];
	my $vLevel = $_[1];
	my $vResult = "";

	$vResult .= "<body>";
		$vResult .= "<div id=\"idGeneralLayout\">";
			$vResult .= "<Header id=\"idHeaderRow\">";
				$vResult .= "<div id=\"idHeaderRowCenter\">";
					#from Universal
					$vResult .= getLogo($vLevel);
				$vResult .= "</div>";
			$vResult .= "</Header>";
			$vResult .= "<Nav id=\"idNavigationRow\">";
				$vResult .= "<div id=\"idNavigationBar\">";
					#from Universal
					$vResult .= getNavBar($vLevel);
				$vResult .= "</div>";
			$vResult .= "</Nav>";
			$vResult .= "<div id=\"idCenterRow\">";
				$vResult .= "<div id=\"idCenterRowLeft\">";
					#from Universal
					$vResult .= getNavigationHeader();
					#from Layout
					$vResult .= getNavigation($vLevel);
				$vResult .= "</div>";
				$vResult .= "<div id=\"idCenterRowMain\">";
					#from Custom
					$vResult .= getTitle($vPage);
					$vResult .= getContentHeader($vPage);
					$vResult .= getContent($vPage);
				$vResult .= "</div>";
				$vResult .= "<div id=\"idCenterRowRight\">";
					#from Universal
					$vResult .= getInformationHeader();
					$vResult .= getInformation($vPage);
					$vResult .= getVersions($vPage);
				$vResult .= "</div>";
			$vResult .= "</div>";
			$vResult .= "<Footer id=\"idFooterRow\">";
				$vResult .= "<div id=\"idFooterMain\">";
					#from Universal
					$vResult .= getFooter();
					$vResult .= getWebMaster();
				$vResult .= "</div>";
			$vResult .= "</Footer>";
		$vResult .= "</div>";
	$vResult .= "</body>";
	
	return $vResult;
}
