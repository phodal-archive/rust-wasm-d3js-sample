import("../pkg/index.js")
    .then(wasm => {
        console.log(wasm.Matual)
    })
    .catch(console.error);

// export class Matual {
//     static __construct(ptr) {
//         return new Matual(ptr);
//     }
//
//     constructor(ptr) {
//         this.ptr = ptr;
//     }
//
//     free() {
//         const ptr = this.ptr;
//         this.ptr = 0;
//         wasm.__wbg_matual_free(ptr);
//     }
//
//     static new(arg0) {
//         const ret = wasm.matual_new(arg0);
//         return Foo.__construct(ret)
//     }
//
//     get() {
//         const ret = wasm.matual_get(this.ptr);
//         return ret;
//     }
//
//     set(arg0) {
//         const ret = wasm.matual_set(this.ptr, arg0);
//         return ret;
//     }
// }
//
//
// let matual = new Matual();
// matual.get();

