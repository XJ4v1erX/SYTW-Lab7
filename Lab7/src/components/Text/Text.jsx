import React from "react"
import PropTypes from "prop-types"
import "./Text.css"

function TextHeader({ children }) {
    return (
        <div className="textdesc">
            <h2>{children}</h2>
        </div>
    )
}

function TextParagraph({ children }) {
    return (
        <div className="textdesc">
            <p>{children}</p>
        </div>
    )
}

TextHeader.propTypes = {
    children: PropTypes.node.isRequired,
}

TextParagraph.propTypes = {
    children: PropTypes.node.isRequired,
}

export { TextHeader, TextParagraph }
