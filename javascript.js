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

//ANgiin 14 exercises
// 1. Тэгш, сондгой тоог тодорхойлох
// let n = prompt("Тэгш, сондгой тоог тодорхойлох. Too bichne uu:");
// if (n >= 0 && Math.ceil(n % 1) != 1) {
//   if (n % 2 == 0) {console.log("Tegshhen saihan too yma");}
//   if (n % 2 == 1) {console.log("Sondgoi too bno");}
// } else {console.log("Wrong input, perhaps?");}

//2.Тоог эерэг, сөрөг, тэг байдлаар ангилах
// let n = prompt("Тоог эерэг, сөрөг, тэг байдлаар ангилах. Too bichne uu:");
// if(n==0){console.log("Teg");}
// if(n>0){console.log("Eyreg");}
// if(n<0){console.log("Surug");}

// 3. Нэг тоо нөгөө тоогоор хуваагддаг эсэхийг шалгах
// let n = prompt(
//   "Нэг тоо нөгөө тоогоор хуваагддаг эсэхийг шалгах. Huvaagdagchiig bichne uu:"
// );
// let m = prompt(
//   "Нэг тоо нөгөө тоогоор хуваагддаг эсэхийг шалгах. Huvaagchiig bichne uu:"
// );
// if (n % m == 0) {
//   console.log("Huvaagdaj baina.");
// } else {
//   console.log("Huvaagdahgui bh shig bnda");
// }

// 4. Тоон оноог үсгийн дүн (A, B, C, D, F) болгон хувиргах дүнгийн тооцоолуур
// let n = prompt(
//   "Тоон оноог үсгийн дүн (A, B, C, D, F) болгон хувиргах дүнгийн тооцоолуур. Toon onoogoo bichne uu:"
// );
// if (n <= 100 && n >= 90) {
//   console.log("A");
// }
// if (n < 90 && n >= 80) {
//   console.log("B");
// }
// if (n < 80 && n >= 70) {
//   console.log("C");
// }
// if (n < 70 && n >= 60) {
//   console.log("D");
// }
// if (n < 60 && n >= 0) {
//   console.log("F");
// } else {
//   ("Wrong input, perhaps?");
// }

// 5. Цельсийг Фаренгейтын температурт хувиргах
// let c, f;
// c = prompt("Celsius to Fahrenheit. Celsuis: ");
// f = c * 1.8 + 32;
// console.log(f + "°F");

// 6. Өгөгдсөн жил нь өндөр жил эсэхийг шалгах
// let input, l;
// input = prompt("Jil:");

// if (input % 4 == 0) {
//   if (input % 100 == 0 && input % 400 != 0) {
//     console.log("Namhan jil bn.");
//   } else {
//     console.log("Undur jil mun bn.");
//   }
// } else {
//   console.log("Namhan jil bn.");
// }

// 7. Насны ангилал тодорхойлогч (Хүүхэд, Өсвөр үе, Насанд хүрсэн, Ахимаг нас)
// let n = prompt("Nas:");
// if (n >= 0 && n <= 12) {
//   console.log("Хүүхэд");
// } else if (n >= 13 && n <= 17) {
//   console.log("Өсвөр үе");
// } else if (n >= 18 && n <= 59) {
//   console.log("Насанд хүрсэн");
// } else if (n >= 60) {
//   console.log("Ахимаг нас");
// } else {
//   console.log("Wrong input, perhaps?");
// }

// 8. Худалдан авсан дүнгийн дагуу янз бүрийн хөнгөлөлтийн хувь хэрэглэдэг хөнгөлөлтийн тооцоолуур

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
// a = prompt("Too 1:");
// b = prompt("Too 2:");
// c = prompt("Too 3:");
// d = prompt("Too 4:");
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
// for (let i = 0; i < 3; i++) {
//   console.log("IOI");
// }
// console.log("IOI \nIOI \nIOI");

// 35) Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.
// let i, n, sum=0;
// n = 10000;
// for (i=1; i<=n; i++ ){
//   sum+=i;
// }
// console.log(sum);

// 36) n! ол.
// let n = prompt("n! ол. n:");
// let a;
// function factorial(a) {
//   let i,
//     fac = 1;
//   for (i = 1; i <= a; i++) {
//     fac = fac * i;
//   }
//   return fac;
// }
//console.log(factorial(n))

