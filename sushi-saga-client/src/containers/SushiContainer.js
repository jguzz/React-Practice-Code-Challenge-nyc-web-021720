import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const RenderSushi = (show, props) => {

  return show.map((sushi) => {
     return <Sushi eatSushi={props.eatSushi} index={sushi.id} {...sushi} /> 
   })
};

const SushiContainer = (props) => {
  const show =  props.sushi.slice(props.beggining, props.end)
  return (
    <Fragment>
      <div className="belt">
        <MoreButton handleMore={props.handleMore} />
      </div>
      {RenderSushi(show, props)}
    </Fragment>
  );
};

export default SushiContainer;
