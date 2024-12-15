// Form elements
const resumeForm = document.getElementById("resumeForm");
const resumePreview = document.getElementById("resumePreview");
const generateResume = document.getElementById("generateResume");

// Event Listener for Resume Generation
generateResume.addEventListener("click", () => {
    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const skills = document.getElementById("skills").value.split(",");
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    // Generate Resume Preview
    resumePreview.innerHTML = `
        <h3>${name}</h3>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>Phone: ${phone}</p>
        <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <p>GitHub: <a href="${github}" target="_blank">${github}</a></p>
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
    `;
});
