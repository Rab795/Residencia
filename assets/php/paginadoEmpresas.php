<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST['nombre'], ENT_QUOTES)));
	$rfc = mysqli_real_escape_string($conectado,(strip_tags($_POST['rfc'], ENT_QUOTES)));

	$campos="emp_id,emp_nombre,emp_RFC,emp_direccion,emp_ramo,emp_tel";
	$tables="Empresa";
	$sWhere=" emp_nombre LIKE '%".$nombre."%'";
	$sWhere.=" AND emp_RFC LIKE '%".$rfc."%'";
	
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
					<th>RFC</th>
					<th>Nombre</th>
					<th>Direccion</th>
					<th>Ramo</th>
					<th>Telefono</th>
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
							<td><a href="infoEmpresa.html?id=<?php echo $row['emp_id']; ?>"><?php echo $row['emp_RFC']; ?></a></td>
							<td><?php echo $row['emp_nombre']; ?></td>
							<td><?php echo $row['emp_direccion']; ?></td>
							<td><?php echo $row['emp_ramo']; ?></td>
							<td><?php echo $row['emp_tel']; ?></td>
							<td><button class="btn btn-info" onclick="redireccionarEditarEmpresa(<?php echo $row['emp_id']; ?>)"><i class="fa fa-edit"></i></button></td>
							<td><button class="btn btn-danger" data-toggle="modal" data-target="#mdlConfirm" onclick="idEmpresaEliminar = <?php echo $row['emp_id']; ?>;"><i class="fa fa-trash"></i></button></td>
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