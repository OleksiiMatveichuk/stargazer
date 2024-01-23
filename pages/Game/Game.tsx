import { useEffect, useState } from "react";
import { GameScreen } from "../../src/components/GameScreen";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../../src/utlits/localStorage";

const Game = () => {
  // let value;
  // // Get the value from local storage if it exists
  // value = localStorage.getItem("favoriteNumber") || "";

  // // Set the value received from the local storage to a local state
  // const [favoriteNumber, setFavoriteNumber] = useState(value);

  // // When user submits the form, save the favorite number to the local storage
  // const saveToLocalStorage = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem("favoriteNumber", favoriteNumber);
  // };

  // return (
  //   <div>
  //     <label htmlFor="number">Your favorite number</label>
  //     <form onSubmit={saveToLocalStorage}>
  //       <input
  //         id="number"
  //         value={favoriteNumber}
  //         onChange={(e) => setFavoriteNumber(e.target.value)}
  //       />
  //       <input type="submit" value="Save" />
  //     </form>
  //   </div>
  // );
  const [points, setPoints] = useState(2);
  useEffect(() => {
    const savedData = getFromLocalStorage("points");
    if (savedData) {
      setMyData(savedData);
    }
    addToLocalStorage("KEY", points);
    // return () => addToLocalStorage("KEY", points);
  }, []);
  const handleClick = () => {
    setPoints((prev) => prev + 1);
    console.log('coordinate', e.target.getBoundingClientRect())
    // addToLocalStorage("myData", points);
  };
  return (
    <>
      <span onClick={handleClick}>points: {points}</span>
      <button type="button">Menu</button>
      <GameScreen />;
    </>
  );
};

export default Game;
