<?php
	include '../../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 2;
    $vLevel = 2;
    $vDivision = 2;
	
    echo getHead($vLevel, $vDivision);
	echo getBody($vPage, $vLevel);
?>