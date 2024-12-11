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
function RGB7002() {
  let p;
  let a = prompt("a:");
  let b = prompt("b:");
  let c = prompt("c:");
  a *= 1;
  b *= 1;
  c *= 1;
  p = a + b + c;
  console.log("Gurvaljnii hureenii urt = " + p);
}

// 2) 2 toonii niilber
function RGB7001() {
  let a = prompt("a:");
  let b = prompt("b:");
  let c;
  a *= 1;
  b *= 1;
  c = a + b;
  console.log(c);
}

// 3) cube
function RGB7004() {
  let a = prompt("a:");
  a *= 1;
  let v, s;
  v = a * a * a;
  s = 6 * a * a;
  console.log("V=" + v);
  console.log("S=" + s);
}

// 4) tegsh untsugt
function RGB7003() {
  let s, p;
  let a = prompt("a:");
  let b = prompt("b:");
  s = a * b;
  p = 2 * a + 2 * b;
  console.log("S= " + s + "  P= " + p);
}

//5) function1
function RGB7005() {
  let y;
  let x = prompt("x:");
  y = 3 * x - 5;
  console.log("y=" + y);
}

// 6) function2
function RGB7006() {
  let y;
  let x = prompt("x:");
  y = 4 * x * x - 3 * x + 5;
  console.log(y);
}

// 7) suuliin cipher
function RGB7007() {
  let x = prompt("x:");
  let y;
  y = x % 10;
  console.log(y);
}

//8) aravtiin ornii cipher
function RGB7008() {
  let x = prompt("x:");
  let y, z, m;

  y = x % 100;
  z = x % 10;
  m = (y - z) / 10;
  console.log(m);
}
// 9) 2 orontoi toonii cipheruudiin urjver
function RGB7009() {
  let y, z, m;
  let x = prompt("x:");
  y = x % 100;
  z = x % 10;
  m = (y - z) / 10;
  console.log(m * z);
}
//10) Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол.
function RGB7010() {
  let x = prompt("x:");
  if (x <= 999 && x >= 0) {
    let y, z, m, neg, hoyr, gurav;
    y = x % 100;
    neg = x % 10;
    hoyr = (y - neg) / 10;
    gurav = (x - y) / 100;
    console.log(neg + hoyr + gurav);
  } else {
    ("Wrong input, perhaps?");
  }
}

// 11) Өгөгдсөн секундыг минут секунд болго.
function RGB7011() {
  let second, minute;
  let input = prompt("seconds:");
  second = input % 60;
  minute = (input - second) / 60;
  console.log(minute + " minutes " + second + " seconds");
}

//12) Өгөгдсөн секундыг цаг минут секунд болго.
function RGB7011() {
  let input = prompt("seconds:");
  let second, minute, hour;
  second = input % 60;
  minute = ((input - second) / 60) % 60;
  hour = [(input - second) / 60 - (((input - second) / 60) % 60)] / 60;
  console.log(hour + " hours " + minute + " minutes " + second + " seconds");
}

// 13)Өгөгдсөн минут, секундыг секунд рүү шилжүүл.
function RGB7012() {
  let answer;
  let second = prompt("seconds:");
  let minute = prompt("minutes:");
  second *= 1;
  minute *= 1;
  answer = second + minute * 60;
  console.log(answer + " seconds");
}

// 14) Өгөгдсөн цаг, минут, секундыг секунд рүү шилжүүл.
function RGB7013() {
  let second = prompt("seconds:");
  let minute = prompt("minutes:");
  let hour = prompt("hours:");
  second *= 1;
  answer = second + minute * 60 + hour * 3600;
  console.log(answer + " seconds");
}

// 15) Өгөгдсөн цагийг хоног цагт шилжүүл.
function RGB7014() {
  let input = prompt("hours:");
  let hour, day, answer;
  input *= 1;
  hour = input % 24;
  day = (input - hour) / 24;
  answer = day + " days " + hour + " hours ";
  console.log(answer);
}

//16) Өгөгдсөн хоног, цагийг цагт шилжүүл.
function RGB7015() {
  let hour, answer;
  let inputday = prompt("days:");
  let inputhour = prompt("hours:");
  inputhour *= 1;
  inputday *= 1;
  hour = inputday * 24 + inputhour;
  answer = hour + " hours ";
  console.log(answer);
}

// 17) Өгөгдсөн сарыг жил сар руу шилжүүл.
function RGB7016() {
  let jil, sar, answer;
  let inputsar = prompt("Months:");
  sar = inputsar % 12;
  jil = (inputsar - sar) / 12;

  answer = jil + " jil " + sar + " sar";
  console.log(answer);
}

// 18) Өгөгдсөн жил, сарыг сард шилжүүл.
function RGB7017() {
  let sar, answer;
  let inputjil = prompt("Years:");
  let inputsar = prompt("Months:");
  inputsar *= 1;
  sar = inputsar + inputjil * 12;
  answer = sar + " sar";
  console.log(answer);
}
// 19) Өгөгдсөн 2 бүхэл тооны ихийг ол.
function RGB7101() {
  let answer;
  let a = prompt("a:");
  let b = prompt("b:");
  if (a < b) {
    answer = b;
  } else if (a > b) {
    answer = a;
  } else {
    answer = "tentsuu 2 too bn";
  }
  console.log(answer);
}

// 20) Хоёр тооны бага
function RGB7102() {
  let answer;
  let a = prompt("a:");
  let b = prompt("b:");
  if (a < b) {
    answer = a;
  } else if (a > b) {
    answer = b;
  } else {
    answer = "tentsuu 2 too bn";
  }
  console.log(answer);
}

// 21)Өгөгдсөн 3 тооны ихийг ол.
function RGB7103() {
  let a, b, c, answer;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  if (a > b && a > c) {
    answer = a;
  } else if (b > a && b > c) {
    answer = b;
  } else if (c > a && c > b) {
    answer = c;
  } else {
    answer = "za mdku dee";
  }
  console.log(answer);
}

// 22) Өгөгдсөн 4 тооны багыг ол.
function RGB7104() {
  let a, b, c, d, answer;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  d = prompt("Too 4:");
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
}

// 23) Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол
function RGB7105() {
  let a, b, c, d, answer;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  d = prompt("Too 4:");
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
}

