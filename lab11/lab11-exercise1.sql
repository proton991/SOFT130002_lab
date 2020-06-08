CREATE TABLE `Credentials` (
`UserID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
`Username` VARCHAR( 64 ) NOT NULL ,
`Password` VARCHAR( 64 ) NOT NULL
) ENGINE = MYISAM;

INSERT INTO `Credentials` (
`UserID` ,
`Username` ,
`Password`
)
VALUES (
NULL , 'testuser', 'funwebdev'
);
