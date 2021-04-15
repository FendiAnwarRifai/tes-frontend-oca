<template>
    <div>
        <div class="row" style="margin:0;">
            <div class="col-2 sidebar" style="padding-top:18%">
            <img src="../assets/OCA-logo.png" class="image">
            <div class="item-nav">
                <nav>
                    <div >
                        <li @click="currentPage" class="mb-3 mt-4 pl-3">
                        <router-link to="home">
                            <i class="fas fa-home mr-3"></i>
                            <span :class="[currentsPage == 'home' ? 'active': '']">Home</span>
                        </router-link>
                        </li>
                    </div>
                    <div>
                        <label for="defaultCheck1" @click="dropdown">
                        <input class="d-none" type="checkbox" id="defaultCheck1" value="" v-model="checkbox">
                        <li style="cursor:pointer;" class=" mb-2 pl-3">
                            <i class="fas fa-comment-alt mr-3"></i>
                            <span>Message</span>
                            <i :class="icons"></i>
                        </li>
                    </label>
                    </div>
                    <div class="pl-5" :class='none' style="position:relative;">
                        <li :class="[slide,'mb-2 pl-4  animate']">
                        <router-link to="broadcast">
                            <img style="position:absolute; left: -10px; top: -12px;" src="../assets/retangle.png" alt="">
                            <span>Broadcast</span>
                        </router-link>
                        </li>
                        <li  @click="currentPage" :class="[slide,'pl-4 mt-2  animates']">
                        <router-link to="message">
                            <img style="position:absolute; left: -10px; top: -12px;" src="../assets/retangle.png" alt="">
                            <span :class="[currentsPage == 'message' ? 'active': '' ,]">SMS Scheduller</span>
                        </router-link>
                        </li>
                    </div>
                </nav>
            </div>
            </div>
            <div class="col-10 container p-4">
                <div class="row pb-4">
                    <div class="col">
                        <div class="searchInput-icon">
                            <i class="fas fa-search"></i>
                            <input type="text" class="search" placeholder="Any help?">
                        </div>
                    </div>
                    <div class="col d-flex justify-content-end">
                        <div class="row">
                            <div class="col-8">
                                <div class="row">
                                    <div class="col d-flex justify-content-end" style="font-weight: bold;color:#4F4F4F;">
                                        Hi, Adjie!
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col d-flex justify-content-end" style="color:#4F4F4F;">
                                        Adjie_g4ant3ng@banget.com
                                    </div>
                                </div>
                            </div>
                            <div class="col-4" style="padding:0;">
                                <img width="50px" src="../assets/profile.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      none: 'd-none',
      checkbox: false,
      slide: '',
      icons: 'fas fa-chevron-down ml-4',
      currentsPage: ''
    }
  },
  mounted: function () {
    this.currentPage()
  },
  methods: {
    currentPage () {
      this.currentsPage = this.$route.name
      if (this.currentsPage !== 'message') {
        this.checkbox = false
        this.slide = 'slideOn'
        this.icons = 'fas fa-chevron-down ml-4'
        setTimeout(() => {
          this.none = 'd-none'
        }, 200)
      }
    },
    dropdown () {
      setTimeout(() => {
        if (this.checkbox === true) {
          this.none = ''
          this.slide = 'slideIn'
          this.icons = 'fas fa-chevron-up ml-4'
        } else {
          this.slide = 'slideOn'
          this.icons = 'fas fa-chevron-down ml-4'
          setTimeout(() => {
            this.none = 'd-none'
          }, 200)
        }
      }, 100)
    }
  }
}
</script>
<style scoped>
.active{
border-bottom: 2px solid white;
padding-bottom: 3px;
}
/* * {
    border:1px solid blue !important;
    } */
  .animate {
    animation-duration: 0.4s;
    -webkit-animation-duration: 0.4s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
   .animates {
    animation-duration: 1.0s;
    -webkit-animation-duration: 1.0s;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
  }
  @keyframes slideIn {
    0% {
      transform: translateY(2rem);
      opacity: 0;
    }
    100% {
      transform:translateY(0rem);
      opacity: 1;
    }
    0% {
      transform: translateY(2rem);
      opacity: 0;
    }
  }

  @-webkit-keyframes slideIn {
    0% {
      -webkit-transform: transform;
      -webkit-opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      -webkit-opacity: 1;
    }
    0% {
      -webkit-transform: translateY(1rem);
      -webkit-opacity: 0;
    }
  }
  .slideIn {
    -webkit-animation-name: slideIn;
    animation-name: slideIn;
  }

  @keyframes slideOn {
    0% {
      transform:translateY(0rem);
      opacity: 1;
    }
    100% {
      transform: translateY(-10px);
      opacity: 0;
    }
    0% {
      transform:translateY(0rem);
      opacity: 1;
    }
  }
  .slideOn {
    -webkit-animation-name: slideOn;
    animation-name: slideOn;
  }
a {
  color: white !important;
  text-decoration: none !important;
}
li {
  list-style-type: none;
}
.sidebar{
    background:#ED1260;
    height:100vh 100%;
    position: relative;
    color: white !important;
    font-size: 14px;
}
.image{
    position: absolute;
    top: 54px;
}
::placeholder{
    font-style: italic;
}
.searchInput-icon{
    position: relative;
}
.fa-search{
    position: absolute;
    font-size: 24px;
    top: 11px;
    left: 16px;
    color: #4F5154;
    /* font-weight: 100; */
}
.search{
    Width: 405px;
    Height: 44px;
    padding: 13px 13px 13px 51px;
    border: 1px solid #BBC1C8;
    border-radius: 4px;
}
input:focus{
    outline: none;
}
</style>
