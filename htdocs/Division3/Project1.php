<?php
    include '../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 1;
    $vLevel = 1;
    $vDivision = 3;
	
    echo '<html>';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>