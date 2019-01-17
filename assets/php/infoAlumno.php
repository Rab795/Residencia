<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAlumno = intval($_POST["idAlumno"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT alu_id,
									    alu_noControl,
									    alu_nombre,
									    alu_aPaterno,
									    alu_aMaterno,
									    alu_Status,
									    alu_tel,
									    alu_correo,
									    alu_direccion,
									    alu_genero,
									    alu_fechaNacimeinto,
									    alu_nacionalidad,
									    alu_edad,
									    alu_idCarrera,
									    alu_idAsesorInterno,
									    alu_idAsesorExterno,
									    alu_idProyecto,
									    alu_idPeriodo,
									    car_id,
									    car_nombre,
									    pro_nombre,
									    pro_idEmpresa,
									    emp_nombre,
									    asi_nombre,
									    ase_nombre,
									    prd_descripcion
										FROM Alumnos LEFT JOIN Carreras ON alu_idCarrera = car_id
										LEFT JOIN Periodos ON alu_idPeriodo = prd_id
										LEFT JOIN AsesesorInterno ON alu_idAsesorInterno = asi_id
										LEFT JOIN AsesorExterno ON alu_idAsesorExterno = ase_id
										LEFT JOIN Proyecto ON alu_idProyecto = pro_id 
										LEFT JOIN Empresa ON pro_idEmpresa = emp_id
									    WHERE alu_id = $idAlumno");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		$IDCARRERA = (empty($row['alu_idCarrera'])) ? 0 : $row['alu_idCarrera'];
		$IDAI = (empty($row['alu_idAsesorInterno'])) ? 0 : $row['alu_idAsesorInterno'];
		$IDAE = (empty($row['alu_idAsesorExterno'])) ? 0 : $row['alu_idAsesorExterno'];
		$IDPROY = (empty($row['alu_idProyecto'])) ? 0 : $row['alu_idProyecto'];
		$IDPERIODO = (empty($row['alu_idPeriodo'])) ? 0 : $row['alu_idPeriodo'];
		$IDEMPRESA = (empty($row['pro_idEmpresa'])) ? 0 : $row['pro_idEmpresa'];
		echo '{
				"IDALUMNO" : '.$row['alu_id'].',
				"NOCONTROL" : "'.$row['alu_noControl'].'",
				"NOMBRE" : "'.$row['alu_nombre'].'",
				"AP" : "'.$row['alu_aPaterno'].'",
				"AM" : "'.$row['alu_aMaterno'].'",
				"STATUS" : "'.$row['alu_Status'].'",
				"TEL" : "'.$row['alu_tel'].'",
				"CORREO" : "'.$row['alu_correo'].'",
				"DIRECCION" : "'.$row['alu_direccion'].'",
				"GENERO" : "'.$row['alu_genero'].'",
				"FECHAN" : "'.$row['alu_fechaNacimeinto'].'",
				"NACI" : "'.$row['alu_nacionalidad'].'",
				"EDAD" : '.$row['alu_edad'].',
				"IDCARRERA" : '.$IDCARRERA.',
				"IDAI" : '.$IDAI.',
				"IDAE" : '.$IDAE.',
				"IDPROY" : '.$IDPROY.',
				"IDEMPRESA" : '.$IDEMPRESA.',
				"IDPERIODO" : '.$IDPERIODO.',
				"CARRERA" : "'.$row['car_nombre'].'",
				"AE" : "'.$row['ase_nombre'].'",
				"AI" : "'.$row['asi_nombre'].'",
				"PROYECTO" : "'.$row['pro_nombre'].'",
				"EMPRESA" : "'.$row['emp_nombre'].'",
				"PERIODO" : "'.$row['prd_descripcion'].'"
				}';	
	}		
?>