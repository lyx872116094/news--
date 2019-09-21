<template>
	<!-- template最外层只能包含一个标签 -->
  	<div class="box">
        大嘴是我同桌 
        <router-link to="/login">登录页面</router-link>
        <router-view ></router-view>

    </div>
</template>

<script>
// 必须暴露一个对象，对象是组件的配置
export default {
    data(){
        
    }
}
</script>

<style>
/* 组件样式，会污染全局 */
 .box{
     color: blue;
 }
</style>