import { Card } from "./card";
import React from "react";

/*********************************************************************************************************
    Internal uses only!
    Don't modify this file
*********************************************************************************************************/

const CardAction = () => {
    return (
        <button type="button">Click me!</button>
    );
};

export const Exercise1 = () => {
    return (
        <Card
            title="Typescript"
            description="is Fun!"
            cardAction={<CardAction />}
        >
            Le contenu de la carte!
        </Card>
    );
};
