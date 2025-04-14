let styles = [];

async function loadData() {
  try {
    const res = await fetch("data.json");
    styles = await res.json();
    loadStyles();
  } catch (e) {
    console.error("데이터 불러오기 오류:", e);
  }
}

const selector = document.querySelector("#style-selector .style-cards");
const detailSection = document.getElementById("style-detail");
const backButton = document.getElementById("back-button");

function loadStyles() {
  styles.forEach((style, index) => {
    const card = document.createElement("div");
    card.className = "style-card";
    card.innerHTML = `<h3>${style.name}</h3><p>${style.desc}</p>`;

    // 🎨 스타일 이름에 따라 애니메이션 클래스 부여
    switch (style.name) {
      case "프레피":
        card.classList.add("anim-float-up");
        break;
      case "테크웨어":
        card.classList.add("anim-fade-dark");
        break;
      case "키치":
        card.classList.add("anim-blink-color");
        break;
      case "펑크":
        card.classList.add("anim-bounce");
        break;
      case "젠더리스":
        card.classList.add("anim-fade-smooth");
        break;
    }

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

window.addEventListener("DOMContentLoaded", loadData);
