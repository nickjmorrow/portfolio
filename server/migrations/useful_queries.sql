SELECT * FROM information_schema.tables
WHERE table_schema = 'wtl';

SELECT * FROM wtl.cities_v2;

SELECT COUNT(*) FROM wtl.cities_v2;

SELECT
    city_name
    , COUNT(*)
FROM wtl.cities_v2
GROUP BY city_name
HAVING COUNT(*) > 1

SELECT
    CONCAT('UNION SELECT '
    , ''''
    , city_name
    , ''''
    , ', '
    , population
    , ', '
    , latitude
    , ', '
    , longitude
    , ', '
    , cost_of_living_index
    , ', '
    , quality_of_life_index
    , ', '
    , purchasing_power_index
    , ', '
    , safety_index
    , ', '
    , health_care_index
    , ', '
    , property_price_to_income_ratio
    , ', '
    , traffic_commute_time_index
    , ', '
    , pollution_index
    , ', '
    , climate_index
)
FROM wtl.cities_v2

INSERT INTO wtl.cities_v2 (city_name
    , population
    , latitude
    , longitude
    , cost_of_living_index
    , quality_of_life_index
    , purchasing_power_index
    , safety_index
    , health_care_index
    , property_price_to_income_ratio
    , traffic_commute_time_index
    , pollution_index
    , climate_index)


SELECT SUBSTRING(city_name FROM  0 for POSITION(',' IN city_name)) FROM wtl.cities_cost_of_living;

SELECT * FROM wtl.cities_population;

SELECT * FROM wtl.cities_cost_of_living;

SELECT * FROM wtl.cities_violent_crime;

SELECT * FROM wtl.cities_qol;

SELECT * FROM wtl.cities_v2;

INSERT INTO wtl.cities_v2 (city_name
    , population
    , latitude
    , longitude
    , cost_of_living_index
    , quality_of_life_index
    , purchasing_power_index
    , safety_index
    , health_care_index
    , property_price_to_income_ratio
    , traffic_commute_time_index
    , pollution_index
    , climate_index)
SELECT 
    col.city_name AS city_name
    , pop.population
    , pop.latitude
    , pop.longitude
    , qol.cost_of_living_index
    , qol.quality_of_life_index
    , qol.purchasing_power_index
    , qol.safety_index 
    , qol.health_care_index
    , qol.property_price_to_income_ratio
    , qol.traffic_commute_time_index
    , qol.pollution_index
    , qol.climate_index
FROM wtl.cities_population pop
FULL JOIN wtl.cities_cost_of_living col
    ON TRIM(SUBSTRING(col.city_name FROM  0 for POSITION(',' IN col.city_name))) = TRIM(pop.cityname)
FULL JOIN wtl.cities_violent_crime vio
    ON vio.city_name = pop.cityname
FULL JOIN wtl.cities_qol qol
    ON TRIM(SUBSTRING(qol.city_name FROM  0 for POSITION(',' IN qol.city_name))) = TRIM(pop.cityname)
WHERE pop.population IS NOT NULL
AND col.cost_of_living IS NOT NULL
AND vio.violent_crime IS NOT NULL
AND qol.quality_of_life_index IS NOT NULL

CREATE TABLE wtl.cities_v2 (
    city_id INT NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , city_name VARCHAR(200) NOT NULL
    , population INT NOT NULL
    , latitude FLOAT NOT NULL
    , longitude FLOAT NOT NULL
    , quality_of_life_index FLOAT NOT NULL
    , purchasing_power_index FLOAT NOT NULL
    , safety_index FLOAT NOT NULL
    , health_care_index FLOAT NOT NULL
    , cost_of_living_index FLOAT NOT NULL
    , property_price_to_income_ratio FLOAT NOT NULL
    , traffic_commute_time_index FLOAT NOT NULL
    , pollution_index FLOAT NOT NULL
    , climate_index FLOAT NOT NULL
);



-- SELECT SUBSTRING(qol.city_name FROM  0 for POSITION(',' IN qol.city_name)) 
-- FROM wtl.cities_qol qol;

-- SELECT * FROM wtl.cities_population