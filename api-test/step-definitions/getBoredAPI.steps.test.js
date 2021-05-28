const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("../features/getBoredAPI.feature", {
  loadRelativePath: true,
});

const { api } = require("../helpers/links");
const fetch = require("node-fetch");

defineFeature(feature, (test) => {
  let response = {};
  test("Get Bored API", ({ when, then }) => {
    when("the user sends a GET request", async () => {
      response = await fetch(api)
        .then((response) => response.json())
        .catch((err) => console.log(err.stack));
    });
    then(/^the user must receive "(.*)"$/, (message) => {
      expect(JSON.stringify(response)).toInclude(message);
    });
  });
});
