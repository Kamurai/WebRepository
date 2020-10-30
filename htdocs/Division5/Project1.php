<?php
	include "../Universal.php";
	include "./Layout.php";
	include "./Custom.php";
	
    $vPage = 1;
    $vLevel = 1;
    $vDivision = 5;
	include getPath($vLevel).'DataMethod.php';
	
    echo "<!DOCTYPE HTML>";	echo "<html xmlns=\"http://www.w3.org/1999/xhtml\">";
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo "</html>";
?>