CREATE TABLE mp_player (
	id mediumint NOT NULL auto_increment,
    username VARCHAR(15) NOT NULL unique,
	password VARCHAR(15) NOT NULL,
    primary key(id)
    );