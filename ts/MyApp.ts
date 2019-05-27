import * as _MyLib from "../build/cpp/main/MyLib";

const MyLib = _MyLib.default || _MyLib as () => Promise<unknown>;

MyLib().then((myLib: any) => {
    const b = new myLib.Bar(123);
    b.doSomething();
    myLib.destroy(b);

    const f = new myLib.Foo();
    f.setVal(200);
    console.log(f.getVal());
});