// 37) 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// let n, sum;
// sum=0;
// n=7;
// for (let=i=1; i<=n; i++){
//   sum=sum+100;
// }
// console.log(sum);

// 38) Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// let n, m, sum;
// n= 42;
// m = 5;
// sum=0;
// for(let i=1; i<=m; i++){
//   sum=sum+n;
// }
// console.log(sum);

// 39)2-ын өгөгдсөн тоон зэргийг ол. /2-ын n зэрэг гэдэг нь 2*2*...*2. Жишээ нь 2-ын 3 зэрэг 2*2*2=8 /
// let n, answer;
// n=8;
// answer=1;
// for(let i=1; i<=n; i++){
//   answer = 2*answer;
// }
// console.log(answer);

// 40) Өгөгдсөн тооны n зэргийг ол.
// let a , n , an;
// a = 5 ;
// n= 4 ;
// an = 1;
// for(let i = 1; i<=n; i++){
//   an = a * an;
// }
// console.log(an);

// 41) Тоон дүн 3-аас их бол тэнцсэнд тооцно. Бусад тохиолдолд унана. Өгөгдсөн тоон дүн тэнцсэн эсэхийг тогтоо.
// let a , answer;
// a = 4;
// if (a==4 || a==5){
//   console.log("Tentssen")
// }else if(a==2 || a==3){
//   console.log("Unasan")
// }else{console.log("wrong input brother")}

// 42) Өгөгдсөн тоон дүнг үсгэн дүн рүү шилжүүл.
// let a , answer;
// a = 5;
// if (a==5){
//   console.log("Onts")
// }else if(a==4){
//   console.log("Sain")
// }else if(a==3){
//   console.log("Dund")
// }else if(a==2){
//   console.log("Muu")
// }else{console.log("wrong input brother")}

// 43) Өгөгдсөн тоон үнэлгээг үсгэн үнэлгээнд шилжүүл.
// let a , answer;
// a = 65;
// if(a>100){
//   console.log("Ymar sain ym be sd")
// }else if (a>=90 && a<=100){
//   console.log("A")
// }else if(a>=80 && a<90){
//   console.log("B")
// }else if(a>=70 && a<80){
//   console.log("C")
// }else if(a>=60 && a<70){
//   console.log("D")
// }else if(a>=0 && a<60){
//   console.log("F")
// }else{console.log("wrong input brother")}

// 44) Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ. Эхний үсгийг л томоор бичнэ.
// let a ;
// a = 1;
// if(a==1){
//   console.log("Monday")
// }else if (a==2){
//   console.log("Tuesday")
// }else if (a==3){
//   console.log("Wednesday")
// }else if (a==4){
//   console.log("Thursday")
// }else if (a==5){
//   console.log("Friday")
// }else if (a==6){
//   console.log("Saturday")
// }else if (a==7){
//   console.log("Sunday")
// }else{console.log("wrong input brother")}

// 45) Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү.
// let a = prompt("Sar :");
// if (a ==11 || a==12 || a==1){
//   console.log("Winter")
// }else if (a ==2 || a==3 || a==4){
//   console.log("Spring")
// }else if (a ==5 || a==6 || a==7){
//   console.log("Summer")
// }else if (a ==8 || a==9 || a==10){
//   console.log("Autumn")
// }else{console.log("wrong input brother")}

// 46) Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ.
// let a , b , c ;
// a=3;
// b=5;
// c=7;
// if ((a+b)>c && (a+c)>b && (b+c)>a){
//   console.log("YES")
// }else{console.log("NO")}

// 47) Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга. 1-10
// let n ;
// n= 10;
// if(n==1 ||n==2 ||n==3 ||n==4 ||n==5 ||n==6 ||n==7 ||n==8 ||n==9 ||n==10){
// for (let i = 1; i<=10 ; i++){
//   console.log(n  + " * " + i+ " = " + n*i);
// }}else{console.log("Wrong input broda")}

// 48) a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ. n<10
// let a , n ;
// a = 5;
// n= 9;
// if(n<10 && a > 1){
//   for (let i = 1; i<=9 ; i++){
//     console.log( a + "^" + i + "=" + a**i)
//   }
// }else{console.log("Wrong input broda")}

