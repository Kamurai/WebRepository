<?php
	include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 0;
    $vLevel = 13;
    $vDivision = 2;
	
    echo getHead($vLevel, $vDivision);
	echo getBody($vPage, $vLevel);
?>