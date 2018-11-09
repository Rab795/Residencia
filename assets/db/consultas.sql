USE MED;

SELECT alu_id,alu_noControl,alu_nombre,alu_aPaterno,alu_aMaterno,alu_tel,car_nombre,alu_Status 
FROM Alumnos INNER JOIN Carreras ON alu_idCarrera = car_id
WHERE alu_noControl LIKE '%%'
AND (alu_nombre LIKE '%%' OR alu_aPaterno LIKE '%%' OR alu_aMaterno LIKE '%%')
AND alu_idCarrera = 2 
AND alu_Status = 'Activo';

SELECT car_id,car_nombre FROM Carreras;
SELECT car_id,car_nombre FROM Carreras;

INSERT INTO Carreras VALUES (2,"Ing. en Sistemas",1);
INSERT INTO Carreras VALUES (3,"Ing. en Infomatica",1);
INSERT INTO Alumnos VALUES (22,"14211521","Francisco","Dominguez","Cortez","Activo","6642335653",2,1,1,1);
INSERT INTO Alumnos VALUES (17,"15211522","Salvador","Rabago","Cruz","Inactivo","6643678166",3,1,1,1);
INSERT INTO Alumnos VALUES (18,"16211523","Kimberly","Lopez","Gomez","Activo","6642343423",1,1,1,1);
INSERT INTO Alumnos VALUES (19,"17211524","Luis","Rodriguez","Camacho","Activo","664878677",2,1,1,1);
INSERT INTO Alumnos VALUES (20,"18211525","Jorge","Perez","Laredo","Activo","6643456786",2,1,1,1);
INSERT INTO Alumnos VALUES (21,"18211526","Francisco","Dominguez","Cortez","Activo","6642335653",3,1,1,1);