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

UPDATE Alumnos SET
alu_noControl = 0,
alu_nombre = "",
alu_aPaterno = "",
alu_aMaterno = "",
alu_Status = "",
alu_tel = "",
alu_correo = "",
alu_direccion = "",
alu_genero = "",
alu_fechaNacimeinto = "",
alu_nacionalidad = "",
alu_edad = 9,
alu_idCarrera = 1,
alu_idAsesorInterno = 2,
alu_idProyecto = 3,
alu_idPeriodo = 5
WHERE alu_id = 4;

UPDATE CV_Habilidades SET cvh_porcentaje = 90 WHERE cvh_idCV = 1 AND cvh_idHab = 1;
DELETE FROM CV_Habilidades WHERE cvh_idCV = 1 AND cvh_idHab = 1;

SELECT * FROM CV_Habilidades;

SELECT hab_id, hab_nombre FROM Habilidades ;

SELECT cv_id FROM CurriculumVitae WHERE cv_idAlumno = 1;

INSERT INTO CV_Habilidades (cvh_idCV,cvh_idHab,cvh_porcentaje)
VALUES(1,1,100);

SELECT * FROM Habilidades LEFT JOIN CV_Habilidades ON hab_id = cvh_idHab;

SELECT * FROM Habilidades LEFT JOIN CV_Habilidades ON hab_id = cvh_idHab WHERE cvh_idCV != 1 OR cvh_idCV IS NULL;

SELECT * FROM Idiomas LEFT JOIN CV_Idiomas ON idm_id = cvi_idIdioma WHERE cvi_idCV != 1 OR cvi_idCV IS NULL;

SELECT alu_id FROM Alumnos ORDER BY alu_id DESC LIMIT 1;

INSERT INTO CV_Idiomas (cvi_idCV,cvi_idIdioma,cvi_porcentaje) VALUES ($idCV,$idIdioma,$porcentaje);

SELECT alu_idCarrera FROM Alumnos WHERE alu_id = 1;

UPDATE PerfilAcademico SET
pad_servicioSocial = 0,
pad_creditos = 1,
pad_promedio = 1,
pad_semestre = 1,
pad_idEspecialidad = 1 
WHERE pad_id = 1;


