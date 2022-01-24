import "./App.css";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import { useEffect, useState } from "react";
import MainPage from "./pages/mainpage";
import ItemForm from "./pages/ItemForm";
import NavBar from "./pages/NavBar";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [cartOpen, setCartOpen] = useState(true);

  const handleCartOpen = (event) => {
    setCartOpen(event.currentTarget);
  };

  let searchedItem = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(currentUser);

  useEffect(() => {

    fetch("https://e-commerce-project-flatiron.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  function handleDeleteItem(id){
    const updatedItemsArray = items.filter((item)=> item.id !== id.id)
    setItems(updatedItemsArray)
  }


  useEffect(() => {
    fetch('https://e-commerce-project-flatiron.herokuapp.com/me')
    .then(res => res.json())
    .then(data=> data.username && setCurrentUser(data) );
    },[])

  if (!currentUser) {
    return (
      <>
        {/* <Landing /> */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signin"
            element={<SignIn setCurrentUser={setCurrentUser} />}
          />
        </Routes>
      </>
    );
  } else {
    return (
      <>
        <NavBar
          setSearch={setSearch}
          search={search}
          setCurrentUser={setCurrentUser}
          setCartOpen={setCartOpen}
          carOpen={handleCartOpen}
        />
        <Routes>
          <Route
            path="/MainPage"
            element={
              <MainPage
                handleDeleteItem = {handleDeleteItem}
                items={searchedItem}
                currentUser={currentUser}
                setCartOpen={setCartOpen}
                cartOpen={cartOpen}
              />
            }
          />
          <Route
            path="/ItemForm"
            element={<ItemForm currentUser={currentUser} />}
          />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </>
    );
  }
}

export default App;
