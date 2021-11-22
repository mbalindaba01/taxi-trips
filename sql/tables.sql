create table region(
    region_id serial not null primary key, 
    region_name text not null
);

create table route(
    route_id serial not null primary key, 
    region_ref int, foreign key(region_ref) references region(region_id),
    route_name text not null, 
    route_fare decimal(10,2)
);

create table taxi(
    taxi_id serial not null primary key, 
    region_ref int, foreign key(region_ref) references region(region_id), 
    reg_num text not null
);

create table trip(
    trip_id serial not null primary key, 
    taxi_ref int, foreign key(taxi_ref) references taxi(taxi_id), 
    route_ref int, foreign key(route_ref) references route(route_id)
);