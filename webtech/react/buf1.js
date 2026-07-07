const buf1=Buffer.alloc(15);
buf1.write("Buffer.alloc()");

const buf2=Buffer.from("Buffer.from()");

const buf3=Buffer.allocUnsafe(20);
buf3.write("Buffer.allocUnsafe()");

console.log(buf1);
console.log(buf1.toString());
console.log(buf1.toString('utf8'));
console.log(buf2.toString());
console.log(buf3.toString());

console.log(Buffer.isBuffer(buf1));
console.log(buf1.length);

