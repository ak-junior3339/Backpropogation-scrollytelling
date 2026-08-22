gsap.registerPlugin(ScrollTrigger);


// =================================
// STEP 1 : NETWORK ANIMATION
// =================================

const tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".network-step",

        start: "top 70%",

        toggleActions: "play none none reverse"

    }

});


// =================================
// 1. NEURONS
// =================================

tl.from(".neuron-group", {

    scale: 0,

    opacity: 0,

    stagger: 0.2,

    duration: 0.8

});


// =================================
// 2. CONNECTIONS
// =================================

tl.from(".connection", {

    opacity: 0,

    stagger: 0.1,

    duration: 0.7

});


// =================================
// 3. WEIGHT LABELS
// =================================

tl.from(".weight-label", {

    opacity: 0,

    duration: 0.5,

    stagger: 0.15

});


// =================================
// 4. INPUT LAYER
// =================================

tl.to(".input-layer .neuron", {

    stroke: "#00ff88",

    duration: 0.5

});

tl.to(".input-layer .neuron", {

    stroke: "#ffffff",

    duration: 0.5

});


// =================================
// 5. HIDDEN LAYER
// =================================

tl.to(".hidden-layer .neuron", {

    stroke: "#00ff88",

    duration: 0.5

});

tl.to(".hidden-layer .neuron", {

    stroke: "#ffffff",

    duration: 0.5

});


// =================================
// 6. OUTPUT LAYER
// =================================

tl.to(".output-layer .neuron", {

    stroke: "#00ff88",

    duration: 0.5

});

tl.to(".output-layer .neuron", {

    stroke: "#ffffff",

    duration: 0.5

});


// =================================
// STEP DETECTION
// =================================

ScrollTrigger.create({

    trigger: ".network-step",

    start: "top center",

    onEnter: () => {
        console.log("Step 1 active");
    }

});

ScrollTrigger.create({

    trigger: ".activation-step",

    start: "top center",

    onEnter: () => {
        console.log("Step 2 active");
    }

});

ScrollTrigger.create({

    trigger: ".loss-step",

    start: "top center",

    onEnter: () => {
        console.log("Step 3 active");
    }

});

// =================================
// STEP 2 : ACTIVATION FUNCTION
// =================================

const activationTl = gsap.timeline({

    scrollTrigger: {

        trigger: ".activation-step",

        start: "top center",

        toggleActions: "play none none reverse"

    }

});


// Hide the neural network

activationTl.to(
    ".layer, .connection, .weight-label",
    {
        opacity: 0,
        duration: 0.5,
        stagger: 0.05
    }
);


// Show activation function

activationTl.to(
    ".activation-visual",
    {
        opacity: 1,
        duration: 0.7
    }
);


const lossTl = gsap.timeline({

    scrollTrigger: {

        trigger: ".loss-step",

        start: "top center",

        toggleActions: "play none none reverse"

    }

});
lossTl.to(".activation-visual", {

    opacity: 0,

    duration: 0.5

});
lossTl.to(".loss-visual", {

    opacity: 1,

    duration: 0.7

});