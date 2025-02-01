// console.log("hello js");

// fetch load and  show api

const loadCategories = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))

}


const loadVideos = () => {
    // fetch data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error => console.log(error))

}

// const cardDemo =  {
//       "category_id": "1001",
//       "video_id": "aaaa",
//       "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//       "title": "Shape of You",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//         }
//       ],
//       "others": {
//         "views": "100K",
//         "posted_date": "16278"
//       },
//       "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    videos.forEach((video) => {
        // console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact"
        card.innerHTML = `
         <figure class="h-[200px] rounded-lg">
            <img class="h-full w-full object-cover" src=${video.thumbnail} alt="video" />
        </figure>
        <div class="px-0 py-2 flex gap-3">
            <div>
                <img class="w-10 h-10 object-cover rounded-full" src=${video.authors[0].profile_picture} />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-4">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    <img class="w-5 h-5 object-cover" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />
                </div>
                <p></p>
            </div>
        </div>
        `
        // add html
        videoContainer.appendChild(card);


    });

    // console.log(videos);
}

const displayCategories = (catData) => {
    const btnContainer = document.getElementById('btn-container');
    // add data html
    catData.forEach((item) => {
        // create btn
        const btn = document.createElement("button");
        btn.classList = "btn";
        btn.innerText = item.category;

        // add
        btnContainer.appendChild(btn)
    });

};

loadCategories();
loadVideos();