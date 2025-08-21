import { ref } from 'vue';

export const useYouTubePlayer = () => {
  const isAPIReady = ref(false);
  const {setCurrentVideo} = useCurrentVideo();
  const loadYouTubeAPI = () => {
    if (window.YT && window.YT.Player) {
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;
    tag.defer = true;
    document.head.appendChild(tag);
    window.onYouTubeIframeAPIReady = () => {
    };
  };

  const initYouTubePlayer = (iframeId:any, overlayId:any) => {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
      new YT.Player(iframe, {
        events: {
          onStateChange: (event) => {
            if (event.data === YT.PlayerState.PAUSED) {
              const currentTime = event.target.getCurrentTime();
              setTimeout(() => {
                const newTime = event.target.getCurrentTime();
                if (currentTime === newTime) {
                  console.log("Video paused by user");
                  document.getElementById(overlayId).style.display = "flex";
                  const videoIframe = document.getElementById(iframeId);
                  const src = videoIframe.src;
                  videoIframe.src = src.replace("autoplay=1", "autoplay=0");
                } else {
                  console.log("Video seek detected — not a real pause");
                }
              }, 500);
            }
          },
        },
      });
    }
  };

  const playVideo = (iframeId:any, overlayId:any) => {
    const videoIframe = document.getElementById(iframeId);
    const src = videoIframe.src;
    videoIframe.src = src.replace("autoplay=0", "autoplay=1");
    setCurrentVideo(videoIframe, overlayId);
    setTimeout(() => {
      initYouTubePlayer(iframeId, overlayId);
      setTimeout(() => {
        document.getElementById(overlayId).style.display = "none";
      }, 500);
    }, 500);
  };

  return {
    loadYouTubeAPI,
    initYouTubePlayer,
    playVideo,
  };
};
