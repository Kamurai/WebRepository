<?php
	include "../../Universal.php";
	include "./Layout.php";
	include "./Custom.php";
	
    $vPage = 1;
    $vLevel = 2;
    $vDivision = 3;
	
    echo "<!DOCTYPE HTML>";
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo "</html>";
?>