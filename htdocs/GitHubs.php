<?php
	include './Universal.php';
	include './Layout.php';
	include './Custom.php';
	
	$vPage = 3;
    $vLevel = 0;
    $vDivision = 0;
	
    echo '<!DOCTYPE html>';
	echo '<html xmlns="http://www.w3.org/1999/xhtml">';
		echo getHead($vLevel, $vDivision);
		echo getBody($vPage, $vLevel);
	echo '</html>';
?>
