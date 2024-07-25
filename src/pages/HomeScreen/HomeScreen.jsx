import React from "react";
import "./homeScreen.css";
import { NavLink } from "react-router-dom";

import ContactScreen from "../ContactScreen/ContactScreen";
import CategoryCard from "../../components/Categories/CategoryCard";


export default function HomeScreen() {
  return (
    <div className="  ">


    



     

      <div className="acc mx-auto text-center text-7xl mt-18 mb-28 p-0">
        {/* <h1 className="text-yellow-300">Web, Design et photos !</h1> */}
        <div>
          <img src="../assets/img/utile/logoRose.png" alt="" className="m-auto md:w-1/4  w-4/5"/>
        </div>
        <div className="flex-col  text-xl text-white w-3/4 md:w-2/5 m-auto mb-8 space-y-8 ">
          <h2 className="text-start text-3xl">Photos</h2>
          <h2 className="text-end text-3xl">Logos</h2>
          <h2 className="text-center text-3xl">Animations</h2>
          <h2 className="text-end text-3xl">Sites vitrines</h2>
          <h2 className="text-start text-3xl">Maquettes et Prototypes</h2>
        </div>
        <i className="fa-regular fa-circle-down text-white mt-8 opacity-20" ></i>
      </div>


      <section className="w-full flex flex-wrap cardPre  items-center rounded  justify-center items-center mb-28 text-center p-0 ">
          <div className="flex flex-wrap justify-center items-center w-full mb-8 ">
          <img src="assets/img/zoenb.jpg" alt="" className="object-cover md:w-1/4 p-0 rounded shadow shadow-black "/>
      <div className="flex-col md:w-3/6  justify-center items-center space-y-8  ml-2 ">
          <h3 className="font-bold text-8xl text-white text-center ">AstraGraph</h3><br />
         <p className="text-3xl text-center  text-white">Astra c'est moi ! <br /><br />
         Passionnée par tous les arts visuels aujourd'hui je créer AstraGraph, <br />
         une solution efficace pour votre image. <br /><br />
         Photos, sites vitrines, logos et bannière, animations 2D <br /> et même des overlays pour streamers ! 
          </p> <br /><br />
          <button className=" rounded card shadow p-4  m-auto text-center center ">
            <NavLink to="/contact" className="font-bold text-5xl text-white   m-auto text-center">Contact</NavLink>
          </button>
         

        </div>
        </div>
      </section>

        <h2 className="text-center font-bold rose text-white font-medium text-5xl my-8">La selec'</h2>
        <h1 className="text-white text-center text-3xl ">Photographie</h1>
      <section className=" md:flex lg:flex-row flex-wrap justify-around md:w-5/6 m-auto space-x-4  ">
      <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2  my-8 rounded  card justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Mariage</h3>
          <img src="assets/img/mariages/femme para 1.jpg" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded card  justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Animaux</h3>
          <img src="assets/img/titbout1.jpg" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded card  justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Solo</h3>
          <img src="assets/img/thomas.jpg" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
        </section>
        <h1 className="text-white text-center text-3xl mt-8 ">Web et Design</h1>
        <section className="flex flex-wrap justify-around md:w-5/6 m-auto space-x-4  ">

            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2  my-8 rounded  card justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Logos</h3>
          <img src="assets/img/utile/logoRose.png" alt="" className="object-contain  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded card  justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Maquettes</h3>
          <img src="assets/img/utile/Maquette_vignette.png" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
            <NavLink to='/prestations' className="w-5/6 lg:w-1/4  ">
        <div className="flex-col shadow shadow-black pt-2 my-8 rounded card  justify-center items-center space-y-8 text-center p-0 ">
          <h3 className="font-medium text-3xl text-white my-4">Sites</h3>
          <img src="assets/img/utile/site_vignette.png" alt="" className="object-cover  p-0 m-auto"/>
        
         
       

        </div>
            </NavLink>
       
       

      </section>
   

   <ContactScreen/>
  
    </div>
  );
}
