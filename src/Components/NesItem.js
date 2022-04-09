import React from 'react'

const NesItem = (props)=>{

    let { title, description, ImageUrl, NewsUrl } = props;
    return (

      <div className="my-3">
        <div className="card" style={{ width: "18rem;" }}>
          <img src={!ImageUrl ? "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F614708b1c921e6163455b152%2F0x0.jpg" : ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={NewsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
    
}

export default NesItem;


