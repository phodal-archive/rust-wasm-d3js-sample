import("../pkg/index.js")
    .then(wasm => {
        let matual = wasm.Matual.new(5);
        matual.set(10);
        console.log(matual.get())
    })
    .catch(console.error);
