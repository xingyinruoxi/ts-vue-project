const someValue: any = "this is a string";
const strLength = (someValue as string).length;
// console.log("strLength", strLength);

function greeting(person: string, msg?: string): string {
  return "Hello, " + person;
}

const aa = greeting("6", "9");

// void类型，常用于没有返回值的函数
function warn(name?: string): void {
  console.log("#####", name);
}

warn("zhoulin");

// 对象object：不是原始类型的就是对象类型
function fn1(o: object) {}

fn1({ name: "zhoulin" });
// fn1(2)// Error
fn1([2, 4]); //ok
// fn1(9);//ok

// 类型别名type：自定义类型
// type Prop = { prop: number }
type Prop = { num: number };
function fn2(o: Prop) {}

fn2({ num: 2 });

interface Person {
  firstName: string;
  lastName: string;
}

function person(o: Person): string {
  // console.log("person params", o);
  return o.firstName + o.lastName;
}

person({ firstName: "88", lastName: "pp" });

// 使用泛型
interface Result<T> {
  ok: 0 | 1;
  data: T;
}

// 泛型方法
function getResult<T>(data: T): Result<T> {
  return { ok: 1, data };
}

getResult<string>("haha~");

getResult(2);
