<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAsesor = intval($_POST["idAsesor"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT asi_id,
									    asi_nombre,
									    asi_aPaterno,
									    asi_aMaterno,
									    asi_especialidad,
									    asi_IdCarrera,
									    car_nombre
									FROM AsesesorInterno INNER JOIN Carreras ON asi_IdCarrera = car_id
									WHERE asi_id =  $idAsesor");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		$IDCARRERA = (empty($row['asi_IdCarrera'])) ? 0 : $row['asi_IdCarrera'];
		echo '{
				"IDSESOR" : '.$row['asi_id'].',
				"NOMBRE" : "'.$row['asi_nombre'].'",
				"AP" : "'.$row['asi_aPaterno'].'",
				"AM" : "'.$row['asi_aMaterno'].'",
				"ESPECIALIDAD" : "'.$row['asi_especialidad'].'",
				"IDCARRERA" : '.$IDCARRERA.',
				"CARRERA" : "'.$row['car_nombre'].'"
				}';	
	}		
?>