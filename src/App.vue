<template>

  <div id="app">

    <div style="width:25px;" id="menu-btn" @click="openModal">
      <svg v-if="!firstVisit" viewBox="0 0 58 49" id="menu" class="menu">
        <!-- <title>Menu</title> -->
        <rect width="58" height="8.5" rx="2" ry="2"/>
        <rect y="20.46" width="58" height="8.5" rx="2" ry="2"/>
        <rect y="40.92" width="58" height="8.5" rx="2" ry="2"/>
      </svg>
      <svg v-else viewBox="0 0 58 49" id="menu">
        <!-- <title>Menu</title> -->
        <rect width="58" height="8.5" rx="2" ry="2"/>
        <rect y="20.46" width="58" height="8.5" rx="2" ry="2"/>
        <rect y="40.92" width="58" height="8.5" rx="2" ry="2"/>
        <animate v-if="firstVisit"
        attributeType="XML"
        attributeName="fill"
        values="#95edef;#051b27;#81cad9;#81cad9;"
        dur="0.6s"
        repeatCount="indefinite"/>
      </svg>
    </div>
  
  <About v-if="$route.name == 'About'" />

  <Octagon />

  </div>

</template>

<script>
import About from './components/About'
import Octagon from './components/Octagon';


let data = {
  soundFx: true,
  mobileChrome: false,
  timerShow: false,
  timer: 0,
  firstVisit: false,
  themeLight: true,
}

export default {
  name: 'App',
  data: function () {
    return data;
  },
  components: {
    Octagon,
    About,
  },
  methods: {
    openModal: function () {
      this.$router.push({ path: '/about' })
      this.firstVisit = false;
    },
    closeModal: function () {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
      modal.scrollTo(0, 0);
    },
  },
  beforeMount: function () {

    window.deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      if(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
        this.mobileChrome = true;
      }
    });
    // if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    
    if (!this.$cookies.isKey("visited")) {
      this.firstVisit = true;
      this.$cookies.set('visited', 'true', Infinity);
    }

    if (!this.$cookies.isKey('soundFx')) {
      this.$cookies.set('soundFx', 'on', Infinity);
    }

    if (this.$cookies.get('soundFx') == 'off') {
      this.soundFx = false;
    }

    if (this.$cookies.isKey("timer")) {
      this.timer = this.$cookies.get('timer');
    }

    // hide grey highlight on tap
    document.addEventListener("touchstart", function(){}, true);

  },
  mounted: function () {
    document.getElementById('splashScreen').style.display = 'none';
  },
  computed: {
    setTimer: {
      get () {
        return this.timer;
      },
      set (value) {
        this.timer = value;
        this.$cookies.set('timer', value, Infinity);
      }
    }
  },
};

</script>

<style>
:root {
  /* --color-bg: #051b27; */
  --color-bg: #000E15;
  --color-bg-modal: #ffffff;
  --color-modal: black;
  --fill-icon-right: black;
  
  --fill-center: #479194;
  --fill-center-started: #054047;
  --fill-elements: #054047;
  --fill-elements-active: #458b8d;
  --fill-elements-touch: #00eeff;

  --fill-menu: #479194;
  --fill-menu-started: #054047;

  --bg-stat-div-inner: #0a3c43;
  --border-stat-div-inner: 1px solid rgb(6, 132, 141);
  --color-stat-div-inner: rgb(255, 255, 255);
  --fill-bar: #f1f1f1;
  --fill-bar-hover-focus: rgb(250, 250, 250) !important;

  --fill-icons:#606062;

  --color-a-social:#222222!important;
}

