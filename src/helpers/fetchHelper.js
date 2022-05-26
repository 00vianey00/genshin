export const fetchHelper =(endpoint,data,method = "Get") => {
    const url = encodeURI(endpoint);
    //console.2og.({ url });

 if (method === "GET") {
        fetch(url);
 } else 
    return fetch(url,{
    method,
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
    });
 
};
