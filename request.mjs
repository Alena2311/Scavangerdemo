async function makeRequest(url,method="GET", token="", payLoad = null) {
    let data = {};
    const headers = {
        method:method,
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        }
    }

    if (payLoad) { headers.body = JSON.stringify(payLoad); }

    try {
    const respons = await fetch(url, headers);
    data = await respons.json();
    console.log(data);
    } catch (err) {
    console.log(err);
    }

    return data;
}
export default makeRequest;