//49) Өгөгдсөн илэрхийллийн утгыг ол. A=B*C-D (https://www.spoj.com/RGB7/problems iin ehnii nuur duuslaa)
// let A , B , C , D ;
// B = 5;
// C=6;
// D=7;
// A=B*C-D;
// console.log(A);

// 50) RGB7170 Нэг орцтой байрны давхрын тоо, давхар дахь хаалганы тоо өгөгдөв. Айлын хаалганы дугаар мэдэгдэж байгаа үед тэрхүү айл хэд дэх давхрын хэд дэх хаалганд амьдардаг вэ? Давталт ашиглахгүй бодно.
// let davhar , haalga , hedendavhar, hedhaalga, input;
// davhar = 5;
// haalga = 8;
// input = 30;
// if(input<=davhar*haalga){
// hedhaalga=input%haalga ;
// hedendavhar= Math.floor(input/haalga);
// console.log(hedendavhar +" "+hedhaalga);} else{
//   console.log("wrong input broda");
// }

//51) RGB7171 Байшингийн давхар, орц, нэг давхарт суудаг айлын тоо мэдэгдэж байвал энэхүү байшингийн өгөгдсөн тоот нь хэддүгээр орцны, хэдэн давхрын хэд дэх хаалга вэ?
// let davhar, orts, haalgatoo, toot, hedorts, heddavhar, hedtoot;
// davhar = 16;
// orts = 3;
// haalgatoo = 5;
// toot = 100;
// if (toot <= davhar * orts * haalgatoo && toot >= 1) {
//   hedtoot = toot % haalgatoo;
//   hedorts = Math.ceil(toot / (davhar * haalgatoo));
//   heddavhar = Math.ceil(toot / haalgatoo) % davhar;
//   console.log(
//     "Orts: " +
//       hedorts +
//       "\nDavhar: " +
//       heddavhar +
//       "\nHed deh haalga: " +
//       (hedtoot + 1)
//   );
// } else {
//   console.log("Ail anduursan ym bailgui dee");
// }

// 52) RGB7070 Өгөгдсөн натурал тоо n хүртэлх натурал тоонуудын нийлбэрийг ол.Давталт ашиглахгүй болно.
// let n, sum;
// n = 11;
// sum = (n * (n + 1)) / 2;
// console.log(sum);

// 53)
// RGB7071 Өгөгдсөн n тоо хүртэлх квадратуудын нийлбэрийг ол. Давталт ашиглахгүй болно.
// let n, sum;
// n = 4;
// sum = (n*(n+1)*(2*n+1))/6;
// console.log(sum);

// 54) RGB7072 - Нийлбэр 3 Өгөгдсөн сондгой тоо n хүртэлх натурал сондгой тоонуудын нийлбэрийг ол. Давталт ашиглахгүй.
// let n, sum;
// n = 9;
// if (n % 2 == 0) {
//   sum = (n / 2) ** 2;
// } else if (n % 2 == 1) {
//   sum = ((n + 1) / 2) ** 2;
// }
// console.log(sum);

//55) RGB7301 - Ахмад орны цифр . Өгөгдсөн натурал тооны ахмад орны цифрийг ол.
// let n, i;
// n = 516;
// while (n > 1) {
//   n = n / 10;
// }
// console.log(Math.floor(n * 10));

// 56) RGB7302 - Цифрүүдийн нийлбэр Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол.
// let n, sum, cipher;
// n = prompt("Too oruulnaa uu");
// sum = 0;
// while (n >= 1) {
//   cipher = n % 10;
//   n = Math.floor(n / 10);
//   sum = sum + cipher;
// }
// console.log(sum);

// 57) RGB7303 Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол.
// let n, sum, cipher;
// n = prompt("Too oruulna uu:");
// sum = 0;
// while (n >= 1) {
//   cipher = n % 10;
//   if (cipher % 2 == 0) {
//     cipher = cipher;
//   } else {
//     cipher = 0;
//   }
//   n = Math.floor(n / 10);
//   sum = sum + cipher;
// }
// console.log(sum);

