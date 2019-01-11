<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$idAsesor = intval($_POST["idAsesor"]);

	$campos="alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno";
	$tables="Alumnos";
	$sWhere=" alu_idAsesorInterno = ".$idAsesor;
	
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
		<table class="table table-hover" id="tblAlumnosProyecto">
			<thead>
				<tr>
					<th>No. Control</th>
					<th>Nombre</th>
					<th>A. Paterno</th>
					<th>A. Materno</th>
					<th>Remover</th>
				</tr>
			</thead>
			<tbody>
				<?php
					$finales=0;
					while($row = mysqli_fetch_array($query)){
					?>
						<tr>
							<td><a href="infoAlumno.html?id=<?php echo $row['alu_id']; ?>"><?php echo $row['alu_noControl']; ?></a></td>
							<td><?php echo $row['alu_nombre']; ?></td>
							<td><?php echo $row['alu_aPaterno']; ?></td>
							<td><?php echo $row['alu_aMaterno']; ?></td>
							<td><button class="btn btn-danger" data-toggle="modal" data-target="#mdlConfirm" onclick="idAlumnoRemover = <?php echo $row['alu_id']; ?>;"><i class="fa fa-user-slash"></i></button></td>
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