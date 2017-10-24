<?php
	include '../../Universal.php';
	include './Layout.php';
	include './Custom.php';
	include getPath($vLevel).'DataMethod.php';
	
    $vPage = 3;
    $vLevel = 2;
    $vDivision = 1;
	
    echo '<html>';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>