// 58) RGB7304 Өгөгдсөн тоон дахь сондгой цифрүүдийн тоог ол.
// let n, sum, cipher;
// n = prompt("Too oruulna uu:");
// sum = 0;
// if (n >= 0) {
//   while (n >= 1) {
//     cipher = n % 10;
//     if (cipher % 2 == 1) {
//       sum = sum + 1;
//     }
//     n = Math.floor(n / 10);
//   }
//   console.log(sum);
// } else {
//   console.log("Wrong input, perhaps?");
// }

// 59) RGB7305 Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол.
// let n, m, sum, cipher;
// n = prompt(
//   "Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол. Too oruulna uu:"
// );
// m = prompt(
//   "Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол. Cipher oruulna uu:"
// );
// sum = 0;
// if (n >= 0) {
//   while (n >= 1) {
//     cipher = n % 10;
//     n = Math.floor(n / 10);
//     if (cipher == m) {
//       sum = sum + 1;
//     }
//   }
//   console.log(sum);
// } else {
//   console.log("Wrong input, perhaps?");
// }

// 60) RGB7306 Өгөгдсөн тооны их цифрийг ол.
// let n, cipher, highest;
// highest = 0;
// n = prompt("Өгөгдсөн тооны их цифрийг ол. Too:");
// if (n >= 0) {
//   while (n >= 1) {
//     cipher = n % 10;
//     n = Math.floor(n / 10);
//     if (cipher > highest) {
//       highest = cipher;
//     }
//   }
//   console.log(highest);
// } else {
//   console.log("Wrong input, perhaps?");
// }

// 61) RGB7307 Өгөгдсөн тоон дахь бага цифрийг ол.
// let n, cipher, lowest;
// lowest = 9;
// n = prompt("Өгөгдсөн тоон дахь бага цифрийг ол. Too:");
// if (n >= 0) {
//   while (n >= 1) {
//     cipher = n % 10;
//     n = Math.floor(n / 10);
//     if (cipher <= lowest) {
//       lowest = cipher;
//     }
//   }
//   console.log(lowest);
// } else {
//   console.log("Wrong input, perhaps?");
// }

// 62) RGB7308 Өгөгдсөн тооны тонгорогсон тоог ол.
// let n, reverse, cipher;
// n = prompt("Өгөгдсөн тооны тонгорогсон тоог ол. Too:");
// reverse = 0;
// if (n >= 0) {
//   do {
//     cipher = n % 10;
//     reverse = reverse + cipher;
//     n = Math.floor(n / 10);
//     reverse = reverse * 10;
//   } while (n >= 1);
//   console.log("тонгорогсон тоо: " + reverse / 10);
// } else {
//   console.log("Wrong input, perhaps?");
// }

// 63) RGB7309 Өгөгдсөн тоо палиндром бол YES үгүй бол NO гэж хэвлэ. Палиндром тоо гэдэг нь тонгорогсон тоотойгоо тэнцүү тоог хэлнэ.
// let reverse, cipher;
// let n = prompt("Өгөгдсөн тоо палиндром бол YES үгүй бол NO гэж хэвлэ. Too:");
// let m = n;
// reverse = 0;
// if (n >= 0) {
//   do {
//     cipher = m % 10;
//     reverse = reverse + cipher;
//     m = Math.floor(m / 10);
//     reverse = reverse * 10;
//   } while (m >= 1);

//   if (reverse/10  == n) {
//     console.log("YES");
//   } else {
//     console.log("NO");

//   }
// } else {
//   console.log("Wrong input, perhaps?");
// }

//64) RGB7310 Өгөгдсөн тоо хоёрын зэрэгт мөн бол YES үгүй бол NO гэж хэвлэ.
// let n, i;
// n = prompt("Өгөгдсөн тоо хоёрын зэрэгт мөн бол YES үгүй бол NO гэж хэвлэ. Too:");
// while(n<1 && n>0){
//   n = n * 2;
// }
// while(n>=4){
//   n = n/2;
// }
// if(n%2==0 || n==1){console.log("YES")}else{console.log("NO")}

// 65) RGB7311 Өгөгдсөн тоог 3-ын зэрэгтэд хураа.
// let n ;
// n = prompt("Өгөгдсөн тоог 3-ын зэрэгтэд хураа. Too:");
// while(n%3==0 && n>1){
//   n=n/3;
// }
// console.log(n);

