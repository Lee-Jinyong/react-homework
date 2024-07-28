const figureData = [
  {
    src: "./src/assets/Architecture01.png",
    alt: "삼각형 구조물",
    caption: "History of Architecture",
  },
  {
    src: "./src/assets/Architecture02.png",
    alt: "유리로 이뤄진 빌딩",
    caption: "Graphics",
  },
  {
    src: "./src/assets/Architecture03.png",
    alt: "납작한 박스를 쌓아둔 듯한 건축물",
    caption: "Building design",
  },
  {
    src: "./src/assets/Architecture04.png",
    alt: "왼쪽으로 낮아지는 천장을 가진 실내",
    caption: "Climatology",
  },
];

function renderList() {
  const listWrapper = document.querySelector(".list-wrapper");

  for (let item of figureData) {
    const listTemplate = `
      <li>
        <figure>
          <img
            src="${item.src}"
            alt="${item.alt}"
          />
          <figcaption>${item.caption}</figcaption>
        </figure>
      </li>
    `;

    listWrapper.insertAdjacentHTML("beforeend", listTemplate);
  }
}

renderList();
