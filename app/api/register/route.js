export async function postMessage(
    request
) {

    const body = await request.json();

    console.log(body);

}