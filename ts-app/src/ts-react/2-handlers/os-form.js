import React, { useState } from "react";

export const OsForm = () => {
    const [os, setOs] = useState("windows");

    const handleChange = e => {
        const { value } = e.target;

        setOs(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // eslint-disable-next-line no-console
        console.log("form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            {os}
            <div className="radio-buttons">
                Windows
                <input
                    id="windows"
                    value="windows"
                    name="platform"
                    type="radio"
                    defaultChecked
                    onChange={handleChange}
                />
                Mac
                <input
                    id="mac"
                    value="mac"
                    name="platform"
                    type="radio"
                    onChange={handleChange}
                />
                Linux
                <input
                    id="linux"
                    value="linux"
                    name="platform"
                    type="radio"
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
