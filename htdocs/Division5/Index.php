<?php
	include "../Universal.php";
	include "./Layout.php";
	include "./Custom.php";
	
    $vPage = 0;
    $vLevel = 1;
    $vDivision = 5;
	
    echo "<!DOCTYPE HTML>";
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo "</html>";
?>