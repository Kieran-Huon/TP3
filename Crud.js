
import { useState } from "react";


function Crud() {
  const [persoList, setpersoList] = useState([]);
  const [newperso, setNewperso] = useState("");

  const handleChange = (event) => {
    setNewperso(event.target.value);
  };

  const addPerso = () => {
    const perso = {
      id: persoList.length === 0 ? 1 : persoList[persoList.length - 1].id + 1,
      persoName: newperso,
      completed: false,
    };
    setpersoList(perso.taskName !== "" ? [...persoList, perso] : persoList);
  };

  const deleteperso = (id) => {
    setpersoList(persoList.filter((perso) => perso.id !== id));
  };

  const completeperso = (id) => {
    setpersoList(
      persoList.map((perso) => {
        if (perso.id === id) {
          return { ...perso, completed: true };
        } else {
          return perso;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addPerso">
        <input onChange={handleChange} />
        <button onClick={addPerso}> Choisis un personnage</button>
      </div>
      <div className="list">
        {persoList.map((perso) => {
            return (
                <div className="perso" key={perso.id}>
                <p className={perso.completed ? "completed" : ""}>{perso.persoName}</p>
                <button onClick={() => deleteperso(perso.id)}>Delete</button>
                <button onClick={() => completeperso(perso.id)}>Complete</button>
                </div>
            );
        })}
      </div>
    </div>
  );
}

export default Crud;
