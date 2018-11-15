<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$action = mysqli_real_escape_string($conectado,(strip_tags($_POST['action'], ENT_QUOTES)));
	$idCarrera = intval($_POST["idCarrera"]);

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