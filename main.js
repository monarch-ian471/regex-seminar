document.getElementById("demoForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const custom = document.getElementById("custom").value;
  const resultsBox = document.getElementById("results");

  let results = "";

  // Phone validation
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  try {
      if (!phoneRegex.test(phone)) {
          throw new Error("Invalid phone format. Use XXX-XXX-XXXX.");
      }
      results += "Phone: Valid<br>";
  } catch (error) {
      results += `Phone: ${error.message}<br>`;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  try {
      if (!emailRegex.test(email)) {
          throw new Error("Invalid email format. Use name@domain.com.");
      }
      results += "Email: Valid<br>";
  } catch (error) {
      results += `Email: ${error.message}<br>`;
  }

  // Date validation
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  try {
      if (!dateRegex.test(custom)) {
          throw new Error("Invalid date format. Use MM/DD/YYYY.");
      }
      const [month, day, year] = custom.split("/").map(Number);
      if (month < 1 || month > 12 || day < 1 || day > 31) {
          throw new Error("Date values out of range.");
      }
      results += "Date: Valid<br>";
  } catch (error) {
      results += `Date: ${error.message}<br>`;
  }

  resultsBox.innerHTML = results || "No valid inputs provided.";
});