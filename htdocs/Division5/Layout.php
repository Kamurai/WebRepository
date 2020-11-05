<?php
	function getNavigation($vLevel){
        $vResult = "
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Index.php\">Database Work</a></li>
				<li><a class=\"navlinkA\" href=\"./Project1.php\">Oracle</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2.php\">Derby</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3.php\">MySQL</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4.php\">SQL Server</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5.php\">Postgres</a></li>
			</ul>
		";	
        return $vResult;
    }
    
    function getBody($vPage, $vLevel){
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