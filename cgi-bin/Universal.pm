##  Gets the header of the webpage
sub getHead
{
	my $vLevel = $_[0];
	my $vDivision = $_[1];
	my $vResult = "";
	
	$vResult .= "<head>";
		$vResult .= "<meta http-equiv=\'Content-Type\' content=\'text/html; charset=ISO-8859-1\'>";
		$vResult .= getStyle($vLevel, $vDivision);
	$vResult .= "</head>";
	
	return $vResult;
}

## Declare a link to the style sheet
sub getStyle
{
	my $vLevel = $_[0];
	my $vDivision = $_[1];
	my $vResult = "";

	$vResult .= "<link href='http://htkb.dyndns.org/Styles/".getStyleFile($vDivision)."' rel='stylesheet' type='text/css'>";
	
	return $vResult;
}

sub getStyleFile
{
	my $vDivision = $_[0];
	
	my $vResult = "";
	my $vDefault = "Main.css";
	
	if($vDivision == 0)
	{
		$vResult .= $vDefault;
	}
	elsif($vDivision == 1)
	{
		$vResult .= "Division1.css";
	}
	elsif($vDivision == 2)
	{
		$vResult .= "Division2.css";
	}
	elsif($vDivision == 3)
	{
		$vResult .= "Division3.css";
	}
	else
	{
		$vResult .= $vDefault;
	}
	
	return $vResult;
}

sub getLogo
{
	##  Gets the title picture of the webpage

	my $vLevel = $_[0];
	my $vResult = "";

	$vResult .= "<img id=\"idLogo\" src='http://htkb.dyndns.org/Pictures/logoHTKB.jpg'><br>";
	
	return $vResult;
}

sub getNavBar
{
	##  Gets the navigation bar of the webpage

	my $vLevel = $_[0];
	
	my $vResult = "";

	$vResult .= "<a class=\"navBar\" href='".getPath($vLevel)."Index.shtml'>Home</a>";
	$vResult .= "<a class=\"navBar\" href='".getPath($vLevel)."Division1/Index.shtml'>Web Programming</a>";
	$vResult .= "<a class=\"navBar\" href='".getPath($vLevel)."Division2/Index.shtml'>Private Projects</a>";
	$vResult .= "<a class=\"navBar\" href='".getPath($vLevel)."Division3/Index.shtml'>Downloadable Projects</a>";
	
	return $vResult;
}

sub getNavigationHeader
{
	##  Gets the Navigaton Header

	my $vResult = "";

	$vResult .= "<h4>";
	$vResult .= "Navigation";
	$vResult .= "</h4>";
	
	return $vResult;
}

sub getInformationHeader
{
	##  Gets the Information Header

	my $vResult = "";

	$vResult .= "<h4>";
	$vResult .= "Information";
	$vResult .= "</h4>";
	
	return $vResult;
}

sub getInformation
{
	##  Gets the Information section of the webpage

	my $vResult = "";

	$vResult .= "This page is written using Perl.<br>";
	$vResult .= "Other versions of this page are here:<br>";
		
	return $vResult;
}

sub getGDR
{
	##  Gets the footer of the webpage
	
	my $vResult = "";

	$vResult .= "<a href='http://htkb.dyndns.org/Downloads/GDR.zip'>You can download my Games Development Report here.</a></br>";
	
	return $vResult;
}

sub getWinRar
{
	##  Gets the footer of the webpage

	my $vResult = "";

	$vResult .= "<a href='http://htkb.dyndns.org/Downloads/wrar371.exe'>You may need WinRar to open zip files from this site.</a></br>";
	
	return $vResult;
}

sub getFooter
{
	##  Gets the footer of the webpage

	my $vResult = "";
	
	$vResult .= "<div id=\"idFooterContent\">";
		$vResult .= "© Copyright 2012 All rights reserved<br>";
		$vResult .= "House That Kamurai Built<br>";
	$vResult .= "</div>";
	
	return $vResult;
}

sub getWebMaster
{
	##  Gets the webmaster of the webpage
								
	my $vResult = "";
	
	$vResult .= "<div id=\"idFooterManagement\">";
		$vResult .= "Website managed by Kamurai.";
	$vResult .= "</div>";
	
	return $vResult;
}

sub getPath
{
	##  Gets the base path based on the level of the webpage

	my $vLevel = $_[0];

	my $vResult = "";


	if($vLevel <= 0)
	{
		$vResult .= "./";
	}
	elsif($vLevel == 1)
	{
		$vResult .= "../";
	}
	elsif($vLevel == 2)
	{
		$vResult .= "../../";
	}
	elsif($vLevel == 3)
	{
		$vResult .= "../../../";
	}
	elsif($vLevel == 4)
	{
		$vResult .= "../../../../";
	}
	elsif($vLevel == 5)
	{
		$vResult .= "../../../../../";
	}
	elsif($vLevel == 6)
	{
		$vResult .= "../../../../../../";
	}
	elsif($vLevel == 7)
	{
		$vResult .= "../../../../../../../";
	}
	elsif($vLevel == 8)
	{
		$vResult .= "../../../../../../../../";
	}
	elsif($vLevel == 9)
	{
		$vResult .= "../../../../../../../../../";
	}
	elsif($vLevel == 10)
	{
		$vResult .= "../../../../../../../../../../";
	}

	return $vResult;
}

1;