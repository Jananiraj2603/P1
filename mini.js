const buttons = document.querySelectorAll(".section-btn");
const sections = document.querySelectorAll(".content-section");
const allMenuItems = document.querySelectorAll(".dropdown-item");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {

        // Reset active state
        sections.forEach(sec => sec.classList.remove("active"));
        allMenuItems.forEach(i => i.classList.remove("active"));

        // Activate content
        const sectionId = this.getAttribute("data-section");
        document.getElementById(sectionId).classList.add("active");

        // Highlight active menu item
        this.classList.add("active");

        // Smooth scroll
        window.scrollTo({
            top: document.querySelector(".content-area").offsetTop - 20,
            behavior: "smooth"
        });
    });
});










function goToLink(section) {

    let links = {
        faculty: "https://www.spmvv.ac.in/school-of-sciences/computer-science/faculty/",
        peos: "https://www.spmvv.ac.in/jbframework/uploads/2022/09/PEO-PO-PSO.pdf",
        mentor: "https://www.spmvv.ac.in/mentorlist/Dept_CS_Mentors_list_2023-25_I_Year_&_2022-24_II_Year.pdf",
        magazines: "https://www.spmvv.ac.in/key-magazines/",
        skill: "https://www.instagram.com/accounts/login/?next=%2Fskill_box_mca_spmvv%2F&source=omni_redirect"
    };

    // Redirect in same tab
    window.location.href = links[section];
}
