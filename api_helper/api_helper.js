import fetch from "node-fetch";

export async function getRequest(ulr) {
  const response = await fetch(ulr);
  return await response.json();
}

export async function postRequest(ulr, body) {
  const response = await fetch(ulr, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return response;
}
