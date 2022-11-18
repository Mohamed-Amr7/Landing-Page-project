// Variable for number of sections
let sectionNum = 0;

// Function that creates a section 
const createSection = () =>
{
    sectionNum++;
    const sectionContent =
    `<section id="section${sectionNum}" data-nav-id="${sectionNum}">
        <div class="landing__container">
            <h2>Section ${sectionNum}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
            <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        </div>
    </section>`;

    //add the section at the end of the main tag
    document.querySelector('main').insertAdjacentHTML('beforeend', sectionContent);
}

// Build the navigation bar
const navBar = document.getElementById("navbar__list");

// Function that creates navigation bar sections
const createNavBarSection = () =>
{
    navBar.innerHTML = "";
    document.querySelectorAll("section").forEach((section) =>
    {
    const navBarList = `<li><a href="#${section.id}" data-nav-id="${section.id}" class="menu__link">Section ${section.dataset.navId}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", navBarList);
    });
}

// Add class 'active' to section when near top of viewport and class 'active-sec' to the active section in the navigaton bar
document.addEventListener ("scroll" , () =>
    {

	document.querySelectorAll("section").forEach((active) =>
    {
        let activeSec = navBar.querySelector(`[data-nav-id=${active.id}]`);

        if(active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150)
        {
        active.classList.add("active");
        activeSec.classList.add("active-sec");
        }

        else
        {
            active.classList.remove("active");
            activeSec.classList.remove("active-sec");
        }
    });
})


//create 3 default sections and the navigation bar
for(let i = 1 ; i <= 3 ; i++) createSection();
createNavBarSection();

const header = document.querySelector(".page__header");
//create more sections by clicking on 'Add section' button
document.getElementById("addButton").addEventListener("click", () =>
{
    createSection();
    createNavBarSection();
});

//hide the navigation bar after 3 seconds and appear again after clicling on any button or scrolling
let isScrolling;
document.addEventListener("scroll" || "click",() => 
{
    header.style.display = "block";
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => 
    {
        header.style.display = "none";
    } , 3000);
});

