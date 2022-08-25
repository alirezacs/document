
class CourseSlider{
    constructor() {
        this.slides = document.querySelectorAll('.course-wrapper');
        this.currentIndex = 0;
        
        /* Seting Course List item In DropDown */
        this.setCourseListInDropDown();
        /* Seting Course List item In DropDown */

    }

    /* Move To Prev Slide */
    movePrev() {
        let courseContainer = document.getElementById('container');

        if (this.currentIndex === 0) {
            return '';
        } else {
            this.currentIndex--;
            courseContainer.style.top = `-${(this.currentIndex) * 100}%`;
        }
    }
    /* Move To Prev Slide */


    /* Move To Next Slide */
    moveNext() {
        let courseContainer = document.getElementById('container');

        
        if (this.currentIndex === this.slides.length - 1) {
            return '';
        } else {
            courseContainer.style.top = `-${(this.currentIndex + 1) * 100}%`;
            this.currentIndex++;
            console.log(this.currentIndex);
        }

        
        
    }
    /* Move To Next Slide */



    /* Seting Course List In Course List Container(Time Line DropDown) */
    setCourseListInDropDown() {
        /* Get Course List DropDown */
        let CourseListContainer = document.getElementById('main-pageination-dropdown-list');
        /* Get Course List DropDown */

        /* Iterate On Slides And Create Li And Place In The Course List DropDow */
        this.slides.forEach((slide, index) => {
            /* Create Li Tag */
            let courseLi = document.createElement('li');
            /* Create Li Tag */

            /* Create Button In The Li Tag */
            let courseButton = document.createElement('button');
            courseButton.textContent = slide.title;
            courseButton.setAttribute('id', index);
            /* Create Button In The Li Tag */

            /* Append Button To Li Tag */
            courseLi.append(courseButton);
            /* Append Button To Li Tag */

            /* Append Li To Course List DropDown */
            CourseListContainer.appendChild(courseLi);
            /* Append Li To Course List DropDown */

        });
        /* Iterate On Slides And Create Li And Place In The Course List DropDow */

    }
    /* Seting Course List In Course List Container(Time Line DropDown) */


    /* Change Slide From Course List DropDown */
    changeSlide(slide) {
        let targetSlide = Number(slide);
        let courseContainer = document.getElementById('container');

        courseContainer.style.top = `-${targetSlide * 100}%`;
        this.currentIndex = targetSlide;
        console.log(this.currentIndex);
    }
    /* Change Slide From Course List DropDown */

}

/* Create a Object of Course Slide Class */
let obj = new CourseSlider();
/* Create a Object of Course Slide Class */



/* Get Slide Buttons */
let PrevBtn = document.getElementById('main-slide-buttons-prev'),
    NextBtn = document.getElementById('main-slide-buttons-next');
/* Get Slide Buttons */


/* Prev Slide Event */
PrevBtn.addEventListener('click', () => {
    obj.movePrev();
});
/* Prev Slide Event */

/* Next Slide Event */
NextBtn.addEventListener('click', () => {
    obj.moveNext();
});
/* Next Slide Event */


/* Course List Item Event */
let courseListItem = document.getElementById('main-pageination-dropdown-list').children;
for (let i = 0; i < courseListItem.length; i++){
    courseListItem[i].addEventListener('click', (e) => {
        obj.changeSlide(e.target.id);
    });
}
/* Course List Item Event */


/* Show Course List DropDown */
let pageinationButton = document.getElementById('main-pageination-btn');
pageinationButton.addEventListener('click', () => {
    let pageinationContainer = document.getElementById('main-pageination-dropdown');
    if (pageinationContainer.style.display === 'block') {
        pageinationContainer.style.display = 'none';
    } else {
        pageinationContainer.style.display = 'block';
    }
});

/* Show Course List DropDown */

/* Course Content Code ==> Copy Event */
let copyButtons = document.querySelectorAll('.content-code-copy-btn');
copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
        navigator.clipboard.writeText(button.parentElement.parentElement.innerText);
        button.innerText = 'Text Copied !';
    });
});
/* Course Content Code ==> Copy Event */