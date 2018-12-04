<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

    $titulo = mysqli_real_escape_string($conectado,(strip_tags($_POST["titulo"],ENT_QUOTES)));
	$descripcion = mysqli_real_escape_string($conectado,(strip_tags($_POST["descripcion"],ENT_QUOTES)));
	$departamento = mysqli_real_escape_string($conectado,(strip_tags($_POST["departamento"],ENT_QUOTES)));
	$empresa = intval($_POST["empresa"]);
	$asesorE = intval($_POST["asesorE"]);
	$periodo = intval($_POST["periodo"]);
	$status = mysqli_real_escape_string($conectado,(strip_tags($_POST["status"],ENT_QUOTES)));
	
	if ($asesorE === 0) { $asesorE = 'NULL'; }

	// REGISTER data into database
    $sql = "INSERT INTO Proyecto
				(pro_nombre,
				pro_descripcion,
				pro_departamento,
				pro_status,
				pro_idEmpresa,
				pro_idAsesorExterno,
				pro_idPeriodo)
			VALUES ('$titulo','$descripcion','$departamento','$status',$empresa,$asesorE,$periodo)";
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully 
    if ($query) {
        $sql2 = "SELECT pro_id FROM Proyecto ORDER BY pro_id DESC LIMIT 1";
        $query2 = mysqli_query($conectado,$sql2);
		$datos = mysqli_fetch_array($query2,MYSQLI_ASSOC);
		$idProyecto = $datos['pro_id'];

		$sql3  = "INSERT INTO Convenio
					(con_PPIED,
					con_noEstudiantes,
					con_jornada,
					con_horario,
					con_duracion,
					con_idProyecto)
					VALUES
					('',0,'','','',$idProyecto);";

		$query3 = mysqli_query($conectado,$sql3);

		if ($query3) {
			echo '{
			"ID" : '.$idProyecto.',
			"STATUS" : 0,
			"MENSAJE" : "Guardado con exito"
			}';			
		}
		else{
			echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el convenio"
				}'; 
		}
    } else {
        echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el registro"
				}'; echo mysqli_error($conectado);
    }
?>			