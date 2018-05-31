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