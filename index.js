const burger = document.querySelector('svg');

burger.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
    gsap.set('body', { overflow: 'auto' });
    gsap.set('body', { overflowX: 'hidden' });
    gsap.to('.links', { x: '100%' });
  } else {
    gsap.set('body', { overflow: 'hidden' });
    gsap.to('.links', { x: '0%' });
    gsap.fromTo(
      '.links a',
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
  }

  burger.classList.toggle('active');
});

const videos = gsap.utils.toArray('.video');
gsap.set(videos, { opacity: 0 });

//greensock.com/docs/v3/Plugins/ScrollTrigger
https: videos.forEach(video => {
  ScrollTrigger.create({
    trigger: video,
    start: 'top center',
    end: 'bottom center',
    markers: true,

    onEnter: () => {
      gsap.set(video, { opacity: 1 });
      video.play();
    },
    onLeave: () => video.pause(),
    onEnterBack: () => video.play(),
    onLeaveBack: () => video.play(),
  });
});
