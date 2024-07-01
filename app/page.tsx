"use client";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Home() {
  const Map = ReactMapboxGl({
    accessToken: process.env.MAPBPOX_ACCESS_TOKEN as string,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
      ;
    </main>
  );
}
