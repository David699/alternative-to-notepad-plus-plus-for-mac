-- Fictional statements for reading symbolic previews only.
CREATE TABLE users (id INTEGER PRIMARY KEY, status VARCHAR(20));
UPDATE users SET status = 'active' WHERE id = 1002;
DELETE FROM users WHERE status = 'pending';
-- No WHERE: preview should flag an all-rows operation.
DELETE FROM users;
