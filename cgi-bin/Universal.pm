sub getHead
{
	##  Gets the header of the webpage

	my $vLevel = $_[0];
	my $vDivision = $_[1];
	my $vResult = "";

	$vResult += "<head>";
		$vResult += "<meta http-equiv=\'Content-Type\' content=\'text/html; charset=ISO-8859-1\'>";
		$vResult += getStyle($vLevel, $vDivision);
	$vResult += "</head>";
	
	return $vResult;
}

sub getStyle
{
	## Declare a link to the style sheet
	
	my $vLevel = $_[0];
	my $vDivision = $_[1];
	
	return "<link href='"+getStyleFile($vDivision)+"' rel='stylesheet' type='text/css'>";
}

sub getStyleFile
{
	my $vDivision = $_[0];
	
	my $vResult = "";
	my $vDefault = "Main.css";
	
	if($vDivision == 0)
	{
		$vResult = $vDefault;
	}
	elsif($vLevel == 1)
	{
		$vResult = "Division1.css";
	}
	elsif($vLevel == 2)
	{
		$vResult = "Division2.css";
	}
	elsif($vLevel == 3)
	{
		$vResult = "Division3.css";
	}
	else
	{
		$vResult = $vDefault;
	}
	
	return $vResult;
}

sub getLogo
{
	##  Gets the title picture of the webpage

	my $vPath = $_[0];
	my $vResult = "";

	$vResult += "<img id=\"idLogo\" src='".$vPath."/Pictures/logoHTKB.jpg'><br>";
	
	return $vResult;
}

sub getNavBar
{
	##  Writes the navigation bar of the webpage

	my $vLevel = $_[0];
	
	my $vResult = "";

	$vResult += "<a class=\"navBar\" href='".$vPath."Index.shtml'>Home</a>";
	$vResult += "<a class=\"navBar\" href='".$vPath."Division1/Index.shtml'>Web Programming</a>";
	$vResult += "<a class=\"navBar\" href='".$vPath."Division2/Index.shtml'>Private Projects</a>";
	$vResult += "<a class=\"navBar\" href='".$vPath."Division3/Index.shtml'>Downloadable Projects</a>";
	
	return $vResult;
}

sub getNavigationHeader
{
	##  Gets the Navigaton Header

	my $vResult = "";

	$vResult += "<h4>";
	$vResult += "Navigation";
	$vResult += "</h4>";
	
	return $vResult;
}

sub getInformationHeader
{
	##  Gets the Information Header

	my $vResult = "";

	$vResult += "<h4>";
	$vResult += "Information";
	$vResult += "</h4>";
	
	return $vResult;
}

sub getInformation
{
	##  Gets the Information section of the webpage

	my $vResult = "";

	$vResult += "This page is written using Perl.";
	$vResult += "Other versions can be found here:";
	
	return $vResult;
}

sub getGDR
{
	##  Writes the footer of the webpage
	
	my $vResult = "";

	$vResult += "<a href='http://htkb.dyndns.org/Downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	
	return $vResult;
}

sub getWinRar
{
	##  Writes the footer of the webpage

	my $vResult = "";

	$vResult += "<a href='http://htkb.dyndns.org/Downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
	
	return $vResult;
}

sub getFooter
{
	##  Writes the footer of the webpage

	print "<p id=\"idFooterContent\">";
		print "� Copyright 2012 All rights reserved<br>";
		print "House That Kamurai Built<br>";
	print "</p>";
}

sub getWebMaster
{
	##  Writes the webmaster of the webpage
								
	print "<p id=\"idFooterManagement\">";
		print "Website managed by Kamurai.";
	print "</p>";
}

sub getPath
{
	##  Gets the base path based on the level of the webpage

	my $vLevel = $_[0];

	my $vResult = "";


	if($vLevel <= 0)
	{
		$vResult = "./";
	}
	elsif($vLevel == 1)
	{
		$vResult = "../";
	}
	elsif($vLevel == 2)
	{
		$vResult = "../../";
	}
	elsif($vLevel == 3)
	{
		$vResult = "../../../";
	}
	elsif($vLevel == 4)
	{
		$vResult = "../../../../";
	}
	elsif($vLevel == 5)
	{
		$vResult = "../../../../../";
	}
	elsif($vLevel == 6)
	{
		$vResult = "../../../../../../";
	}
	elsif($vLevel == 7)
	{
		$vResult = "../../../../../../../";
	}
	elsif($vLevel == 8)
	{
		$vResult = "../../../../../../../../";
	}
	elsif($vLevel == 9)
	{
		$vResult = "../../../../../../../../../";
	}
	elsif($vLevel == 10)
	{
		$vResult = "../../../../../../../../../../";
	}

	return $vResult;
}

1;