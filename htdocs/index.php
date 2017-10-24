<?php
	include './Layout.php';
	
    $vPage = 0;
    $vLevel = 0;
    $vDivision = 0;
	
    echo '<html>';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>
