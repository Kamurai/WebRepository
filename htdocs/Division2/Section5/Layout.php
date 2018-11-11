<?php
	function getNavigation($vLevel)
    {
        $vResult = '';
		
		    $vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section1/Index.php\'>Gynowars</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project2.php\'>Assault</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project3.php\'>Mars</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section4/Index.php\'>Renley</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section5/Index.php\'>Antarrea</a></br></br>';
                $vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Index.php\'>Global</a></br></br>';
                $vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section2/Index.php\'>Grendol</a></br></br>';
                $vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section3/Index.php\'>Utopia</a></br></br>';
                $vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section4/Index.php\'>Elvia</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project6.php\'>divuth</a></br></br>';
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
    
    function getBody($vPage, $vLevel)
    {
        $vResult = '';
		
        $vResult = $vResult.'<body>';
            $vResult = $vResult.'<div id=\'idGeneralLayout\'>';
                $vResult = $vResult.'<header id=\'idHeaderRow\'>';
                    $vResult = $vResult.'<div id=\'idHeaderRowCenter\'>';
                        $vResult = $vResult.getLogo($vLevel);
					$vResult = $vResult.'</div>';
                $vResult = $vResult.'</header>';
                $vResult = $vResult.'<nav id=\'idNavigationRow\'>';
                    $vResult = $vResult.'<div id=\'idNavigationBar\'>';
                        $vResult = $vResult.getNavBar($vLevel);
					$vResult = $vResult.'</div>';
                $vResult = $vResult.'</nav>';
                $vResult = $vResult.'<div id=\'idCenterRow\'>';
                    $vResult = $vResult.'<div id=\'idCenterRowLeft\'>';
                        $vResult = $vResult.getNavigationHeader();
                        $vResult = $vResult.getNavigation($vLevel);
					$vResult = $vResult.'</div>';
                    $vResult = $vResult.'<div id=\'idCenterRowMain\'>';
						$vResult = $vResult.getTitle($vPage);
						$vResult = $vResult.'<h2>';
                            $vResult = $vResult.getContentHeader($vPage);
						$vResult = $vResult.'</h2>';
                        $vResult = $vResult.'<div id=\'idCenterContent\'>';
                            $vResult = $vResult.getContent($vPage);
						$vResult = $vResult.'</div>';
                    $vResult = $vResult.'</div>';
                    $vResult = $vResult.'<div id=\'idCenterRowRight\'>';
                        $vResult = $vResult.getInformationHeader();
					    $vResult = $vResult.getInformation();
                        $vResult = $vResult.getVersions($vPage);
					$vResult = $vResult.'</div>';
                $vResult = $vResult.'</div>';
                $vResult = $vResult.'<Footer id=\'idFooterRow\'>';
                    $vResult = $vResult.'<div id=\'idFooterMain\'>';
                        $vResult = $vResult.getFooter();
                        $vResult = $vResult.getWebMaster();
					$vResult = $vResult.'</div>';
                $vResult = $vResult.'</Footer>';
            $vResult = $vResult.'</div>';
        $vResult = $vResult.'</body>';
		
		return $vResult;
    }
?>