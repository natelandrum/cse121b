// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        {sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    changeEnrollment: function(sectionNum, target)
    {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum == sectionNum)

        if (sectionIndex >= 0)
        {
            if (target.textContent === "Enroll Student")
            {
                this.sections[sectionIndex].enrolled++;
            }
            else
            {
                this.sections[sectionIndex].enrolled--;
            }
        }
        renderSections(this.sections)
    }
}

function setCourse(course)
{
    document.getElementById("courseName").innerText = course.name;
    document.getElementById("courseCode").innerText = course.code;
}

function renderSections(sections)
{
    const sectionsHTML = sections.map(section => 
        `
        <tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>
        `
    );
    document.getElementById("sections").innerHTML = sectionsHTML.join("");
}



setCourse(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", (e) => aCourse.changeEnrollment(document.querySelector("#sectionNumber").value, e.target));
document.querySelector("#dropStudent").addEventListener("click", (e) => aCourse.changeEnrollment(document.querySelector("#sectionNumber").value, e.target));
