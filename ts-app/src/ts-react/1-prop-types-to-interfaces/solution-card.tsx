import React, { FC, ReactElement } from "react";

/*********************************************************************************************************
 * Solution #1
*********************************************************************************************************/

interface CardProps {
    title: string;
    description?: string;
    cardAction?: ReactElement;
    showDescription?: boolean;
}

export const Card: FC<CardProps> = ({
    children,
    title,
    description,
    cardAction,
    showDescription = false
}) => {
    return <div>
        <div>
            Title TS: <b>{title}</b>
        </div>
        {showDescription && (
            <div>
                Description: <b>{description}</b>
            </div>
        )}
        <div>{children}</div>
        <div>{cardAction}</div>
    </div>;
};
