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

const inputBlink = gsap.to(".input-layer .neuron", {
    stroke: "#00ff88",
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    paused: true
});

const forward1Tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".forwardOne",

        start: "top center",

        toggleActions: "play none none reverse"

    }

});
forward1Tl.to(".loss-visual", {

    opacity: 0,

    duration: 0.7

});
forward1Tl.to(
    ".layer, .connection, .weight-label",
    {
        opacity: 1,
        duration: 0.5,
        stagger: 0.05
    }
);
forward1Tl.call(() => {
    inputBlink.play();
});


const z1Blink = gsap.to(
    [
        ".input-neuron-1 .neuron-text",
        ".input-neuron-2 .neuron-text",
        ".w11 .weight-label",
        ".w12 .weight-label",
        ".hidden-neuron-1 .neuron-text",
        ".hidden-neuron-1 .bias-label"
    ],
    {
        fill: "#00ff88",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        paused: true
    }
);
const forward2Tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".forwardTwo",

        start: "top center",

        toggleActions: "play none none reverse"

    }

});

forward2Tl.call(() => {
    inputBlink.pause();
});


forward2Tl.set(".input-layer .neuron", {
    stroke: "#ffffff"
});

forward2Tl.call(() => {
    z1Blink.play();
});

const z2Blink = gsap.to(
    [
        ".input-neuron-1 .neuron-text",
        ".input-neuron-2 .neuron-text",
        ".w21 .weight-label",
        ".w22 .weight-label",
        ".hidden-neuron-2 .neuron-text",
        ".hidden-neuron-2 .bias-label"
    ],
    {
        fill: "#00ff88",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        paused: true
    }
);
const forward3Tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".forwardThree",

        start: "top center",

        toggleActions: "play none none reverse"

    }

});
forward3Tl.call(() => {
    z1Blink.pause();

    gsap.set(
        [
            ".input-neuron-1 .neuron-text",
            ".input-neuron-2 .neuron-text",
            ".w21 .weight-label",
            ".w22 .weight-label",
            ".w11 .weight-label",
            ".w12 .weight-label",
            ".hidden-neuron-1 .neuron-text",
            ".hidden-neuron-1 .bias-label"
        ],
        {
            fill: "#ffffff"
        }
    );
});
forward3Tl.call(() => {
    z2Blink.play();
});

const z3Blink = gsap.to(
    [
        ".hidden-neuron-1 .neuron-text",
        ".hidden-neuron-2 .neuron-text",
        ".w211 .weight-label",
        ".w212 .weight-label",
        ".output-layer .neuron-text",
        ".output-layer .bias-label"

    ],
    {
        fill: "#a9ff1f",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        paused: true,
        immediateRender: false
    }
);

const forward4Tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".forwardFour",

        start: "top center",

        toggleActions: "play none none reverse",



    }

});
forward4Tl.call(() => {
    z2Blink.pause();

    gsap.set(
        [
            ".input-neuron-1 .neuron-text",
            ".input-neuron-2 .neuron-text",
            ".w21 .weight-label",
            ".w22 .weight-label",
            ".hidden-neuron-2 .neuron-text",
            ".hidden-neuron-2 .bias-label"
        ],
        {
            fill: "#ffffff"
        }
    );
});
forward4Tl.call(() => {
    z3Blink.play();
});

const losslink = gsap.to(
    [
       ".y .neuron-text",
        ".output-layer .neuron-text",
    

    ],
    {
        fill: "#00ff88",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        paused: true,
        immediateRender: false
    }
);

const loss = gsap.timeline({

    scrollTrigger: {

        trigger: ".loss",

        start: "top center",

        toggleActions: "play none none reverse",

    }

});
loss.call(() => {
    z3Blink.pause();

    gsap.set(
        [
            ".hidden-neuron-1 .neuron-text",
            ".hidden-neuron-2 .neuron-text",
            ".w211 .weight-label",
            ".w212 .weight-label",
            ".output-layer .neuron-text",
            ".output-layer .bias-label"
        ],
        {
            fill: "#ffffff"
        }
    );
});
loss.to(".y",{
    opacity:1,
    duration:0.5
});
loss.call(() => {
    losslink.play();
});

const back1Blink = gsap.to(
    [
       ".w21 .weight-label",
        ".w22 .weight-label",
        ".w11 .weight-label",
        ".w12 .weight-label",
        ".w211 .weight-label",
        ".w212 .weight-label",
        ".hidden-neuron-2 .bias-label",
        ".hidden-neuron-1 .bias-label",
        ".output-layer .bias-label"
    ],
    {
        fill: "#f8f000",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        paused: true,
        immediateRender: false
    }
);
const backward1Tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".backOne",

        start: "top center",

        toggleActions: "play none none reverse",

    }

});
backward1Tl.to(".y", {

    opacity: 0,

    duration: 0.5

});
backward1Tl.call(() => {
    losslink.pause();

    gsap.set(
        [
            ".output-layer .neuron-text"
        ],
        {
            fill: "#ffffff"
        }
    );
});
backward1Tl.call(() => {
    back1Blink.play();
});


const back2Blink = gsap.to(
    [
       
        ".w211 .weight-label",
        ".w212 .weight-label",
        ".output-layer .bias-label"
    ],
    {
        fill: "#f8f000",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        paused: true,
        immediateRender: false
    }
);
const backward2Tl = gsap.timeline({

    scrollTrigger: {

        trigger: ".backTwo",

        start: "top center",

        toggleActions: "play none none reverse",

    }

});
backward2Tl.call(() => {
    back1Blink.pause();

    gsap.set(
        [
            ".w21 .weight-label",
            ".w22 .weight-label",
            ".w11 .weight-label",
            ".w12 .weight-label",
            ".w211 .weight-label",
            ".w212 .weight-label",
            ".hidden-neuron-2 .bias-label",
            ".hidden-neuron-1 .bias-label",
            ".output-layer .bias-label"
        ],
        {
            fill: "#ffffff"
        }
    );
});
backward2Tl.call(() => {
    back2Blink.play();
});