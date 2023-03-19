CREATE TABLE event (
                       id SERIAL PRIMARY KEY,
                       title VARCHAR(255),
                       description TEXT,
                       type VARCHAR(255),
                       image VARCHAR(255),
                       coordinates POINT
);
CREATE TABLE host (
                      id serial PRIMARY KEY,
                      user_id BIGINT,
                      event_id BIGINT,
                      CONSTRAINT fk_host_user FOREIGN KEY (user_id) REFERENCES users(id),
                      CONSTRAINT fk_host_event FOREIGN KEY (event_id) REFERENCES event(id)
);
CREATE TABLE participant (
                      id serial PRIMARY KEY,
                      user_id BIGINT,
                      event_id BIGINT,
                      CONSTRAINT fk_host_user FOREIGN KEY (user_id) REFERENCES users(id),
                      CONSTRAINT fk_host_event FOREIGN KEY (event_id) REFERENCES event(id)
);
