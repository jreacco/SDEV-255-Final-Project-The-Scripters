document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (!email.value.includes("@")) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("email-error").style.display = "none";
    }

    if (!password.value.trim()) {
        document.getElementById("password-error").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("password-error").style.display = "none";
    }

    if (isValid) {
        // Assuming the email is validated to be a school email domain
        let userType = getUserType(email.value); // Implementing logic for school email domain

        if (userType === 'student') {
            window.location.href = "studentCourses.html"; // Redirect to student dashboard
        } else if (userType === 'teacher') {
            window.location.href = "teacherCourses.html"; // Redirect to teacher dashboard
        } else {
            alert("Invalid user type.");
        }
    }
});

// Function to determine user type (student or teacher)
// Assuming school emails use @catalyst.edu domain
function getUserType(email) {
    // Check if email ends with @catalyst.edu for school-related email
    const schoolDomain = "@catalyst.edu"; // Replace with your domain
    if (email.endsWith(schoolDomain)) {
        // Example: Based on the email prefix or pattern, determine if student or teacher
        if (email.includes("student")) { // connection with database needed authentication- PADLEY
            return "student"; // A sample logic for student
        } else if (email.includes("teacher")) {
            return "teacher"; // A sample logic for teacher
        }
    }
    return "unknown"; // Return "unknown" if user type is unrecognized
}

// Forgot Password functionality (Placeholder)
document.getElementById("forgot-password").addEventListener("click", function (event) {
    event.preventDefault();
    alert("Forgot Password functionality coming soon.");
});