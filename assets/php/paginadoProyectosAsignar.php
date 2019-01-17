<?php

	header('Access-Control-Allow-Origin: *');

	require_once("conectar.php");										
	
	//Parametros
	$nombre = mysqli_real_escape_string($conectado,(strip_tags($_POST['nombre'], ENT_QUOTES)));
	$empresa = mysqli_real_escape_string($conectado,(strip_tags($_POST['empresa'], ENT_QUOTES)));
	
	$campos="pro_id,
    		pro_nombre,
    		pro_descripcion,
    		pro_departamento,
			pro_status,
    		pro_idEmpresa,
    		emp_nombre,
    		pro_idAsesorExterno,
			ase_nombre,
    		pro_idPeriodo,
			prd_descripcion";
	$tables="Proyecto LEFT JOIN Periodos ON pro_idPeriodo = prd_id 
			LEFT JOIN AsesorExterno ON pro_idAsesorExterno = ase_id 
			INNER JOIN Empresa ON pro_idEmpresa = emp_id";
	$sWhere=" pro_nombre LIKE '%".$nombre."%'";
	$sWhere.=" AND emp_nombre LIKE '%".$empresa."%'";
	
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
					<th>Departamento</th>
					<th>Empresa</th>
					<th>Asignar</th>
				</tr>
			</thead>
			<tbody>
				<?php
					$finales=0;
					while($row = mysqli_fetch_array($query)){
					?>
						<tr>
							<td><a href="infoProyecto.html?id=<?php echo $row['pro_id']; ?>"><?php echo $row['pro_nombre']; ?></a></td>
							<td><?php echo $row['pro_departamento']; ?></td>
							<td><?php echo $row['emp_nombre']; ?></td>
							<td><button class="btn btn-primary asignarDes" onclick="asignarProyectoAlumno(<?php echo $row['pro_id']; ?>,this)"><i class="fa fa-arrow-alt-circle-right"></i></button></td>
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