<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	$json = "";
		
	$query = "SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status FROM Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id;";
	$doquery = mysqli_query($conectado,$query) or die("Error en: $busqueda: " . mysqli_error());
	
	$json = '{ "Alumnos" : [';
	$primero = true;
	while($fila = mysqli_fetch_row($doquery))
	{
		if ($primero) $primero = false; else $json .=',';
    
		$json .= '{
    	"ID" : '.$fila[0].',
		"NOCONTROL" : "'.$fila[1].'",
		"NOMBRE" : "'.$fila[2].'",
		"APATERNO" : "'.$fila[3].'",
		"AMATERNO" : "'.$fila[4].'",
		"TEL" : "'.$fila[5].'",
		"CARRERA" : "'.$fila[6].'",
		"STATUSS" : "'.$fila[7].'",
		"STATUS" : 0
		}';
	}
	$json .='] }';
	
	echo $json;

?>