// 24) Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа.
function RGB7106() {
  let a, b, c, d, answer;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  d = prompt("Too 4:");
  if (a < 5) {
    a = a;
  } else {
    a = 1;
  }
  if (b < 5) {
    b = b;
  } else {
    b = 1;
  }
  if (c < 5) {
    c = c;
  } else {
    c = 1;
  }
  if (d < 5) {
    d = d;
  } else {
    d = 1;
  }
  answer = a * b * c * d;
  console.log(answer);
}

// 25) Өгөгдсөн 3 тоон дахь тэгш тоонуудын нийлбэрийг ол. Ядаж 1 тэгш тоо бий.
function RGB7107() {
  let a, b, c, answer;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  if (a % 2 <= 0) {
    a = Number(a);
  } else {
    a = 0;
  }
  if (b % 2 <= 0) {
    b = Number(b);
  } else {
    b = 0;
  }
  if (c % 2 <= 0) {
    c = Number(c);
  } else {
    c = 0;
  }
  answer = a + b + c;
  console.log(answer);
}

// 26) Өгөгдсөн 3 тоон дахь сондгой тоонуудын үржвэрийг ол. Ядаж 1 сондгой тоо байгаа.
function RGB7108() {
  let a, b, c, answer;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  if (a % 2 >= 1) {
    a = a;
  } else {
    a = 1;
  }
  if (b % 2 >= 1) {
    b = b;
  } else {
    b = 1;
  }
  if (c % 2 >= 1) {
    c = c;
  } else {
    c = 1;
  }
  answer = a * b * c;
  console.log(answer);
}

// 27) Өгөгдсөн 3 тоон дотроос 5-тай тэнцүү тоонуудын тоог ол.
function RGB7109() {
  let a,
    b,
    c,
    i = 0;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");

  if (a == 5) {
    i += 1;
  }
  if (b == 5) {
    i += 1;
  }
  if (c == 5) {
    i += 1;
  }
  console.log(i);
}

// 28) Өгөгдсөн 4 тоон дотроос 3-д хуваагддаг тоонуудын тоог ол.
function RGB7110() {
  let a, b, c, d, i;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  d = prompt("Too 4:");
  i = 0;
  if (a % 3 == 0) {
    i++;
  }
  if (b % 3 == 0) {
    i++;
  }
  if (c % 3 == 0) {
    i++;
  }
  if (d % 3 == 0) {
    i++;
  }
  console.log(i);
}

// 29) Өгөгдсөн 4 тооны 11-д хууваагддаггүй тоонуудынх нь нийлбэрийг ол.
function RGB7111() {
  let a, b, c, d, i;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  d = prompt("Too 4:");
  i = 0;
  if (a % 11 != 0) {
    a = Number(a);
  } else {
    a = 0;
  }
  if (b % 11 != 0) {
    b = Number(b);
  } else {
    b = 0;
  }
  if (c % 11 != 0) {
    c = Number(c);
  } else {
    c = 0;
  }
  if (d % 11 != 0) {
    d = Number(d);
  } else {
    d = 0;
  }
  i = a + b + c + d;
  console.log(i);
}

