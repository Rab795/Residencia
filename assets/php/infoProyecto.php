<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idProyecto = intval($_POST["idProyecto"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT pro_id,
									    pro_nombre,
									    pro_descripcion,
									    pro_departamento,
										pro_status,
									    pro_idEmpresa,
									    emp_nombre,
									    pro_idAsesorExterno,
										ase_nombre,
									    pro_idPeriodo,
										prd_descripcion
									FROM Proyecto LEFT JOIN Periodos ON pro_idPeriodo = prd_id 
									LEFT JOIN AsesorExterno ON pro_idAsesorExterno = ase_id 
									INNER JOIN Empresa ON pro_idEmpresa = emp_id WHERE pro_id = $idProyecto");
																			
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		echo '{
				"TITULO" : "'.$row['pro_nombre'].'",
				"DESCRIPCION" : "'.$row['pro_descripcion'].'",
				"DEPARTAMENTO" : "'.$row['pro_departamento'].'",
				"STATUS" : "'.$row['pro_status'].'",
				"IDEMPRESA" : "'.$row['pro_idEmpresa'].'",
				"EMPRESA" : "'.$row['emp_nombre'].'",
				"IDASESORE" : "'.$row['pro_idAsesorExterno'].'",
				"ASESORE" : "'.$row['ase_nombre'].'",
				"PERIODO" : "'.$row['prd_descripcion'].'",
				"IDPERIODO" : "'.$row['pro_idPeriodo'].'"
				}';	
	}		
?>