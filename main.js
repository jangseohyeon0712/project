// main.js

const styles = [
  {
    name: "프레피",
    desc: "아이비리그에서 유래된 단정하고 클래식한 스타일입니다.",
    fabrics: ["트위드", "면", "니트"],
    brands: ["Lacoste", "Ralph Lauren"],
    history: [
      { year: "1950s", event: "아이비리그 학생들 사이에서 유행 시작" },
      { year: "1980s", event: "브랜드화되어 대중적으로 확산" },
      { year: "2000s", event: "Y2K 트렌드 속 복고적 요소 재조명" },
      { year: "2020s", event: "Z세대 사이에서 다시 유행" }
    ],
    gallery: [
      "https://via.placeholder.com/300x200?text=Preppy+Look+1",
      "https://via.placeholder.com/300x200?text=Preppy+Look+2"
    ]
  }
];

const selector = document.querySelector("#style-selector .style-cards");
const detailSection = document.getElementById("style-detail");
const backButton = document.getElementById("back-button");

function loadStyles() {
  styles.forEach((style, index) => {
    const card = document.createElement("div");
    card.className = "style-card";
    card.innerHTML = `<h3>${style.name}</h3><p>${style.desc}</p>`;
    card.addEventListener("click", () => showDetail(index));
    selector.appendChild(card);
  });
}

function showDetail(index) {
  const style = styles[index];
  document.getElementById("style-name").textContent = style.name;
  document.getElementById("style-desc").textContent = style.desc;

  const fabricList = document.getElementById("fabric-list");
  fabricList.innerHTML = "";
  style.fabrics.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    fabricList.appendChild(li);
  });

  const brandList = document.getElementById("brand-list");
  brandList.innerHTML = "";
  style.brands.forEach(b => {
    const li = document.createElement("li");
    li.textContent = b;
    brandList.appendChild(li);
  });

  const timeline = document.getElementById("history-timeline");
  timeline.innerHTML = "";
  style.history.forEach(h => {
    const div = document.createElement("div");
    div.innerHTML = `<strong>${h.year}</strong>: ${h.event}`;
    timeline.appendChild(div);
  });

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  style.gallery.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = `${style.name} look`;
    gallery.appendChild(img);
  });

  detailSection.classList.remove("hidden");
  document.getElementById("style-selector").classList.add("hidden");
}

backButton.addEventListener("click", () => {
  detailSection.classList.add("hidden");
  document.getElementById("style-selector").classList.remove("hidden");
});

window.addEventListener("DOMContentLoaded", loadStyles);
