const API_BASE = "https://cleaning-survey-backend.onrender.com";

function selectShift(value) {
  document.getElementById("shift").value = value;

  document.querySelectorAll(".shift-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.textContent === value) btn.classList.add("active");
  });
}

async function submitSurvey() {
  const shift = document.getElementById("shift").value;
  if (!shift) {
    alert("Please select a shift");
    return;
  }

  const payload = {
    room: document.getElementById("room").value.trim(),
    staff_name: document.getElementById("staff").value.trim(),
    shift,
    tasks_completed: {
      floor_cleaned: document.getElementById("floor_cleaned").checked,
      trash_removed: document.getElementById("trash_removed").checked,
      surfaces_wiped: document.getElementById("surfaces_wiped").checked,
      equipment_sanitized: document.getElementById("equipment_sanitized").checked,
      supplies_restocked: document.getElementById("supplies_restocked").checked,
      sweep: document.getElementById("sweep").checked,
      linen_change: document.getElementById("linen_change").checked,
      vacuum: document.getElementById("vacuum").checked
    },
    notes: document.getElementById("notes").value.trim()
  };

  try {
    const res = await fetch(`${API_BASE}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      document.getElementById("form-card").style.display = "none";
      document.getElementById("success-screen").style.display = "block";
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    alert("Network error. Please check your connection.");
  }
}
