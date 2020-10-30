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
			<li><a class=\"navlinkA\" href=\"./Project1.shtml\">Truth</a></li>
			<li><a class=\"navlinkA\" href=\"./Project2.shtml\">The Wrong Ninja</a></li>
			<li><a class=\"navlinkA\" href=\"./Project3.shtml\">Gynowars</a></li>
			<li><a class=\"navlinkA\" href=\"./Project4.shtml\">Terminal World</a></li>
			<li><a class=\"navlinkA\" href=\"./Project5.shtml\">Mars: Opposition</a></li>
			<li><a class=\"navlinkA\" href=\"./Section1/Index.shtml\">Antarrea</a></li>
			<li><a class=\"navlinkA\" href=\"./Section2/Index.shtml\">Renley</a></li>
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
