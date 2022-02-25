import React from "react";
import { BsHeart, BsFillTagFill, BsTag, BsShareFill } from "react-icons/bs";
import "./CardCompo.css";

function CardCompo(props) {
  return (
    <>
      <div className="row">
        {props.data.map((data) => {
          return (
            <div className="col-xl-4 col-md-6 col-sm-12 card-container">
              <div className="card">
                <img
                  src={data.cover}
                  className="card-img-top card-img"
                  alt="some image"
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.summary}</p>
                  <div className="card-links-container">
                    {data.isprime ? (
                      <a href="#" className="card-link-sponsored">
                        Sponsored Ad
                      </a>
                    ) : null}
                    <div className="links-container">
                      <a href="#" className="card-link">
                        <span className="heart">{data.likes}</span>
                        <BsHeart />
                      </a>
                      <a href="#" className="card-link">
                        {data.bookmarked ? <BsFillTagFill /> : <BsTag />}
                      </a>
                      <a href="#" className="card-link">
                        <BsShareFill />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CardCompo;
