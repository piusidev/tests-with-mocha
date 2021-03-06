const Todos = require('./todos');
const fs = require('fs');
const assert = require('assert').strict;

describe("integration test", () => {
  it("should be able to add and complete todos", () => {
    let todos = new Todos;

    assert.strictEqual(todos.list().length, 0);

    todos.add("clean bedroom");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(),
    [
      {
        title: "clean bedroom",
        completed: false
      }
    ]);

    todos.add("test again");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      {
        title: "clean bedroom",
        completed: false
      },
      {
        title: "test again",
        completed: false
      }
    ]);

    todos.complete("test again");
    assert.deepStrictEqual(todos.list(), [
      {
        title: "clean bedroom",
        completed: false
      },
      {
        title: "test again",
        completed: true
      }
    ]);


  });
});

describe("complete()", () => {
  it("should fail if there are no todos", () => {
    let todos = new Todos;
    const expectedError = new Error("You have no TODOs stored. Why don't you add one first?");

    assert.throws(() => {
      todos.complete("this todo doesn't exist");
    }, expectedError)
  });
});

describe("saveToFile()", () => {
  it("should save a single todo", async () => {
    let todos = new Todos;
    todos.add("save a CSV");
    await todos.saveToFile();

    assert.strictEqual(fs.existsSync('todos.csv'), true);
    let expectedFileContents = "Title, Completed\nsave a CSV, false\n";
    let content = fs.readFileSync("todos.csv").toString();
    assert.strictEqual(content, expectedFileContents);
  });
});