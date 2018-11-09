<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$noControl = mysqli_real_escape_string($conectado,(strip_tags($_POST['noControl'], ENT_QUOTES)));
	$nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST['nombre'], ENT_QUOTES)));
	$carrera = mysqli_real_escape_string($conectado,(strip_tags($_POST['carrera'])));
	$status = mysqli_real_escape_string($conectado,(strip_tags($_POST['status'], ENT_QUOTES)));


	$campos="alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status";
	$tables="Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id";
	$sWhere=" alu_noControl LIKE '%".$noControl."%'";
	$sWhere.=" AND (alu_nombre LIKE '%".$nombre."%' OR alu_aPaterno LIKE '%".$nombre."%' OR alu_aMaterno LIKE '%".$nombre."%')";
	if($carrera != ""){ $sWhere.=" AND alu_idCarrera = ".$carrera; }
	if($status != ""){ $sWhere.=" AND alu_Status = '".$status."'"; }
	
	
	
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
		<table class="table table-hover" id="tblAlumnos">
			<thead>
				<tr>
					<th>No. Control</th>
					<th>Nombre</th>
					<th>A. Paterno</th>
					<th>A. Materno</th>
					<th>Telefono</th>
					<th>Carrera</th>
					<th>Status</th>
					<th>Editar</th>
					<th>Eliminar</th>
				</tr>
			</thead>
			<tbody>
				<?php
					$finales=0;
					while($row = mysqli_fetch_array($query)){
					?>
						<tr>
							<td><a href="infoAlumno.html" onclick="cargaAlumno(<?php echo $row['alu_id']; ?>)"><?php echo $row['alu_noControl']; ?></a></td>
							<td><?php echo $row['alu_nombre']; ?></td>
							<td><?php echo $row['alu_aPaterno']; ?></td>
							<td><?php echo $row['alu_aMaterno']; ?></td>
							<td><?php echo $row['alu_tel']; ?></td>
							<td><?php echo $row['car_nombre']; ?></td>
							<td><?php echo $row['alu_Status']; ?></td>
							<td><button class="btn btn-info"><i class="fa fa-edit"></i></button></td>
							<td><button class="btn btn-danger"><i class="fa fa-trash"></i></button></td>
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