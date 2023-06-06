import React from "react"
import PropTypes from "prop-types"
import "./InfoCards.css"
import laptop from "./../../assets/laptop.svg"
import search from "./../../assets/search.svg"
import mobile from "./../../assets/mobile.svg"

const infoText = {
    card_1_info:
        "Browse as usual and we'll take care of the rest. We offer you a search engine, tracker blocker, " +
        "and encryption improvement all in a Chrome extension.",
    card_2_info:
        "Search privately with our app or extension, add private web search to your preferred browser, " +
        "or search on duckduckgo.com.",
    card_3_info:
        "Our private mobile browser comes equipped with our search engine, tracker blocker " +
        "encryption improvement, and more. Available for iOS and Android.",
}

function Card({ img, title, info }) {
    return (
        <div className="info_card">
            <img src={img} alt="Laptop" className="img_card" />
            <div className="card_title">{title}</div>
            <div className="card_info">{info}</div>
        </div>
    )
}

function InfoCards() {
    return (
        <div className="info_cards_cont">
            <Card
                img={laptop}
                title="Privacy for Chrome"
                info={infoText.card_1_info}
            />
            <Card
                img={search}
                title="Private Search Engine"
                info={infoText.card_2_info}
            />
            <Card
                img={mobile}
                title="Private Browsing"
                info={infoText.card_3_info}
            />
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
}

export default InfoCards
