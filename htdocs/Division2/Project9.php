<?php
	include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 9;
    $vLevel = 1;
    $vDivision = 2;
    echo getHead($vLevel, $vDivision);
	echo getBody($vPage, $vLevel);
?>