CREATE BATABASE datebase_links;


USE datebase_links;

CREATE TABLE users{
    id INT(11) NOT NULL,
    username VARCHAR (16) NOT NULL,
    password VARCHAR(60) not NULL,
    fullname VARCHAR(100) not NULL
};

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT=2;

DESCRIBE users;

CREATE TABLE links(
    id INT (11) NOT NULL,
    title VARCHAR (150) NOT NULL,
    url VARCHAR (255) NOT NULL,
    description TEXT,
    user_id(11);
    creare_at timestamp NOT NULL current_timestamp,
    CONSTRAINT fk_user FOREING KEY (user_id) REFERENCES users(id)
);    
ALTER TABLE links
ADD PRIMARY KEY (id);
ALTER TABLE links
MODIFY id INT (11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

DESCRIBE links;


