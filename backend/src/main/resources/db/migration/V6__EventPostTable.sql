CREATE TABLE event_post (
                      id serial PRIMARY KEY,
                      user_id BIGINT,
                      event_id BIGINT,
                      title varchar,
                      image varchar,
                      CONSTRAINT fk_post_user FOREIGN KEY (user_id) REFERENCES users(id),
                      CONSTRAINT fk_post_event FOREIGN KEY (event_id) REFERENCES event(id)
);