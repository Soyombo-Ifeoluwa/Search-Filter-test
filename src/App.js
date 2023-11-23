import "./App.css";
import { useState } from "react";

const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 },
  { firstName: "Christain", id: 11 },
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const refreshPage = ()=>{
    window.location.reload();
 }


  const searchItems = (searchValue) => {
    let user = [...users];
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchValue.toLowerCase())
    );
      setFilteredResults(filteredData)
  }
  else{
      setFilteredResults(user)
  }
    console.log(searchValue);
  };
  return (
    <div className="App">
      <input
        icon="search"
        placeholder="Search..."
        value={searchInput}
        className="search"
        onChange={(e) => searchItems(e.target.value)}
      />
       <button onClick={refreshPage}>Refresh</button>
      <div>
      {filteredResults.length === 0
        ? <p>No users found</p>
        : <ul>
          {filteredResults.map(user => <li key={user.id}>{user.firstName}</li>)}
        </ul>
      }   
      </div>
    </div>
  );
}

export default App;
