const API_BASE = "https://cleaning-survey-api.onrender.com";

document.getElementById("survey-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    room: document.getElementById("room").value,
    staff_name: document.getElementById("staff").value,
    shift: document.getElementById("shift").value,
    date: new Date().toISOString(),
    tasks_completed: {
      floor_cleaned: document.getElementById("floor").checked,
      trash_removed: document.getElementById("trash").checked,
      surfaces_wiped: document.getElementById("surfaces").checked,
      equipment_sanitized: document.getElementById("equipment").checked,
      supplies_restocked: document.getElementById("supplies").checked
    },
    notes: document.getElementById("notes").value
  };

  try {
    const res = await fetch(`${API_BASE}/survey`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      document.getElementById("success").innerText = "Submitted successfully!";
      e.target.reset();
    } else {
      alert("Submission failed");
    }
  } catch (err) {
    alert("Network error");
  }
});
