const fadeEff = document.querySelectorAll('.fade-in');

const options = { 
    root: null,
    threshold: 0.5,
    rootMargin: "0px 0px 50px 0px" 
};


const appearOnScroll = new IntersectionObserver(function
    (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, options)

fadeEff.forEach(fadeEf => {
    appearOnScroll.observe(fadeEf);
})

