const Github = require("./github");
const Search = require("./search");
const axios = require("axios");
const validDataProfile = require("../../__mocks__/validDataProfile.json");
jest.mock("axios");

describe(`get profile data/repos returns `, () => {
  it("get profile data", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: validDataProfile });
    });
    const subject = new Github();

    const response = await subject.getProfileData("Skroderi");
    expect(response.login).toBe("Skroderi");
  });

  it("error when service not responding, cant get profile data", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: "error! Couldnt get profile data" });
    });
    const subject = new Github();

    const response = await subject.getProfileData("Skroderi");
    expect(!response).toBe(false);
  });

  it("error when service not responding, cant get profile repos", async () => {
    axios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: "error! Couldnt get profile repos" });
    });
    const subject = new Github();

    const response = await subject.getProfileRepos("Skroderi");
    expect(!response).toBe(false);
  });
});

describe("show Alert", () => {
  it("should show alert function have two arguments", () => {});

  const subject = new Search();
});
