<?php
	include '../../../Universal.php';
	include './Layout.php';
	include './Custom.php';
	
    $vPage = 1;
    $vLevel = 3;
    $vDivision = 2;
	
    echo '<!DOCTYPE HTML>';	echo '<html xmlns="http://www.w3.org/1999/xhtml">';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>