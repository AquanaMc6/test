document.addEventListener("DOMContentLoaded", function() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Ticket Management
    const ticketList = document.getElementById("ticketList");
    tickets.forEach(ticket => {
        const ticketItem = document.createElement("li");
        ticketItem.textContent = `${ticket.reason} - ${ticket.person} (Dringlichkeit: ${ticket.urgency})`;
        ticketItem.addEventListener("click", () => openChat(ticket));
        ticketList.appendChild(ticketItem);
    });

    function openChat(ticket) {
        document.getElementById("chatContainer").style.display = "flex";
        document.getElementById("ticketID").textContent = ticket.reason;
    }

    // User Management
    const userForm = document.getElementById("createUserForm");
    userForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const role = document.getElementById("role").value;
        const permissions = document.getElementById("permissions").value;
        const timeout = document.getElementById("timeout").value;
        
        users.push({ username, role, permissions, timeout });
        localStorage.setItem("users", JSON.stringify(users));
        
        document.getElementById("userFeedback").textContent = "Benutzer erfolgreich erstellt!";
        userForm.reset();
    });

    // Load existing users
    const userList = document.getElementById("users");
    users.forEach(user => {
        const userItem = document.createElement("li");
        userItem.textContent = `${user.username} - Rolle: ${user.role}`;
        userList.appendChild(userItem);
    });
});
