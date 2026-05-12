document.getElementById("cleaningForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
        room: document.getElementById("room").value.trim(),
        staff_name: document.getElementById("staffName").value.trim(),
        shift: document.querySelector("input[name='shift']:checked")?.value || "",
        tasks_completed: {
            floor_cleaned: document.getElementById("floorCleaned").checked,
            trash_removed: document.getElementById("trashRemoved").checked,
            surfaces_wiped: document.getElementById("surfacesWiped").checked,
            equipment_sanitized: document.getElementById("equipmentSanitized").checked,
            supplies_restocked: document.getElementById("suppliesRestocked").checked,
            sweep: document.getElementById("sweep").checked,
            linen_change: document.getElementById("linenChange").checked,
            vacuum: document.getElementById("vacuum").checked
        },
        notes: document.getElementById("notes").value.trim()
    };

    try {
        const response = await fetch("https://cleaning-survey-backend.onrender.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Submission successful!");
            document.getElementById("cleaningForm").reset();
        } else {
            alert("Submission failed. Please try again.");
        }
    } catch (error) {
        alert("Network error. Please check your connection.");
    }
});
