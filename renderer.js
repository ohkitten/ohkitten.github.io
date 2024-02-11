import { robaczkoweShoty } from "./data.js";

console.log("renderer");

export function renderVideoCard(video) {
    const container = document.getElementById('container');

  for (let i = 0; i < robaczkoweShoty.length; i++) {
    console.log(robaczkoweShoty[i]);
    container.innerHTML += getVideo(robaczkoweShoty[i]);
  }
}

export function getVideo(shot) {
    return `
    <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
    <div class="bg-white rounded shadow-sm"><iframe width="560" height="315" src="${shot.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div class="p-4">
        <h5> <a href="#" class="text-dark">${shot.title}</a></h5>
        <p class="small text-muted mb-0">${shot.description}</p>
        <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
        </div>
      </div>
    </div>
  </div>
    `
}
