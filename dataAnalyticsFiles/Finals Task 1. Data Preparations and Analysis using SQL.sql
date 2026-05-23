CREATE DATABASE Callcenter_db; 

USE callcenter_db;

CREATE TABLE calls (
	ID CHAR(50),
    cust_name CHAR(50),
    sentiment CHAR(50),
    csat_score INT,
    call_timestamp CHAR(10),
    reason CHAR(50),
    city CHAR(20),
    state CHAR(20),
    channel CHAR(20),
    response_time CHAR(20),
    call_duration_minutes INT,
    call_center CHAR(20)
)

SELECT * FROM calls limit 100;

SELECT call_timestamp FROM calls LIMIT 10;

DESCRIBE calls;

ALTER TABLE calls ADD call_timestamp_new DATE;

set sql_safe_updates = 0;

UPDATE calls SET call_timestamp_new = str_to_date(call_timestamp, '%m/%d/%Y');

ALTER TABLE calls DROP COLUMN call_timestamp; 

SELECT * FROM calls LIMIT 10;

ALTER TABLE calls CHANGE call_timestamp_new call_timestamp DATE;

UPDATE calls SET csat_score = NULL where csat_score = 0; 

SELECT COUNT(*) AS rows_num FROM calls; 

SELECT COUNT(*) AS cols_num FROM information_schema.columns WHERE table_name = 'calls';

SELECT DISTINCT sentiment FROM calls;

SELECT DISTINCT reason FROM calls;

SELECT DISTINCT channel FROM calls;

SELECT DISTINCT response_time FROM calls;

SELECT DISTINCT call_center FROM calls;

SELECT sentiment, count(*), ROUND((COUNT(*) / (SELECT COUNT(*) FROM calls)) * 100, 1) AS pct 
FROM calls GROUP BY 1 ORDER BY 3 DESC;

SELECT reason, count(*), ROUND((COUNT(*) / (SELECT COUNT(*) FROM calls)) * 100, 1) AS pct 
FROM calls GROUP BY 1 ORDER BY 3 DESC;

SELECT channel, count(*), ROUND((COUNT(*) / (SELECT COUNT(*) FROM calls)) * 100, 1) AS pct 
FROM calls GROUP BY 1 ORDER BY 3 DESC;

SELECT response_time, count(*), ROUND((COUNT(*) / (SELECT COUNT(*) FROM calls)) * 100, 1) AS pct 
FROM calls GROUP BY 1 ORDER BY 3 DESC;

SELECT call_center, count(*), ROUND((COUNT(*) / (SELECT COUNT(*) FROM calls)) * 100, 1) AS pct 
FROM calls GROUP BY 1 ORDER BY 3 DESC;

SELECT state, COUNT(*) FROM calls GROUP BY 1 ORDER BY 2 DESC;


-- Aggregations :

SELECT MIN(csat_score) AS min_score, MAX(csat_score) AS max_score, ROUND(AVG(csat_score),1) AS avg_score
FROM calls WHERE csat_score != 0; # MySql added 0 to blank rows. But the min is 1.

SELECT MIN(call_timestamp) AS earliest_date, MAX(call_timestamp) AS most_recent FROM calls;

SELECT MIN(call_duration_minutes) AS min_call_duration, MAX(call_duration_minutes) AS max_call_duration, AVG(call_duration_minutes) AS avg_call_duration FROM calls;

SELECT call_center, response_time, COUNT(*) AS count
FROM calls GROUP BY 1,2 ORDER BY 1,3 DESC;

SELECT call_center, AVG(call_duration_minutes) FROM calls GROUP BY 1 ORDER BY 2 DESC;

SELECT channel, AVG(call_duration_minutes) FROM calls GROUP BY 1 ORDER BY 2 DESC;

SELECT state, COUNT(*) FROM calls GROUP BY 1 ORDER BY 2 DESC;

SELECT state, reason, COUNT(*) FROM calls GROUP BY 1,2 ORDER BY 1,2,3 DESC;

SELECT state, sentiment , COUNT(*) FROM calls GROUP BY 1,2 ORDER BY 1,3 DESC;

SELECT state, AVG(csat_score) as avg_csat_score FROM calls WHERE csat_score != 0 GROUP BY 1 ORDER BY 2 DESC;

SELECT sentiment, AVG(call_duration_minutes) FROM calls GROUP BY 1 ORDER BY 2 DESC;

SELECT DAYNAME(call_timestamp) as Day_of_call, COUNT(*) num_of_calls FROM calls group by 1 ORDER by 2 desc;

SELECT call_timestamp, max(call_duration_minutes) OVER(partition by call_timestamp) AS max_call_duration FROM calls GROUP by 1 ORDER BY 2 DESC;