import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card__img" src={props.item.imageUrl} width="125" height="168" alt="" />
            <div className="card__text-content">
                <p className="card__location">{props.item.location} <a className="card__location-link" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></p>
                <h2 className="card__title">{props.item.title}</h2>
                <p className="card__date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card__text">{props.item.description}</p>
            </div>
        </div>
    )
}