//30) Өгөгдсөн тоо 10-аас их бол YES үгүй бол NO гэж хэвлэ.
function RGB7112() {
  let a = prompt("Too 1:");
  if (a > 10) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

//31) Өгөгдсөн тоо 5-аас бага бол  YES үгүй бол NO гэж хэвлэ.
function RGB7113() {
  let a = prompt("Too 1:");

  if (a < 5) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 32) Гурван тоо өгөгдөнө. Тоо тэгш бол YES үгүй бол NO гэж хэвлэ.
function RGB7114() {
  let a, b, c;
  a = prompt("Too 1:");
  b = prompt("Too 2:");
  c = prompt("Too 3:");
  if (a % 2 == 0) {
    console.log("YES \n");
  } else {
    console.log("NO \n");
  }
  if (b % 2 == 0) {
    console.log("YES \n");
  } else {
    console.log("NO \n");
  }
  if (c % 2 == 0) {
    console.log("YES \n ");
  } else {
    console.log("NO \n");
  }
}

// 33) Дэлгэцэнд IOI гэж 1 удаа хэвлэ. (Console log deer, html file neemeergui bn)
function RGB7201() {
  console.log("IOI");
}

// 34) Дэлгэцэнд IOI гэж 3 удаа хэвлэ.
function RGB7202() {
  for (let i = 0; i < 3; i++) {
    console.log("IOI");
  }
}

// 35) IOI үгийг өгөгдсөн тоон удаа хэвлэ.
function RGB7203() {
  let n = prompt("n:");
  n *= 1;
  for (let i = 0; i < n; i++) {
    console.log("IOI");
  }
}
// 36) Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.
function RGB7204() {
  let i,
    sum = 0;
  let n = prompt("n:");
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

// 37) n! ол.
function RGB7205() {
  let n = prompt("n! ол. n:");
  let a;
  function factorial(a) {
    let i,
      fac = 1;
    for (i = 1; i <= a; i++) {
      fac = fac * i;
    }
    return fac;
  }
  console.log(factorial(n));
}

// 38) 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
function RGB7206() {
  let n, sum;
  sum = 0;
  n = prompt("n:");
  for (let i = 1; i <= n; i++) {
    sum = sum + 100;
  }
  console.log(sum);
}

// 39) Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
function RGB7207() {
  let n, m, sum;
  n = prompt("Too:");
  m = prompt("Toirgiin too:");
  n *= 1;
  m *= 1;
  sum = 0;
  for (let i = 1; i <= m; i++) {
    sum = sum + n;
  }
  console.log(sum);
}

// 40)2-ын өгөгдсөн тоон зэргийг ол. /2-ын n зэрэг гэдэг нь 2*2*...*2. Жишээ нь 2-ын 3 зэрэг 2*2*2=8 /
function RGB7208() {
  let n,
    answer = 1;
  n = prompt("n:");
  n *= 1;
  answer = 2 ** n;
  console.log(answer);
}

// 41) Өгөгдсөн тооны n зэргийг ол.
function RGB7209() {
  let a, n, an;
  a = prompt("a:");
  n = prompt("n:");
  a *= 1;
  n *= 1;
  an = 1;
  for (let i = 1; i <= n; i++) {
    an = a ** n;
  }
  console.log(an);
}

// 42) Тоон дүн 3-аас их бол тэнцсэнд тооцно. Бусад тохиолдолд унана. Өгөгдсөн тоон дүн тэнцсэн эсэхийг тогтоо.
function RGB7115() {
  let a = prompt("a:");

  if (a == 4 || a == 5) {
    console.log("Tentssen");
  } else if (a == 2 || a == 3) {
    console.log("Unasan");
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 43) Өгөгдсөн тоон дүнг үсгэн дүн рүү шилжүүл.
function RGB7116() {
  let a = prompt("a:");
  if (a == 5) {
    console.log("Onts");
  } else if (a == 4) {
    console.log("Sain");
  } else if (a == 3) {
    console.log("Dund");
  } else if (a == 2) {
    console.log("Muu");
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 44) Өгөгдсөн тоон үнэлгээг үсгэн үнэлгээнд шилжүүл.
function RGB7117() {
  let a = prompt("a:");
  if (a > 100) {
    console.log("Ymar sain ym be sd");
  } else if (a >= 90 && a <= 100) {
    console.log("A");
  } else if (a >= 80 && a < 90) {
    console.log("B");
  } else if (a >= 70 && a < 80) {
    console.log("C");
  } else if (a >= 60 && a < 70) {
    console.log("D");
  } else if (a >= 0 && a < 60) {
    console.log("F");
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 45) Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ. Эхний үсгийг л томоор бичнэ.
function RGB7118() {
  let a = prompt("Day 1-7:");

  if (a == 1) {
    console.log("Monday");
  } else if (a == 2) {
    console.log("Tuesday");
  } else if (a == 3) {
    console.log("Wednesday");
  } else if (a == 4) {
    console.log("Thursday");
  } else if (a == 5) {
    console.log("Friday");
  } else if (a == 6) {
    console.log("Saturday");
  } else if (a == 7) {
    console.log("Sunday");
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 46) Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү.
function RGB7119() {
  let a = prompt(
    "Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү. Sar :"
  );
  if (a == "November" || a == "December" || a == "January") {
    console.log("Winter");
  } else if (a == "February" || a == "March" || a == "April") {
    console.log("Spring");
  } else if (a == "May" || a == "June" || a == "July") {
    console.log("Summer");
  } else if (a == "August" || a == "September" || a == "October") {
    console.log("Autumn");
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 47) Өгөгдсөн 3 тоогоор талаа хийсэн гурвалжинг байгуулж болох бол YES үгүй бол NO гэж хэвлэ.
function RGB7120() {
  let a, b, c;
  a = prompt("Tal 1:");
  b = prompt("Tal 2:");
  c = prompt("Tal 3:");
  a *= 1;
  b *= 1;
  c *= 1;
  if (a + b > c && a + c > b && b + c > a) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 48) Өгөгдсөн тооны хүрдийг дараах хэлбэрээр гарга. 1-10
function RGB7210() {
  let n = prompt("n:");

  if (
    n == 1 ||
    n == 2 ||
    n == 3 ||
    n == 4 ||
    n == 5 ||
    n == 6 ||
    n == 7 ||
    n == 8 ||
    n == 9 ||
    n == 10
  ) {
    for (let i = 1; i <= 10; i++) {
      console.log(n + " * " + i + " = " + n * i);
    }
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 49) a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ. n<10
function RGB7211() {
  let a, n;
  a = prompt(
    "a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ. n<10. a:"
  );
  n = prompt(
    "a тооны n хүртэлх зэрэгтүүдийг жишээн дээрх хэлбэрээр хэвлэ. n<10. n:"
  );
  a *= 1;
  n *= 1;
  if (n < 10 && a > 0) {
    for (let i = 1; i <= n; i++) {
      console.log(a + "^" + i + "=" + a ** i);
    }
  } else {
    console.log("Wrong input, perhaps?");
  }
}

//50) Өгөгдсөн илэрхийллийн утгыг ол. A=B*C-D (https://www.spoj.com/RGB7/problems iin ehnii nuur duuslaa)
function RGB7019() {
  let A, B, C, D;
  B = prompt("Өгөгдсөн илэрхийллийн утгыг ол. A=B*C-D  B:");
  C = prompt("C:");
  D = prompt("D:");
  A = B * C - D;
  console.log("A=" + A);
}

// 51) RGB7170 Нэг орцтой байрны давхрын тоо, давхар дахь хаалганы тоо өгөгдөв. Айлын хаалганы дугаар мэдэгдэж байгаа үед тэрхүү айл хэд дэх давхрын хэд дэх хаалганд амьдардаг вэ? Давталт ашиглахгүй бодно.
function RGB7170() {
  let davhar, haalga, hedendavhar, hedhaalga, toot;
  davhar = prompt("davhariin too:");
  haalga = prompt("davhar dahi haalganii too:");
  toot = prompt("haalganii dugaar");
  toot *= 1;
  davhar *= 1;
  haalga *= 1;
  if (toot == 0) {
    console.log("Wrong input, perhaps?");
  } else if (toot <= davhar * haalga) {
    hedendavhar = Math.ceil(toot / haalga);
    hedhaalga = toot % haalga;
    if (hedhaalga == 0) {
      hedhaalga = haalga;
    }
    console.log(hedendavhar + "davhar");
    console.log(hedhaalga + "dah haalga");
  } else {
    console.log("Wrong input, perhaps?");
  }
}

//52) RGB7171 Байшингийн давхар, орц, нэг давхарт суудаг айлын тоо мэдэгдэж байвал энэхүү байшингийн өгөгдсөн тоот нь хэддүгээр орцны, хэдэн давхрын хэд дэх хаалга вэ?
function RGB7171() {
  let davhar, orts, haalgatoo, toot, hedorts, heddavhar, hedtoot;
  davhar = prompt("Davhar:");
  orts = prompt("Orts:");
  haalgatoo = prompt("Davhar dahi haalganii too:");
  toot = prompt("Toot:");
  if (toot <= davhar * orts * haalgatoo && toot >= 1) {
    hedtoot = toot % haalgatoo;
    if (hedtoot == 0) {
      hedtoot = haalgatoo;
    }
    hedorts = Math.ceil(toot / (davhar * haalgatoo));
    heddavhar = Math.ceil(toot / haalgatoo) % davhar;
    console.log(
      "Orts: " +
        hedorts +
        "\nDavhar: " +
        heddavhar +
        "\nHed deh haalga: " +
        hedtoot
    );
  } else {
    console.log("Ail anduursan ym bailgui dee");
  }
}

// 53) RGB7070 Өгөгдсөн натурал тоо n хүртэлх натурал тоонуудын нийлбэрийг ол.Давталт ашиглахгүй болно.
function RGB7070() {
  let n, sum;
  n = prompt("n:");
  n *= 1;
  sum = (n * (n + 1)) / 2;
  console.log(sum);
}

// 54) RGB7071 Өгөгдсөн n тоо хүртэлх квадратуудын нийлбэрийг ол. Давталт ашиглахгүй болно.
function RGB7071() {
  let n, sum;
  n = prompt("n:");
  n *= 1;
  sum = (n * (n + 1) * (2 * n + 1)) / 6;
  console.log(sum);
}

// 55) RGB7072 - Нийлбэр 3 Өгөгдсөн сондгой тоо n хүртэлх натурал сондгой тоонуудын нийлбэрийг ол. Давталт ашиглахгүй.
function RGB7072() {
  let n, sum;
  n = prompt("n:");
  n *= 1;
  if (n % 2 == 0) {
    sum = (n / 2) ** 2;
  } else if (n % 2 == 1) {
    sum = ((n + 1) / 2) ** 2;
  }
  console.log(sum);
}

//56) RGB7301 - Ахмад орны цифр . Өгөгдсөн натурал тооны ахмад орны цифрийг ол.
function RGB7301() {
  let n = prompt("n:");
  while (n > 1) {
    n = n / 10;
  }
  console.log(Math.floor(n * 10));
}

// 57) RGB7302 - Цифрүүдийн нийлбэр Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол.
function RGB7302() {
  let n, sum, cipher;
  n = prompt("Too oruulnaa uu");
  sum = 0;
  while (n >= 1) {
    cipher = n % 10;
    n = Math.floor(n / 10);
    sum = sum + cipher;
  }
  console.log(sum);
}

// 58) RGB7303 Өгөгдсөн тоон дахь тэгш цифрүүдийн нийлбэрийг ол.
function RGB7303() {
  let n, sum, cipher;
  n = prompt("Too oruulna uu:");
  sum = 0;
  while (n >= 1) {
    cipher = n % 10;
    if (cipher % 2 == 0) {
      cipher = cipher;
    } else {
      cipher = 0;
    }
    n = Math.floor(n / 10);
    sum = sum + cipher;
  }
  console.log(sum);
}

// 59) RGB7304 Өгөгдсөн тоон дахь сондгой цифрүүдийн тоог ол.
function RGB7304() {
  let n, sum, cipher;
  n = prompt("Too oruulna uu:");
  sum = 0;
  if (n >= 0) {
    while (n >= 1) {
      cipher = n % 10;
      if (cipher % 2 == 1) {
        sum = sum + 1;
      }
      n = Math.floor(n / 10);
    }
    console.log(sum);
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 60) RGB7305 Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол.
function RGB7305() {
  let n, m, sum, cipher;
  n = prompt(
    "Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол. Too oruulna uu:"
  );
  m = prompt(
    "Өгөгдсөн тоонд өгөгдсөн цифр хэдэн удаа орсныг ол. Cipher oruulna uu:"
  );
  sum = 0;
  if (n >= 0) {
    while (n >= 1) {
      cipher = n % 10;
      n = Math.floor(n / 10);
      if (cipher == m) {
        sum = sum + 1;
      }
    }
    console.log(sum);
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 61) RGB7306 Өгөгдсөн тооны их цифрийг ол.
function RGB7306() {
  let n, cipher, highest;
  highest = 0;
  n = prompt("Өгөгдсөн тооны их цифрийг ол. Too:");
  if (n >= 0) {
    while (n >= 1) {
      cipher = n % 10;
      n = Math.floor(n / 10);
      if (cipher > highest) {
        highest = cipher;
      }
    }
    console.log(highest);
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 62) RGB7307 Өгөгдсөн тоон дахь бага цифрийг ол.
function RGB7307() {
  let n, cipher, lowest;
  lowest = 9;
  n = prompt("Өгөгдсөн тоон дахь бага цифрийг ол. Too:");
  if (n >= 0) {
    while (n >= 1) {
      cipher = n % 10;
      n = Math.floor(n / 10);
      if (cipher <= lowest) {
        lowest = cipher;
      }
    }
    console.log(lowest);
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 63) RGB7308 Өгөгдсөн тооны тонгорогсон тоог ол.
function RGB7308() {
  let n, reverse, cipher;
  n = prompt("Өгөгдсөн тооны тонгорогсон тоог ол. Too:");
  reverse = 0;
  if (n >= 0) {
    do {
      cipher = n % 10;
      reverse = reverse + cipher;
      n = Math.floor(n / 10);
      reverse = reverse * 10;
    } while (n >= 1);
    console.log("тонгорогсон тоо: " + reverse / 10);
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 64) RGB7309 Өгөгдсөн тоо палиндром бол YES үгүй бол NO гэж хэвлэ. Палиндром тоо гэдэг нь тонгорогсон тоотойгоо тэнцүү тоог хэлнэ.
function RGB7309() {
  let reverse, cipher;
  let n = prompt("Өгөгдсөн тоо палиндром бол YES үгүй бол NO гэж хэвлэ. Too:");
  let m = n;
  reverse = 0;
  if (n >= 0) {
    do {
      cipher = m % 10;
      reverse = reverse + cipher;
      m = Math.floor(m / 10);
      reverse = reverse * 10;
    } while (m >= 1);

    if (reverse / 10 == n) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  } else {
    console.log("Wrong input, perhaps?");
  }
}

//65) RGB7310 Өгөгдсөн тоо хоёрын зэрэгт мөн бол YES үгүй бол NO гэж хэвлэ.
function RGB7310() {
  let n, i;
  n = prompt(
    "Өгөгдсөн тоо хоёрын зэрэгт мөн бол YES үгүй бол NO гэж хэвлэ. Too:"
  );
  while (n < 1 && n > 0) {
    n = n * 2;
  }
  while (n >= 4) {
    n = n / 2;
  }
  if (n % 2 == 0 || n == 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// 66) RGB7311 Өгөгдсөн тоог 3-ын зэрэгтэд хураа.
function RGB7311() {
  let n;
  n = prompt("Өгөгдсөн тоог 3-ын зэрэгтэд хураа. Too:");
  while (n % 3 == 0 && n > 1) {
    n = n / 3;
  }
  console.log(n);
}

// 67) RGB7312 Өгөгдсөн тоо ямар нэгэн тооны факториал бол тэр тоог хэвлэ. Үгүй бол No гэж хэвлэ.
function RGB7312() {
  let n,
    i = 1,
    m = 1;
  n = prompt("Factorial mun uu? Too:");
  while (n > m) {
    m = m * i;
    i++;
  }
  if (n == m) {
    console.log(m);
  } else {
    console.log("No");
  }
}

// 68) RGB7313 - ХИЕХ
function RGB7313() {
  let a = prompt("Too 1:");
  let b = prompt("Too 2:");
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log("ХИЕХ= " + a);
}

// 69) RGB7314 - ХБЕХ
function RGB7314() {
  let a = prompt("Too 1:");
  let b = prompt("Too 2:");
  /*GCD олох функц*/
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  // /*LCM олох функц*/
  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }
  console.log(lcm(a, b));
}

// 70) RGB7315 - Бутархайг хураа
function RGB7315() {
  let a = prompt("Butarhain hurtver : ");
  let b = prompt("Butarhain huvaari : ");
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  }
  console.log("Hurtver:" + a / gcd(a, b));
  console.log("Huvaari:" + b / gcd(a, b));
}

// 71) RGB7220 - Цифр давталт Өгөгдсөн цифрийг цифрийнх нь тоогоор давтан хэвлэ.
function RGB7220() {
  let n = prompt("Cipher:");
  for (let i = 1; i <= n; i++) {
    console.log(n);
  }
}

// 72) RGB7221 - Цифр хүртэлх -- Өгөгдсөн цифр хүртэлх цифрүүдийг нэг хоосон зайгаар тусгаарлан хэвлэ. Сүүлийн цифрийн ард хоосон зай байхгүй. Мөр дуусгана.
function RGB7221() {
  let n = prompt("Cipher :");
  let ans = "";
  for (let i = 0; i < n; i++) {
    ans = ans + " " + i;
  }
  console.log(ans);
}

// 73) RGB7222 - Есөөс цифр хүртэл - Есийн цифрээс өгөгдсөн цифр хүртэл нэг нэгээр нэг мөрөнд хэвлэ.
function RGB7222() {
  let n = prompt("Cipher :");
  let ans = "";
  for (let i = 9; i >= n; i--) {
    ans = ans + " " + i;
  }
  console.log(ans);
}

// 74) RGB7400 Өгөгдсөн натурал тоо хүртэлх тоонуудыг дараах хэлбэрээр хэвлэнэ үү.
function RGB7400() {
  let n = prompt("Natural too: ");
  let a = "";
  let j = 1;
  while (j <= n) {
    a = a + "" + j;
    j++;
  }
  for (let i = 1; i <= n; i++) {
    console.log(a);
  }
}
//RGB7400();

//75) RGB7401 Давхар давталт 1
function RGB7401() {
  let n = prompt("Natural too: ");
  let a = "";
  let j = n;
  while (j >= 1) {
    a = a + "" + j;
    j--;
  }
  for (let i = 1; i <= n; i++) {
    console.log(a);
  }
}

// 76) RGB7402 Давхар давталт 2 -- 10 aas baga buhel too
function RGB7402() {
  let n = prompt("Natural too: ");
  let a = "";

  for (let i = 1; i <= n; i++) {
    a = a + " " + i;
    console.log(a);
  }
}
//RGB7402();

// 77) RGB7403
function RGB7403() {
  let = n = prompt("n:");
  let a = "";
  let m;
  m = n;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      a = a + "" + j;
    }
    console.log(a);
    a = "";
    m--;
  }
}

// 78) RGB7404
function RGB7404() {
  let = n = prompt("n:");
  let a = "";
  let m;
  m = n;
  for (let i = n; i >= 1; i--) {
    for (let j = m; j >= i; j--) {
      a = a + " " + j;
    }
    console.log(a);
    a = "";
  }
}

// 79) RGB7405 - Давхар давталт 5
function RGB7405() {
  let = n = prompt("n:");
  let a = "";
  let m;
  m = n;
  for (let i = 1; i <= n; i++) {
    for (let j = m; j >= i; j--) {
      a = a + " " + j;
    }
    console.log(a);
    a = "";
  }
}

// 80) RGB7090 - Шагай    k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол.
//Шагай нь морь, тэмээ, хонь, ямаа гэсэн 4 янзаар бууна.

function RGB7090_1() {
  //// Variant 1: Shagaig hoorondoo uur ungutei gej uzii.
  let k = prompt(
    "k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол. k:"
  );
  let answer = 0;
  answer = 4 ** k;
  console.log("answer:" + answer);
}

function RGB7090_2() {
  // Variant 2: Shagaig adilhan gej uzii.
  let k = prompt(
    "k ширхэг шагайг орхиход /хаяхад/ буух ялгаатай боломжийн тоог ол. k:"
  );
  let answer;
  k = Math.floor(k);
  answer = ((k + 1) * (k + 2) * (k + 3)) / 6;
  console.log("k ширхэг шагайг орхиход буух ялгаатай боломжийн тоо: " + answer);
}

// 81) RGB7172 - Гурвалжны хэлбэр
function RGB7172() {
  let a = prompt("Gurvaljnii tal 1:"),
    b = prompt("Gurvaljnii tal 2:"),
    c = prompt("Gurvaljnii tal 3:");
  a = Math.abs(a);
  b = Math.abs(b);
  c = Math.abs(c);
  let high, mid, low;
  if (a + b > c && a + c > b && b + c > a) {
    if (a >= b && a >= c) {
      high = a;
      mid = b;
      low = c;
    }
    if (b >= a && b >= c) {
      high = b;
      mid = a;
      low = c;
    }
    if (c > a && c > b) {
      high = c;
      mid = a;
      low = b;
    }

    if (high ** 2 == low ** 2 + mid ** 2) {
      console.log("Right");
    } else if (high ** 2 > low ** 2 + mid ** 2) {
      console.log("Obtuse");
    } else if (high ** 2 < low ** 2 + mid ** 2) {
      console.log("Acute");
    }
  } else {
    console.log("Gurvaljin bish l bnda");
  }
}

//82) RGB7316 - Гурван тооны ХБЕХ  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Anhnii toonii urjver
function multiplicationOfPrimes() {
  let n = prompt("Too:");
  function prime(n) {
    let answer = 1;
    for (let i = 2; n >= i; i++) {
      if (n % i == 0) {
        while (n % i == 0) {
          n = n / i;
          answer = i + " * " + answer;
          if (n % i != 0) break;
        }
      }
    }
    return answer;
  }
  console.log(prime(n));
}
function GCD3() {
  let n = prompt("Too 1:");
  let m = prompt("Too 2:");
  let l = prompt("Too 3:");
  function gcdThreeNumbers(a, b, c) {
    function gcd(a, b) {
      while (b) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }
    return gcd(a, gcd(b, c));
  }
  console.log("GCD:" + gcdThreeNumbers(n, m, l)); //// ХИЕХ шүү энэ
}

// 83)RGB7317 - Цөөн квадрат Өгөгдсөн тэгш өнцөгтийг хамгийн цөөн квадратадуудад хуваа.
// Input:11 4
// Output:
// 4 2
// 3 1
// 1 3
function RGB7317() {
  let a = prompt("Tegsh untsugt tal 1:"),
    b = prompt("Tegsh untsugt tal 2:"),
    big = Math.max(a, b),
    small = Math.min(a, b);
  let len = [];
  let count = [];
  let i = 0,
    tal;
  while (1) {
    len[i] = small;
    count[i] = Math.floor(big / small);
    tal = big % small;
    big = small;
    small = tal;
    i++;
    if (tal == 0) break;
  }
  console.log("    Tal: " + len);
  console.log("Shirheg: " + count);
}

// 84) RGB7318 - Залгаад квадрат зэрэг--Өгөгдсөн натурал тооны бичиглэлийн эх адагт нь 1-ийн цифр залгаж бичээд квадрат зэрэгт дэвшүүл.
function RGB7318() {
  let n = prompt(
    "Өгөгдсөн натурал тооны бичиглэлийн эх адагт нь 1-ийн цифр залгаж бичээд квадрат зэрэгт дэвшүүл. n:"
  );
  let zalgaa = Math.abs("1" + n + "1");
  let answer = zalgaa ** 2;
  console.log(answer);
}

// 85) RGB7030 - Гипотенуз
function RGB7030() {
  let a = prompt("leg 1:"),
    b = prompt("leg 2:");
  let c;
  c = Math.sqrt(a ** 2 + b ** 2);
  console.log(c);
}

// 86) RGB7031 - Гурвалжны талбай
function RGB7031() {
  let a = prompt("side 1:"),
    b = prompt("side 2:"),
    c = prompt("side 3:");
  let numa = Number(a);
  let numb = Number(b);
  let numc = Number(c);
  const s = (numa + numb + numc) / 2;
  let area = Math.sqrt(s * (s - numa) * (s - numb) * (s - numc));
  console.log(area);
  console.log(s + " s");
}

// 87) RGB7032 - Дугуйн талбай, taslalaas hoishih 4 oron bolon Pi=3.141592
function RGB7032() {
  const Pi = 3.141592;
  let r = prompt("Radius:");
  let s = Pi * r * r;
  let s4 = s.toFixed(4);
  console.log(s4);
}

// 88) RGB7033 - Хоёр цэгийн хоорондох зай --1 хэмжээст тоон шулуун, 2 хэмжээст координатын хавтгай болон 3 хэмжээст огторгуйд координатаараа өгөгдсөн 2 цэгүүдийн хоорондох зайг ол.
function RGB7033() {
  let _1s = prompt("1 dimension start:");
  let _1e = prompt("1 dimension end:");
  let _2sx = prompt("2 dimension start x:");
  let _2sy = prompt("2 dimension start y:");
  let _2ex = prompt("2 dimension end x:");
  let _2ey = prompt("2 dimension end y:");
  let _3sx = prompt("3 dimension start x:");
  let _3sy = prompt("3 dimension start y:");
  let _3sz = prompt("3 dimension start z:");
  let _3ex = prompt("3 dimension start x:");
  let _3ey = prompt("3 dimension start y:");
  let _3ez = prompt("3 dimension start z:");
  let length1;
  length1 = Math.abs(_1s - _1e);
  console.log("Length of 1 dimension:" + length1.toFixed(3));
  let length2;
  length2 = Math.sqrt((_2sx - _2ex) ** 2 + (_2sy - _2ey) ** 2);
  console.log("Length of 2 dimension:" + length2.toFixed(3));
  let length3;
  length3 = Math.sqrt(
    (_3ex - _3sx) ** 2 + (_3sy - _3ey) ** 2 + (_3sz - _3ez) ** 2
  );
  console.log("Length of 3 dimension:" + length3.toFixed(3));
}

//89) RGB7034 - 2 тооны дундаж -- Өгөгдсөн 2 бодит  эерэг тооны арифметик болон геометр дунджийг ол.
function RGB7034() {
  let a = prompt("Too:");
  let b = prompt("Too 2:");
  function geometryMed(n, m) {
    return Math.sqrt(n * m);
  }
  function arithmeticMed(n, m) {
    return (parseInt(a) + parseInt(b)) / 2;
  }
  console.log("Arithmetic median: " + arithmeticMed(a, b));
  console.log("Geomtery median: " + geometryMed(a, b));
}

// 90) RGB7075 Өгөгдсөн n тоо хүртэлх натурал тоонуудын кубуудын нийлбэрийг ол.
function RGB7075() {
  let n = prompt("n:");
  let i,
    sum = 0;
  if (n <= 2000) {
    for (i = 1; i <= n; i++) {
      sum = sum + i ** 3;
    }
    console.log(sum);
  }
}

// 91)RGB7035 Тойргийн радиус өгөгдсөн үед тойргийн талбай ба уртыг ол.
function RGB7035() {
  let r = prompt("r:");
  let s = 0,
    p = 0;
  s = Math.PI * r * r;
  p = 2 * Math.PI * r;
  console.log("S=" + s);
  console.log("P=" + p);
}

// 92) RGB7500 - Массив нийлбэр
function RGB7035() {
  let x = prompt("Toon shirheg:");
  let list = [];
  let ans = 0;
  for (let i = 1; i <= x; i++) {
    list[i] = prompt("index " + i);
    ans = ans + Number(list[i]);
  }
  console.log(ans);
}

// 93) RGB7501 - Массив тэгээс их нийлбэр
function RGB7501() {
  let x = prompt("Toon shirheg:");
  let list = [];
  let ans = 0;
  for (let i = 1; i <= x; i++) {
    list[i] = prompt("index " + i);
    if (list[i] > 0) {
      ans = ans + Number(list[i]);
    }
  }
  console.log(ans);
}

// 94) RGB7502 - Муугийн тоо  Сурагчдын дүн нэг хэмжээст массиваар өгөгдөв. Муу дүгнэгдсэн сурагчдын тоог ол.
function RGB7502() {
  let x = prompt("Toon shirheg:");
  let list = [];
  let ans = 0;
  for (let i = 1; i <= x; i++) {
    list[i] = prompt("index " + i);
    if (list[i] < 60) {
      ans = ans + 1;
    }
  }
  console.log(ans);
}

// 95) RGB7503 - Сондгой нь их үү
function RGB7503() {
  let x = prompt("Toon shirheg:");
  if (x >= 1) {
    let list = [];
    let ans = 0;
    let sondgoi = 0,
      tegsh = 0;
    for (let i = 1; i <= x; i++) {
      list[i] = prompt("index " + i);
      if (list[i] % 2 == 0) {
        tegsh = tegsh + 1;
      }
      if (list[i] % 2 == 1) {
        sondgoi = sondgoi + 1;
      }
    }
    if (tegsh > sondgoi) {
      console.log("NO");
    }
    if (sondgoi > tegsh) {
      console.log("YES");
    }
    if (sondgoi == tegsh) {
      console.log("Equal");
    }
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 96) RGB7504 - Массивын их -- Өгөгдсөн нэг хэмжээст бүхэл тоон массив дахь хамгийн их элементийг / тоог / ол.
function RGB7504() {
  let x = prompt("Toon shirheg:");
  let y = Number(x);
  const list = [];
  let i;
  let ans;
  for (i = 0; i < y; i++) {
    list[i] = prompt("index " + i);
  }
  const array = list.sort(function (a, b) {
    return b - a;
  });
  console.log("Hamgiin ih element: " + array[0]);
}

// 97) RGB7505 - Массивын бага -- Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн бага элементийг /тоог/ ол
function RGB7505() {
  let x = prompt("Toon shirheg:");
  let y = Number(x);
  const list = [];
  let i;
  let ans;
  for (i = 0; i < y; i++) {
    list[i] = prompt("index " + i);
  }
  const array = list.sort(function (a, b) {
    return a - b;
  });
  console.log("Hamgiin baga element: " + array[0]);
}

// 98) RGB7506 - Өгөгдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо хэд байгааг ол.
function RGB7506() {
  let n = prompt("Array dahi elementiin too: ");
  if (n >= 1 && Number.isInteger(n)) {
    let m = Number(n);
    const list = [];
    let i,
      j,
      count = 0;
    for (i = 0; i < m; i++) {
      list[i] = prompt("index " + i);
    }
    let x = prompt("Array iin ali elementiin toog medmeer baina ve?");
    for (j = 0; j < m; j++) {
      if (list[j] == x) {
        count = count + 1;
      }
    }
    console.log(count);
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 99) RGB7507 Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элемент 1-ээс их бол бага дугаарыг нь хэвлэнэ.
function RGB7507() {
  let n = prompt(
    "Array iin hamgiin ih element n ali n ve? Index n hed ve? Array dahi elementiin too(1<=n>=100): "
  );
  if (n >= 1 && n <= 100 && Number.isSafeInteger(Number(n))) {
    let m = Number(n);
    const list = [];
    let max = 0;
    let i = 0,
      count = 0;
    for (i; i < m; i++) {
      list[i] = prompt("Element: " + Number(i + 1));
      list[i] = list[i] * 1;
      if (list[i] > max) {
        max = list[i];
        count = i + 1;
      }
    }
    console.log(
      "Hed deh element ve: " +
        count +
        "  " +
        "Hamgiin ih utgatai element: " +
        max
    );
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 100) RGB7508 Өгөгдсөн нэг хэмжээст бүхэл тоон массивын хамгийн их элемент хэд байгааг ол. Нэг давталтаар олбол сайн.
function RGB7508() {
  let n = prompt(
    "Array iin hamgiin ih element n ali n ve? Heden shirheg bgaa ve? Array dahi elementiin too shirheg: "
  );
  if (n >= 1 && n <= 100 && Number.isSafeInteger(Number(n))) {
    let m = Number(n);
    const list = [];
    let max = 0;
    let i = 0,
      count = 0;
    for (i; i < m; i++) {
      list[i] = prompt("Element: " + Number(i + 1));
      list[i] = list[i] * 1;
      if (list[i] > max) {
        max = list[i];
      }
      if (list[i] == max) {
        count++;
      }
    }
    console.log(
      "Hamgiin ih utgatai element: " + max + "   Hed baigaa ve: " + count
    );
  } else {
    console.log("Wrong input, perhaps?");
  }
}

// 101) RGB7509 - Массивт байгаа эсэх Өгөгдсөн нэг хэмжээст бүхэл тоон массивт өгөгдсөн тоо байвал YES үгүй бол NO гэж хэвлэ. Таарангуут давталтыг зогсоох.
function RGB7509() {
  let n = prompt("Array dahi elementiin too shirheg(n<=100): ");
  if (n >= 1 && n <= 100 && Number.isSafeInteger(Number(n))) {
    let m = Number(n);
    let list = [];
    let i = 0;
    for (i; i < m; i++) {
      list[i] = prompt("Element: " + Number(i + 1));
      list[i] *= 1;
    }
    console.log("List: " + list);
    let check = prompt("Number to check:");
    check *= 1;
    let found = false;
    let value = "NO";
    for (let j = 0; j < list.length; j++) {
      if (list[j] === check) {
        value = "YES";
        break;
      }
    }
    console.log(value);
  }
}

// 102) RGB7212 - Факториалын хүрд
function RGB7212() {
  let n = prompt("(n<=20) n: ");
  let a = 1;
  for (let i = 1; i <= n; i++) {
    a = a * i;
    console.log(i + "!=" + a);
  }
}

// 103)RGB7213 1*2+2*3+3*4+...+n*(n+1) нийлбэрийг ол.
function RGB7213() {
  let n = prompt("n:");
  n *= 1;
  let sum;
  let lel = 0;
  for (let i = 0; i <= n; i++) {
    sum = i * (i + 1);
    lel = lel + sum;
  }
  console.log(lel);
}

// 104) RGB7214 1*n+2*(n-1)+3*(n-2)+...+n*1 нийлбэрийг ол.
function RGB7214() {
  let n = prompt("n:");
  n *= 1;
  console.log("Type of n is:" + typeof n);
  let sum = 0;
  let j = n;
  for (let i = 1; i <= n; i++, j--) {
    sum = sum + j * i;
  }
  console.log(sum);
}

// 105)RGB7215 1*2+3*4+5*6+...+(n-1)*n
function RGB7215() {
  let n = prompt("n:");
  n *= 1;
  let sum = 0;
  let j = 2;
  for (let i = 1; i <= n; i += 2, j += 2) {
    sum = sum + j * i;
  }
  console.log(sum);
}

// 106) RGB7216  1*2*3+2*3*4+3*4*5+...+n*(n+1)*(n+2)
function RGB7216() {
  let n = prompt("n:");
  n *= 1;
  let sum = 0;
  let j = 2;
  let k = 3;
  for (let i = 1; i <= n; i++) {
    sum = sum + (i + 2) * (i + 1) * i;
  }
  console.log(sum);
}

// 107) RGB7217  n!! - ыг ол. n тоо тэгш бол n хүртэлх тэгш тоонуудын үржвэр. n тоо сондгой бол n хүртэлх сондгой тоонуудын үржвэр. n=6 үед 2*4*6=48, n=7 үед 1*3*5*7=105
function RGB7217() {
  let n = prompt("n:");
  n *= 1;
  let sum = 1;
  let i;
  if (n % 2 == 0) {
    i = 2;
  }
  if (n % 2 == 1) {
    i = 1;
  }
  for (i; i <= n; i += 2) {
    sum = sum * i;
  }
  console.log(sum);
}

//108) RGB7218 Зэрэгтүүдийн нийлбэр 1+a1+a2+a3+...+an.
function RGB7218() {
  let a = prompt("a:");
  let n = prompt("n:");
  n *= 1;
  a *= 1;
  let sum = 1;
  let i;
  for (i = 1; i <= n; i++) {
    sum = sum + a ** i;
  }
  console.log(sum);
}

// 109) RGB7219 1!+2!+3!+...+n!
function RGB7219() {
  let n = prompt("n:");
  n *= 1;
  let sum = 1;
  let i;
  let lel = 0;
  for (i = 1; i <= n; i++) {
    sum = sum * i;
    lel = lel + sum;
  }
  console.log(lel);
}

//110) RGB7230 sin(x)+sin(x2)+sin(x3)+...+sin(xn)
function RGB7230() {
  let x = prompt("x:");
  let n = prompt("n:");
  n *= 1;
  x *= 1;
  let sum = 0;
  let i;
  let lel = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + Math.sin(x ** i);
  }
  console.log(sum.toFixed(3));
}

// 111) RGB7231 sinx+sin2x+sin3x+...+sinnx 
function RGB7230() {
  let x = prompt("x:");
  let n = prompt("n:");
  n *= 1;
  x *= 1;
  let sum = 0;
  let i;
  let lel = 0;
  for (i = 1; i <= n; i++) {
    sum = sum + Math.sin(x ** i);
  }
  console.log(sum.toFixed(3));
}
// bagana ugugdsun, container with most water; 2 array is given: height and position
function ContainerWithMostWater() {
  const ch = [];
  const cp = [];
  const bagana = [];
  let a = prompt(`Element number of arrays of 
    1)heights 
    2)positions:`);
  a *= 1;
  // let b = prompt("Element number of array of position:");
  // b *= 1;
  for (let i = 0; i < a; i++) {
    ch[i] = prompt("Container of height element " + (i + 1) + ":");
  }
  function height(a, b) {
    let ans = 0;
    if (a >= b) {
      ans = b;
    }
    if (a <= b) {
      ans = a;
    }
    return ans;
  }

  const volume = [];
  let i = 0;
  let j = 0;
  for (i; i < a; i++) {}
}

//Ugugdsun array dundaas tegsh toog ni l aguulsan array gargah function
function evenNumber() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let even = array.filter((n) => n % 2 == 0);
  return even;
}
// Toog anhnii toog mun esehiig shalgadag function
function anhnii(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return "No";
  }
  return "Yes";
}
//split = String iig array bolgoj huvaaj bgaa
// let fruits = "apple banana orange kivi";
// let array = fruits.split(" ");
// console.log(array);

function emailneesNerAvdag(email) {
  // let email = prompt(" bat.b@gmail.com zagvartai email bichne uu."); //B.Bat iig avdag function, prompt--
  let fullNameSplit = email.split("@");
  let split = fullNameSplit[0].split(".");
  let firstNameSmall = split[0];
  let firstNameLetter = firstNameSmall.slice(0, 1);
  let firstLetter = firstNameLetter.toUpperCase();
  let restFirstName = firstNameSmall.slice(1);
  let firstName = firstLetter.concat(restFirstName);
  let lastName;
  if (split[1].length > 1) {
    lastNameFirst = split[1].charAt(0).toUpperCase();
    lastNameRest = split[1].slice(1);
    lastName = lastNameFirst.concat(lastNameRest);
  } else {
    lastName = split[1].toUpperCase();
  }
  //console.log(lastName + "." + firstName);
  return lastName + "." + firstName;
}
//console.log(emailneesNerAvdag("uujuu.ch@gmail.com"));
