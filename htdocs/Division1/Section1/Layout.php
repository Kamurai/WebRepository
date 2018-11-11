<?php
	function getNavigation($vLevel)
    {
        $vResult = '';
		
		$vResult = $vResult.'<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division1/Section1/Index.php\'>Databases</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division1/Section1/Project1.php\'>Oracle</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division1/Section1/Project2.php\'>Derby</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division1/Section1/Project3.php\'>MySQL</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division1/Section1/Project4.php\'>SQL Server</a></br></br>';
			$vResult = $vResult.'<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division1/Section1/Project5.php\'>Postgres</a></br></br>';
			
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