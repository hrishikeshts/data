import React from "react";

export default function Member({ id, img, name, description, length }) {
    let colSize = 12 / length;
    return (
        <article
            id={"mem-" + id}
            className={"col-8 col-sm-6 col-lg-" + colSize}
        >
            <img src={img} alt={name} id='photo' draggable='false' />
            <h4 id='membername'>{name}</h4>
            <h5 id='memberdesc'>{description}</h5>
        </article>
    );
}
