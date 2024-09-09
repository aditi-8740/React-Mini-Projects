import React from "react";

const MenueCard = ({ menudata }) => {
  //console.log(menudata);
  return (
    <>
      <section className="main-card--cointainer">
        {menudata.map((currentElement, index) => {  //for each currElement(i.e. menu) this whole JSX code will execute
          const {id, image, name, category ,description} = currentElement;

          return (  //Why did we use return here??
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <span className="card-title">{name}</span>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                    <img src={image} className='card-media' alt="" />
                    <span className="card-tag subtle">Order Now</span>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenueCard;
