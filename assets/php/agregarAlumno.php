<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

    $nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST["nombre"],ENT_QUOTES)));
	$apaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["apaterno"],ENT_QUOTES)));
	$amaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["amaterno"],ENT_QUOTES)));
	$nocontrol = mysqli_real_escape_string($conectado,(strip_tags($_POST["nocontrol"],ENT_QUOTES)));
	$correo = mysqli_real_escape_string($conectado,(strip_tags($_POST["correo"],ENT_QUOTES)));
	$telefono = mysqli_real_escape_string($conectado,(strip_tags($_POST["telefono"],ENT_QUOTES)));
	$status = mysqli_real_escape_string($conectado,(strip_tags($_POST["status"],ENT_QUOTES)));
	$direccion = mysqli_real_escape_string($conectado,(strip_tags($_POST["direccion"],ENT_QUOTES)));
	$genero = mysqli_real_escape_string($conectado,(strip_tags($_POST["genero"],ENT_QUOTES)));
	$fechaNacimeinto = (empty($_POST["fechaNacimeinto"])) ? NULL : mysqli_real_escape_string($conectado,(strip_tags($_POST["fechaNacimeinto"],ENT_QUOTES)));
	$nacionalidad = mysqli_real_escape_string($conectado,(strip_tags($_POST["nacionalidad"],ENT_QUOTES)));
	$edad = intval($_POST["edad"]);
	$carrera = intval($_POST["carrera"]);
	$periodo = intval($_POST["periodo"]);

	if ($fechaNacimeinto === NULL) {$fechaNacimeinto = 'NULL';}
	else $fechaNacimeinto = "'$fechaNacimeinto'";

	if ($carrera === 0) { $carrera = 'NULL'; }
	if ($periodo === 0) { $periodo = 'NULL'; }

	// REGISTER data into database
    $sql = "INSERT INTO Alumnos (alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_Status,alu_tel,alu_correo,alu_direccion,alu_genero,alu_fechaNacimeinto,alu_nacionalidad,alu_edad,alu_idCarrera,alu_idPeriodo)
			VALUES ('$nocontrol','$nombre','$apaterno','$amaterno','$status','$telefono','$correo','$direccion','$genero',$fechaNacimeinto,'$nacionalidad',$edad,$carrera,$periodo)";
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully 
    if ($query) {
        $sql2 = "SELECT alu_id FROM Alumnos ORDER BY alu_id DESC LIMIT 1";
        $query2 = mysqli_query($conectado,$sql2);
		$datos = mysqli_fetch_array($query2,MYSQLI_ASSOC);
		$idAlumno = $datos['alu_id'];

		$sql3  = "INSERT INTO CurriculumVitae (cv_idAlumno) VALUES($idAlumno)";
		$query3 = mysqli_query($conectado,$sql3);

		if ($query3) {
			$sql4 = "INSERT INTO PerfilAcademico (pad_idAlumno,pad_creditos,pad_servicioSocial,pad_promedio,pad_semestre) VALUES ($idAlumno,0,0,0,0)";
			$query4 = mysqli_query($conectado,$sql4);

			if ($query4) {
				echo '{
				"ID" : '.$idAlumno.',
				"STATUS" : 0,
				"MENSAJE" : "Guardado con exito"
				}';
			}
			else{
				echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el PerfilAcademico"
				}'; 
			}
			
		}
		else{
			echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el CV"
				}'; 
		}
    } else {
        echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el registro"
				}'; echo mysqli_error($conectado);
    }
?>			