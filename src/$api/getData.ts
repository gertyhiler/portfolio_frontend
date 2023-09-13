export const API_URL = 'http://localhost:1337';
export async function getData() {
    const res = await fetch(
        `${API_URL}/api/works/?populate[teches][populate][0]=logo&populate=screenshot`,
        {cache: "no-cache"}
    );
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
