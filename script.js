function submitBid(user) {
    const inputId = user === 'User 1' ? 'user1-bid' : 'user2-bid';
    const bidInput = document.getElementById(inputId);
    const bidValue = parseFloat(bidInput.value);

    if (isNaN(bidValue) || bidValue <= 0) {
        alert("Please enter a valid bid amount.");
        return;
    }

    localStorage.setItem(user, bidValue);
    displayHighestBid();
}

function displayHighestBid() {
    const bid1 = parseFloat(localStorage.getItem('User 1')) || 0;
    const bid2 = parseFloat(localStorage.getItem('User 2')) || 0;

    let highest = "None";
    if (bid1 > bid2) {
        highest = `User 1 with $${bid1}`;
    } else if (bid2 > bid1) {
        highest = `User 2 with $${bid2}`;
    } else if (bid1 === bid2 && bid1 !== 0) {
        highest = `Tie at $${bid1}`;
    }

    document.getElementById("highest-bidder").textContent = `Highest Bidder: ${highest}`;
}

function resetBids() {
    localStorage.removeItem("User 1");
    localStorage.removeItem("User 2");

    document.getElementById("user1-bid").value = "";
    document.getElementById("user2-bid").value = "";
    displayHighestBid();
}

window.onload = displayHighestBid;