[data-theme="light"] {
  --color-bg: #fff;
  --color-bg-modal: #3b4d57;
  --color-modal: #dddddd;
  --fill-icon-right: #ffffff;

  --fill-center: #a1a1a1;
  /* --fill-center-started: rgb(240, 238, 214); */
  --fill-center-started: #f1f1f1;
  --fill-elements: rgb(224, 224, 224);
  /* --fill-elements-active: #c1bc8c; */
  --fill-elements-active: #999999;
  /* --fill-elements-touch: #f3f1d5; */
  --fill-elements-touch: #dbdbdb;

  --fill-menu: #cfcfcf;
  --fill-menu-started: #f7f7f7;
  
  --bg-stat-div-inner: #f9faff;
  --border-stat-div-inner: 1px solid #e9e9e9;
  --color-stat-div-inner: #333;
  --fill-bar:#949494;
  --fill-bar-hover-focus: #a5a5a5!important;

  --fill-icons:#dddddd;
  --color-a-social:#dddddd!important;
}


html {
  height: 100%;
}


.metta-div {
  margin-top:28px;
  font-size:13px;
  line-height:130%;
  /* color:#d7d7d7; */
  color:#7b9d9d;
}

@media screen and (max-width: 360px) {
  .metta-div {
    font-size:12px;
  }
}

@media screen and (max-width: 335px) {
  .metta-div {
    font-size:11px;
  }
}

body {
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Tajawal', sans-serif;
  font-size: 16px;
  background-color: var(--color-bg);
  overflow: hidden;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

* {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

a, a:visited {
  color: #09283a;
}

.content {
  font-size: 14.5px;
  padding-top:10px;
}

h2 {
  font-size:16px;
  margin-bottom:20px;
  margin-top:70px;
}

.icon-right {
  margin-right:25px;
  fill: var(--fill-icon-right);
}

.spacer-left {
  display: inline-block;
  width:20px;
}

@media only screen and (max-width: 440px) {
  .icon-right { 
    margin-right: 20px!important; 
  }
  .spacer-left {
    width: 15px;
  }
}

@media only screen and (max-width: 300px) {
  .icon-right { 
    margin-right: 15px!important;
  }
}

@media only screen and (max-width: 280px) {
  .icon-right { 
    margin-right: 10px!important; 
  }
}

.exp-title {
  display: block;
  padding-left: 15px;
  height: 59.5px;
}

#menu-btn {
  position:fixed;
  right:20px;
  top:20px;
  cursor:pointer;
  z-index:1;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: bounding-box;
}

.menu:hover {
  fill: #76cdd0;
  transition: fill 0.1s ease;
}

.menu {
  fill:var(--fill-menu);
  transition: fill 1.5s ease;
}

.menu-started {
  fill:var(--fill-menu-started);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.link-alike {
  text-decoration: underline;
  cursor: pointer;
}


/* Sliding menu */

.modal-menu {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  right: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  overflow: hidden; /* Enable scroll if needed */
  overflow-y: scroll;
}

/* Modal Content */
.modal-content {
  position: absolute;
  /* background-color: #fefefe; */
  background-color: var(--color-bg-modal);
  right: 0;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  animation-name: animateright;
  animation-duration: 0.5s;
  color: var(--color-modal);;
}

.modal-text {
  position: relative;
  max-width: 620px;
  margin: 0 auto;
  text-align: left;
}

/* Add Animation */
@keyframes animateright {
  from {right: -300px; opacity: 0}
  to {right: 0; opacity: 1}
}

/* transition: transform 400ms cubic-bezier(.05,.74,.27,.99); */

.close-btn {
  cursor:pointer;
  float:right;
  font-size:24px;
  padding:5px;
  margin-top:-7px;
  margin-right: 5px;
  border-bottom: none;
  text-decoration: none;
}

.sound {
  cursor: pointer;
  width:22px;
  float:right;
  /* margin-right:27px; */
  margin-top:4px;
}

.icon-contrast {
  cursor: pointer;
  width:18px;
  float:right;
  margin-top:6px;
}

.timer {
  cursor: pointer;
  float:right;
  margin-top:4px;
}

.install {
  cursor: pointer;
  float:right;
  margin-top:4px;
}

.social-icon {
  width:22px;
  float:left;
  margin-top:4px;
}

</style>
