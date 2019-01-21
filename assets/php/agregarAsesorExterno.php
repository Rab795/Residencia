<?php
	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");	

    $nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST["nombre"],ENT_QUOTES)));
	$apaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["apaterno"],ENT_QUOTES)));
	$amaterno = mysqli_real_escape_string($conectado,(strip_tags($_POST["amaterno"],ENT_QUOTES)));
	$puesto = mysqli_real_escape_string($conectado,(strip_tags($_POST["puesto"],ENT_QUOTES)));
	$empresa = intval($_POST["empresa"]);

	if ($empresa === 0) { $empresa = 'NULL'; }

	// REGISTER data into database
    $sql = "INSERT INTO AsesorExterno
			(ase_nombre,
			ase_aPaterno,
			ase_aMaterno,
			ase_puesto,
			ase_IdEmpresa)
			VALUES
			('$nombre','$apaterno','$amaterno','$puesto',$empresa)";
    
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