const items = document.querySelectorAll(".menu-item");
const preview = document.getElementById("preview");
const hoverLine = document.querySelector(".hover-line");

let lastIndex = -1;

const images = {
  web: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  framer: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  brand: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
};

items.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    const key = item.dataset.img;
    
    /* move the line smoothly */
    hoverLine.style.top = `${index * 60}px`;

    /* reset animation classes */
    preview.classList.remove("active", "up", "down");

    /* direction logic */
    if (index > lastIndex) {
      preview.classList.add("up");   // moving down → image slides up
    } else {
      preview.classList.add("down"); // moving up → image slides down
    }

    lastIndex = index;

    setTimeout(() => {
      preview.src = images[key];
      preview.classList.add("active");
    }, 80);
  });
});