import React from "react"
import logo from "../assets/ducklogo.svg"
import "./App.css"
import "./CheckItem/CheckItem.css"
import { TextHeader, TextParagraph } from "./Text/Text"
import CheckItem from "./CheckItem/CheckItem"
import InfoCards from "./InfoCards/InfoCards"
import Button from "./Button/Button"
import Input from "./Input/Input"

function App() {
    return (
        <div className="App">
            <div className="fondoup">
                <div className="logo">
                    <img
                        src={logo}
                        alt="DuckDuckGo logo"
                        className="main_logo"
                    />
                </div>
                <Input />
                <TextHeader className="textdesc">
                    Tired of being tracked online? We can help.
                </TextHeader>
                <TextParagraph className="textdesc">
                    We do not store personal information. We do not chase you with ads. We never track you.
                </TextParagraph>
                <CheckItem />
                <Button className="blue">Add DuckDuckGo to Chrome</Button>
                <TextParagraph className="textdescpar">
                    Trusted by tens of millions of people worldwide!
                </TextParagraph>
                <TextHeader className="textdesc">
                    Privacy Protection for Any Device.
                </TextHeader>
                <svg
                    className="curva"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1438 134"
                >
                    <path
                        d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <div className="fondodown">
                <InfoCards />
                <TextHeader className="textdesc">
                    We don't save your personal  <br /> information. And we'll never do.
                </TextHeader>
                <TextParagraph className="textdesc">
                    Our privacy policy is simple: We don't collect
                    <br />or share any of your personal information.
                </TextParagraph>
                <Button className="green">Install DuckDuckGo </Button>
            </div>
        </div>
    )
}

export default App