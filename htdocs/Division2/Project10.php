<?php
	include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 10;
    $vLevel = 1;
    $vDivision = 2;
	
    echo getHead($vLevel, $vDivision);
	echo getBody($vPage, $vLevel);
?>