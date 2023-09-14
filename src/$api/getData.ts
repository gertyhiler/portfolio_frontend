export const API_URL = process.env.API_URL || 'http://localhost:1337';
export async function getData() {
    try {
        const res = await fetch(
            `${API_URL}/api/works/?populate[teches][populate][0]=logo&populate=screenshot`,
            {cache: "no-cache"}
        );
        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error("Failed to fetch data");
        }

        return res.json();
    } catch (err) {
        return {
            data: [
                {
                    id: 6,
                    attributes: {
                        headline: "📋 TODO App",
                        description: "Небольшое SPA для ведения семейных дел. В проекте реализована работа с локальным хранилищем и js роутинг",
                        createdAt: "2023-09-12T17:46:17.672Z",
                        updatedAt: "2023-09-12T19:11:45.907Z",
                        publishedAt: "2023-09-12T17:46:19.273Z",
                        link: "https://github.com/gertyhiler/TODO-App",
                        screenshot: {
                            data: {
                                id: 30,
                                attributes: {
                                    name: "todo.png",
                                    url: "/uploads/todo_4749539e7a.png",
                                    "formats": {
                                        "large": {
                                            "ext": ".png",
                                            "url": "/uploads/large_todo_4749539e7a.png",
                                            "hash": "large_todo_4749539e7a",
                                            "mime": "image/png",
                                            "name": "large_todo.png",
                                            "path": null,
                                            "size": 53.1,
                                            "width": 1000,
                                            "height": 591
                                        },
                                    }
                                }
                            }
                        },
                        "teches": {
                            "data": [
                                {
                                    "id": 7,
                                    "attributes": {
                                        "name": "bootstrap",
                                        "createdAt": "2023-07-16T10:48:59.802Z",
                                        "updatedAt": "2023-07-16T10:49:32.474Z",
                                        "logo": {
                                            "data": {
                                                "id": 3,
                                                "attributes": {
                                                    "name": "bootstrap-5-1.svg",
                                                    "alternativeText": null,
                                                    "caption": null,
                                                    "width": 2500,
                                                    "height": 1992,
                                                    "formats": null,
                                                    "hash": "bootstrap_5_1_c590aa9b88",
                                                    "ext": ".svg",
                                                    "mime": "image/svg+xml",
                                                    "size": 1.09,
                                                    "url": "/uploads/bootstrap_5_1_c590aa9b88.svg",
                                                    "previewUrl": null,
                                                    "provider": "local",
                                                    "provider_metadata": null,
                                                    "createdAt": "2023-07-16T10:47:53.340Z",
                                                    "updatedAt": "2023-07-16T10:47:53.340Z"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "id": 6,
                                    "attributes": {
                                        "name": "html",
                                        "createdAt": "2023-07-16T10:48:48.587Z",
                                        "updatedAt": "2023-07-16T10:48:48.587Z",
                                        "logo": {
                                            "data": {
                                                "id": 3,
                                                "attributes": {
                                                    "name": "bootstrap-5-1.svg",
                                                    "alternativeText": null,
                                                    "caption": null,
                                                    "width": 2500,
                                                    "height": 1992,
                                                    "formats": null,
                                                    "hash": "bootstrap_5_1_c590aa9b88",
                                                    "ext": ".svg",
                                                    "mime": "image/svg+xml",
                                                    "size": 1.09,
                                                    "url": "/uploads/bootstrap_5_1_c590aa9b88.svg",
                                                    "previewUrl": null,
                                                    "provider": "local",
                                                    "provider_metadata": null,
                                                    "createdAt": "2023-07-16T10:47:53.340Z",
                                                    "updatedAt": "2023-07-16T10:47:53.340Z"
                                                }
                                            }
                                        }
                                    }
                                },
                                {
                                    "id": 3,
                                    "attributes": {
                                        "name": "js",
                                        "createdAt": "2023-07-16T10:48:16.208Z",
                                        "updatedAt": "2023-07-16T10:48:16.208Z",
                                        "logo": {
                                            "data": {
                                                "id": 3,
                                                "attributes": {
                                                    "name": "bootstrap-5-1.svg",
                                                    "alternativeText": null,
                                                    "caption": null,
                                                    "width": 2500,
                                                    "height": 1992,
                                                    "formats": null,
                                                    "hash": "bootstrap_5_1_c590aa9b88",
                                                    "ext": ".svg",
                                                    "mime": "image/svg+xml",
                                                    "size": 1.09,
                                                    "url": "/uploads/bootstrap_5_1_c590aa9b88.svg",
                                                    "previewUrl": null,
                                                    "provider": "local",
                                                    "provider_metadata": null,
                                                    "createdAt": "2023-07-16T10:47:53.340Z",
                                                    "updatedAt": "2023-07-16T10:47:53.340Z"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }

}
