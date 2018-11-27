<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idEmpresa = intval($_POST["idEmpresa"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT emp_id,
										emp_nombre,
										emp_RFC,
										emp_direccion,
										emp_ramo,
										emp_tel
									FROM Empresa WHERE emp_id = $idEmpresa");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		echo '{
				"IDEMPRESA" : '.$row['emp_id'].',
				"RFC" : "'.$row['emp_RFC'].'",
				"NOMBRE" : "'.$row['emp_nombre'].'",
				"TEL" : "'.$row['emp_tel'].'",
				"DIRECCION" : "'.$row['emp_direccion'].'",
				"RAMO" : "'.$row['emp_ramo'].'"
				}';	
	}		
?>