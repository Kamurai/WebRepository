<?php
	include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 11;
    $vLevel = 1;
    $vDivision = 2;
	
    echo '<html>';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>