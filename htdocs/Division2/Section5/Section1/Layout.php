<?php
	include './Custom.php';
	
    function getNavigation($vLevel)
    {
        $vResult = '';
		
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section1/Index.php\'>Gynowars</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project2.php\'>Assault</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project3.php\'>Mars</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section4/Index.php\'>Renley</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section5/Index.php\'>Antarrea</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Index.php\'>Global:</a></br></br>';
				$vResult = $vResult.'<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Project1.php\'>Team Tactial: Crash Ball</a></br></br>';
				$vResult = $vResult.'<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Project2.php\'>Wars of Antarrea</a></br></br>';
				$vResult = $vResult.'<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Project3.php\'>Revolutions: Invading Nations:</a></br></br>';
				$vResult = $vResult.'<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Project4.php\'>Revolutions: Rebellion Against the Fist</a></br></br>';
				$vResult = $vResult.'<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Project5.php\'>Revolutions: Return to Arms</a></br></br>';
				$vResult = $vResult.'<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Project6.php\'>Revolutions: Post Wars</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href='.getPath($vLevel).'Division2/Section5/Section2/Index.php\'>Grendol:</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href='.getPath($vLevel).'Division2/Section5/Section3/Index.php\'>Utopia:</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href='.getPath($vLevel).'Division2/Section5/Section4/Index.php\'>Elvia:</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project6.php\'>Truth</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project7.php\'>Kingdoms</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project8.php\'>Terminal World</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project9.php\'>Monster Office Workplace</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project10.php\'>Battle Princesses</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project11.php\'>Sacred Offerings</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project12.php\'>The Way</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project13.php\'>Conspiratorium</a></br></br>';
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project14.php\'>Conversion</a></br></br>';
		
        return $vResult;
    }
    
    function getBody($vPage, $vLevel);
    {
        $vResult = '';
		
        $vResult = $vResult.'<body id=\'idBody\'>';
            $vResult = $vResult.'<table id=\'idTableMain\'>';
                $vResult = $vResult.'<tr id=\'idHeaderRow\'>';
                    $vResult = $vResult.'<td id=\'idHeaderRowCenter\' colspan=\'3\'>';
                        $vResult = $vResult.getLogo($vLevel);
					$vResult = $vResult.'</td>';
                $vResult = $vResult.'</tr>';
                $vResult = $vResult.'<tr id=\'idNavigationRow\'>';
                    $vResult = $vResult.'<td id=\'idNavigationBar\' colspan=\'3\'>';
                        $vResult = $vResult.getNavBar($vLevel);
					$vResult = $vResult.'</td>';
                $vResult = $vResult.'</tr>';
                $vResult = $vResult.'<tr id=\'idCenterRow\'>';
                    $vResult = $vResult.'<td id=\'idCenterRowLeft\'>';
                        $vResult = $vResult.getNavigationHeader();
                        $vResult = $vResult.getNavigation($vLevel);
					$vResult = $vResult.'</td>';
                    $vResult = $vResult.'<td id=\'idCenterRowMain\'>';
						$vResult = $vResult.getTitle($vPage);
						$vResult = $vResult.'<h2>';
                            $vResult = $vResult.getContentHeader($vPage);
						$vResult = $vResult.'</h2>';
                        $vResult = $vResult.'<p id=\'idCenterContent\'>';
                            $vResult = $vResult.getContent($vPage);
						$vResult = $vResult.'</p>';
                    $vResult = $vResult.'</td>';
                    $vResult = $vResult.'<td id=\'idCenterRowRight\'>';
                        $vResult = $vResult.getInformationHeader();
					    $vResult = $vResult.getInformation();
                        $vResult = $vResult.getVersions($vPage);
					$vResult = $vResult.'</td>';
                $vResult = $vResult.'</tr>';
                $vResult = $vResult.'<tr id=\'idFooterRow\'>';
                    $vResult = $vResult.'<td id=\'idFooterMain\' colspan=\'3\'>';
                        $vResult = $vResult.getFooter();
                        $vResult = $vResult.getWebMaster();
					$vResult = $vResult.'</td>';
                $vResult = $vResult.'</tr>';
            $vResult = $vResult.'</table>';
        $vResult = $vResult.'</body>';
		
		return $vResult;
    }
?>