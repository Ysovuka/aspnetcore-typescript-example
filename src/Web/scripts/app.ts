// Person is now string
function Welcome(person: string) {
    return "Hello, " + person;
}

function ClickMeButton() {
    var user = "Joshua Thompson";
    document.getElementById("divMsg").innerHTML = Welcome(user);
}