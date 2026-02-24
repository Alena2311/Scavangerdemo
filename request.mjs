async function makeRequest(url,method="GET", token="") {
    let data {};
    const headers = {
        method:method,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }

    if (payLoad) 

    try {
    const respons = await fetch(startURL);
    let data = await respons.json();
    console.log(data);
} catch (err) {
    console.log(err);
}

}