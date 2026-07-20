import axios from "axios";
import GitClient from "./GitClient";

jest.mock("axios");

describe("Git Client Tests", () => {

  test("should return repository names for techiesyed", async () => {

    axios.get.mockResolvedValue({
      data: [
        { name: "RepoOne" },
        { name: "RepoTwo" },
        { name: "RepoThree" }
      ]
    });

    const repos = await GitClient.getRepositories("techiesyed");

    expect(repos).toEqual([
      "RepoOne",
      "RepoTwo",
      "RepoThree"
    ]);

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/users/techiesyed/repos"
    );
  });

});