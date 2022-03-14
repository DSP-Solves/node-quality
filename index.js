/* eslint-disable no-console */

const foo = {
  bar: "This is a bar.",
  baz: { qux: "This is a qux" },
  difficult: "to read",
}; // very long string

const main = async () => {
  console.log("hello world");

  if (process.env.NODE_ENV === "production") {
    console.log("production");
  } else {
    console.log(process.env.NODE_ENV);
  }

  console.log(foo.difficult);

  setTimeout(() => console.log("resolved"), 1000);
};

await main();

function foundation(error, loading) {
  if (loading) {
    return "It's still loading";
  }
  if (error) {
    return "It failed";
  }
  return "It worked";
}

foundation(null, true);

const singleParamFunc = (param) => `${param}`;
const singleParamFunc2 = (param) => {
  console.log(`${param}`);
  return `${param}`;
};

singleParamFunc(undefined);
singleParamFunc2(undefined);
