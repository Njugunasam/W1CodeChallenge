// Import the readline
// Create a readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to calculate the grade
function calculateGrade(marks) {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
// Function to get valid marks input
function getValidMarksInput() {
    return new Promise((resolve) => {
        rl.question('Enter student marks (0-100): ', (marksInput) => {
            const marks = parseFloat(marksInput);
            if (!isNaN(marks) && marks >= 0 && marks <= 100) {
                resolve(marks);
            } else {
                console.log('Invalid input. Please enter a valid number between 0 and 100.');
                getValidMarksInput().then(resolve);
            }
        });
    });
}
// Main function to run the program
async function main() {
    const marks = await getValidMarksInput();// Get user's input for marks
    const grade = calculateGrade(marks);// Calculate the grade based on marks
    console.log(`Grade: ${grade}`);//show the calculated grade
    rl.close();// Close the readline
}
// Execute the main function
main();