function copyEmail(email) {
    navigator.clipboard.writeText(email);

    try {
        navigator.clipboard.writeText(email);
        alert("Email copied to clipbaord!")
    } catch (error) {
        alert("Failed to copy text to clipboard: " + error);
    }
}