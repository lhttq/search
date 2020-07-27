<template>
    <div class="setting">
        <div class="content">
            <List header="启动时" border>
                <ListItem class="list">
                    <div class="search">
                        <span>搜索引擎</span>
                        <span>
                            <Select v-model="model1" style="width:200px">
                                <Option v-for="item in searchEngine" :value="item.id" :key="item.id">{{ item.name }}</Option>
                            </Select>
                        </span>
                    </div>
                </ListItem>
            </List>
            <List header="自定搜索引擎" border>
                <ListItem>
                    <div class="auto">
                        <span>名称</span>
                        <span> <Input v-model="customize.name" size="large" placeholder="引擎名称" /></span>
                    </div>
                </ListItem>
                <ListItem>
                    <div class="auto">
                        <span>请求地址</span>
                        <span> <Input v-model="customize.url" size="large" placeholder="注意需要请求地址" /></span>
                    </div>
                </ListItem>
                <ListItem>
                    <div class="auto">
                        <span title="如：百度的请求关键字wd">请求关键字</span>
                        <span> <Input v-model="customize.keyWords" size="large" placeholder="如：百度的请求关键字wd" /></span>
                    </div>
                </ListItem>
                <ListItem class="button">
                    <div class="btn">
                        <Button @click="save" type="success" long>保存</Button>
                    </div>
                </ListItem>
            </List>

        </div>
    </div>
</template>

<script>
    export default {
        name: "setting",
        data() {
            return {
                customize:{
                    name:'',
                    url:'',
                    keyWords:'',
                },
                model1:null,
                selected:false,
                searchEngine:[],
            }
        },
        watch:{
            model1: function(){
                    console.log(this.model1);
                    let searchEngine = JSON.parse(localStorage.getItem('searchEngine')||'[]');
                    let searchItem = JSON.stringify(searchEngine[this.model1]);
                    localStorage.setItem('searchItem',searchItem);
                }
        },
        created(){
            this.getSearch();
        },
        methods:{
            getSearch:function(){
                //获取默认搜索引擎
                let searchItem = JSON.parse(localStorage.getItem('searchItem'));
                //获取自定义搜索的内容
                let customize = JSON.parse(localStorage.getItem('customize') || '{}');
                this.customize = customize;
                //设置自定义选择框的值
                this.model1 = searchItem.id;
                //获取并保存选择框的内容
                let searchEngine = JSON.parse(localStorage.getItem('searchEngine')||'[]');
                if(searchEngine.length <= 0){
                    return;
                }
                this.searchEngine = searchEngine;
            },
            alterSearch:function () {
                console.log(typeof this.model1);
            },
            save:function () {
                //完善对象内容
                let customize = {
                    id:0,
                    name:this.customize.name,
                    url:this.customize.url,
                    keyWords:this.customize.keywords,
                    imgUrl:'',
                }
                //将默认内容设置为自定义内容
                localStorage.setItem('searchItem',JSON.stringify(customize));
                //自定义内容单独保存
                localStorage.setItem('customize',JSON.stringify(customize));

            }
        }
    }
</script>

<style type="text/css" lang="less" scoped>
    .setting{
        position: absolute;
        top: 160px;
        width: 35%;
        right: 0;
        left: 0;
        margin: 0 auto;
        background-color: #fff;
        .content{
            width: 100%;
            .ivu-list-items{
                width: 100%;
                .ivu-list-item{
                    width: 100%;
                    &:first-child{
                        .search{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                    &:nth-child(1){
                        .auto{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                    &:nth-child(2){
                        .auto{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                    &:nth-child(3){
                        .auto{
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                }
                .button{
                    width: 100%;
                    .btn{
                        width: 100%;
                    }
                }
            }

        }
    }
</style>
