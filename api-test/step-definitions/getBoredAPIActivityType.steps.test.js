const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("../features/getBoredAPIActivityType.feature", {
  loadRelativePath: true,
});

const { activity } = require("../helpers/links");
const fetch = require("node-fetch");

defineFeature(feature, (test) => {
  let response = {};
  test("Get Bored API Valid Activity of valid type", ({ when, then }) => {
    when(
      /^the user sends a GET request to activity API (.*)$/,
      async (type) => {
        response = await fetch(`${activity}/?type=${type}`)
          .then((response) => response.json())
          .catch((err) => console.log(err.stack));
      }
    );

    then(/^the user must receive a response (.*)$/, (message) => {
      expect(response).toContainAnyValues([message]);
    });
  });

  test("Get error message for an invalid type", ({ when, then }) => {
    when(
      /^the user sends a GET request to activity API (.*)$/,
      async (type) => {
        response = await fetch(`${activity}/?type=${type}`)
          .then((response) => response.json())
          .catch((err) => console.log(err.stack));
      }
    );

    then(/^the user must receive a response (.*)$/, (message) => {
      expect(response).toContainAnyValues([message]);
    });
  });
});
