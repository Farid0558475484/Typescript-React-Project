import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  // let a: number | string = 11;
  // a = "ferid";

  // let names: Array<string> = ["ferid", "ahmet", "mehmet", "ali", "veli"];

  // alert(names[0].toUpperCase());

  type AddressType = {
    city?: string;
    country?: string;
    region: string;
  };

  type UserType = {
    name: string;
    age: number;
    isMarried: boolean;
    address: AddressType | null;
  };

  let user: UserType = {
    name: "ferid",
    age: 25,
    isMarried: false,
    address: {
      city: "istanbul",
      country: "turkey",
      region: "europe",

    },
  };

  const sum = (a: number, b: number)=> a+b;


  // console.log(sum(1,2));
  alert(sum(1,Number ("55")));
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
