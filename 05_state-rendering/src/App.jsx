import React, { useState } from "react";
import Counter from "./Counter";
import Card from "./Card";

const App = () => {
  const [cards, setCards] = useState([
  {
    id: 1,
    title: "Into The Fog",
    description: "The road disappears into silence",
    image:
      "https://images.unsplash.com/photo-1708985055725-70202cbcbcef?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 2,
    title: "The Lost Bridge",
    description: "Concrete, steel and cold blue light",
    image:
      "https://images.unsplash.com/photo-1522532818887-f90cdde76ba2?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 3,
    title: "Vanishing Point",
    description: "Nothing beyond the mist",
    image:
      "https://images.unsplash.com/photo-1708689464066-75447688f90a?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 4,
    title: "Cold Concrete",
    description: "A structure swallowed by fog",
    image:
      "https://images.unsplash.com/photo-1615987757604-feb2773a9d4d?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 5,
    title: "Blue Hour",
    description: "The city disappears before night",
    image:
      "https://images.unsplash.com/photo-1755896409833-0cbd31a796ef?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 6,
    title: "Monolith",
    description: "A giant hidden inside the clouds",
    image:
      "https://images.unsplash.com/photo-1647527248448-b3ac451e1947?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 7,
    title: "Industrial Silence",
    description: "Nothing moves through the haze",
    image:
      "https://images.unsplash.com/photo-1764470408771-fcd68a611b30?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 8,
    title: "The Corridor",
    description: "Light at the end of concrete",
    image:
      "https://images.unsplash.com/photo-1755896409494-246e76be587a?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 9,
    title: "Night Structure",
    description: "Steel disappearing into darkness",
    image:
      "https://images.unsplash.com/photo-1755896409740-0f28922c0997?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 10,
    title: "Grey Horizon",
    description: "The skyline has vanished",
    image:
      "https://images.unsplash.com/photo-1773982055675-67bc032d5774?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 11,
    title: "Under The Bridge",
    description: "A different world beneath the city",
    image:
      "https://images.unsplash.com/photo-1647652524612-f7acedbf730e?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 12,
    title: "Fog Line",
    description: "One figure, endless architecture",
    image:
      "https://images.unsplash.com/photo-1647652524612-f7acedbf730e?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 13,
    title: "Tunnel Vision",
    description: "Drive until the light disappears",
    image:
      "https://images.unsplash.com/photo-1702460794968-33aa1080d8f9?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 14,
    title: "White Noise",
    description: "Everything becomes a silhouette",
    image:
      "https://images.unsplash.com/photo-1668166893230-bab2db9e4343?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 15,
    title: "Last Train",
    description: "Waiting somewhere in the fog",
    image:
      "https://images.unsplash.com/photo-1741309696487-95cdc8c7a692?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 16,
    title: "Distant Road",
    description: "Streetlights fading into nothing",
    image:
      "https://images.unsplash.com/photo-1668166893230-bab2db9e4343?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 17,
    title: "Fogbound",
    description: "The bridge is barely there",
    image:
      "https://images.unsplash.com/photo-1621606016243-f7b15bd78e76?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 18,
    title: "Night Transit",
    description: "Blue lights through the tunnel",
    image:
      "https://images.unsplash.com/photo-1702460794968-33aa1080d8f9?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 19,
    title: "The Crossing",
    description: "One person beneath something enormous",
    image:
      "https://images.unsplash.com/photo-1647652524612-f7acedbf730e?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
  {
    id: 20,
    title: "Beyond The Mist",
    description: "There is something beyond the horizon",
    image:
      "https://images.unsplash.com/photo-1773715757898-8a1dac799359?auto=format&fit=crop&fm=jpg&q=90&w=2000",
  },
]);

  const deleteCard = (id) => {
    let card = cards.filter((elem) => elem.id !== id);
    setCards(card)
  };
  return (
    <>
      {/* <div className="h-screen bg-black text-white flex flex-col gap-18 items-center justify-center">
        <Counter />
      </div> */}

      <div className="grid grid-cols-2 gap-6 p-6 lg:grid-cols-4 bg-olive-200">
        {cards.map((elem, idx) => (
          <Card key={elem.id} images={elem} del={deleteCard} />
        ))}
      </div>
    </>
  );
};

export default App;
