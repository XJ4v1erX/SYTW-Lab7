import React from "react"
import "./Input.css"


function Input() {
    return (
        <div>
            <form className="search_form">
                <input
                    className="search_input"
                    placeholder="Search the web without being tracked"
                    type="text"
                    tabIndex={0}
                />
                <input className="search_button" type="submit" tabIndex={0} />
            </form>
        </div>
    )
}

export default Input
