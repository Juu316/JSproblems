//console.log("hello again"); hello again gej bichne
// let x, y, z;
// x = 5;
// y = 6;
// console.log(x + y);
// // let var const 3 aar declare hiij bolno
//  let iig uurchilj boldog
// var iig tsaashdaa hereglehed asuudal uusne !
// const iig uurchilj boldoggui
//  var j = 2;
//  let h = 1;
//  const i = 3;
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
// let a, b, c, d, answer;
// a = 7;
// b = 7;
// c = 7;
// d = 7;
// if (a > b && a > c && a > d) {
//   answer = a;
// } else if (b > a && b > c && b > d) {
//   answer = b;
// } else if (c > a && c > b && c > d) {
//   answer = c;
// } else if (d > a && d > b && d > c) {
//   answer = d;
// } else {
//   answer = "za mdku dee, barag bugdeeree tentsuu ym bishuu hha";
// }
// console.log(answer);

// 23) Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол
// let a1, b1, c1, d1, a, b, c, d, answer;
// a = 7;
// b = 887;
// c = 8;
// d = 8;
// if(a>80){
//   a=a;
// }else {a=0}
// if(b>80){
//   b=b;
// }else {b=0}
// if(c>80){
//   c=c;
// }else {c=0}
// if(d>80){
//   d=d;
// }else {d=0}
// answer = a + b + c+ d;
// console.log(answer);

// 24) Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа.
// let a, b, c, d, answer;
// a = 2;
// b = 3;
// c = 4;
// d = 10;
// if(a<5){
//   a=a;
// }else {a=1}
// if(b<5){
//   b=b;
// }else {b=1}
// if(c<5){
//   c=c;
// }else {c=1}
// if(d<5){
//   d=d;
// }else {d=1}
// answer = a * b * c * d;
// console.log(answer);

// 25) Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. Ядаж 1 тэгш тоо бий. 
// let a, b, c, x, answer;
// a=1;
// b=50;
// c=3;
// if((a%2)<=0){
//   a=a;
// }else{a=0}
// if((b%2)<=0){
//   b=b;
// }else{b=0}
// if((c%2)<=0){
//   c=c;
// }else{c=0}
// answer = a+b+c;
// console.log(answer);

// 26) Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. Ядаж 1 сондгой тоо байгаа.
// let a, b, c, x, answer;
// a=70;
// b=5;
// c=3;
// if((a%2)>=1){
//     a=a;
//   }else{a=1}
//   if((b%2)>=1){
//     b=b;
//   }else{b=1}
//   if((c%2)>=1){
//     c=c;
//   }else{c=1}
//   answer = a*b*c;
//   console.log(answer);

// 27) Өгөгдсөн 3 тоон дотроос 5-тай тэнцүү тоонуудын тоог ол.
// let a, b, c ,i;
// a=2;
// b=2;
// c=2;
// i=0;
// if(a===5){
//   i=i+1;
// }
// if(b===5){
//   i=i+1;
// }
// if(c===5){
//   i=i+1;
// }
// console.log(i);

// 28) Өгөгдсөн 4 тоон дотроос 3-д хуваагддаг тоонуудын тоог ол. 
// let a, b, c , d, i;
// a=21;
// b=25;
// c=9;
// d=2;
// i = 0;
// if(a%3===0){
// i = i +1;
// }
// if(b%3===0){
//   i = i +1;
//   }
// if(c%3===0){
//     i = i +1;
//     }
// if(d%3===0){
//       i = i +1;
//       }
// console.log(i);

// 29) Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол.
// let a, b, c , d, i;
// a=21;
// b=25;
// c=9;
// d=22;
// i = 0;
// if(a%11!==0){
//   a=a;
// }else{a=0}
// if(b%11!==0){
//   b=b;
// }else{b=0}
// if(c%11!==0){
//   c=c;
// }else{c=0}
// if(d%11!==0){
//   d=d;
// }else{d=0}
// i = a + b + c + d;
// console.log(i);

//30) Өгөгдсөн тоо 10-аас их бол YES үгүй бол NO гэж хэвлэ.
// let a , answer;
// a=1;
// if(a>10){
// console.log("YES")
// }else{console.log("NO")}

//31) Өгөгдсөн тоо 5-аас бага бол  YES үгүй бол NO гэж хэвлэ.
// let a , answer;
// a=1;
// if(a<5){
// console.log("YES")
// }else{console.log("NO")}

// 32) Гурван тоо өгөгдөнө. Тоо тэгш бол YES үгүй бол NO гэж хэвлэ.
// let a, b, c ;
// a=2;
// b=2;
// c=3;
// if(a%2===0){
//   console.log("YES \n")
// }else{console.log("NO \n")}

// if(b%2===0){
//   console.log("YES \n")
// }else{console.log("NO \n")}
// if(c%2===0){
//   console.log("YES \n ")
// }else{console.log("NO \n")}

// 33) Дэлгэцэнд IOI гэж 1 удаа хэвлэ. (Console log deer, html file neemeergui bn)
// console.log("IOI");

// 34) Дэлгэцэнд IOI гэж 3 удаа хэвлэ.
// console.log("IOI \nIOI \nIOI")

// 35) Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.
// let i, n, sum=0;
// n = 10000;
// for (i=1; i<=n; i++ ){
//   sum+=i;
// } 
// console.log(sum);

// 36) n! ол.
// let i, n, fac=1;
// n = 5;
// if(n==1){
//   fac=0;
// }else{
// for (i=1; i<=n; i++ ){
//   fac=fac*i;
// } }
// console.log(fac);

// 37) 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// let n, sum;
// sum=0;
// n=7;
// for (let=i=1; i<=n; i++){
//   sum=sum+100;
// }
// console.log(sum);

// 38) Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
let n, m, sum;
n= 42;
m = 5;
sum=0;
for(let i=1; i<=m; i++){
  sum=sum+n;
}
console.log(sum);

// 39)