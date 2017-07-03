
CREATE TABLE jobs
(
    id SERIAL PRIMARY KEY,   
    job VARCHAR(20),
    role text
);

INSERT INTO jobs (job, role) VALUES ('Paladin', 'Tank');
INSERT INTO jobs (job, role) VALUES ('Dark Knight', 'Tank');
INSERT INTO jobs (job, role) VALUES ('Warrior', 'Tank');
INSERT INTO jobs (job, role) VALUES ('Monk', 'Melee DPS');
INSERT INTO jobs (job, role) VALUES ('Dragoon', 'Melee DPS');
INSERT INTO jobs (job, role) VALUES ('Ninja', 'Melee DPS');
INSERT INTO jobs (job, role) VALUES ('Samurai', 'Melee DPS');
INSERT INTO jobs (job, role) VALUES ('Bard', 'Ranged Physical DPS');
INSERT INTO jobs (job, role) VALUES ('Machinist', 'Ranged Physical DPS');
INSERT INTO jobs (job, role) VALUES ('Black Mage', 'Caster DPS');
INSERT INTO jobs (job, role) VALUES ('Summoner', 'Caster DPS');
INSERT INTO jobs (job, role) VALUES ('Red Mage', 'Caster DPS');
INSERT INTO jobs (job, role) VALUES ('White Mage', 'Healer');
INSERT INTO jobs (job, role) VALUES ('Scholar', 'Healer');
INSERT INTO jobs (job, role) VALUES ('Astrologian', 'Healer');

CREATE TABLE jobDescription
(   id SERIAL PRIMARY KEY, 
    jobName text,
    description text
);

INSERT INTO jobDescription (jobName, description) VALUES ('Paladin', 'Holy');
INSERT INTO jobDescription (jobName, description) VALUES ('Dark Knight', 'Darkness');
INSERT INTO jobDescription (jobName, description) VALUES ('Warrior', 'Beast');
INSERT INTO jobDescription (jobName, description) VALUES ('Monk', 'Beat it');
INSERT INTO jobDescription (jobName, description) VALUES ('Dragoon', 'Dragon');
INSERT INTO jobDescription (jobName, description) VALUES ('Ninja', 'Shadows');
INSERT INTO jobDescription (jobName, description) VALUES ('Samurai', 'Japan');
INSERT INTO jobDescription (jobName, description) VALUES ('Bard', 'Karaoke');
INSERT INTO jobDescription (jobName, description) VALUES ('Machinist', 'Pew Pew');
INSERT INTO jobDescription (jobName, description) VALUES ('Black Mage', 'Boom');
INSERT INTO jobDescription (jobName, description) VALUES ('Summoner', 'Summons');
INSERT INTO jobDescription (jobName, description) VALUES ('Red Mage', 'Chain');
INSERT INTO jobDescription (jobName, description) VALUES ('White Mage', 'Big Heals');
INSERT INTO jobDescription (jobName, description) VALUES ('Scholar', 'Books');
INSERT INTO jobDescription (jobName, description) VALUES ('Astrologian', 'Stars');

CREATE TABLE feedback(
    id SERIAL PRIMARY KEY,
    subject TEXT,
    message TEXT
)

INSERT INTO feedback (subject, message) VALUES ('Testing', 'Tested')