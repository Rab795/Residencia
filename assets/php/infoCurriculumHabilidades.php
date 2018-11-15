<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAlumno = intval($_POST["idAlumno"]);

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT cv_id, cvh_idHab, hab_nombre, cvh_porcentaje 
										FROM CurriculumVitae LEFT JOIN CV_Habilidades ON cv_id = cvh_idCV 
										INNER JOIN Habilidades ON cvh_idHab = hab_id 
										WHERE cv_idAlumno = $idAlumno");
										
	//loop through fetched data
	while($row = mysqli_fetch_array($query)){
		?>
			<h5><?php echo $row['hab_nombre']; ?></h5>
			<div class="progress">
				<div class="progress-bar" role="progressbar" aria-valuenow="<?php echo $row['cvh_porcentaje']; ?>" aria-valuemin="0" aria-valuemax="100" style="width: <?php echo $row['cvh_porcentaje']; ?>%">
					<?php echo $row['cvh_porcentaje']; ?>%
				</div>
			</div>
		<?php
	}		
?>