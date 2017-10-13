#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
use CGI;
##  Writes the structure of the webpage

print "Content-type: text/html\n\n"; 

my $CGI            = CGI->new();
my $CSS			   = $CGI->param('vCSS');
my $vPage           = $CGI->param('vPage');
my $vPath           = $CGI->param('vPath');
my $DownPath       = $CGI->param('vDownPath');
my $ScriptPath     = $CGI->param('vScriptPath');
my $ScriptDownPath = $CGI->param('vScriptDownPath');

require $ScriptPath."Universal.pm";
require $ScriptPath.$ScriptDownPath."Custom.pm";

print getHead($vLevel, $vDivision)

print "<table id=\"idTableMain\">";
    print "<tr id=\"idHeaderRow\">";
        print "<td id=\"idHeaderRowCenter\" colspan=\"3\">";
            #Universal level
            TitlePicture($vPath);
		print "</td>";
    print "</tr>";
    print "<tr id=\"idNavigationRow\">";
        print "<td id=\"idNavigationBar\" colspan=\"3\">";
            #Universal level
            NavBar($vPath);
        print "</td>";
    print "</tr>";
    print "<tr id=\"idCenterRow\">";
        print "<td id=\"idCenterRowLeft\">";
            print "<h4>";
				print "Navigation";
			print "</h4>";
			#from Custom
			Navigation($vPath,$DownPath);
        print "</td>";
		print "<td id=\"idCenterRowMain\">";
            #from Custom
			Title($vPage);
			Header($vPage);
			Content($vPage);
        print "</td>";
        print "<td id=\"idCenterRowRight\">";
            print "<h4>";
                print "Information";
			print "</h4>";
			#Universal level
			Information($vPage);                    
        print "</td>";
    print "</tr>";
    print "<tr id=\"idFooterRow\">";
		print "<td id=\"idFooterMain\" colspan=\"3\">";
            #Universal level
			Footer();
			WebMaster();
        print "</td>";
    print "</tr>";
print "</table>";
	