// 66) RGB7312 Өгөгдсөн тоо ямар нэгэн тооны факториал бол тэр тоог хэвлэ. Үгүй бол No гэж хэвлэ.
// let n, i = 1, m = 1;
// n = prompt("Factorial mun uu? Too:");
// while (n > m) {
//   m = m * i;
//   i++;
// }
// if (n == m) {
//   console.log(m);
// } else { console.log("No") }

// 67) RGB7313 - ХИЕХ
// let a = prompt("Too 1:");
// let b = prompt("Too 2:");
// while (b !== 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// console.log("ХИЕХ= "a);

// 68) RGB7314 - ХБЕХ
// let a = prompt("Too 1:");
// let b = prompt("Too 2:");
// // /*GCD олох функц*/
// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return Math.abs(a);
// }
// // /*LCM олох функц*/
// function lcm(a, b) {
//   return Math.abs(a * b) / gcd(a, b);
// }
// console.log(lcm(a, b));

// 69) RGB7315 - Бутархайг хураа
// let a = prompt("Butarhain hurtver : ");
// let b = prompt("Butarhain huvaari : ");
// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return Math.abs(a);
// }
// console.log("Hurtver:" + a / gcd(a, b));
// console.log("Huvaari:" + b / gcd(a, b));

// 70) RGB7220 - Цифр давталт Өгөгдсөн цифрийг цифрийнх нь тоогоор давтан хэвлэ.
// let n, cipher;
// n = prompt("Cipher:");
// for (let i = 1; i <= n; i++) {
//   console.log(n);
// }

// 71) RGB7221 - Цифр хүртэлх -- Өгөгдсөн цифр хүртэлх цифрүүдийг нэг хоосон зайгаар тусгаарлан хэвлэ. Сүүлийн цифрийн ард хоосон зай байхгүй. Мөр дуусгана.
// let cipher = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let n = prompt("Cipher :");
// for (let i = 0; i < n; i++) {
//   console.log(cipher[i]);
// } /* log deer bol zai , mur duusgah edr hud2 ahah,  */

// 72) RGB7222 - Есөөс цифр хүртэл - Есийн цифрээс өгөгдсөн цифр хүртэл нэг нэгээр нэг мөрөнд хэвлэ.
// let n = prompt("Cipher :");
// for (let i = 9; i >= n; i--) {
//   console.log(i);
// }

// 73) RGB7400 Өгөгдсөн натурал тоо хүртэлх тоонуудыг дараах хэлбэрээр хэвлэнэ үү.
// let n = prompt("Natural too: ");
// let a = 0;
// for (let i = 1; i <= n; i++) {
//   console.log(i);
// /* tegj bgaad neg murund bichij surnaa */

//74) RGB7401 Давхар давталт 1
// let cipher = [
//   0,
//   1,
//   "2 1",
//   "3 2 1",
//   "4 3 2 1",
//   "5 4 3 2 1",
//   "6 5 4 3 2 1",
//   "7 6 5 4 3 2 1",
//   "8 7 6 5 4 3 2 1",
//   "9 8 7 6 5 4 3 2 1",
// ];
// let n = prompt("1-9 hoorond Natural too: ");
// if (
//   n != 1 &&
//   n != 2 &&
//   n != 3 &&
//   n != 4 &&
//   n != 5 &&
//   n != 6 &&
//   n != 7 &&
//   n != 8 &&
//   n != 9
// ) {
//   console.log("Wrong input, perhaps?");
// }
// let i = 0;
// for (i = n; i > 0; i--) {
//   console.log(cipher[n]);
// }

// 75) RGB7402 Давхар давталт 2 -- 10 aas baga buhel too
// let cipher = [
//   "0",
//   "1",
//   "1 2",
//   "1 2 3",
//   "1 2 3 4",
//   "1 2 3 4 5",
//   "1 2 3 4 5 6",
//   "1 2 3 4 5 6 7",
//   "1 2 3 4 5 6 7 8",
//   "1 2 3 4 5 6 7 8 9",
// ];
// let n = prompt("1-9 hoorond Natural too: ");
// let i = 1;
// while (i <= n) {
//   console.log(cipher[i]);
//   i++;
// }

