<?php
	#include './Universal.php';
	include './Custom.php';
	
    function getNavigation($vLevel)
    {
        $vResult = '
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'AboutUs.php\'>About Us</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Media.php\'>Media</a></br></br>
            <a class=\'navlinkA\' href=\''.getPath($vLevel).'Minecraft.php\'>Minecraft!</a></br></br>
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
						getContentHeader($vPage).
						'<p id=\'idCenterContent\'>'.
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