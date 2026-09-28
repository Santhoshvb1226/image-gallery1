import { useState } from "react";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/Navbar";

import "./App.css";
import "./components/ImageCard.css";
import "./components/Navbar.css";

const images = [
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Mountain",
    description: "Beautiful mountain landscape."
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    title: "Nature",
    description: "Peaceful nature scenery."
  },
  {
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    title: "Lake",
    description: "Beautiful lake surrounded by mountains."
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Beach",
    description: "Relaxing beach with clear blue water."
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Forest",
    description: "Green forest filled with beautiful trees."
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Landscape",
    description: "Amazing natural landscape."
  },
  {
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    title: "Green Valley",
    description: "Beautiful green valley view."
  },
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    title: "Mountain Peak",
    description: "Snowy mountain peaks."
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Waterfall",
    description: "Beautiful waterfall surrounded by nature."
  },
  {
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    title: "Forest Path",
    description: "A peaceful path through the forest."
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Valley",
    description: "Amazing valley landscape."
  },
  {
    image: "https://images.unsplash.com/photo-1511497584788-876760111969",
    title: "Green Forest",
    description: "Beautiful green forest."
  },
  {
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    title: "Island",
    description: "Beautiful island surrounded by water."
  },
  {
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
    title: "Desert",
    description: "Golden desert landscape."
  },
  {
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    title: "Trees",
    description: "Tall trees in a peaceful forest."
  },
  {
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Snow Mountain",
    description: "Beautiful snowy mountain."
  },
  {
    image: "https://images.unsplash.com/photo-1473445361085-b9a07f55608b",
    title: "Forest Road",
    description: "A beautiful road through the forest."
  },
  {
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    title: "Countryside",
    description: "Peaceful countryside scenery."
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    title: "Hills",
    description: "Beautiful hills and nature."
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Ocean",
    description: "Beautiful ocean view."
  },
  {
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    title: "Morning",
    description: "Fresh and peaceful morning."
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Trees and Nature",
    description: "Beautiful trees surrounded by nature."
  },
  {
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    title: "Water",
    description: "Beautiful flowing water."
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    title: "Nature View",
    description: "Amazing view of nature."
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    title: "Adventure",
    description: "Beautiful outdoor adventure."
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = images.filter(function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="app" id="home">
        <h1>Dynamic Image Gallery</h1>

        <div className="gallery">
          {filteredImages.map(function (item, index) {
            return (
              <ImageCard
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>

        {filteredImages.length === 0 && (
          <p className="no-results">No images found.</p>
        )}
      </div>

      <section className="about" id="about">
        <h2>About Us</h2>

        <p>
          Welcome to our Dynamic Image Gallery.
          This React project uses reusable components,
          props, arrays, and the map method.
        </p>
      </section>
    </>
  );
}

export default App;