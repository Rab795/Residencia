<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idProyecto = intval($_POST["idProyecto"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT con_id,
									    con_PPIED,
									    con_noEstudiantes,
									    con_jornada,
									    con_horario,
									    con_duracion,
									    con_idProyecto
									FROM Convenio WHERE con_idProyecto = $idProyecto");
																			
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		echo '{
				"ID" : "'.$row['con_id'].'",
				"NOESTUDIANTES" : "'.$row['con_noEstudiantes'].'",
				"JORNADA" : "'.$row['con_jornada'].'",
				"HORARIO" : "'.$row['con_horario'].'",
				"DURACION" : "'.$row['con_duracion'].'"
				}';	
	}		
?>