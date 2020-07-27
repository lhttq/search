<template>
    <div class="search">
        <div class="search_logo">
            <span class="hero_logo_link">Top Page</span>
        </div>
        <form class="search_form" :action="searchItem.url">
            <input type="button" class="search_engine" @click="alterSearch" :value="searchItem.name">
            <input class="search_keywords" placeholder="按tab键切换搜索引擎" v-model="keyword" :name="searchItem.keyWords" type="search">
            <input class="search_submit el-icon-search" type="submit" :disabled="disable" value="查询">
        </form>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
            return{
                keyword:'',
                disable:true,
                index:0,
                searchItem:{
                    id:0,
                    name:'百度',
                    url:'https://www.baidu.com/s?',
                    keyWords:'wd',
                    imgUrl:'',
                },
                searchEngine:[
                    {
                        id:0,
                        name:'百度',
                        url:'https://www.baidu.com/s?',
                        keyWords:'wd',
                        imgUrl:'',
                    },
                    {
                        id:1,
                        name:'google',
                        url:'https://www.google.com/search?q',
                        keyWords:'q',
                        imgUrl:'',
                    },
                    {
                        id:2,
                        name:'搜狗',
                        url:'https://www.sogou.com/web?',
                        keyWords:'query',
                        imgUrl:'',
                    },
                    {
                        id:3,
                        name:'必应',
                        url:'https://cn.bing.com/search?',
                        keyWords:'q',
                        imgUrl:'',
                    },
                ],
            }
        },
        created() {
            this.save();
            this.getSettings();
        },
        watch:{
            keyword:function () {
                if(this.keyword !== ''){
                    this.disable = false;
                }
            }
        },
        methods:{
            save:function(){
                let searchEngine = JSON.parse(localStorage.getItem('searchEngine') || '[]');
                if(searchEngine.length <=0){
                    localStorage.setItem('searchEngine',JSON.stringify(this.searchEngine));
                    return;
                }
                console.log(searchEngine);
                this.searchEngine = searchEngine;
            },
            getSettings:function(){
                //获取保存在本地的数据
                let searchItem = JSON.parse(localStorage.getItem('searchItem') || '{}');
                //如果保存的数据为空，将默认数据写入到本地，并使用默认搜索引擎
                if(JSON.stringify(searchItem) === '{}'){
                    console.log('searchItem没有保存好');
                    localStorage.setItem('searchItem',JSON.stringify(this.searchItem));
                    return;
                }
                console.log(searchItem);
                //获取本地保存的默认搜索数据,并将数据赋值给serachItem
                this.searchItem = searchItem;
            },
            alterSearch:function () {
                this.index++;
                if(this.index >= this.searchEngine.length){
                    this.index = 0;
                }
                this.searchItem = this.searchEngine[this.index];
            },
        }
    }
</script>

<style scoped>
    .search{
        position: absolute;
        margin: auto;
        width: 100%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search_logo{
        position: absolute;
        top: 120px;
        margin: 0 auto 3rem;
        font-size: 7rem;
        text-align: center;
        font-family: Corinthia;
    }
    hero_logo_link{
        display: block;
        width: 100%;
        height: 100%;
        background-size: 9.4375rem 11.25rem;

    }
    .search_form{
        width: 44%;
        border: none;
    }
    input[type='search']{
        width: 78%;
        height: 2.8rem;
        font-family: inherit;
        font-size: inherit;
        color: rgba(0,0,0,.69);
        background: rgba(0,0,0,.05);
        border: none;
        border-radius: .125rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
    }
    .search_engine{
        height: 2.8rem;
        padding-right: 5px;
        font-family: inherit;
        font-size: inherit;
        color: rgba(0,0,0,.69);
        background: rgba(0,0,0,.05);
        border: none;
        border-radius: .125rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
    }
    input[type='search']:focus{
        outline:none;
        border: none;
    }
    .button{
        height: 2.8rem;
        font-family: inherit;
        font-size: inherit;
        padding: 0 1rem;
        cursor: pointer;
        border: none;
        border-radius: .125rem;
        color: #fff;
        background: rgba(0,0,0,.69);
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        appearance: none;
    }
    .search_submit{
        top: 0;
        right: 0;
        height: 2.8rem;
        width: 3.375rem;
        border-radius: 0 .125rem .125rem 0;
        color: rgba(0,0,0,.54);
        border: none;
    }
</style>
