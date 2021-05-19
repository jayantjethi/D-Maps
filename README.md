# D-Maps
This project gives routes, using a set of markers created using geojson data Implemented in our DTU College which gives poistion from one to Another.

The project has 23 markers placed around the DTU Map and a graph is constructed using these markers:

![Screenshot (290)](https://user-images.githubusercontent.com/67199696/118814069-62c7cd80-b8cd-11eb-92f4-b735938ac8dc.png)

where i represents the point from which you are going and j represents the destination value.

The coordinates are retrived from the GeoJson data, which is of the format

![Screenshot (291)](https://user-images.githubusercontent.com/67199696/118815116-86d7de80-b8ce-11eb-807b-939a5afe3192.png)

Here We Have Used Google Maps API Key , And Have set Markers using Marker function in it
We Have Implemented this Whole Project Using Dijkstra Algorithm(The Concept Used In Graphs).

![Screenshot (299)](https://user-images.githubusercontent.com/67199696/118821025-7591d080-b8d4-11eb-9a19-a30914faa08b.png)

This Is the Google Map Which We Have Implemented By Setting the Co-ordinated of DTU(i.e. Latitude and Longtitude respectively).

![Screenshot (293)](https://user-images.githubusercontent.com/67199696/118818796-52feb800-b8d2-11eb-9201-669cd07e763c.png)

The line Between Two Points Basically Represents Edge Between Two Vertices of Graph as in Dijkstra Algo.

![Screenshot (295)](https://user-images.githubusercontent.com/67199696/118819289-d4564a80-b8d2-11eb-8df9-1d20033379ae.png)

In Our Project Also Calculate Distance Between Two Points(i.e. From Starting Point Till Ending Point)(in Metres).

![Screenshot (297)](https://user-images.githubusercontent.com/67199696/118820278-c05f1880-b8d3-11eb-9e5e-7e2d12671cfd.png)