// 76) RGB7403
// /*SOLUTION 1: enenees uur yaj hiihee medku bsiimaa */
// let cipher = [
//   "0",
//   "1",
//   "1 2",
//   "1 2 3",
//   "1 2 3 4",
//   "1 2 3 4 5",
//   "1 2 3 4 5 6",
//   "1 2 3 4 5 6 7",
//   "1 2 3 4 5 6 7 8",
//   "1 2 3 4 5 6 7 8 9",
// ];
// let n = prompt("1-9 hoorond Natural too: ");
// let i = 1;
// while(n>=i){
//     console.log(cipher[n]);
//     n-=1;
// }
// /* SOLUTION 2: */
// let = n = prompt("bla2");
// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i + 1; j++) {
//       console.log(j + " ");
//     }
//     console.log("");
//   }
// }
// printNumbers(n);

// 77) RGB7404   5 4 3 2 1  4 3 2 1  3 2 1  2 1  1
// let = n = prompt("bla2");
// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = n - i + 1; j >= 1; j--) {
//       console.log(j + " ");
//     }
//     console.log("");
//   }
// }
// printNumbers(n);

// 78) RGB7405 - Давхар давталт 5
// let = n = prompt("bla2");
// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = n; j >= i; j--) {
//       console.log(j + " ");
//     }
//     console.log("");
//   }
// }
// printNumbers(n);

// 79) RGB7090 - Шагай    k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол.
//Шагай нь морь, тэмээ, хонь, ямаа гэсэн 4 янзаар бууна.
//// Variant 1: Shagaig hoorondoo uur ungutei gej uzii.
// let k = prompt(
//   "k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол. k:"
// );
// let answer = 0;
// answer = 4 ** k;
// console.log("answer:" + answer);

//// Variant 2: Shagaig adilhan gej uzii.
// let k = prompt(
//   "k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол. k:"
// );
// let answer;
// k = Math.floor(k);
// answer = ((k + 1) * (k + 2) * (k + 3)) / 6;
// console.log("k ширхэг шагайг орхиход буух ялгаатай боломжийн тоо: "+answer);

// 80) RGB7172 - Гурвалжны хэлбэр
// let a = prompt("Gurvaljnii tal 1:"),
//   b = prompt("Gurvaljnii tal 2:"),
//   c = prompt("Gurvaljnii tal 3:");
// a = Math.abs(a);
// b = Math.abs(b);
// c = Math.abs(c);
// let high;
// if (a + b > c && a + c > b && b + c > a) {
//   if (a > b && a > c) {
//     high = a;
//   }
//   if (b > a && b > c) {
//     high = b;
//   }
//   if (c > a && c > b) {
//     high = c;
//   }
//   let equal;
//   if (a == b && b == c && a == c) {
//     equal = a;
//   }
//   if (
//     c * c == a * a + b * b ||
//     b * b == a * a + c * c ||
//     a * a == c * c + b * b
//   ) {
//     console.log("Right");
//   } else if (
//     c * c > a * a + b * b ||
//     b * b > a * a + c * c ||
//     a * a > c * c + b * b
//   ) {
//     console.log("Obtuse");
//   } else if (
//     c * c < a * a + b * b ||
//     b * b < a * a + c * c ||
//     a * a < c * c + b * b
//   ) {
//     console.log("Acute");
//   }
// } else {
//   console.log("Gurvaljin bish l bnda");
// }

//81) RGB7316 - Гурван тооны ХБЕХ  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// let n = prompt("Too 1:");
// let m = prompt("Too 2:");
// let l = prompt("Too 3:");
// function gcdThreeNumbers(a, b, c) {
//   function gcd(a, b) {
//     while (b) {
//       const temp = b;
//       b = a % b;
//       a = temp;
//     }
//     return a;
//   }
//   return gcd(a, gcd(b, c));
// }
// console.log("GCD:" + gcdThreeNumbers(n, m, l)); //// ХИЕХ шүү энэ
////////// toog anhnii toonii urjvert zadlah function, code
// let n = prompt("Too:");
// function prime(n) {
//   let answer = 1;
//   for (let i = 2; n >= i; i++) {
//     if (n % i == 0) {
//       while (n % i == 0) {
//         n = n / i;
//         // console.log(i);
//         answer = i + " * " + answer;
//         if (n % i != 0) break;
//       }
//     }
//   }
//   return answer;
//   //   console.log(answer);
// }
// console.log(prime(n));

