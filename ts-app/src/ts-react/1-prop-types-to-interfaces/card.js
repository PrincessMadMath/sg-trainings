import { bool, element, node, string } from "prop-types";
import React from "react";

/*********************************************************************************************************
 * Exercise #1
    1- Modify the file extension to .ts instead of .js
    2- Replace the prop types by an interface named CardProps
    3- Add typings to the Card component
*********************************************************************************************************/

const propTypes = {
    title: string.isRequired,
    description: string,
    children: node,
    cardAction: element,
    showDescription: bool
};

const defaultProps = {
    showDescription: false
};


export const Card = ({
    children,
    title,
    description,
    cardAction,
    showDescription
}) => {
    return (
        <div>
            <div>
                Title: <b>{title}</b>
            </div>
            {showDescription && (<div>
                Description: <b>{description}</b>
            </div>)}
            <div>{children}</div>
            <div>{cardAction}</div>
        </div>
    );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
