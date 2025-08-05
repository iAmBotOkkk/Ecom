
import { useState } from "react";
import { Appbar } from "../Components/AppBar";
import { Hero } from "../Components/hero";
import { AddShopForm } from "../Components/details";


export const Homepage = () => {
const [isAddshopOpen , setIsAddshopOpen] = useState(false);
const [isSignUp , setIsSignUp] = useState(false);
const [isSignIn , setIsSignIn] = useState(false);

  return (
    <div>
      <Appbar  onAddShopClick={() => {
        setIsAddshopOpen(true)
      }} /> 
       <Hero/>

       <AddShopForm 
       isOpen={isAddshopOpen === true}
       onClose={() => {
        setIsAddshopOpen(false)
       }} /> 

       
    </div>
  );
};
