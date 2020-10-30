<?php
	function getNavigation($vLevel){
        $vResult = "
			<ul class=\"navigationUl\">
				<li><a class=\"navlinkA\" href=\"./Project1.php\">The Way</a></li>
				<li><a class=\"navlinkA\" href=\"./Project2.php\">Sacred Offerings</a></li>
				<li><a class=\"navlinkA\" href=\"./Project3.php\">Conversion</a></li>
				<li><a class=\"navlinkA\" href=\"./Project4.php\">Conspiratorium</a></li>
				<li><a class=\"navlinkA\" href=\"./Project5.php\">Monster Office Workplace</a></li>
				<li><a class=\"navlinkA\" href=\"./Project6.php\">MacCreedy's Mansion</a></li>
				<li><a class=\"navlinkA\" href=\"./Project7.php\">Dundered Acre Wood</a></li>
				<li><a class=\"navlinkA\" href=\"./Project8.php\">Conquer</a></li>
				<li><a class=\"navlinkA\" href=\"./Project9.php\">Assault</a></li>
				<li><a class=\"navlinkA\" href=\"./Project10.php\">Battle Princesses</a></li>
				<li><a class=\"navlinkA\" href=\"./Project11.php\">Armor Up</a></li>
				<li><a class=\"navlinkA\" href=\"./Project12.php\">Gynowars: Battle Arena</a></li>
				<li><a class=\"navlinkA\" href=\"./Project13.php\">Land of the Orcish Empire: Age of Magic</a></li>
				<li><a class=\"navlinkA\" href=\"./Project14.php\">Coliseum: Arena</a></li>
				<li><a class=\"navlinkA\" href=\"./Project15.php\">Nine Card</a></li>
				<li><a class=\"navlinkA\" href=\"./Project16.php\">Wars of Antarrea</a></li>
				<li><a class=\"navlinkA\" href=\"./Project17.php\">Antarrea RPG</a></li>
				<li><a class=\"navlinkA\" href=\"./Project18.php\">Super Dungeon Adventure</a></li>
			</ul>
		";
		
		return $vResult;
    }
    
    function getBody($vPage, $vLevel){
        $vResult = "";
		
        $vResult = $vResult."<body>";
            $vResult = $vResult."<div id=\"idGeneralLayout\">";
                $vResult = $vResult."<header id=\"idHeaderRow\">";
                    $vResult = $vResult."<div id=\"idHeaderRowCenter\">";
                        $vResult = $vResult.getLogo($vLevel);
					$vResult = $vResult."</div>";
                $vResult = $vResult."</header>";
                $vResult = $vResult."<nav id=\"idNavigationRow\">";
                    $vResult = $vResult."<div id=\"idNavigationBar\">";
                        $vResult = $vResult.getNavBar($vLevel);
					$vResult = $vResult."</div>";
                $vResult = $vResult."</nav>";
                $vResult = $vResult."<div id=\"idCenterRow\">";
                    $vResult = $vResult."<div id=\"idCenterRowLeft\">";
                        $vResult = $vResult.getNavigationHeader();
                        $vResult = $vResult.getNavigation($vLevel);
					$vResult = $vResult."</div>";
                    $vResult = $vResult."<div id=\"idCenterRowMain\">";
						$vResult = $vResult.getTitle($vPage);
						$vResult = $vResult."<h2>";
                            $vResult = $vResult.getContentHeader($vPage);
						$vResult = $vResult."</h2>";
                        $vResult = $vResult."<div id=\"idCenterContent\">";
                            $vResult = $vResult.getContent($vPage);
						$vResult = $vResult."</div>";
                    $vResult = $vResult."</div>";
                    $vResult = $vResult."<div id=\"idCenterRowRight\">";
                        $vResult = $vResult.getInformationHeader();
					    $vResult = $vResult.getInformation();
                        $vResult = $vResult.getVersions($vPage);
					$vResult = $vResult."</div>";
                $vResult = $vResult."</div>";
                $vResult = $vResult."<Footer id=\"idFooterRow\">";
                    $vResult = $vResult."<div id=\"idFooterMain\">";
                        $vResult = $vResult.getFooter();
                        $vResult = $vResult.getWebMaster();
					$vResult = $vResult."</div>";
                $vResult = $vResult."</Footer>";
            $vResult = $vResult."</div>";
        $vResult = $vResult."</body>";
		
		return $vResult;
    }
?>