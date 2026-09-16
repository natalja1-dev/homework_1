console.log("Start");

setTimeout(() => {
    console.log("Finished later");
}, 1000);

console.log("End");


const messagePromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Andmed käes");
    } else {
        reject("Tekkis viga");
    }
});


async function showMessage() {
    const result = await messagePromise;

    console.log(result);
}

showMessage();



async function getUsername() {
    return "Mari";
}

console.log(getUsername());


getUsername().then(username => {
    console.log(username);
});


const scorePromise = Promise.resolve(15);

async function showScore() {
    const score = await scorePromise;

    console.log(`Punktid: ${score}`);
}

showScore();


const failedPromise = Promise.reject("Andmeid ei leitud");

async function loadData() {
    try {
        const result = await failedPromise;
        console.log(result);
    } catch (error) {
        console.log("Viga:", error);
    }
}

loadData();