const allReels = document.querySelector(".all-reels");
const reelContainer = document.querySelector(".all-reels .reel");

const reelsData = [
  {
    id: 1,
    channelName: "UrbanVibes",
    channelAvatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    videoLink: "https://www.pexels.com/download/video/34629981/",
    description: "Night city aesthetic vibes.",
    isLiked: true,
    isSubscribed: false,
    likes: 1240,
    dislikes: 32,
    comments: 58,
    tags: ["city", "night", "aesthetic"],
    createdAt: "2025-02-01",
  },
  {
    id: 2,
    channelName: "NatureSphere",
    channelAvatar: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Waterfall in slow motion.",
    isLiked: true,
    isSubscribed: true,
    likes: 9812,
    dislikes: 105,
    comments: 340,
    tags: ["nature", "waterfall", "relax"],
    createdAt: "2025-01-28",
  },
  {
    id: 3,
    channelName: "StreetLife",
    channelAvatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Skateboarding through downtown.",
    isLiked: false,
    isSubscribed: false,
    likes: 742,
    dislikes: 12,
    comments: 29,
    tags: ["skate", "street", "energy"],
    createdAt: "2025-02-10",
  },
  {
    id: 4,
    channelName: "PetWorld",
    channelAvatar:
      "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Golden retriever learning tricks.",
    isLiked: true,
    isSubscribed: false,
    likes: 15600,
    dislikes: 44,
    comments: 512,
    tags: ["dog", "cute", "pets"],
    createdAt: "2025-01-12",
  },
  {
    id: 5,
    channelName: "FoodRush",
    channelAvatar:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Sizzling street food closeup.",
    isLiked: false,
    isSubscribed: true,
    likes: 2890,
    dislikes: 67,
    comments: 134,
    tags: ["food", "street", "tasty"],
    createdAt: "2025-02-14",
  },
  {
    id: 6,
    channelName: "FitnessFuel",
    channelAvatar:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Morning workout motivation.",
    isLiked: false,
    isSubscribed: false,
    likes: 4320,
    dislikes: 50,
    comments: 201,
    tags: ["fitness", "workout", "motivation"],
    createdAt: "2025-01-05",
  },
  {
    id: 7,
    channelName: "TravelShots",
    channelAvatar:
      "https://images.pexels.com/photos/91229/pexels-photo-91229.jpeg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Drone shot over mountains.",
    isLiked: true,
    isSubscribed: true,
    likes: 14320,
    dislikes: 87,
    comments: 690,
    tags: ["travel", "drone", "mountains"],
    createdAt: "2025-02-12",
  },
  {
    id: 8,
    channelName: "DanceCrew",
    channelAvatar:
      "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg",
    videoLink: "https://www.pexels.com/download/video/34767630/",
    description: "Freestyle dance in studios.",
    isLiked: false,
    isSubscribed: false,
    likes: 3750,
    dislikes: 21,
    comments: 110,
    tags: ["dance", "freestyle", "studio"],
    createdAt: "2025-02-08",
  },
  {
    id: 9,
    channelName: "TechBeam",
    channelAvatar:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
    videoLink: "https://videos.pexels.com/video-files/3195380/3195380-hd.mp4",
    description: "Mechanical keyboard satisfying typing.",
    isLiked: true,
    isSubscribed: false,
    likes: 8900,
    dislikes: 60,
    comments: 310,
    tags: ["tech", "keyboard", "asmr"],
    createdAt: "2025-01-22",
  },
  {
    id: 10,
    channelName: "ArtPulse",
    channelAvatar:
      "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg",
    videoLink: "https://videos.pexels.com/video-files/2076751/2076751-hd.mp4",
    description: "Time-lapse digital painting.",
    isLiked: false,
    isSubscribed: true,
    likes: 1540,
    dislikes: 19,
    comments: 82,
    tags: ["art", "digital", "timelapse"],
    createdAt: "2025-01-14",
  },
];

function addData() {
  let uploadReels = ``;

  reelsData.forEach((reel, index) => {
    uploadReels += `<div data-index=${index} class="reel">
            <video loop autoplay muted
              src="./vid${reel.id}.mp4">
            </video>

            <div class="reel-details">
              <div class="like">
              ${
                reel.isLiked
                  ? `<i class="ri-thumb-up-fill"></i>`
                  : `<i class="ri-thumb-up-line"></i>`
              }
                <div class="count likes-count">${reel.likes}</div>
              </div>

              <div class="dislike">
                <i class="ri-thumb-down-line"></i>
                <div class="count likes-count">Dislike</div>
              </div>

              <div class="comments">
                <i class="ri-message-2-line"></i>
                <div class="count likes-count">${reel.comments}</div>
              </div>

              <div class="share">
                <i class="ri-share-forward-line"></i>
                <p style="font-weight: bolder; color: white;">Share</p>
              </div>

              <div class="remix">
                <i class="ri-youtube-fill"></i>
                <div style="font-weight: bolder; color: white;">Remix</div>
              </div>
            </div>
            
            <div class="reel-info">
              
              <div class="channel-info">
              
              <div class = "channel-logo">
              <img src="${reel.channelAvatar}" alt="">
              </div>
                <p>${reel.channelName}</p>
                <button>${
                  reel.isSubscribed ? "Subscribed" : "Subscribe"
                }</button>
              </div>

              <p>${reel.description}</p>
            </div>
          </div>`;
  });

  allReels.innerHTML = uploadReels;
}

addData();

allReels.addEventListener("click", function (details) {
  const likeBtn = details.target.closest(".like")
  if(!likeBtn) return;

  const reelElement = likeBtn.closest(".reel");
  const reelIndex = reelElement.dataset.index
  console.log(reelIndex)

  if (!reelsData[reelIndex].isLiked) {
    reelsData[reelIndex].likes++;
    reelsData[reelIndex].isLiked = true
  } else {
    reelsData[reelIndex].likes--;
    reelsData[reelIndex].isLiked = false
  }
  addData();
});
