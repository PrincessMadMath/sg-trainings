interface Request {
    url: string;
}

export function filterByTermSolution(input: Request[], searchTerm: string) {
    if (!searchTerm) {
        throw Error("searchTerm cannot be empty");
    }
    if (!input.length) {
        throw Error("inputArr cannot be empty");
    }

    const regex = new RegExp(searchTerm, "i");

    return input.filter(function(arrayElement) {
        return arrayElement.url.match(regex);
    });
}

filterByTermSolution([{ url: "greed is good" }], "scopa");
