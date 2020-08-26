CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    img VARCHAR,
    inventory INTEGER,
    description VARCHAR(800),
    price NUMERIC,
);


INSERT INTO shoes (id, name, img, description, price) VALUES ( 1, "Nike Stefan Janoskis", "img ref=", 4, "Built to kick-push or kick-it with friends", 74.99);

INSERT INTO shoes (id, name, img, description, price) VALUES ( 2, "Air Jordan", "img ref=", 3, "Like Mike", 120);

INSERT INTO shoes (id, name, img, description, price) VALUES ( 3, "Crocs Post Malone Limited edition", "img ref=", 8, "Built by Post, for you", 50);

INSERT INTO shoes (id, name, img, description, price) VALUES ( 4, "Reebok Pumps", "img ref=", 2, "Pump-it, pump-it real good", 110);

INSERT INTO shoes (id, name, img, description, price) VALUES ( 5, "Sperry Boat Shoes", "img ref=", 4, "Does not mean I know where the stern is...", 60);

INSERT INTO shoes (id, name, img, description, price) VALUES ( 6, "Nike Air Max 360", "img ref=", 3, "Ruun Forest Ruun", 130);