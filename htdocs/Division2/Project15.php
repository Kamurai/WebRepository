<?php
	include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 15;
    $vLevel = 1;
    $vDivision = 2;
	
    echo '<!DOCTYPE HTML>';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>