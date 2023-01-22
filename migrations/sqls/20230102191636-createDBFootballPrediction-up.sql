CREATE TABLE mp_player (
	id_player mediumint NOT NULL auto_increment,
    username VARCHAR(15) NOT NULL unique,
	password VARCHAR(15) NOT NULL,
    primary key(id_player)
    );