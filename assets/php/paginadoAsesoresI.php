<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST['nombre'], ENT_QUOTES)));
	$carrera = mysqli_real_escape_string($conectado,(strip_tags($_POST['carrera'])));
	
	$campos="asi_id,
    asi_nombre,
    asi_aPaterno,
    asi_aMaterno,
    asi_especialidad,
    asi_idInstitucion,
    asi_IdCarrera,
    car_nombre";
	$tables="AsesesorInterno INNER JOIN Carreras ON asi_IdCarrera = car_id";
	$sWhere=" (asi_nombre LIKE '%".$nombre."%' OR asi_aPaterno LIKE '%".$nombre."%' OR asi_aMaterno LIKE '%".$nombre."%')";
	if($carrera != ""){ $sWhere.=" AND asi_IdCarrera = ".$carrera; }
	
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
		<table class="table table-hover" id="tblAsesoresI">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>A. Paterno</th>
					<th>A. Materno</th>
					<th>Especialidad</th>
					<th>Carrera</th>
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
							<td><a href="infoAsesorI.html?id=<?php echo $row['asi_id']; ?>"><?php echo $row['asi_nombre']; ?></a></td>
							<td><?php echo $row['asi_aPaterno']; ?></td>
							<td><?php echo $row['asi_aMaterno']; ?></td>
							<td><?php echo $row['asi_especialidad']; ?></td>
							<td><?php echo $row['car_nombre']; ?></td>
							<td><button class="btn btn-info" onclick="redireccionarEditarAsesorI(<?php echo $row['asi_id']; ?>)"><i class="fa fa-edit"></i></button></td>
							<td><button class="btn btn-danger" data-toggle="modal" data-target="#mdlConfirm" onclick="confirmDialog('Desea eliminar al asesor','eliminarAsesorInterno','<?php echo $row['asi_id']; ?>')"><i class="fa fa-trash"></i></button></td>
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