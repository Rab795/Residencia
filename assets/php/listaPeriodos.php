<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$action = mysqli_real_escape_string($conectado,(strip_tags($_POST['action'], ENT_QUOTES)));

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT prd_id,prd_descripcion FROM Periodos");
	//loop through fetched data

	if($action == "filtro"){ ?><option value="">Todas</option><?php }
	if($action == "lista"){ ?><option value="">--</option><?php }
	while($row = mysqli_fetch_array($query)){
	?>
		<option value="<?php echo $row['prd_id']; ?>"><?php echo $row['prd_descripcion']; ?></option>
	<?php	
	}		
?>