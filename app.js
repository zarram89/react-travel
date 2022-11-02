import React from "react";
import Nav from "./components/Nav.js";
import Card from "./components/Card.js";
import data from "./data.js";

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Nav />
            <section className="cards">
                {cards}
            </section>
        </div>
    )
}