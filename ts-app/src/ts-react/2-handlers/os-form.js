import React, { useState } from "react";

export const OsForm = () => {
    const [os, setOs] = useState();

    const handleChange = e => {
        const { value } = e.target;

        setOs(value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        console.log("form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            {os & os.toUpperCase()}
            <div className="radio-buttons">
                Windows
                <input
                    id="windows"
                    value="windows"
                    name="platform"
                    type="radio"
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
