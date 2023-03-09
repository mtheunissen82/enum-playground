import { MyEnum } from 'b';
import { MyInterface } from 'b';
import { MyEnum as MyEnumC } from 'c';

const someEnum = 'AAA' as MyEnum;
console.log(someEnum);
// console.log(MyEnum.A);

console.log(MyEnumC.A);

const someObj: MyInterface = {
  someProp: 'lala',
};

console.log(someObj);
