let a="1";
let b="2";
let c='';
for (let i = 1; i <= 5; i++) {
    let row = ''; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {
        row += j + ' '; // Append the current column number to the row string
    }
    console.log(row.trim()); // Print the row and remove trailing whitespace
}