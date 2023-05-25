ALTER TABLE users
add constraint username_uq UNIQUE(username),
add constraint email_uq UNIQUE(email);
