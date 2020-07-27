<template>
  <div id="app" @keyup.tab="alterSearch">
      <header class = "header">
            <div class="header_aside">
                <a class="header_aside_link"  href="https://txc.qq.com/">反馈</a>
                <router-link class="header_aside_link" to="/setting">设置</router-link>
            </div>
      </header>
      <router-view ref="search" class="content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
    created() {
        window.addEventListener('keydown', event => {
            if (event.keyCode === 9) {
                event.preventDefault();
                this.alterSearch();
            }
        })
    },
    destroyed () {
        window.removeEventListener('keydown', event => {
            console.log(event.value);
            if (event.keyCode === 9) {
                event.preventDefault();
                this.alterSearch();
            }
        })
    },
    methods:{
        alterSearch:function () {
            this.$refs.search.alterSearch();
        }
    }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    html{
        width: 100%;
        height: 100%;
    }
    body{
        min-width: 1140px;
        min-height: 800px;
        position: relative;
        width: 100%;
        height: 100%;
    }
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
}
    .header{
        position: fixed;
        right: 10px;
        z-index: 999;
        display: block;
        width: 300px;
        padding: 1.5rem 0;
        line-height: 2.75rem;
        background: #fff;
    }
    .header_aside{
        z-index: 22;
        float: right;
        margin-right: 3.75rem;
    }
    a{
        color: #00278e;
        text-decoration: none;
        padding: 10px;
    }
    .header_aside_link{
        color: rgba(0,0,0,.54);
        cursor: pointer;
        transition: color .1s;
    }
</style>
