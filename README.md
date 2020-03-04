# Rust WASM D3.js sample

process:

1. loading WASM
2. new Rust object
3. mock window.prompt
4. call Rust function, get data
5. render D3.js chart
6. revert window.prompt

JavaScript Code Examples:

```javascript
let originAlert = window.alert;
window.prompt = function (message, value) {
    // console.log(message, value);
    renderChart(JSON.parse(value))
};
matual.get_data_from_alert();
window.alert = originAlert;
```

Rust Code To Get:

```rust
// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    fn prompt(s: &str, m: &str);
}

...

#[wasm_bindgen]
pub struct Matual {
    internal: i32,
}

static CHART_DATA: &'static str = "[{\"name\":\"Allocated budget\",\"axes\":[{\"axis\":\"Sales\",\"value\":42},{\"axis\":\"Marketing\",\"value\":20},{\"axis\":\"Development\",\"value\":60},{\"axis\":\"Customer Support\",\"value\":26},{\"axis\":\"Information Technology\",\"value\":35},{\"axis\":\"Administration\",\"value\":20}],\"color\":\"#26AF32\"},{\"name\":\"Actual Spending\",\"axes\":[{\"axis\":\"Sales\",\"value\":50},{\"axis\":\"Marketing\",\"value\":45},{\"axis\":\"Development\",\"value\":20},{\"axis\":\"Customer Support\",\"value\":20},{\"axis\":\"Information Technology\",\"value\":25},{\"axis\":\"Administration\",\"value\":23}],\"color\":\"#762712\"},{\"name\":\"Further Test\",\"axes\":[{\"axis\":\"Sales\",\"value\":32},{\"axis\":\"Marketing\",\"value\":62},{\"axis\":\"Development\",\"value\":35},{\"axis\":\"Customer Support\",\"value\":10},{\"axis\":\"Information Technology\",\"value\":20},{\"axis\":\"Administration\",\"value\":28}],\"color\":\"#2a2fd4\"}]";

#[wasm_bindgen]
impl Matual {
    pub fn new(val: i32) -> Matual {
        Matual { internal: val }
    }

    pub fn get_data_from_alert(&self) {
        prompt("chat", CHART_DATA);
    }
}
```

## How to install

```sh
npm install
```

## How to run in debug mode

```sh
# Builds the project and opens it in a new browser tab. Auto-reloads when the project changes.
npm start
```

## How to build in release mode

```sh
# Builds the project and places it into the `dist` folder.
npm run build
```

## How to run unit tests

```sh
# Runs tests in Firefox
npm test -- --firefox

# Runs tests in Chrome
npm test -- --chrome

# Runs tests in Safari
npm test -- --safari
```

## What does each file do?

* `Cargo.toml` contains the standard Rust metadata. You put your Rust dependencies in here. You must change this file with your details (name, description, version, authors, categories)

* `package.json` contains the standard npm metadata. You put your JavaScript dependencies in here. You must change this file with your details (author, name, version)

* `webpack.config.js` contains the Webpack configuration. You shouldn't need to change this, unless you have very special needs.

* The `js` folder contains your JavaScript code (`index.js` is used to hook everything into Webpack, you don't need to change it).

* The `src` folder contains your Rust code.

* The `static` folder contains any files that you want copied as-is into the final build. It contains an `index.html` file which loads the `index.js` file.

* The `tests` folder contains your Rust unit tests.