// 82)RGB7317 - Цөөн квадрат Өгөгдсөн тэгш өнцөгтийг хамгийн цөөн квадратадуудад хуваа.
// Input:11 4
// Output:
// 4 2
// 3 1
// 1 3
// let a = prompt("Tegsh untsugt tal 1:"),
//   b = prompt("Tegsh untsugt tal 2:"),
//   big = Math.max(a, b),
//   small = Math.min(a, b);
// let len = [];
// let count = [];
// let i = 0,
//   tal;
// while (1) {
//   len[i] = small;
//   count[i] = Math.floor(big / small);
//   tal = big % small;
//   big = small;
//   small = tal;
//   i++;
//   if (tal == 0) break;
// }
// console.log("    Tal: " + len);
// console.log("Shirheg: " + count);

// 83) RGB7318 - Залгаад квадрат зэрэг--Өгөгдсөн натурал тооны бичиглэлийн эх адагт нь 1-ийн цифр залгаж бичээд квадрат зэрэгт дэвшүүл.
// let n = prompt(
//   "Өгөгдсөн натурал тооны бичиглэлийн эх адагт нь 1-ийн цифр залгаж бичээд квадрат зэрэгт дэвшүүл. n:"
// );
// let zalgaa = Math.abs("1" + n + "1");
// let answer = zalgaa ** 2;
// console.log(answer);

// 84) RGB7030 - Гипотенуз
// let a = prompt("leg 1:"),
//   b = prompt("leg 2:");
// let c;
// c = Math.sqrt(a ** 2 + b ** 2);
// console.log(c);

// 85) RGB7031 - Гурвалжны талбай
// let a = prompt("side 1:"),
//   b = prompt("side 2:"),
//   c = prompt("side 3:");
// let numa = Number(a);
// let numb = Number(b);
// let numc = Number(c);
// const s = (numa + numb + numc) / 2;
// let area = Math.sqrt(s * (s - numa) * (s - numb) * (s - numc));
// console.log(area);
// console.log(s + " s");

// 86) RGB7032 - Дугуйн талбай, taslalaas hoishih 4 oron bolon Pi=3.141592
// const Pi = 3.141592;
// let r = prompt("Radius:");

// let s = Pi * r * r;
// let s4 = s.toFixed(4);
// console.log(s4);

// 87) RGB7033 - Хоёр цэгийн хоорондох зай --1 хэмжээст тоон шулуун, 2 хэмжээст координатын хавтгай болон 3 хэмжээст огторгуйд координатаараа өгөгдсөн 2 цэгүүдийн хоорондох зайг ол.
// let _1s = prompt("1 dimension start:");
// let _1e = prompt("1 dimension end:");
// let _2sx = prompt("2 dimension start x:");
// let _2sy = prompt("2 dimension start y:");
// let _2ex = prompt("2 dimension end x:");
// let _2ey = prompt("2 dimension end y:");
// let _3sx = prompt("3 dimension start x:");
// let _3sy = prompt("3 dimension start y:");
// let _3sz = prompt("3 dimension start z:");
// let _3ex = prompt("3 dimension start x:");
// let _3ey = prompt("3 dimension start y:");
// let _3ez = prompt("3 dimension start z:");
// let length1;
// lenght1 = Math.abs(_1s - _1e);
// console.log(lenght1.toFixed(3));
// let lenght2;
// lenght2 = Math.sqrt((_2sx - _2ex) ** 2 + (_2sy - _2ey) ** 2);
// console.log(lenght2.toFixed(3));
// let lenght3;
// lenght3 = Math.sqrt(
//   (_3ex - _3sx) ** 2 + (_3sy - _3ey) ** 2 + (_3sz - _3ez) ** 2
// );
// console.log(lenght3.toFixed(3));

