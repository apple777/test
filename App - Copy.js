import logo from './logo.svg';
import './App.css';
import Info3 from "./info.js";
import Info4 from './info.js';
import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import AddItem from "./AddItems";
import ItemsDisplay from "./ItemsDisplay";
import styled from "styled-components";
import { type } from '@testing-library/user-event/dist/type';
import Test from "./Class";

const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : "black")};
`;

// main app add state billing ...
function AppSearchBar() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });
  // on debug
  const [showTest, setShowTest] = useState();

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const countItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "POST",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1)
          this.setState({ count: this.state.count + 1 });
          //console.log(item, this.state.count)
        }
        return (
          <div>{item}</div>
        );
      }


    )
    //this.setState({ count: this.state.count + 1 });

  }
  const deleteItem = (item) => {
    const items = data["items"];
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/items/${item.id}`, requestOptions).then(
      (response) => {
        //response.json()
        if (response.ok) {
          const idx = items.indexOf(item);
          items.splice(idx, 1);
          setData({ items: items });
        }
      }
    )
  }
  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      //.then((data) => console.log(data)
      .then((data) => {
        items.push(data);
        setData({ items: items });
        console.log(data);
      });
  }

  // useEffect(() => {
  //   console.log("use effect");

  //   return () => {
  //     console.log("cleanup");
  //   };
  // }, [data, filters]);

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({ items: data }));
  }, []);

  const filterData = (data) => {
    const filterData = [];

    if (!filters.name) {
      return data;
    }
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) continue;
      if (filters.price !== 0 && item.price !== filters.price) continue;
      if (filters.type !== "" && item.type !== filters.type) continue;
      if (filters.brand !== "" && item.brand !== filters.brand) continue;
      filterData.push(item);
    }
    return filterData;
  };
  return (
    <div className="container">
      {/* <Title color="red">test</Title> */}
      {/* SearchBar.js for the win */}
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
          countItem={countItem} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3">
        <AddItem AddItem={addItemToData} />
        {showTest ? <Test destroy={setShowTest} /> : null}
      </div>
      <Test />
      {/* <p>Name: { "name" in data ? data["name"] : "No Data to display" }</p>
      <p>Max Price: { "price" in data ? data["price"] : "No Data to display" }</p>
      <p>Type: { "type" in data ? data["type"] : "No Data to display" }</p>
      <p>Brand: { "brand" in data ? data["brand"] : "No Data to display" }</p> */}
    </div>
  );
}

// main app add state 
function AppState() {
  return (
    <div className="App">
      <Info />
      <ButtonState></ButtonState>
      <ButtonState></ButtonState>
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We blablabla title !!! ");
  }
  const updateCounterClicked = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <Data title={title} count={count} />
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  );
}

function Data(props) {
  return (
    <div>
      <p>Title: {props.title} </p>
      <p>Count: {props.count} </p>
    </div>
  );
}

// main app orginal
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Moshe WebSite !!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          🎮🎮🎮 Learn React 🎮🎮🎮
        </a>
      </header>

      <Info4 title="Inventory" />
      <Info />
      <AddItemVars text="HEY BRO OF PINK :->" number={18} />
      <AddItem text="HEY BRO OF PINK" number={2} />
      <AddItem text="shalom now" />  {/* default val WOW */}
      <Info2 />
      <Info3 /> {/* external file */}
    </div>
  );
}

function Info() {
  return (
    <div>
      <p><h1>Shalom</h1></p>
      <h5>test</h5>
    </div>
  );
}


// function AddItem(props) {
//   const value2 = props.text;
//   const value = "say it right";//
//   return (
//     <form>
//       <label for="text-form">Type Shalom or something: </label>
//       <input type="text" value={value2} id="text-form" placeholder="Say good"/>
//       <p>{props.number}</p>
//     </form>
//   );
// }
function AddItemVars({ text, number }) {
  const value2 = text;
  const value = "say it right";//
  return (
    <form>
      <label for="text-form">Type Shalom or something: </label>
      <input type="text" value={value2} id="text-form" placeholder="Say good" />
      <p>{number}</p>
    </form>
  );
}

AddItem.defaultProps = {
  number: 5,
  text: "WOW",
}
AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
}

function Info2() {
  const title = "This is my title";
  const showTitle = true;
  if (showTitle) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Manage your stuff.</p>
      </div>
    )
  } else {
    return <p>empty - lost in space. </p>
  }
}
export default AppSearchBar;
