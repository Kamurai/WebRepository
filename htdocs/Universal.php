<?php

    function getHead($vLevel, $vDivision)
    {
        $vResult = '
        <head>
            <meta http-equiv=\'Content-Type\' content=\'text/html; charset=ISO-8859-1\'>
        '.getStyle($vLevel, $vDivision).'
        </head>
        ';
        
        return $vResult;
    }

    function getStyle($vLevel, $vDivision)
    {
        $vResult = '';
		
        $vResult = '<link href=\'';
        $vResult = $vResult.getPath($vLevel).'Styles/';
        $vResult = $vResult.getStyleFile($vDivision);
		$vResult = $vResult.'\' rel=\'stylesheet\' type=\'text/css\'>';
        
        return $vResult;
    }
    
    function getStyleFile($vDivision)
    {
        $vResult = '';
		$vDefault = '';
		
		$vDefault = $vDefault.'Main.css';
        
        if($vDivision == 0)
        {
            $vResult = $vResult.$vDefault;
        }
        else if($vDivision == 1)
        {
            $vResult = 'Division1.css';
        }
        else if($vDivision == 2)
        {
            $vResult = 'Division2.css';
        }
        else if($vDivision == 3)
        {
            $vResult = 'Division3.css';
        }
        else
		{
			$vResult = $vResult.$vDefault;
		}
		
        return $vResult;
    }
    
	function getLogo($vLevel)
    {
        $vResult = '<img id=\'idLogo\' src=\''.getPath($vLevel).'Pictures/logoHTKB.jpg\'>';
        
        return $vResult;
    }

    function getNavBar($vLevel)
    {
        $vResult = '
            <a class=\'navBar\' href=\''.getPath($vLevel).'Index.php\'>Home</a>
            <a class=\'navBar\' href=\''.getPath($vLevel).'Division1/Index.php\'>Web Programming</a>
            <a class=\'navBar\' href=\''.getPath($vLevel).'Division2/Index.php\'>Private Projects</a>
            <a class=\'navBar\' href=\''.getPath($vLevel).'Division3/Index.php\'>Downloadable Projects</a>
        ';
        
        return $vResult;
    }

    function getNavigationHeader()
    {
        $vResult = '<h4>';
        $vResult = $vResult.'Navigation';
        $vResult = $vResult.'</h4>';
        
        return $vResult;
    }
    
    function getInformationHeader()
    {
        $vResult  = '<h4>';
        $vResult = $vResult.'    Information';
        $vResult = $vResult.'</h4>';
        
        return $vResult;
    }
    
    function getInformation()
    {
        $vResult  = 'This is written with PHP.<br><br>';
        $vResult = $vResult.'Other versions of this page are here:<br>';
        
        return $vResult;
    }
				
    function getGDR()
    {
        $vResult = '<a href=\'../Downloads/GDR.zip\'>You can download my Games Development Report here.</a></br>';
	    
        return $vResult;
    }

    function getWinRar()
    {
        $vResult = '<a href=\'../Downloads/wrar371.exe\'>You may need WinRar to open zip files from this site.</a></br>';
        
        return $vResult;
    }

    function getFooter()
    {
        $vResult  = '<p id=\'idFooterContent\'>';
        $vResult = $vResult.'    © Copyright 2012 All rights reserved<br>';
        $vResult = $vResult.'    House That Kamurai Built<br>';
        $vResult = $vResult.'</p>';
        
        return $vResult;
    }

    function getWebMaster()
    {
        $vResult  = '<p id=\'idFooterManagement\'>';
        $vResult = $vResult.'    Website managed by Kamurai.';
        $vResult = $vResult.'</p>';
        
        return $vResult;
    }
    
    function getPath($vLevel)
    {
        $vResult = '';
        
        if($vLevel <= 0)
        {
            $vResult = './';
        }
        else if($vLevel == 1)
        {
            $vResult = '../';
        }
        else if($vLevel == 2)
        {
            $vResult = '../../';
        }
        else if($vLevel == 3)
        {
            $vResult = '../../../';
        }
        else if($vLevel == 4)
        {
            $vResult = '../../../../';
        }
        else if($vLevel == 5)
        {
            $vResult = '../../../../../';
        }
        else if($vLevel == 6)
        {
            $vResult = '../../../../../../';
        }
        else if($vLevel == 7)
        {
            $vResult = '../../../../../../../';
        }
        else if($vLevel == 8)
        {
            $vResult = '../../../../../../../../';
        }
        else if($vLevel == 9)
        {
            $vResult = '../../../../../../../../../';
        }
        else if($vLevel == 10)
        {
            $vResult = '../../../../../../../../../../';
        }
        
        return $vResult;
    }
?>