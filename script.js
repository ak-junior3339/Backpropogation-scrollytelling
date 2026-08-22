// Tell GSAP that we are going to use ScrollTrigger

gsap.registerPlugin(ScrollTrigger);


// ===============================
// NEURON ANIMATION
// ===============================

gsap.from(".neuron", {

    scale: 0,

    opacity: 0,

    stagger: 0.15,

    duration: 0.9,

    scrollTrigger: {

        trigger: ".experience",

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

    duration: 0.7,

    scrollTrigger: {

        trigger: ".experience",

        start: "top 60%",

        toggleActions: "play none none reverse"

    }

});