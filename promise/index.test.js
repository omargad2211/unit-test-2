import fetchMock from "jest-fetch-mock";
import { fetchUsers, fetchPosts } from "./index";

fetchMock.enableMocks();

describe("API functions", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test("should fetch users", async () => {
    const mockUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockUsers));

    const users = await fetchUsers();

    expect(users).toEqual(mockUsers);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("should fetch posts for a user", async () => {
    const mockPosts = [
      { title: "Post 1", body: "Body 1" },
      { title: "Post 2", body: "Body 2" },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockPosts));

    const posts = await fetchPosts(1);

    expect(posts).toEqual(mockPosts);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
