insert into region(region_name) values ('Durban'), ('Cape Town'), ('Gauteng');

insert into route(region_ref, route_name, route_fare) values (1, 'Durban-KwaMashu', 12), (1, 'Durban-Umhlanga', 15),(1, 'Durban-Newlands', 10), ('2', 'Cape Town-Khayelitsha', 13), ('2', 'Cape Town-Gugulethu', 8), ('2', 'Cape Town-Langa', 16), ('3', 'Johannesburg-Sandton', 13), ('3', 'Johannesburg-Randburg', 9), ('3', 'Johannesburg-Fourways', 15);

insert into taxi(region_ref, reg_num) values (1, 'NUZ123123'), (1, 'NUR123123'), (1, 'NN123123'), (2, 'CA123123'), (2, 'CA234234'), (2, 'CA345345'), (3, 'GP123AB'), (3, 'GP234BC'), (3, 'GP345CD');

insert into trip(taxi_ref, route_ref) values (1,1), (1, 2), (2, 1), (2, 3), (3, 2), (3, 3), (4, 4), (4, 5), (5,5), (5, 6), (6, 4), (6, 6), (7, 7), (7, 8), (8, 7), (8, 9), (9, 9), (9, 7);
