// Tell GSAP that we are going to use ScrollTrigger

gsap.registerPlugin(ScrollTrigger);


// ===============================
// NEURON ANIMATION
// ===============================

gsap.from(".neuron", {

    scale: 0,

    opacity: 0,

    stagger: 0.15,

    duration: 0.6,

    scrollTrigger: {

        trigger: ".step",

        start: "top 60%",

        toggleActions: "play none none reverse"

    }

});


// ===============================
// CONNECTION ANIMATION
// ===============================

gsap.from(".connection", {

    opacity: 0,

    stagger: 0.1,

    duration: 0.5,

    scrollTrigger: {

        trigger: ".step",

        start: "top 60%",

        toggleActions: "play none none reverse"

    }

});


// Adding snap
ScrollTrigger.create({
    snap: {
        snapTo: (progress) => {
            return Math.round(progress * 2) / 2;
        },

        duration: 0.5,

        ease: "power2.inOut"
    }
});