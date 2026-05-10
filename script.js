document.getElementById("survey-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    // Collect form values
    const data = {
        room: document.getElementById("room").value.trim(),
        staff_name: document.getElementById("staff").value.trim(),
        shift: document.getElementById("shift").value,

        tasks_completed: {
            floor_cleaned: document.getElementById("floor").checked,
            trash_removed: document.getElementById("trash").checked,
            surfaces_wiped: document.getElementById("surfaces").checked,
            equipment_sanitized: document.getElementById("equipment").checked,
            supplies_restocked: document.getElementById("supplies").checked,

            // ⭐ NEW TASKS
            sweep: document.getElementById("sweep").checked,
            linen_change: document.getElementById("linen").checked,
            vacuum: document.getElementById("vacuum").checked
        },

        notes: document.getElementById("notes").value.trim()
    };

    try {
        // ⭐ Replace with your actual backend URL
        const response = await fetch("https://cleaning-survey-backend.onrender.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            document.getElementById("success").textContent = "Survey submitted successfully!";
            document.getElementById("survey-form").reset();
        } else {
            document.getElementById("success").textContent = "Error submitting survey.";
        }

    } catch (error) {
        document.getElementById("success").textContent = "Network error. Try again.";
    }
});
