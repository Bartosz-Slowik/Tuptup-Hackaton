ALTER TABLE event 
ALTER COLUMN coordinates TYPE geometry(Point,4326) 
USING ST_SetSRID(coordinates::GEOMETRY(POINT), 4326);