const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("../features/getBoredAPIActivity.feature", {
  loadRelativePath: true,
});

const { activity } = require("../helpers/links");
const fetch = require("node-fetch");

defineFeature(feature, (test) => {
  let response = {};
  test("Get Bored API Activity", ({ when, then }) => {
    when("the user sends a GET request to activity API", async () => {
      response = await fetch(activity)
        .then((response) => response.json())
        .catch((err) => console.log(err.stack));
    });
    then(/^the user must receive a response (.*)$/, (message) => {
      expect(response).toContainAnyKeys([message]);
    });
  });
});
