<?php
	include './Custom.php';
	
    function getNavigation($vLevel)
    {
        $vResult = '
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division3/Project1.php\'>Online Experience Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division3/Project2.php\'>Game Maker Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division3/Project3.php\'>Java Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division3/Project4.php\'>C# Downloads</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Division3/Project5.php\'>C++ Downloads</a></br></br>
        ';
        return $vResult;
    }
    
    function getLayout($vPage, $vLevel, $vDivision)
    {
        $vResult = '
        <html>'.
			getHeader($vLevel, $vDivision)
        .'<body id=\'idBody\'>
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
                        getWinRar().
                        getFooter().
                        getWebMaster().
					'</td>
                </tr>
            </table>
        </body>
        </html>
		';
		
		return $vResult;
    }
?>