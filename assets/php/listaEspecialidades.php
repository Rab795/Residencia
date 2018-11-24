<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$action = mysqli_real_escape_string($conectado,(strip_tags($_POST['action'], ENT_QUOTES)));
	$idAlumno = intval($_POST["idAlumno"]);

	$sql1 = "SELECT alu_idCarrera FROM Alumnos WHERE alu_id = $idAlumno";
	$query1 = mysqli_query($conectado,$sql1);
	$datos = mysqli_fetch_array($query1,MYSQLI_ASSOC);
	$idCarrera = $datos['alu_idCarrera']; 


	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT esp_id,esp_nombre FROM Especialidades WHERE esp_idCarrera = $idCarrera");
	//loop through fetched data

	if($action == "filtro"){ ?><option value="">Todas</option><?php }
	if($action == "lista"){ ?><option value="">--</option><?php }
	while($row = mysqli_fetch_array($query)){
	?>
		<option value="<?php echo $row['esp_id']; ?>"><?php echo $row['esp_nombre']; ?></option>
	<?php	
	}		
?>