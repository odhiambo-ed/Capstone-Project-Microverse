window.addEventListener('load', function () {
    const contributors =
        [
            {
                image: './images/virag.jpg',
                imageAlt: 'Virag\'s Image',
                name: 'Virag Kormoczy - (Hungary)',
                title: 'FullStack Web Developer/ Javascript, HTML, CSS and Ruby',
                description: 'Virag is a student at Microverse and and has vast experience in programming',
            },

            {
                image: './images/Nemwel.jpg',
                imageAlt: 'Nemwel\'s Image',
                name: 'Nemwel Boniface - (Kenya)',
                title: 'FullStack Web Developer/ Javascript, HTML, CSS and Ruby',
                description: 'Nemwel is a student at Microverse and and has vast experience in programming',
            },

            {
                image: './images/Edward2.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo - (Kenya)',
                title: 'Fullstack Web Developer/ Cyber Security Expert',
                description: 'Edward is the founder of iDreality, a master graduate, and a student at Microverse',
            },

            {
                image: './images/dennis.jpg',
                imageAlt: 'Dennis\'s Image',
                name: 'Dennis Muturia - (Sweeden)',
                title: 'Senior Software Engineer / DevOps(Docker and Kubernetes)',
                description: 'Dennis is a Senior Software Engineer and a software security expertat Kubernetes',
            },

            {
                image: './images/janet.jpeg',
                imageAlt: 'Janet\'s Image',
                name: 'Janet Mugure - (Kenya)',
                title: 'Geospatial Engineer/ Carl Inc.',
                description: 'Janet is a Senior Geospatial Engineer at Carl Inc.',
            },

            {
                image: './images/shubh.png',
                imageAlt: 'Shubh\'s Image',
                name: 'Shubh Das - (India)',
                title: 'FullStack Web Developer/ Javascript, HTML, CSS and Ruby.',
                description: 'Shubh is a student at Microverse and and has vast experience in programming',
            },


        ];


    function populateContributors(contributors, size) {
        let parentDiv = document.querySelector('.expert-list');
        parentDiv.innerHTML = "";

        for (let i = 0; i < contributors.length; i++) {
            let expertListItems = document.createElement('div');
            expertListItems.className = 'expert-list-items';

            let person = document.createElement('div');
            person.className = 'person';

            let frontImage = document.createElement('div');
            frontImage.className = 'front-img';

            let image = document.createElement('img');
            image.src = contributors[i].image;
            image.alt = contributors[i].imageAlt;

            frontImage.appendChild(image);
            person.appendChild(frontImage);

            let profile = document.createElement('div');
            profile.className = 'profile';

            let h2 = document.createElement('h2');
            h2.textContent = contributors[i].name;

            let h3 = document.createElement('h3');
            h3.textContent = contributors[i].title;

            let p = document.createElement('p');
            p.textContent = contributors[i].description;

            profile.appendChild(h2);
            profile.appendChild(h3);
            profile.appendChild(p);

            expertListItems.appendChild(person);
            expertListItems.appendChild(profile);

            parentDiv.appendChild(expertListItems);

            if (size != -1 && i == size - 1) {
                break;
            }
        }
    }

    if (document.querySelector('.expert-list') != undefined) {
        function showMoreButton() {
            let width = window.innerWidth;

            if (width < 768) {
                populateContributors(contributors, 3);
            } else {
                populateContributors(contributors, -1);
            }
        }

        window.addEventListener('resize', function () {
            showMoreButton();
        });

        document.querySelector('#show-more-btn').addEventListener('click', function (e) {
            if (e.target.getAttribute('data-clicked') == undefined || e.target.getAttribute('data-clicked') == 0) {
                e.target.innerHTML = 'LESS <i class="fa-solid fa-chevron-up icon-red"></i>';
                e.target.setAttribute('data-clicked', 1);
                populateContributors(contributors, -1);
            } else {
                e.target.innerHTML = 'MORE <i class="fa-solid fa-chevron-down icon-red"></i>';
                e.target.setAttribute('data-clicked', 0);
                populateContributors(contributors, 3);
            }
        });
        showMoreButton();
    }

    document.querySelector('.mobile-close').addEventListener('click', function () {
        document.querySelector('#mobile-nav').style.display = 'none';
        document.querySelector('.hamburger').style.display = 'block';
    });

    document.querySelector('.hamburger').addEventListener('click', function () {
        document.querySelector('#mobile-nav').style.display = 'block';
        document.querySelector('.hamburger').style.display = 'none';
    });
});