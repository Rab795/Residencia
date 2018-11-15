USE MED;

SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status FROM Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id;


SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status 
FROM Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id
WHERE alu_noControl LIKE '%%'
AND (alu_nombre LIKE '%%' OR alu_aPaterno LIKE '%%' OR alu_aMaterno LIKE '%%')
AND alu_idCarrera = 2 
AND alu_Status = 'Activo';

SELECT car_id,car_nombre FROM Carreras;
SELECT car_id,car_nombre FROM Carreras;

INSERT INTO Alumnos (alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_Status,alu_tel,alu_correo,alu_direccion,alu_genero,alu_fechaNacimeinto,alu_nacionalidad,alu_edad,alu_idCarrera)
VALUES ("13211526","TESTEO","Apellido1","Apellido2","Activo","6643245623","tesst7@gmail.com","233345 col morita","F",NULL,"Colombiana",21,0);

SELECT esp_id, esp_nombre FROM Especialidades WHERE esp_idCarrera = 1;
SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status,alu_correo,alu_direccion
FROM Alumnos LEFT JOIN Carreras ON alu_idCarrera = car_id WHERE alu_id = 2;

SELECT alu_id,
    alu_noControl,
    alu_nombre,
    alu_aPaterno,
    alu_aMaterno,
    alu_Status,
    alu_tel,
    alu_correo,
    alu_direccion,
    alu_genero,
    alu_fechaNacimeinto,
    alu_nacionalidad,
    alu_edad,
    alu_idCarrera,
    alu_idAsesorInterno,
    alu_idProyecto,
    alu_idPeriodo,
    car_id,
    car_nombre
FROM Alumnos LEFT JOIN Carreras ON alu_idCarrera = car_id WHERE alu_id = 2;

SELECT pad_id,
    pad_servicioSocial,
    pad_creditos,
    pad_promedio,
    pad_semestre,
    pad_idEspecialidad,
    esp_nombre
FROM PerfilAcademico LEFT JOIN Especialidades ON pad_idEspecialidad = esp_id
WHERE pad_idAlumno = 1;

SELECT cv_id, cvh_idHab, hab_nombre, cvh_porcentaje 
FROM CurriculumVitae LEFT JOIN CV_Habilidades ON cv_id = cvh_idCV 
INNER JOIN Habilidades ON cvh_idHab = hab_id 
WHERE cv_idAlumno = 1;

SELECT cv_id, cvi_idIdioma, idm_nombre, cvi_porcentaje
FROM CurriculumVitae LEFT JOIN CV_Idiomas ON cv_id = cvi_idCV 
INNER JOIN Idiomas ON cvi_idIdioma = idm_id
WHERE cv_idAlumno = 1;

