<template>
  <div class="container">
      <!-- 关闭的按钮 -->
      <div class="close">
        <span class="iconfont iconicon-test"></span>
      </div>

      <!-- logo -->
      <div class="logo">
        <span class="iconfont iconnew"></span>
      </div>

      <!-- 用户名密码输入框 -->
      <div class="inputs">

        <!-- 输入框组件 -->
        <AuthInput
        placeholder="手机号码"
        v-model="form.username"

        :rule="/^1[0-9]{4,10}$/"
        err_message="手机号码格式不正确"
        ></AuthInput>

        <AuthInput
        placeholder="密码"
        type="password"
        v-model="form.password"

        :rule="/^[0-9a-zA-Z]{3,12}$/"
        err_message="密码格式不正确"
        ></AuthInput>
      </div>

      <p class="tips">
        <input type="checkbox" name="" id=""><span>记住密码</span>
        没有账号？ 
        <router-link to="/register">去注册</router-link>
      </p>

      <!-- <button @click="handleSubmit">登录按钮</button> -->
      <AuthButton text="登录" @click="handleSubmit"/>
  </div>
</template>

<script>
// 导入请求库
// import axios from "axios";

//  导入组件
import AuthInput from "@/components/AuthInput";
import AuthButton from "@/components/AuthButton";

export default {
  data(){
    return {
      // 发送给后台的数据
      form: {
        username: "",
        password: ""
      },
    }
  },
  // 注册组件
  components: {
    AuthInput,
    AuthButton
  },

  methods: {
    // 传递给输入框组件，用于获取用户名
    handleUsername(value){
      this.form.username = value;
    },

    // 表单提交
    handleSubmit(){

      this.$axios({
        url: "/login",
        method: "POST",  // method相当于type
        data: this.form
        // .then的回调函数相当于success
      }).then( res => {
        const {message, data} = res.data;

        if(message === "登录成功"){
            // 把token和id保存到本地
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.user.id);
          // 跳转到首页
          this.$router.push("/personal")
        }
      });

    }
  }
}
</script>

<style scoped lang="less">
  // scoped 作用域样式
  // lang声明样式的类型

  .container{
    padding:20 / 360 * 100vw;
  }

  .close{
    span{
      font-size: 27 / 360 * 100vw;
    }
  }

  .logo{
    display: flex;
    justify-content: center;

    span{
      display: block;
      font-size: 126 / 360 * 100vw;
      color: #d81e06;
    }
  }

  .inputs{
    input{
      margin-bottom: 20 / 360 * 100vw;
    }
  }

  .tips{
    text-align: right;
    margin-bottom: 20 / 360 * 100vw;
    span{
      margin-right: 40px;;
    }

    a{
      color:#3385ff;
    }
  }
</style>