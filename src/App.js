import { useState } from "react";
import "./styles.css";

const recomendoData = {
  Books: [
    { name: "Malory Towers", rating: "4.5/5" },
    { name: "St. Clare's", rating: "4.3/5" },
    { name: "Harry Potter and The Deathly Hallows", rating: "4.6/5" },
    { name: "The Alchemist", rating: "4.7/5" },
    { name: "Famous Five", rating: "4.1/5" }
  ],

  Anime: [
    { name: "Steins Gate", rating: "4.9/5" },
    { name: "Shiki", rating: "5/5" },
    { name: "KonoSuba", rating: "4.7/5" },
    { name: "Clannad", rating: "5/5" },
    { name: "No Game No Life", rating: "4.7/5" }
  ],
  Manga: [
    { name: "Nisekoi", rating: "4.6/5" },
    { name: "Solo Levelling", rating: "4.8/5" },
    { name: "The Promised Neverland", rating: "5/5" },
    { name: "Masamune-kun's Revenge", rating: "4.7/5" },
    { name: "The World God Only Knows", rating: "4.3/5" }
  ]
};

export default function App() {
  const [selectCategory, setCategory] = useState("Anime");
  function onClickHandler(cat) {
    setCategory(cat);
  }

  return (
    <div className="App">
      <h1>Recomendo App</h1>
      <p>
        Here is my list of my Favourite Books, Manga and Anime to read and watch
        in your freetime.
      </p>
      <div>
        {Object.keys(recomendoData).map((cat) => (
          <button onClick={() => onClickHandler(cat)}>{cat}</button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {recomendoData[selectCategory].map((item) => (
            <li key={item.name}>
              <div className="name"> {item.name} </div>
              <div className="rating"> {item.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
