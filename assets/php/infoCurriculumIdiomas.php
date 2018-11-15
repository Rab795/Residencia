<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAlumno = intval($_POST["idAlumno"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT cv_id, cvi_idIdioma, idm_nombre, cvi_porcentaje
										FROM CurriculumVitae LEFT JOIN CV_Idiomas ON cv_id = cvi_idCV 
										INNER JOIN Idiomas ON cvi_idIdioma = idm_id
										WHERE cv_idAlumno = $idAlumno");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		?>
			<div class="col-md-6">
				<input type="text" value="<?php echo $row['cvi_porcentaje']; ?>" class="dial">
				<div class="knob-label"><?php echo $row['idm_nombre']; ?></div>
			</div>
		<?php
	}		
?>