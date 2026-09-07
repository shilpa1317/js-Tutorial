let currentPage = 1;
const numberOfProjects = 10;
// This will store all projects received from API
let allProjects = [];

function renderProjects(projects) {
  //pagination calculation
  const totalProjects = projects.length;

  const totalPages = Math.ceil(totalProjects / numberOfProjects);

  const startIndex = (currentPage - 1) * numberOfProjects;

  const endIndex = startIndex + numberOfProjects;

  const projectsOnPage = projects.slice(startIndex, endIndex);
  console.log(startIndex, endIndex);

  // render projects on page
  document.querySelector("#projectList").innerHTML = projectsOnPage
    .map(
      (project, i) => `
                             <tr>
                        <th scope="row">${startIndex + i + 1}</th>
                        <td>${project.ProjectName}
                            <br>
                            <i>${project.Details}</i>
                        </td>
                        <td>${project.Department}</td>
                        <td>${project.priority}</td>
                        <td>${project.startDate}</td>
                        <td>${project.EndDate}</td>
                        <td>${project.status}</td>
                    </tr>
    `,
    )
    .join("");

  // pagination on webpage
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  document.querySelector("#pagination1").innerHTML = ` 
                            <li class="page-item ${currentPage === 1 ? "disabled" : ""}"> 
                            <a class="page-link" href="#" data-page="
                            ${currentPage - 1}
                            "> Previous </a>
                            </li> 
                            ${pages
                              .map(
                                (page) => ` 
                                <li class="page-item ${page === currentPage ? "active" : ""}"> 
                                <a class="page-link" href="#" data-page="${page}"> 
                                ${page} 
                                </a>
                            </li> `,
                              )
                              .join("")}
                            <li class="page-item ${currentPage === totalPages ? "disabled" : ""}"> 
                            <a class="page-link" href="#" data-page="${currentPage + 1}"> 
                            Next 
                            </a> 
                            </li> `;

  // ----------------------------- // PAGE CLICK // -----------------------------
  document.querySelector("#pagination1").onclick = function (e) {
    e.preventDefault();
    const page = Number(e.target.dataset.page);
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      currentPage = page;
      renderProjects(projects);
    }
  };
}
function getDepartments(projects) {
  const departments = [];
  for (let i = 0; i < projects.length; i++) {
    const dept = projects[i].Department;
    if (!departments.includes(dept)) {
      departments.push(dept);
    }
  }
  return departments;
}
function renderDepartments() {
  const departmentEl = document.getElementById("departmentFilter");
  const departments = getDepartments(allProjects);

  departmentEl.innerHTML = `<option value="">Department</option>`;

  for (let i = 0; i < departments.length; i++) {
    departmentEl.innerHTML += `<option value="${departments[i]}">${departments[i]}</option>`;
  }
}
async function fetchData() {
  await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
    .then((res) => res.json())
    .then((data) => {
      allProjects = data;
       renderDepartments(); 

      currentPage = 1;
      renderProjects(data);
    })
    .catch((error) => console.log(error));
}
document.querySelector("#statusFilter").addEventListener("change", function () {

  const status = this.value;

  const filteredProjects = allProjects.filter(project =>
    status === "" || project.status === status
  );

  currentPage = 1;
  renderProjects(filteredProjects);
});

window.addEventListener("load", () => {
  fetchData();

  const searchEl = document.getElementById("searchProject");
  const priorityEl = document.getElementById("priorityFilter");
  const departmentEl = document.getElementById("departmentFilter");

  searchEl.addEventListener("input", applyFilters);
  priorityEl.addEventListener("change", applyFilters);
  departmentEl.addEventListener("change", applyFilters);

  function applyFilters() {
    const search = searchEl.value.toLowerCase();
    const priority = priorityEl.value;
    const department = departmentEl.value;

    const filtered = allProjects.filter(project =>
      project.ProjectName.toLowerCase().includes(search) &&
      (priority === "" || project.priority === priority) &&
      (department === "" || project.Department === department)
    );

    currentPage = 1;
    renderProjects(filtered);
  }
});
