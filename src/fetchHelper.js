const fetchHelper =(endpoint,data,method = "Get") => {
    const url = encodeURI(endpoint);
    //const log.({ url });

 if (method === "GET") {
        return fetch(url);
 } else 
    return fetch(url,{
    method,
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
    });
 
};