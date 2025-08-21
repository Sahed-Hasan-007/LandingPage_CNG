export const useCurrentVideo = () => {
  const currentVideo = useState('currentVideo', () => null);
  const currentOverlay = useState('currentOverlay', () => null);

  const setCurrentVideo = (videoIframe:any ,id) => {
    if (currentVideo.value && currentVideo.value !== videoIframe) {
      // Stop the currently playing video
      currentVideo.value.contentWindow?.postMessage(
        '{"event":"command","func":"stopVideo","args":""}', '*'
      );

      const src = currentVideo.value?.src?.replace('autoplay=1', 'autoplay=0');
      
      if (currentOverlay.value && document.getElementById(currentOverlay.value)) {
        document.getElementById(currentOverlay.value).style.display = 'flex';
      }
      currentVideo.value.src = src;
    }
    currentVideo.value = videoIframe;
    currentOverlay.value = id
  };

  return { currentVideo, setCurrentVideo };
};
