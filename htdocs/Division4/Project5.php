<?php
	include "../Universal.php";
	include "./Layout.php";
	include "./Custom.php";
	
    $vPage = 5;
    $vLevel = 1;
    $vDivision = 4;
	
    echo "<!DOCTYPE HTML>";
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo "</html>";
?>