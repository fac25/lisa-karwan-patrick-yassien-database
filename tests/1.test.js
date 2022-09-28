const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/server.js");

test("test works", () => {
    assert.equal(1, 1)
})

test("testing home route", async () => {
    const app = server.listen(9876);
    const response = await fetch("http://localhost:9876");
  
    assert.equal(response.status, 200);
    const body = await response.text();
    assert.match(body, /Restaurants/);

app.close();
});

test("testing post route", async () => {
    const app = server.listen(9875);
    const response = await fetch("http://localhost:9875", {
        method: "POST",
        body: `name=E-Mono&address=123 Street`,
        headers: {
            "content-type": "application/x-www-form-urlencoded",
        },
    });
    assert.equal(response.status, 200);
    const body = await response.text();
    assert.match(body, /E-Mono/);
    assert.match(body, /123 Street/);

    app.close();
})

test("testing error route response", async () => {
    const app = server.listen(9874);
    const response = await fetch("http://localhost:9874/errorroute");

    assert.equal(response.status, 404);
const body = await response.text();
assert.match(body, /Not found/);
app.close();
})