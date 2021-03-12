<?php
	include "save_config_file.php";
	
	$firstName = $values["firstName"];
	$surName = $values["surName"];
	$company = $values["company"];
	$postCode = $values["postCode"];
	$phone = $values["phone"];
	$email = $values["email"];
	$message = $values["message"];
	$baseUrl = $values["baseUrl"];
	$configUrl = $baseUrl . "?config=" . $configId;

	
	$to = "info@ammedia.ch";
	$senderName = $firstName . " " . $surName;
	$senderEmail = $email;
	
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/html; charset=iso-8859-1";
	$headers[] = "From:$senderName <".$senderEmail.">";
	
	$subject = "Container Konfigurator - Angebot";
	$mailMessage =

"<html>
	<head>
		<style>
			.div {
				display: flex;
				flex-direction: column;
			}
			p {
				margin: 0;
			}
			label {
				font-weight: bold;
				margin-top: 15px;
				margin-bottom: 3px;
			}
		</style>
	</head>
	<body>
		<div>
			<div style='margin-bottom: 10px;'><label>Vorname:</label><p>$firstName</p></div>
			<div style='margin-bottom: 10px;'><label>Nachname:</label><p>$surName</p></div>
			<div style='margin-bottom: 10px;'><label>Company:</label><p>$company</p></div>
			<div style='margin-bottom: 10px;'><label>PLZ & Ort:</label><p>$postCode</p></div>
			<div style='margin-bottom: 10px;'><label>Telefon:</label><p>$phone</p></div>
			<div style='margin-bottom: 10px;'><label>E-mail:</label><p>$email</p></div>
			<div style='margin-bottom: 10px;'><label>Ihre Nachricht:</label><p>$message</p></div>
			<div style='margin-bottom: 10px;'><label>Konfiguration:</label><a href='$configUrl'>$configUrl</a></div>
		</div>
	</body>
</html>";
	
	

	$ok = mail($to, $subject, $mailMessage, implode("\r\n", $headers), "-f".$senderEmail);

	echo $response;
?>