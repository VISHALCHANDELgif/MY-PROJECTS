document.addEventListener("DOMContentLoaded", function () {

    /* ============================
       FEATURE DATA
       ============================ */
    const featuresData = [
        {
            title: "Smart Dashboard",
            text: "Track performance in real-time with a clean and intuitive dashboard.",
            image: "assets/images/feature-1.webp",
            icon: "ion-md-analytics"
        },
        {
            title: "Cloud Sync",
            text: "Access your data anytime with secure cloud synchronization.",
            image: "assets/images/feature-2.webp",
            icon: "ion-md-cloud-done"
        },
        {
            title: "Secure Payments",
            text: "Enterprise-grade encryption keeps your data protected at all times.",
            image: "assets/images/feature-3.jpg",
            icon: "ion-md-lock"
        },
        {
            title: "Mobile Optimized",
            text: "Mobile-first design for speed, clarity, and usability.",
            image: "assets/images/feature-4.webp",
            icon: "ion-md-phone-portrait"
        }
    ];

    const container = document.getElementById("feature-list");
    if (!container) return;

    /* ============================
       RENDER FEATURES
       ============================ */
    featuresData.forEach(feature => {
        container.insertAdjacentHTML("beforeend", `
            <div class="col-lg-6 topmargin-sm feature-item">
                <div class="card h-100 shadow-sm">
                    <div class="row no-gutters align-items-center">
                        <div class="col-md-5 text-center p-3">
                            <img 
                                src="${feature.image}"
                                loading="lazy"
                                width="300"
                                height="200"
                                class="img-fluid"
                                alt="${feature.title}">
                        </div>
                        <div class="col-md-7 p-4">
                            <i class="icon ${feature.icon} text-primary"></i>
                            <h4 class="mt-2 h4-c">${feature.title}</h4>
                            <p class="text-muted mb-0">${feature.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        `);
    });

    /* ============================
       SCROLL ANIMATION (SCOPED)
       ============================ */
    const featureObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
                featureObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".feature-item").forEach(item => {
        featureObserver.observe(item);
    });

});
