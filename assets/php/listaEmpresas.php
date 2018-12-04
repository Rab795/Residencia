<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$action = mysqli_real_escape_string($conectado,(strip_tags($_POST['action'], ENT_QUOTES)));

	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT emp_id,emp_nombre FROM Empresa");
	//loop through fetched data

	if($action == "filtro"){ ?><option value="">Todas</option><?php }
	if($action == "lista"){ ?><option value="">--</option><?php }
	while($row = mysqli_fetch_array($query)){
	?>
		<option value="<?php echo $row['emp_id']; ?>"><?php echo $row['emp_nombre']; ?></option>
	<?php	
	}		
?>