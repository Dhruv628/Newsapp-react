import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, ImageUrl, newsUrl, time, author,source } = this.props;
    return (
      <>
        <div>
          <div className="card my-3">
            <img className="card-img-top" src={ImageUrl} alt="Card  cap" />
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'70%', zIndex:'1',color:'white',top: '-2%'}}>
             {source}
            
            </span>
            <div className="card-body ">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">
                 Author : {author === null ? "Unknown" : author} <br /> Published on {" "} 
                   {time === null
                    ? "Unknown"
                    : new Date(time).toGMTString()}
                </small>
              </p>
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
