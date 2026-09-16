async function loadUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const user = await response.json();

        console.log(user);
        console.log(user.name);
        console.log(user.email);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

loadUser();


const jsonText = '{"name":"Mari","score":15}';

const player = JSON.parse(jsonText);

console.log(player.name);
console.log(player.score);


const userObject = {
    name: "Mari",
    age: 25
};

const userJson = JSON.stringify(userObject);

console.log(userObject);
console.log(userJson);