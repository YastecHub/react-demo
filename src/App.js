import React from "react";
import TodoList from "./TodoList";
import { Link, Route, Routes } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route path="/todos" element={<TodoList />} />
          <Route path="/todos" element={<Profile />} />
        </Routes>
        <Navigation />
      </React.Fragment>
    );
  }
}

const Profile = () => {
  return <div>Profile</div>;
};

const Navigation = () => {
  return (
    <div>
      <Link to="/todos">Todo List</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default App;
