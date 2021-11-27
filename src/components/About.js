import React from "react";
import Links from "./Links";

const About= props => {
  return (
    <div id="about">

      <h2>About Me</h2>

      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      {/*this is the bio boolen that checks the lenght and post it to the elemnt if it is bigger the 1 chareter 
      <p> is setting up the elements ifthere is a bio.  */}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <Links github={props.links.github} linkedin={props.links.linkedin} />
{/* this is the request links */}

    </div>
  );
}

export default About;