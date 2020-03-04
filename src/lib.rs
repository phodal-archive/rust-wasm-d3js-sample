use wasm_bindgen::prelude::*;
use web_sys::console;

use std::ffi::CString;
use std::os::raw::c_char;

// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

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

    pub fn get(&self) -> i32 {
        self.internal
    }

    pub fn set(&mut self, val: i32) {
        self.internal = val;
    }

    pub fn get_data_from_alert(&self) {
        alert(CHART_DATA);
    }

    #[no_mangle]
    pub fn get_chart_data(&self) -> *mut c_char {
        let s = CString::new(CHART_DATA).unwrap();
        s.into_raw()
    }

    #[no_mangle]
    pub fn get_chart_data_size(&self) -> usize {
        CHART_DATA.len()
    }
}
