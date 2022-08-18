
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const user = process.env.user;
async function main() {
  while(true) {
    console.log(`${user} rocks!`);
    await sleep(5000);
  }
}

main();
