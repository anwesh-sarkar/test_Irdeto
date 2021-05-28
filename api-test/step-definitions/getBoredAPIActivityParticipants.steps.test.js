const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature(
  "../features/getBoredAPIActivityParticipants.feature",
  {
    loadRelativePath: true,
  }
);

const { activity } = require("../helpers/links");
const fetch = require("node-fetch");

defineFeature(feature, (test) => {
  let response = {};
  test("Get Bored API Valid Activity with valid number of participants", ({
    when,
    then,
  }) => {
    when(
      /^the user sends a GET request to activity API (.*)$/,
      async (number) => {
        response = await fetch(`${activity}/?participants=${number}`)
          .then((response) => response.json())
          .catch((err) => console.log(err.stack));
      }
    );

    then(/^the user must receive a response (.*)$/, (number) => {
      expect(response).toContainAnyValues([Number(number)]);
    });
  });

  test("Get error message with invalid number of participants", ({
    when,
    then,
  }) => {
    when(
      /^the user sends a GET request to activity API (.*)$/,
      async (number) => {
        response = await fetch(`${activity}/?participants=${number}`)
          .then((response) => response.json())
          .catch((err) => console.log(err.stack));
      }
    );

    then(/^the user must receive a response (.*)$/, (message) => {
      expect(response).toContainAnyValues([message]);
    });
  });
});
