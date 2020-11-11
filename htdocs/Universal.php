<?php

    function getHead($vLevel, $vDivision){
        $vResult = "";
		
		$vResult = $vResult."<head>";
            $vResult = $vResult."<meta http-equiv=\"Content-Type\" content=\"text/html\" charset=ISO-8859-1\">";
			$vResult = $vResult.getStyle($vLevel, $vDivision);
        $vResult = $vResult."</head>";
        
        return $vResult;
    }

    function getStyle($vLevel, $vDivision){
        $vResult = "";
		
        $vResult = "<link href=\"http://htkb.dyndns.org/Styles/";
        $vResult = $vResult.getStyleFile($vDivision);
		$vResult = $vResult."\" rel=\"stylesheet\" type=\"text/css\">";
        
        return $vResult;
    }
    
    function getStyleFile($vDivision){
        $vResult = "";
		$vDefault = "";
		
		$vDefault = $vDefault."Main.css";
        
        if($vDivision == 0){
            $vResult = $vResult.$vDefault;
        }else if($vDivision == 1){
            $vResult = "Division1.css";
        }else if($vDivision == 2){
            $vResult = "Division2.css";
        }else if($vDivision == 3){
            $vResult = "Division3.css";
        }else if($vDivision == 4){
            $vResult = "Division4.css";
        }else if($vDivision == 5){
            $vResult = "Division5.css";
        }else if($vDivision == 6){
            $vResult = "Division6.css";
        }else if($vDivision == 7){
            $vResult = "Division7.css";
        }else{
			$vResult = $vResult.$vDefault;
		}
		
        return $vResult;
    }
    
	function getLogo($vLevel){
        $vResult = "";
		
		$vResult = $vResult."<img id=\"idLogo\" src=\"http://htkb.dyndns.org/Pictures/logoHTKB.jpg\">";
        
        return $vResult;
    }

    function getNavBar($vLevel){
        $vResult = "";

		$vResult = $vResult."
			<ul class=\"navBarUl\">
				<li><a class=\"navBar\" href=\"/Index.php\">Home</a></li>
				<li><a class=\"navBar\" href=\"/Division1/Index.php\">Board Games</a></li>
				<li><a class=\"navBar\" href=\"/Division2/Index.php\">Digital Board Games</a></li>
				<li><a class=\"navBar\" href=\"/Division3/Index.php\">Video Games</a></li>
				<li><a class=\"navBar\" href=\"/Division4/Index.php\">Downloadables</a></li>
				<li><a class=\"navBar\" href=\"/Division5/Index.php\">Database Work</a></li>
			</ul>
		";
		
        return $vResult;
    }

    function getNavigationHeader(){
        $vResult = "";

		$vResult = $vResult."
			<h4 class=\"headerColorBlack\">
				Navigation
			</h4>
		";
        
        return $vResult;
    }
    
    function getInformationHeader(){
        $vResult = "";

		$vResult = $vResult."
			<h4 class=\"headerColorBlack\">
				Information
			</h4>
		";
        
        return $vResult;
    }
    
    function getInformation(){
        $vResult = "";

		$vResult = $vResult."This is written with PHP.<br><br>";
        $vResult = $vResult."Other versions of this page are here:<br>";
        
        return $vResult;
    }
				
    function getGDR(){
        $vResult = "";

		$vResult = $vResult."<a href=\"../Downloads/GDR.zip\">You can download my Games Development Report here.</a></br>";
	    
        return $vResult;
    }

    function getWinRar(){
        $vResult = "";

		$vResult = $vResult."<a href=\"../Downloads/WinRAR.exe\">You may need WinRar to open zip files from this site.</a></br>";
        
        return $vResult;
    }

    function getFooter(){
        $vResult = "";

		$vResult = $vResult."<div id=\"idFooterContent\">";
        $vResult = $vResult."© Copyright 2012 All rights reserved<br>";
        $vResult = $vResult."House That Kamurai Built<br>";
        $vResult = $vResult."</div>";
        
        return $vResult;
    }

    function getWebMaster(){
        $vResult = "";

		$vResult = $vResult."
			<div id=\"idFooterManagement\">
				Website managed by Kamurai.
			</div>
		";
        
        return $vResult;
    }
    
    function getPath($vLevel){
        $vResult = "";
        
        if($vLevel <= 0)
        {
            $vResult = $vResult."./";
        }
        else if($vLevel == 1)
        {
            $vResult = $vResult."../";
        }
        else if($vLevel == 2)
        {
            $vResult = $vResult."../../";
        }
        else if($vLevel == 3)
        {
            $vResult = $vResult."../../../";
        }
        else if($vLevel == 4)
        {
            $vResult = $vResult."../../../../";
        }
        else if($vLevel == 5)
        {
            $vResult = $vResult."../../../../../";
        }
        else if($vLevel == 6)
        {
            $vResult = $vResult."../../../../../../";
        }
        else if($vLevel == 7)
        {
            $vResult = $vResult."../../../../../../../";
        }
        else if($vLevel == 8)
        {
            $vResult = $vResult."../../../../../../../../";
        }
        else if($vLevel == 9)
        {
            $vResult = $vResult."../../../../../../../../../";
        }
        else if($vLevel == 10)
        {
            $vResult = $vResult."../../../../../../../../../../";
        }
        
        return $vResult;
    }
?>