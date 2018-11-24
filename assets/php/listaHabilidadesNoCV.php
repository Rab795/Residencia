<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAlumno = intval($_POST["idAlumno"]);
	$action = mysqli_real_escape_string($conectado,(strip_tags($_POST['action'], ENT_QUOTES)));

	$sql1 = "SELECT cv_id FROM CurriculumVitae WHERE cv_idAlumno = $idAlumno";
	$query1 = mysqli_query($conectado,$sql1);
	$datos = mysqli_fetch_array($query1,MYSQLI_ASSOC);
	$idCV = $datos['cv_id']; 

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT * FROM Habilidades LEFT JOIN CV_Habilidades ON hab_id = cvh_idHab WHERE cvh_idCV != $idCV OR cvh_idCV IS NULL");
	//loop through fetched data

	if($action == "filtro"){ ?><option value="">Todas</option><?php }
	if($action == "lista"){ ?><option value="">--</option><?php }
	while($row = mysqli_fetch_array($query)){
	?>
		<option value="<?php echo $row['hab_id']; ?>"><?php echo $row['hab_nombre']; ?></option>
	<?php	
	}		
?>