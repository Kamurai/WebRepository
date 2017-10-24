<?php
	include './Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 3;
    $vLevel = 0;
    $vDivision = 0;
	
    echo '<html>';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>
