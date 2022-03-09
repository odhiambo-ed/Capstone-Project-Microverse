window.addEventListener('load', function(){
    const contributors = 
        [
            {
                image: './images/edward.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo',
                title: 'FullStack Web Developer/ Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a quisquam nobis sunt sit.',
            },

            {
                image: './images/Edward2.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo',
                title: 'FullStack Web Developer/ Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a quisquam nobis sunt sit.',
            },

            {
                image: './images/Edward2.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo',
                title: 'FullStack Web Developer/ Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a quisquam nobis sunt sit.',
            },

            {
                image: './images/Edward2.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo',
                title: 'FullStack Web Developer/ Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a quisquam nobis sunt sit.',
            },

            {
                image: './images/Edward2.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo',
                title: 'FullStack Web Developer/ Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a quisquam nobis sunt sit.',
            },

            {
                image: './images/Edward2.jpeg',
                imageAlt: 'Edward\'s Image',
                name: 'Edward Odhiambo',
                title: 'FullStack Web Developer/ Lorem ipsum dolor sit.',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a quisquam nobis sunt sit.',
            },

           
        ];


    function populateContributors(contributors, size){
        let parentDiv = document.querySelector('.expert-list');
        parentDiv.innerHTML = "";

        for(let i = 0; i < contributors.length; i++){
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

            if(size != -1 && i == size -1){
                break;
            }
        }
    }

    if(document.querySelector('.expert-list') != undefined){
        function showMoreButton(){
            let width = window.innerWidth;

            if(width < 768){
                populateContributors(contributors, 3);
            }else{
                populateContributors(contributors, -1);
            }
        }

        window.addEventListener('resize', function(){
            showMoreButton();
        });

        document.querySelector('#show-more-btn').addEventListener('click', function(e){
            if(e.target.getAttribute('data-clicked') == undefined || e.target.getAttribute('data-clicked') == 0){
                e.target.innerHTML = 'LESS <i class="fa-solid fa-chevron-up icon-red"></i>';
                e.target.setAttribute('data-clicked', 1);
                populateContributors(contributors, -1);
            }else{
                e.target.innerHTML = 'MORE <i class="fa-solid fa-chevron-down icon-red"></i>';
                e.target.setAttribute('data-clicked', 0);
                populateContributors(contributors, 3);
            }
        });
        showMoreButton();
    }

    document.querySelector('.mobile-close').addEventListener('click', function(){
        document.querySelector('#mobile-nav').style.display = 'none';
        document.querySelector('.hamburger').style.display = 'block';
    });

    document.querySelector('.hamburger').addEventListener('click', function(){
        document.querySelector('#mobile-nav').style.display = 'block';
        document.querySelector('.hamburger').style.display = 'none';
    });
});