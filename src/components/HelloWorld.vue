<template>
  <div class="hello">
    <video
      id="myVideo"
      ref="video"
      class="video-js vjs-default-skin vjs-big-play-centered"
      data-setup="{}"
      muted
    >
      <!-- controls
      autoplay="muted"
      preload="auto" -->
      <!-- data-setup="{}" -->
      <!-- <source src="../assets/video.mp4" type="video/mp4" /> -->
      <!-- <source
        src="http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8"
        type="application/x-mpegURLs"
      /> -->
      <source />
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-contrib-hls'
import 'videojs-flash'
import 'video.js/dist/video-js.css'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {},
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: true, // 如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '4:3', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        controls: true,
        sources: [
          // {
          //   src:
          //     'https://www.sicau.edu.cn/__local/A/1E/52/E8093449CF93AF4E8960C131C04_09BD5DD1_1F12F030.mp4?e=.mp4', // 路径
          //   type: 'video/mp4' // 类型
          // }
          {
            src:
              'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8',
            type: 'application/x-mpegURLs'
            // withCredentials: true
          }
          // {
          //   src: 'rtmp://ns8.indexforce.com/home/mystream',
          //   type: 'rtmp/mp4'
          //   // type: 'rtmp/flv'
          // }
        ],
        poster: '',
        // 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3612873308,1721476889&fm=26&gp=0.jpg', // 你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.videoObj = videojs('myVideo', this.playerOptions, function() {
        console.log(this)
        // this.play()
      })
      // let options = {
      //   autoplay: true, // 设置自动播放
      //   controls: true, // 显示播放的控件
      //   sources: [
      //     // 注意，如果是以option方式设置的src,是不能实现 换台的 (即使监听了nowPlayVideoUrl也没实现)
      //     {
      //       src:
      //         'http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8',
      //       type: 'application/x-mpegURL' // 告诉videojs,这是一个hls流
      //     }
      //   ]
      // }
      // // videojs的第一个参数表示的是，文档中video的id
      // const myPlyer = videojs('myVideo', options, function onPlayerReady() {
      //   console.log('onPlayerReady 中的this指的是：', this) // 这里的this是指Player,是由Videojs创建出来的实例
      //   console.log(myPlyer === this) // 这里返回的是true
      // })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
