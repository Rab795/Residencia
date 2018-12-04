<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$action = mysqli_real_escape_string($conectado,(strip_tags($_POST['action'], ENT_QUOTES)));
	$idProyecto = intval($_POST["idProyecto"]);

	$sql1 = "SELECT pro_idEmpresa FROM Proyecto WHERE pro_id = $idProyecto";
	$query1 = mysqli_query($conectado,$sql1);
	$datos = mysqli_fetch_array($query1,MYSQLI_ASSOC);
	$idEmpresa = $datos['pro_idEmpresa']; 


	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT ase_id,CONCAT(ase_nombre, ' ',ase_aPaterno) As Nombre FROM AsesorExterno WHERE ase_IdEmpresa = $idEmpresa");
	//loop through fetched data

	if($action == "filtro"){ ?><option value="">Todas</option><?php }
	if($action == "lista"){ ?><option value="">--</option><?php }
	while($row = mysqli_fetch_array($query)){
	?>
		<option value="<?php echo $row['ase_id']; ?>"><?php echo $row['Nombre']; ?></option>
	<?php	
	}		
?>