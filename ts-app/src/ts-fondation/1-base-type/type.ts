export const explicitDemo = () => {
    let aBoolean: boolean = false;
    console.log(typeof aBoolean); // "boolean"

    aBoolean = "Tom"; // Error
};

export const implicitDemo = () => {
    let aBoolean = false;
    console.log(typeof aBoolean); // "boolean"

    aBoolean = "Tom"; // Error
};
