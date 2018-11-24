<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

	$id = intval($_POST["id"]);
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

	if ($fechaNacimeinto === NULL) {$fechaNacimeinto = 'NULL';}
	else $fechaNacimeinto = "'$fechaNacimeinto'";

	if ($carrera === 0) { $carrera = 'NULL'; }

	// REGISTER data into database
    $sql = "UPDATE Alumnos SET
			alu_noControl = '$nocontrol',
			alu_nombre = '$nombre',
			alu_aPaterno = '$apaterno',
			alu_aMaterno = '$amaterno',
			alu_Status = '$status',
			alu_tel = '$telefono',
			alu_correo = '$correo',
			alu_direccion = '$direccion',
			alu_genero = '$genero',
			alu_fechaNacimeinto = $fechaNacimeinto,
			alu_nacionalidad = '$nacionalidad',
			alu_edad = $edad,
			alu_idCarrera = $carrera
			WHERE alu_id = $id";
    
    $query = mysqli_query($conectado,$sql);
    // if product has been added successfully
    if ($query) {
        echo '{
				"STATUS" : 0,
				"MENSAJE" : "Guardado con exito"
				}';
    } else {
        echo '{
				"STATUS" : 1,
				"MENSAJE" : "No se pudo guardar el registro"
				}'; echo mysqli_error($conectado);
				
    }
?>			