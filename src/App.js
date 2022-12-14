import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Small from "./components/Small";

function App() {
  const [array, setArray] = useState([]);

  const addNote = (newNote) => {
    setArray((prev) => {
      return [...prev, newNote];
    });

    console.log(newNote);
  };
  const deletee = (id) => {
    setArray((prev) => {
      return prev.filter((item, index) => {
        return id !== index;
      });
    });

    console.log("reresa");
  };
  return (
    <div className="App">
      <Header />
      <Main onAddNote={addNote} />
      <ul className="big">
        {array.map((item, index) => {
          return (
            <li>
              <Small
                title={item.title}
                content={item.content}
                onDelete={deletee}
                key={index}
                id={index}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

//add
// save state and function
// pass note from child to parent
// add new note to an array
// take array and render component

//delete
// pass a delete function to the child using props
// in delete function update state of array and use filter
// get a key and id on child in parent and pass it down
