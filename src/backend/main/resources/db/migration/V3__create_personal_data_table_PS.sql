ALTER TABLE users
add constraint pk_users_id primary key (id);

CREATE TABLE user_personal_data
(
    id            SERIAL PRIMARY KEY,
    user_id       BIGINT UNIQUE,
    first_name    VARCHAR(50),
    last_name     VARCHAR(50),
    image         VARCHAR(256),
    phone_nr      VARCHAR(16),
    date_of_birth DATE,
    CONSTRAINT fk_user_personal_data_user_id FOREIGN KEY (user_id)
        REFERENCES users (id) ON DELETE CASCADE
);