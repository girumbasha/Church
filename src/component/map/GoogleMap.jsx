import React from "react";
 import GoogleMapReact from 'google-map-react';
 



export default function GoogleMap(){
  const defaultProps = {
    center: {
     lat: 10.99835602,
     lng: 77.01502627
   },
    zoom: 11
  };

 return (
   
    <div style={{ height: '300px', width: '100%' }}>
    <iframe width="520" height="268" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=268&amp;hl=en&amp;q=Ayantu%20Caffe%20Hawassa+(Church)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><p style={{textDecoration: 'none'}} href='https://maps-generator.com/'>Our Map Address</p>

    </div>
  );
 }

























































// AIzaSyAEfKD8x_d0Vo_r6r3OmwlmATKtBZthPuw










// 
// import React, { useEffect, useRef } from "react";

// const GoogleMap = ({ apiKey, address }) => {
//   const mapContainerRef = useRef(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     script.onload = initMap;

//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, [apiKey]);

//   const initMap = () => {
//     const geocoder = new window.google.maps.Geocoder();

//     geocoder.geocode({ address }, (results, status) => {
//       if (status === window.google.maps.GeocoderStatus.OK) {
//         const churchLocation = results[0].geometry.location;

//         const map = new window.google.maps.Map(mapContainerRef.current, {
//           center: churchLocation,
//           zoom: 11,
//         });

//         const marker = new window.google.maps.Marker({
//           position: churchLocation,
//           map: map,
//           title: address,
//         });
//       } else {
//         console.error("Geocode was not successful for the following reason: " + status);
//       }
//     });
//   };

//   return <div ref={mapContainerRef} style={{ height: "300px", width: "100%" }}></div>;
// };

// export default GoogleMap;


