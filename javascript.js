//console.log("hello again"); //hello again gej bichne

// //
// let x, y, z;

// x = 5;

// y = 6;
// console.log(x + y);
// // let var const 3 aar declare hiij bolno
// // let iig uurchilj boldog
// //var iig tsaashdaa hereglehed asuudal uusne !
// //const iig uurchilj boldoggui
// // var j = 2;

// // let h = 1;
// // const i = 3;

// let box = "Hi. world";
// let string = "javascripst is the easiest language to learn, he said";
// let isUserLoggedIn = false; //or true
// let NULL = null; // ene bol hooson gej helj baina
// let UNDEFINED = undefined; //
// console.log(box);

// 1) hureenii urt oloh bodlogo
// let a, b, c, p;
// a = 3;
// b = 4;
// c = 5;
// p = a + b + c;
// console.log("Gurvaljnii hureenii urt = " + p);

// 2) 2 toonii niilber
// let a, b, c;
// a = 12;
// b = 23;
// c = a + b;
// console.log(c);

// 3) cube
// let a, v, s;
// a = 5;
// v = a * a * a;
// s = 6 * a * a;
// console.log("V=" + v);
// console.log("S=" + s);

// 4) tegsh untsugt
// let a, b, s, p;
// a = 6;
// b = 4;
// s = a * b;
// p = 2 * a + 2 * b;
// console.log("S= " + s + "  P= " + p);

//5) function1
// let x, y;
// x = 100;
// y = 3 * x - 5;
// console.log(y);

// 6) function2
// let x, y;
// x = 100;
// y = 4*x*x-3*x+5;
// console.log(y);

// 7) suuliin cipher
// let x, y;
// x = 578;
// y = x % 10;
// console.log(y);

//8) aravtiin ornii cipher
// let x, y, z,m;
// x = 8753;
// y = x % 100;
// z = x % 10;
// m = (y - z) / 10;
// console.log(m);

// 9) 2 orontoi toonii cipheruudiin urjver
// let x, y, z, m;
// x = 53;
// y = x % 100;
// z = x % 10;
// m = (y - z) / 10;
// console.log(m * z);

//10) Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
// let x, y, z, m, neg, hoyr, gurav;
// x = 943;
// y = x % 100;
// neg = x % 10;
// hoyr = (y - neg) / 10;
// gurav = (x - y) / 100;

// console.log(neg + hoyr + gurav);

// 11) Өгөгдсөн секундыг минут секунд болго.
// let second, minute, input;
// input = 11025;
// second = input % 60;
// minute = (input - second) / 60;
// console.log(minute + " minutes " + second + " seconds");

//12) Өгөгдсөн секундыг цаг минут секунд болго.
// u = uldegdel r = real(all)
// let input, second, minute, hour;
// input = 100000;
// second = input % 60;
// minute = ((input - second) / 60) % 60;
// hour = [(input - second) / 60 - (((input - second) / 60) % 60)] / 60;
// console.log(hour + " hours " + minute + " minutes " + second + " seconds");

// 13)Өгөгдсөн минут, секундыг секунд рүү шилжүүл.
// let second, minute, answer;
// second = 4;
// minute = 3;
// answer = second + minute * 60;
// console.log(answer + " seconds");

// 14) Өгөгдсөн цаг, минут, секундыг секунд рүү шилжүүл.
// let second, minute, hour, answer;
// second = 4;
// minute = 3;
// hour = 2;
// answer = second + minute * 60 + hour * 3600;
// console.log(answer + " seconds");

// 15) Өгөгдсөн цагийг хоног цагт шилжүүл.
// let input, hour, day, answer;
// input = 1443;
// hour = input % 24;
// day = (input - hour) / 24;
// answer = day + " days " + hour + " hours ";
// console.log(answer);

//16) Өгөгдсөн хоног, цагийг цагт шилжүүл.
// let inputday, inputhour, hour, day, answer;
// inputday = 14;
// inputhour = 21;
// hour = inputday * 24 + inputhour;
// answer = hour + " hours ";
// console.log(answer);

// 17) Өгөгдсөн сарыг жил сар руу шилжүүл.
// let inputsar, jil, sar, answer;
// inputsar = 70;

// jil = (inputsar - (inputsar % 12)) / 12;
// sar = inputsar % 12;
// answer = jil + " jil " + sar + " sar";
// console.log(answer);

// 18) Өгөгдсөн жил, сарыг сард шилжүүл.
// let inputjil, inputsar, sar, answer;
// inputjil = 11;
// inputsar = 5;
// sar = inputsar + inputjil * 12;
// answer = sar + " sar";
// console.log(answer);

// 19) Өгөгдсөн 2 бүхэл тооны ихийг ол.
// 20) Хоёр тооны бага
// let a, b, answer;
// a = 6;
// b = 2;
// if (a < b) {
//   answer = b;
// } else if (a > b) {
//   answer = a;
// } else {
//   answer = "tentsuu 2 too bn";
// }
// console.log(answer);

// 21)Өгөгдсөн 3 тооны ихийг ол.
// let a, b, c, answer;
// a = 7;
// b = 6;
// c = 8;
// if (a > b && a > c) {
//   answer = a;
// } else if (b > a && b > c) {
//   answer = b;
// } else if (c > a && c > b) {
//   answer = c;
// } else {
//   answer = "za mdku dee";
// }
// console.log(answer);

// 22) Өгөгдсөн 4 тооны багыг ол.

let a, b, c, d, answer;
a = 7;
b = 7;
c = 7;
d = 7;
if (a > b && a > c && a > d) {
  answer = a;
} else if (b > a && b > c && b > d) {
  answer = b;
} else if (c > a && c > b && c > d) {
  answer = c;
} else if (d > a && d > b && d > c) {
  answer = d;
} else {
  answer = "za mdku dee, barag bugdeeree tentsuu ym bishuu hha";
}
console.log(answer);
