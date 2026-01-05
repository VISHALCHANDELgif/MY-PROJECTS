document.addEventListener("DOMContentLoaded", function () {

    const blogs = [
        {
            title: "How to Build a Scalable Mobile App",
            excerpt: "Learn the core principles behind building fast, scalable, and reliable.",
            image: "assets/images/feature-1.webp",
            date: "Jan 12, 2025",
            author: "Admin"
        },
        {
            title: "UI/UX Best Practices for Mobile Apps",
            excerpt: "Design tips that improve usability, retention, and customer satisfaction.",
            image: "assets/images/feature-2.webp",
            date: "Feb 02, 2025",
            author: "Design Team"
        },
        {
            title: "Why Performance Matters in Mobile Apps",
            excerpt: "How app performance directly affects conversions, ratings, and growth.",
            image: "assets/images/feature-4.webp",
            date: "Mar 05, 2025",
            author: "Engineering"
        },
        {
            title: "UI/UX Best Practices for Mobile Apps",
            excerpt: "Design tips that improve usability, retention, and customer satisfaction.",
            image: "assets/images/feature-2.webp",
            date: "Feb 02, 2025",
            author: "Design Team"
        },
        {
            title: "How to Build a Scalable Mobile App",
            excerpt: "Learn the core principles behind building fast, scalable, and reliable mobile .",
            image: "assets/images/feature-1.webp",
            date: "Jan 12, 2025",
            author: "Admin"
        },
        {
            title: "How to Build a Scalable Mobile App",
            excerpt: "Learn the core principles behind building fast, scalable, and reliable mobile .",
            image: "assets/images/feature-1.webp",
            date: "Jan 12, 2025",
            author: "Admin"
        },
    ];
    

    const container = document.getElementById("blog-list");
    if (!container) return;

    blogs.forEach(blog => {
        container.insertAdjacentHTML("beforeend", `
            <div class="col-lg-4 col-md-6 topmargin-sm blog-item">
                <div class="card h-100 shadow-sm">
                    <img src="${blog.image}"
                         loading="lazy"
                         class="card-img-top"
                         alt="${blog.title}">
                    <div class="card-body">
                        <small class="text-muted">${blog.date} · ${blog.author}</small>
                        <h2 class="mt-2 h4-c">${blog.title}</h2>
                        <p class="text-muted">${blog.excerpt}</p>
                        <a href="#" class="secondary-btn">Read More</a>
                    </div>
                </div>
            </div>
        `);
    });

});
