//locomotive js
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//gsap
gsap.from(".nlink",{
    stagger:0.2,
    y:10,
    opacity:0,
    delay:0.5,
    duration:2
})

gsap.from(".anim2",{
    opacity:0,
    y:50,
    duration:1,
    // delay:2
    ease:Expo,
    stagger:0.3,

})
Shery.textAnimate("#divh1 h1" , {
    style: 2,
    y: 20,
    // delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.2,
});
Shery.imageEffect("#ephemeral img",{
    style:3,
    config: {"uFrequencyX":{"value":14.5,"range":[0,100]},"uFrequencyY":{"value":13.74,"range":[0,100]},"uFrequencyZ":{"value":29.77,"range":[0,100]},"geoVertex":{"range":[1,64],"value":21.2},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.5952450266677124},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.52,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})

Shery.imageEffect(".imgeff img",{
    style:5,
    config: {"a":{"value":3.66,"range":[0,30]},"b":{"value":0.86,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})

gsap.from("#ephemeral img",{
    y:70,
    opacity:0,
    duration:2,
})

Shery.imageEffect("#bimg",{
    style:5,
    gooey:true,
    config: {"a":{"value":1.83,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.774775657414993},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.23,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.51,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":15.27,"range":[0,100]}},
    // debug:true,
})

document.querySelector("#ftext button").addEventListener("mouseenter",function(){
    gsap.to("#video video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
})
document.querySelector("#ftext button").addEventListener("mouseleave",function(){
    gsap.to("#video video",{
        opacity:0,
        duration:1.5,
        ease:Power4
    })
})