<?php
    include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 2;
    $vLevel = 1;
    $vDivision = 3;
	
    echo getHead($vLevel, $vDivision);
	echo getBody($vPage, $vLevel);
?>