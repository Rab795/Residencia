<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idEmpresa = intval($_POST["idEmpresa"]);

	$campos="ase_id,ase_nombre,ase_aPaterno,ase_aMaterno,ase_puesto,ase_IdEmpresa";
	$tables="AsesorExterno";
	$sWhere=" ase_idEmpresa = ".$idEmpresa;
	
	include 'pagination.php'; //include pagination file
	//pagination variables
	$page = (isset($_POST['page']) && !empty($_POST['page']))?$_POST['page']:1;
	$per_page = intval($_POST['per_page']); //how much records you want to show
	$funcion = $_POST['funcion'];
	$adjacents  = 4; //gap between pages after number of adjacents
	$offset = ($page - 1) * $per_page;
	//Count the total number of row in your table*/
	$count_query   = mysqli_query($conectado,"SELECT count(*) AS numrows FROM $tables where $sWhere ");
	if ($row= mysqli_fetch_array($count_query)){$numrows = $row['numrows'];}
	else {echo mysqli_error($conectado);}
	$total_pages = ceil($numrows/$per_page);
	//main query to fetch the data
	$query = mysqli_query($conectado,"SELECT $campos FROM  $tables where $sWhere LIMIT $offset,$per_page");
	//loop through fetched data

	if ($numrows>0){	
	?>
		<table class="table table-hover" id="tblProyectos">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Puesto</th>
				</tr>
			</thead>
			<tbody>
				<?php
					$finales=0;
					while($row = mysqli_fetch_array($query)){
					?>
						<tr>
							<td><a href="infoAsesorExterno.html?id=<?php echo $row['ase_id']; ?>"><?php echo $row['ase_nombre']." ".$row['ase_aPaterno']." ".$row['ase_aMaterno'];?></a></td>
							<td><?php echo $row['ase_puesto']; ?></td>
						</tr>
					<?php
						$finales++;
					}		
				?>
				<tr>
					<td colspan='9'> 
						<?php 
							$inicios=$offset+1;
							$finales+=$inicios -1;
							echo "Mostrando $inicios al $finales de $numrows registros";
							echo paginate( $page, $total_pages, $adjacents, $funcion);
						?>
					</td>
				</tr>
			</tbody>
		</table>
	<?php	
	}
	

?>