import React, { ChangeEvent, FC, FormEvent, useState } from "react";

export const OsForm: FC = () => {
    const [os, setOs] = useState();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setOs(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            {os && os.toUpperCase()}
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
