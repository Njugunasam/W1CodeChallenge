//Import the readline
const readline = require('readline');
// Function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    // Constants for  deductions
    const taxRate = 0.15;  // 100 * 0.15=15%
    const nhifDeduction = 2000;  // fixed nhif deduction
    const nssfDeductionRate = 0.05;  // 100 * 0.05=5%

    // compute gross salary
    const grossSalary = basicSalary + benefits;

    // compute tax
    const tax = grossSalary * taxRate;

    // compute NSSF deduction
    const nssfDeduction = grossSalary * nssfDeductionRate;

    // compute net salary
    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    return netSalary;
}
// Create a readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getValidSalaryInput(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (input) => {
            const inputNumber = parseFloat(input);
            if (!isNaN(inputNumber)) {
                resolve(inputNumber);
            } else {
                console.log('Invalid input. Please enter a valid number.');
                getValidSalaryInput(prompt).then(resolve);
            }
        });
    });
}

async function main() {
    const basicSalary = await getValidSalaryInput('Enter basic salary: ');
    const benefits = await getValidSalaryInput('Enter benefits: ');
 // Calculate and display the net salary
    const netSalary = calculateNetSalary(basicSalary, benefits);

    console.log(`Gross Salary: ${basicSalary + benefits}`);
    console.log(`Net Salary: ${netSalary}`);
//close the readline
    rl.close();
}

main();