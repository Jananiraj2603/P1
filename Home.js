// Show scroll button
window.onscroll = function () {
    let btn = document.getElementById("scrollTop");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// Infinite smooth scrolling function
function startInfiniteScroll(listId) {
    const list = document.getElementById(listId);

    // Duplicate list for looping
    list.innerHTML += list.innerHTML;

    let scrollY = 0;

    function scroll() {
        scrollY += 0.5;  // speed

        list.style.transform = `translateY(-${scrollY}px)`;

        // Reset when half scrolled
        if (scrollY >= list.scrollHeight / 2) {
            scrollY = 0;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}

// Start scroll for all 4 lists
startInfiniteScroll("list1");
startInfiniteScroll("list2");
startInfiniteScroll("list3");
startInfiniteScroll("list4");


// Activate clicked link
function enableActiveLinks() {

    const links = document.querySelectorAll(".item-link");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const parentList = this.closest("ul");

            // Remove active only inside that list
            parentList.querySelectorAll(".item-link").forEach(l => l.classList.remove("active"));

            // Add active to clicked item
            this.classList.add("active");
        });
    });
}

enableActiveLinks();

document.querySelectorAll(".academic-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("clicked");
        setTimeout(() => card.classList.remove("clicked"), 300);
    });
});
// Blink on click
document.querySelectorAll(".spmvv-card, .details-btn, .learn-more").forEach(el => {
    el.addEventListener("click", () => {
        el.classList.add("blink");
        setTimeout(() => el.classList.remove("blink"), 300);
    });
});
const btn = document.getElementById("viewMoreBtn");

btn.addEventListener("mouseover", () => {
    btn.classList.add("blink");
});

btn.addEventListener("mouseout", () => {
    btn.classList.remove("blink");
});

btn.addEventListener("click", () => {
    btn.classList.add("blink");
    setTimeout(() => btn.classList.remove("blink"), 1000);
});