//88) RGB7034 - 2 тооны дундаж -- Өгөгдсөн 2 бодит  эерэг тооны арифметик болон геометр дунджийг ол.
// let a = prompt("Too:");
// let b = prompt("Too 2:");
// function geometryMed(n,m){
//  return Math.sqrt(n*m);
// }
// function arithmeticMed(n,m){
//   return (parseInt(a)+parseInt(b))/2;
// }
// console.log("Arithmetic median: "+ arithmeticMed(a,b));
// console.log("Geomtery median: "+geometryMed(a,b));

// 89) RGB7075 Өгөгдсөн n тоо хүртэлх натурал тоонуудын кубуудын нийлбэрийг ол.
// let n = prompt("n:");
// let i, sum=0;
// if(n<=2000){
// for(i=1;i<=n;i++){
// sum = sum + i**3;

// }
// console.log(sum);}

// 90)RGB7035 Тойргийн радиус өгөгдсөн үед тойргийн талбай ба уртыг ол.
// let r=prompt("r:");
// let s = 0, p = 0;
// s = Math.PI*r*r;
// p = 2*Math.PI*r;
// console.log("S="+s);
// console.log("P="+p);

// 91) RGB7500 - Массив нийлбэр

// let x  = prompt("Toon shirheg:");
// let list=[];
// let ans=0;
// for(let i =1; i<=x; i++){
// list[i]= prompt("index "+ i);
// ans = ans + Number(list[i]);
// }
// console.log(ans);

// 92) RGB7501 - Массив тэгээс их нийлбэр
// let x  = prompt("Toon shirheg:");
// let list=[];
// let ans=0;
// for(let i =1; i<=x; i++){
// list[i]= prompt("index "+ i);
// if(list[i]>0){ans = ans + Number(list[i]);}

// }
// console.log(ans);

// 93) RGB7502 - Муугийн тоо  Сурагчдын дүн нэг хэмжээст массиваар өгөгдөв. Муу дүгнэгдсэн сурагчдын тоог ол.
// let x  = prompt("Toon shirheg:");
// let list=[];
// let ans=0;
// for(let i =1; i<=x; i++){
// list[i]= prompt("index "+ i);
// if(list[i]<60){ans = ans + 1;}

// }
// console.log(ans);

// 94) RGB7503 - Сондгой нь их үү
// let x  = prompt("Toon shirheg:");
// if(x>=1){
// let list=[];
// let ans=0;
// let sondgoi=0, tegsh=0;
// for(let i =1; i<=x; i++){
// list[i]= prompt("index "+ i);
// if(list[i]%2==0){tegsh = tegsh + 1;}
// if(list[i]%2==1){sondgoi = sondgoi + 1;}
// }
// if(tegsh>sondgoi){
//     console.log("NO");
// }
// if(sondgoi>tegsh){
//     console.log("YES");
// }
// if(sondgoi==tegsh){console.log("Equal");}
// }else{console.log("Wrong input, perhaps?")}

// 95) RGB7504 - Массивын их -- Өгөгдсөн нэг хэмжээст бүхэл тоон массив дахь хамгийн их элементийг / тоог / ол.
// let x  = prompt("Toon shirheg:");
// let y = Number(x);
// const list=[];
// let i;
// let ans;
// for(i =0; i<y; i++){
// list[i]= prompt("index "+ i);
// }
// const array =list.sort(function(a,b){return b-a});
// console.log("Hamgiin ih element: "+array[0]);

// 96) RGB7505 - Массивын бага -- Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн бага элементийг /тоог/ ол
// let x  = prompt("Toon shirheg:");
// let y = Number(x);
// const list=[];
// let i;
// let ans;
// for(i =0; i<y; i++){
// list[i]= prompt("index "+ i);
// }
// const array =list.sort(function(a,b){return a-b});
// console.log("Hamgiin baga element: "+array[0]);

// 97) RGB7506 - Өгөгдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо хэд байгааг ол.
let n = prompt("Array dahi elementiin too: ");
let m = Number(n);
const list = [];
let i,j,count=0;
for(i=0;i<m; i++){
    list[i]=prompt("index "+i)
}
let x = prompt("Array iin ali elementiin toog medmeer baina ve?");
for(j =0; j<m;i++){
    if(list[j]==x){
        count=count+1;
    }
}
console.log(count);
// function whatever(value){
// return value = x;
// }
// const single = list.find(whatever);
// console.log(single); //not finished
