CREATE TABLE mp_match (
    id_match INT UNSIGNED NOT NULL auto_increment,
    team_one VARCHAR(15) NOT NULL,
    team_two VARCHAR(15) NOT NULL,
    winner enum('one', 'two') NULL DEFAULT NULL,
    one_score VARCHAR(15) NULL DEFAULT 0,
    two_score VARCHAR(15) NULL DEFAULT 0,
    date_event DATETIME NULL,
    PRIMARY KEY(id_match)
);