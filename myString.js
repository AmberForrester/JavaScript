let heading = "Course Names";

let myListHeading = `List of ${heading}`;

let listCourses = ["Project Management", "Introduction to FSD", "Introduction to Frontend", "Advanced Frontend", "MERN Stack", "MEAN Stack", "Python & Flask", "Django Framework", "Career Strategies", "Web Portfolio", "Project Management", "Introduction to FSD", "Introduction to Frontend", "Advanced Frontend", "MERN Stack", "MEAN Stack", "Python & Flask", "Django Framework", "Career Strategies", "Web Portfolio", "Project Management", "Introduction to FSD", "Introduction to Frontend", "Advanced Frontend", "MERN Stack", "MEAN Stack", "Python & Flask", "Django Framework", "Career Strategies", "Web Portfolio", "Project Management", "Introduction to FSD", "Introduction to Frontend", "Advanced Frontend", "MERN Stack", "MEAN Stack", "Python & Flask", "Django Framework", "Career Strategies", "Web Portfolio"];

let html = `<h2>${myListHeading}</h2> <ul>`;

for (const x in listCourses) {
    html += `<li>${listCourses[x]}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;






