import * as _cppLib from "../build/cppLib/cppLib";

const cppLib = _cppLib.default || _cppLib as () => Promise<unknown>;

cppLib().then((cpp: any) => {
    const b = new cpp.Bar(123);
    b.doSomething();
    cpp.destroy(b);

    const f = new cpp.Foo();
    f.setVal(200);
    console.log(f.getVal());
});

const importObject = {};
globalThis.WebAssembly.instantiateStreaming(fetch("dist/optimized.wasm"), importObject).then(({ module, instance }) => {
    console.log(instance.exports.add(40, 2));
});
