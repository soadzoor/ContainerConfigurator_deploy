<?php
	include "utils.php";
	
	$json = file_get_contents("php://input");
	$values = json_decode($json, true);

	$config = $values["config"];
	
	$configId = generateRandomString();
	
	$file = fopen("./configs/" . $configId . ".txt", "w");
	fwrite($file, $config);
	fclose($file);

	$response = json_encode(array("configId" => $configId));
?>