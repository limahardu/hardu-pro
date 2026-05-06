exports.handler = async (event) => {
  const cors = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };
  try {
    const q = new URLSearchParams(event.queryStringParameters || {});
    const r = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?${q}`);
    const d = await r.json();
    return { statusCode: 200, headers: cors, body: JSON.stringify(d) };
  } catch (e) {
    return { statusCode: 500, headers: cors, body: JSON.stringify({ error: e.message }) };
  }
};
