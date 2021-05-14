function initMap(){
    var location = {lat : 28.75023 , lng: 77.11798};
    var tnp = {lat : 28.7501922 , lng: 77.1171972};
    var oat = {lat : 28.7498520 , lng: 77.1176061};
    var braudi = {lat : 28.7502522 , lng: 77.1164258};
    var micmac = {lat : 28.7512523 , lng: 77.1166547};
    var library = {lat : 28.7506316 , lng: 77.1165213};
    var academicsection = {lat : 28.7498965 , lng: 77.1163321};
    var administartionblock = {lat : 28.7498178 , lng: 77.1161273};
    var nescafe = {lat : 28.7496703 , lng: 77.1166897};
    var computercenter = {lat : 28.7503122 , lng: 77.1173276};
    var sps18 = {lat : 28.7517372 , lng: 77.1185804};
    var appliedchem = {lat : 28.7414645 , lng: 77.1179962};
    var mathsdepartmnt = {lat : 28.7509366 , lng: 77.1180136};
    var centeralwork = {lat : 28.7508988 , lng: 77.1185126};
    var departmntofbio = {lat : 28.7501350 , lng: 77.1183965};
    var mechanicldepartmnt = {lat : 28.7499837 , lng: 77.1186109};
    var maxi = {lat : 28.7492961 , lng: 77.1187878};
    var hpmcjuice = {lat : 28.7492993 , lng: 77.1184327};
    var sps912 = {lat : 28.7494183 , lng: 77.1200866};
    var type4faculty = {lat : 28.7493813 , lng: 77.1221970};
    var horiculturedepartmnt = {lat : 28.7508977 , lng: 77.1200012};
    var csdepartmnt = {lat : 28.7486985 , lng: 77.1175206};
    var eedepartmnt = {lat : 28.7488063 , lng: 77.1169404};
    var civildepartmnt = {lat : 28.7489273 , lng: 77.1179943};

    
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 17.9,
        center:location,
        stylers: [
            { visibility: "off" }
      ]
    });
    const svgMarker = {
        path:
          "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 2.0,
        strokeWeight: 1.0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(12, 20),
      };
      const svgMarker2 = {
        path:
          "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 2.0,
        strokeWeight: 1.0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(5, 20),
      };
      const svgMarker3 = {
        path:
          "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 2.0,
        strokeWeight: 1.0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(23, 29),
      };
      const svgMarker4 = {
        path:
          "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 2.0,
        strokeWeight: 1.0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(17, 15),
      };
      const svgMarker5 = {
        path:
          "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 2.0,
        strokeWeight: 1.0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(1, 12),
      };
      const svgMarker6 = {
        path:
          "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "red",
        fillOpacity: 2.0,
        strokeWeight: 1.0,
        rotation: 0,
        scale: 2,
        anchor: new google.maps.Point(11, 25),
      };
      const tnplib = [
        {lat : 28.7501922 , lng: 77.1171972},
        {lat : 28.7506316 , lng: 77.1165213}
        
        // { lat: -27.467, lng: 153.027 },
      ];
      const tnplibPath = new google.maps.Polyline({
        path: tnplib,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      const tnpoat = [
        {lat : 28.7501922 , lng: 77.1171972},
        {lat : 28.7506316 , lng: 77.1165213}
        
        // { lat: -27.467, lng: 153.027 },
      ];
      const tnpoatPath = new google.maps.Polyline({
        path: tnpoat,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      const tnpbraudi = [
        {lat : 28.7501922 , lng: 77.1171972},
        {lat : 28.7506316 , lng: 77.1165213}
        
        // { lat: -27.467, lng: 153.027 },
      ];
      const tnpaudiPath = new google.maps.Polyline({
        path: tnpbraudi,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      const tnpmic = [
        {lat : 28.7501922 , lng: 77.1171972},
        {lat : 28.7506316 , lng: 77.1165213}
        
        // { lat: -27.467, lng: 153.027 },
      ];
      const tnpmicPath = new google.maps.Polyline({
        path: tnpmic,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      const micsps18 = [
        {lat : 28.7501922 , lng: 77.1171972},
        {lat : 28.7506316 , lng: 77.1165213}
        
        // { lat: -27.467, lng: 153.027 },
      ];
      const micsps18Path = new google.maps.Polyline({
        path: micsps18,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      const micmaths = [
        {lat : 28.7501922 , lng: 77.1171972},
        {lat : 28.7506316 , lng: 77.1165213}
        
        // { lat: -27.467, lng: 153.027 },
      ];
      const micmathsPath = new google.maps.Polyline({
        path: micmaths,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      tnplibPath.setMap(map);
      micsps18Path.setMap(map);
      tnpmicPath.setMap(map);
      tnpaudiPath.setMap(map);
      tnpoatPath.setMap(map);
      tnplibPath.setMap(map);

    
    // marker.setMap(null);
    new google.maps.Marker({
    position: tnp,
    icon: svgMarker,
map,
title: "Hello World!",
});
new google.maps.Marker({
    position: oat,
    icon: svgMarker,
map,
// icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
title: "Hello World!",
});
new google.maps.Marker({
    position: braudi,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: micmac,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: library,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: academicsection,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: administartionblock,
    icon: svgMarker5,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: nescafe,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: computercenter,
    icon: svgMarker,

map,
title: "Hello World!",
});

new google.maps.Marker({
    position: sps18,
    icon: svgMarker4,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: appliedchem,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: mathsdepartmnt,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: centeralwork,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: departmntofbio,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: mechanicldepartmnt,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: maxi,
    icon: svgMarker,
    
map,
title: "Hello World!",
});
new google.maps.Marker({
    position: hpmcjuice,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: sps912,
    icon: svgMarker2,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: type4faculty,
    icon: svgMarker3,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: horiculturedepartmnt,
    icon: svgMarker,
    map,
title: "Hello World!",
});
new google.maps.Marker({
    position: csdepartmnt,
    icon: svgMarker6,

map,
title: "Hello!",
});
new google.maps.Marker({
    position: eedepartmnt,
    icon: svgMarker,

map,
title: "Hello World!",
});
new google.maps.Marker({
    position: civildepartmnt,
    icon: svgMarker,
    
map,
title: "Hello World!",
});
}
