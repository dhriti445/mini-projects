// Create a buffer of 10 bytes filled with zeros
const buffer1 = Buffer.alloc(10);
console.log(buffer1);

// Create an uninitialized buffer of 10 bytes
const buffer2 = Buffer.allocUnsafe(10);
console.log(buffer2);

// Fill the buffer with zeros for security
buffer2.fill(0);
console.log(buffer2);

--------------------------------------------

// Create an empty buffer
const buffer = Buffer.alloc(10);

// Write a string to the buffer
buffer.write('Hello');
console.log(buffer);

console.log(buffer.toString());

// Write bytes at specific positions
buffer[5] = 44; // ASCII for ','
buffer[6] = 32; // ASCII for space
buffer.write('Node', 7);
console.log(buffer.toString());

---------------------------------------------

// Create a buffer from a string
const buffer = Buffer.from('Hello, Node.js!');

// Read the entire buffer as a string
console.log(buffer.toString());

// Read a portion of the buffer (start at position 7, end before position 11)
console.log(buffer.toString('utf8', 7, 11));

// Read a single byte
console.log(buffer[0]);

// Convert the ASCII code to a character
console.log(String.fromCharCode(buffer[0]));


-------------------------------------------------
//Buffer.compare()

const buffer1 = Buffer.from('ABC');
const buffer2 = Buffer.from('BCD');
const buffer3 = Buffer.from('ABC');

console.log(Buffer.compare(buffer1, buffer2));
console.log(Buffer.compare(buffer2, buffer1));
console.log(Buffer.compare(buffer1, buffer3));

--------------------------------------------------

// Create source and target buffers
const source = Buffer.from('Hello, World!');
const target = Buffer.alloc(source.length);

// Copy from source to target
source.copy(target);

console.log(target.toString());

// Create a target buffer for partial copy
const partialTarget = Buffer.alloc(5);

// Copy only part of the source (starting at index 7)
source.copy(partialTarget, 0, 7);

console.log(partialTarget.toString());

--------------------------------------------------
//buffer.slice()
const buffer = Buffer.from('Hello, World!');

// Create a slice from position 7 to the end
const slice = buffer.slice(7);
console.log(slice.toString());

// Create a slice from position 0 to 5
const slice2 = buffer.slice(0, 5);
console.log(slice2.toString());

// Important: slices share memory with original buffer
slice[0] = 119; // ASCII for 'w' (lowercase)
console.log(slice.toString());
console.log(buffer.toString());