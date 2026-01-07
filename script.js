function selectRoom(roomName, price) {
    document.getElementById("room").value = roomName;
    document.getElementById("price").value = price;
    window.location.href = "#booking";
}

function bookRoom(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let room = document.getElementById("room").value;

    document.getElementById("message").innerText =
        "Thank you " + name + "! Your " + room + " has been booked successfully.";
}
