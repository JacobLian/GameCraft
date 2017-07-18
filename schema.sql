
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
    description text,
    job_id integer
);

INSERT INTO jobDescription (jobName, description) VALUES ('Paladin', 'Holy', 1);
INSERT INTO jobDescription (jobName, description) VALUES ('Dark Knight', 'Darkness', 2);
INSERT INTO jobDescription (jobName, description) VALUES ('Warrior', 'Beast', 3);
INSERT INTO jobDescription (jobName, description) VALUES ('Monk', 'Beat it', 4);
INSERT INTO jobDescription (jobName, description) VALUES ('Dragoon', 'Dragon', 5);
INSERT INTO jobDescription (jobName, description) VALUES ('Ninja', 'Shadows', 6);
INSERT INTO jobDescription (jobName, description) VALUES ('Samurai', 'Japan', 7);
INSERT INTO jobDescription (jobName, description) VALUES ('Bard', 'Karaoke', 8);
INSERT INTO jobDescription (jobName, description) VALUES ('Machinist', 'Pew Pew', 9);
INSERT INTO jobDescription (jobName, description) VALUES ('Black Mage', 'Boom', 10);
INSERT INTO jobDescription (jobName, description) VALUES ('Summoner', 'Summons', 11);
INSERT INTO jobDescription (jobName, description) VALUES ('Red Mage', 'Chain', 12);
INSERT INTO jobDescription (jobName, description) VALUES ('White Mage', 'Big Heals', 13);
INSERT INTO jobDescription (jobName, description) VALUES ('Scholar', 'Books', 14);
INSERT INTO jobDescription (jobName, description) VALUES ('Astrologian', 'Stars', 15);

CREATE TABLE feedback(
    id SERIAL PRIMARY KEY,
    subject TEXT,
    message TEXT
)

INSERT INTO feedback (subject, message) VALUES ('Testing', 'Tested')