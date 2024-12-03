import React from "react";
import TechCarruselItem from "./TechCarruselItem";

// Importación de las imágenes
import amplify from "../assets/stack/amplify.svg";
import aws from "../assets/stack/aws.svg";
import balsamiq from "../assets/stack/balsamiq.svg";
import cloudinary from "../assets/stack/cloudinary.svg";
import cognito from "../assets/stack/cognito.svg";
import dynamodb from "../assets/stack/dynamodb.svg";
import elementor from "../assets/stack/elementor.svg";
import expressjs from "../assets/stack/expressjs.svg";
import figma from "../assets/stack/figma.svg";
import git from "../assets/stack/git.svg";
import graphql from "../assets/stack/graphql.svg";
import heroku from "../assets/stack/heroku.svg";
import javascript from "../assets/stack/javascriptjs.svg";
import materialui from "../assets/stack/materialui.svg";
import mongodb from "../assets/stack/mongodb.svg";
import react from "../assets/stack/react.svg";
import nodejs from "../assets/stack/nodejs.svg";
import redux from "../assets/stack/redux.svg";
import sequelize from "../assets/stack/sequelize.svg";
import shadcn from "../assets/stack/shadcn.svg";
import slack from "../assets/stack/slack.svg";
import socketio from "../assets/stack/socketio.svg";
import trello from "../assets/stack/trello.svg";
import wordpress from "../assets/stack/wordpress.svg";
import css from "../assets/stack/css.svg"
import tailwindcss from "../assets/stack/tailwindcss.svg"


const TechCarrusel = () => {
  const carruselImages = [
    javascript, 
    react, 
    redux,
    css,
    tailwindcss,
    shadcn,                   
    graphql,      
    materialui,   
    figma,       
    balsamiq,
    wordpress,
    elementor,     
    nodejs,
    expressjs,
    socketio,         
    sequelize,    
    dynamodb,     
    mongodb,    
    amplify,      
    aws,         
    cognito,     
    cloudinary,  
    heroku,
    git,          
    slack,          
    trello,          
  ];

  return (
    <div className="container mx-auto">
      <TechCarruselItem images={carruselImages} from={0} to={"-100%"} />
    </div>
  );
};

export default TechCarrusel;
