<?php
	function getNavigation($vLevel){
        $vResult = "";
		
		$vResult = "
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./AboutUs.php\">About Us</a></li>
				<li><a class=\"navlinkA\" href=\"./Media.php\">Media</a></li>
				<li><a class=\"navlinkA\" href=\"./GitHubs.php\">Git Hubs</a></li>
				<li><a class=\"navlinkA\" href=\"./WebApps.php\">Web Apps</a></li>
			</ul>
		";
		
        return $vResult;
    }
    
    function getBody($vPage, $vLevel){
		$vResult = "";

        $vResult = "
			<body>
				<div id=\"idGeneralLayout\">
					<header id=\"idHeaderRow\">
						<div id=\"idHeaderRowCenter\">".
						getLogo($vLevel).
						"</div>
					</header>
					<nav id=\"idNavigationRow\">
						<div id=\"idNavigationBar\">";
							$vResult = $vResult.getNavBar($vLevel);
							$vResult = $vResult.'
						</div>
					</nav>
					<div id=\'idCenterRow\'>
						<div id=\'idCenterRowLeft\'>';
							$vResult = $vResult.getNavigationHeader();
							$vResult = $vResult.getNavigation($vLevel);
						$vResult = $vResult.'</div>
						<div id=\'idCenterRowMain\'>';
							$vResult = $vResult.getTitle($vPage);
							$vResult = $vResult.'<h2>';
								$vResult = $vResult.getContentHeader($vPage);
							$vResult = $vResult.'</h2>
							<div id=\'idCenterContent\'>';
								$vResult = $vResult.getContent($vPage);
							$vResult = $vResult.'</div>
						</div>
						<div id=\'idCenterRowRight\'>';
							$vResult = $vResult.getInformationHeader();
							$vResult = $vResult.getInformation();
							$vResult = $vResult.getVersions($vPage);
						$vResult = $vResult.'</div>
					</div>
					<Footer id=\'idFooterRow\'>
						<div id=\'idFooterMain\'>';
							$vResult = $vResult.getFooter();
							$vResult = $vResult.getWebMaster();
						$vResult = $vResult.'</div>
					</Footer>
				</div>
			</body>
		';
		
		return $vResult;
    }
?>