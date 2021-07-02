import React from 'react';
import { Route, Switch } from "react-router-dom";
import Items from "./components/items";
import { Icon } from '@iconify/react';
import city24Regular from '@iconify/icons-fluent/city-24-regular';
import outlineLightMode from '@iconify/icons-ic/outline-light-mode';
import outlineDarkMode from '@iconify/icons-ic/outline-dark-mode';
import "tailwindcss/tailwind.css";
import "./app.scss";

function App() {
  return (
    <>
      <nav className="pl-12 pr-16 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Icon icon={city24Regular} color="#484FFF" width={48} style={{stroke: "#484FFF", strokeWidth: 0.3}}/>
          <h1 className="text-4xl font-bold ml-3 mt-1">Simcity BuildIt</h1>
        </div>
        <div className="flex w-2/4 justify-between items-center text-xl font-bold text-gray-800">
          <a href="./items">Items</a>
          <a>Buildings</a>
          <a>Tips</a>
          <a>News</a>
          <div className="flex">
            <button style={{ background: "#484FFF", color: "#F2F2F2" }} className="py-2 px-8 rounded-l-full"><Icon icon={outlineLightMode} color="#F2F2F2" width={24} style={{stroke: "#F2F2F2", strokeWidth: 0.3}}/></button>
            <button className="py-2 px-8 rounded-r-full" style={{ border: "3px solid #484FFF" }}><Icon icon={outlineDarkMode} color="#484FFF" width={24} style={{stroke: "#484FFF", strokeWidth: 0.3}}/></button>
          </div>
        </div>
      </nav>
      <main className="p-12">
        <Route>
            <Switch>
              <Route exact path='/items'><Items/></Route>
            </Switch>
          </Route>
      </main>
    </>
  );
}

export default App;
