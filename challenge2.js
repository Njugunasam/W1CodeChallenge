// Import the readline
const readline = require('readline');
// Create a readline 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;// Speed limit in km/h
    const excessSpeed = speed - speedLimit;//find excess speed
    const demeritPoints = Math.floor(excessSpeed / 5);// Calculate demeritpoints
    return demeritPoints;
}
// Function to get valid speed 
function getValidSpeedInput() {
    return new Promise((resolve) => {
        rl.question('Enter car speed (in km/h): ', (speedInput) => {
            const speed = parseInt(speedInput);
            if (!isNaN(speed) && speed >= 0) {
                resolve(speed);
            } else {
                console.log('Invalid input. Please enter a valid non-negative number.');
                getValidSpeedInput().then(resolve);
            }
        });
    });
}
// Main function
async function main() {
    const speed = await getValidSpeedInput();
    if (speed < 70) {
        console.log('Ok');
    } else {
        const demeritPoints = calculateDemeritPoints(speed);// Calculate demerit points
        console.log(`Points: ${demeritPoints}`);// show calculated demerit points
        if (demeritPoints > 12) {
            console.log('License suspended');//test if the license should be suspended
        }
    }
    rl.close();// Close the readline
}

main();