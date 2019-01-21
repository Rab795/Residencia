<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAsesor = intval($_POST["idAsesor"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT ase_id,
									    ase_nombre,
									    ase_aPaterno,
									    ase_aMaterno,
									    ase_puesto,
									    ase_IdEmpresa,
									    emp_nombre
									FROM AsesorExterno INNER JOIN Empresa ON ase_IdEmpresa = emp_id
									WHERE ase_id =  $idAsesor");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		$IDEMPRESA = (empty($row['ase_IdEmpresa'])) ? 0 : $row['ase_IdEmpresa'];
		echo '{
				"IDSESOR" : '.$row['ase_id'].',
				"NOMBRE" : "'.$row['ase_nombre'].'",
				"AP" : "'.$row['ase_aPaterno'].'",
				"AM" : "'.$row['ase_aMaterno'].'",
				"PUESTO" : "'.$row['ase_puesto'].'",
				"IDEMPRESA" : '.$IDEMPRESA.',
				"EMPRESA" : "'.$row['emp_nombre'].'"
				}';	
	}		
?>