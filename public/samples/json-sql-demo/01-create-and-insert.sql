-- Fictional SQL example for source inspection, not execution.
CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(120) NOT NULL,
    status VARCHAR(20) DEFAULT 'active'
);
INSERT INTO users (id, username, email, status) VALUES
    (1001, 'alex', 'alex@example.com', 'active'),
    (1002, 'sam', 'sam@example.com', 'pending');
