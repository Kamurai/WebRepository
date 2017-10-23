<?php
	include './Custom.php';
	
    function getNavigation($vLevel)
    {
        $vResult = '
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section1/Index.php\'>Gynowars</a></br></br>
			<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project2.php\'>Assault</a></br></br>
			<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project3.php\'>Mars</a></br></br>
			<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section4/Index.php\'>Renley</a></br></br>
			<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Section5/Index.php\'>Antarrea</a></br></br>
				<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section1/Index.php\'>Global:</a></br></br>
				<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section2/Index.php\'>Grendol:</a></br></br>
				<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section3/Index.php\'>Utopia:</a></br></br>
				<a class=\'navlinkB\' href=\''.getPath($vLevel).'Division2/Section5/Section4/Index.php\'>Elvia:</a></br></br>
					<a class=\'navlinkC\' href=\''.getPath($vLevel).'Division2/Section5/Section4/Project1.php\'>Nine Card:</a></br></br>
			<a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project6.php\'>Truth</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project7.php\'>Kingdoms</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project8.php\'>Terminal World</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project9.php\'>Monster Office Workplace</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project10.php\'>Battle Princesses</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project11.php\'>Sacred Offerings</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project12.php\'>The Way</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project13.php\'>Conspiratorium</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division2/Project14.php\'>Conversion</a></br></br>
        ';
        return $vResult;
    }
    
    function getBody($vPage, $vLevel);
    {
        $vResult = '
        <body id=\'idBody\'>
            <table id=\'idTableMain\'>
                <tr id=\'idHeaderRow\'>
                    <td id=\'idHeaderRowCenter\' colspan=\'3\'>'.
                        getLogo($vLevel)
					.'</td>
                </tr>
                <tr id=\'idNavigationRow\'>
                    <td id=\'idNavigationBar\' colspan=\'3\'>'.
                        getNavBar($vLevel)
					.'</td>
                </tr>				
                <tr id=\'idCenterRow\'>
                    <td id=\'idCenterRowLeft\'>'.
                        getNavigationHeader().
                        getNavigation($vLevel)
					.'</td>
                    <td id=\'idCenterRowMain\'>'.
						getTitle($vPage).
						'<h2>'.
                            getContentHeader($vPage).
						'</h2>
                        <p id=\'idCenterContent\'>'.
                            getContent($vPage).
						'</p>
                    </td>
                    <td id=\'idCenterRowRight\'>'.
                        getInformationHeader().
					    getInformation().
                        getVersions($vPage)
					.'</td>
                </tr>
                <tr id=\'idFooterRow\'>
                    <td id=\'idFooterMain\' colspan=\'3\'>'.
                        getGDR().
						getWinRar().
                        getFooter().
                        getWebMaster().
					'</td>
                </tr>
            </table>
        </body>
        ';
		
		return $vResult;
    }
?>