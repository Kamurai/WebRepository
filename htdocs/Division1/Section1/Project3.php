<?php
	include './Layout.php';
	include getPath($vLevel).'DataMethod.php';
	
    $vPage = 3;
    $vLevel = 2;
    $vDivision = 1;
    #Overall body
	WriteLayout($vPage, $vLevel, $vDivision);    
?>