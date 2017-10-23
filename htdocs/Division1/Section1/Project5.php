<?php
	include '../../Universal.php';
	include './Layout.php';
	include './Custom.php';
	include getPath($vLevel).'DataMethod.php';
	
    $vPage = 5;
    $vLevel = 2;
    $vDivision = 1;
	
    echo getHead($vLevel, $vDivision);
	echo getBody($vPage, $vLevel);
?>