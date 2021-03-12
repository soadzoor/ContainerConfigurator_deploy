<?php
	function generateRandomString($length = 6) {
		$characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return $randomString;
	}
	
	$json = file_get_contents("php://input");
	$values = json_decode($json, true);

	$config = $values["config"];
	
	$configId = generateRandomString();
	
	$file = fopen("./configs/" . $configId . ".txt", "w");
	fwrite($file, $config);
	fclose($file);

	$response = json_encode(array("configId" => $configId));
?>