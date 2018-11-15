<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAlumno = intval($_POST["idAlumno"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT pad_id,
									    pad_servicioSocial,
									    pad_creditos,
									    pad_promedio,
									    pad_semestre,
									    pad_idEspecialidad,
									    esp_nombre
									FROM PerfilAcademico LEFT JOIN Especialidades ON pad_idEspecialidad = esp_id
									WHERE pad_idAlumno = $idAlumno");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		$idEspecialidad = (empty($row['pad_idEspecialidad'])) ? 0 : $row['pad_idEspecialidad'];
		echo '{
				"IDPA" : '.$row['pad_id'].',
				"SS" : '.$row['pad_servicioSocial'].',
				"CREDITOS" : '.$row['pad_creditos'].',
				"PROMEDIO" : '.$row['pad_promedio'].',
				"SEMESTRE" : '.$row['pad_semestre'].',
				"IDES" : '.$idEspecialidad.',
				"ESPECIALIDAD" : "'.$row['esp_nombre'].'"
				}';	
	}		
?>