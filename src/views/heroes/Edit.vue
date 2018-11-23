<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名称</label>
        <input v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" class="form-control" id="sex" placeholder="请输入性别">
      </div>
      <button @click="handleEdit" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: ['id'],
    data() {
      return {
        //1 绑定文本框的数据,将来也是post给服务器的数据
        formData: {
          name: '',
          gender: ''
        },
        list:[]
      }
    },
    created() {

      //发送异步请求,获取数据
      axios
        // .get('http://127.0.0.1:3001/heroes/'+ this.id)
        .get(`http://127.0.0.1:3001/heroes/${this.id}`)
        .then((response) => {
          console.log(response);
          if (response.status === 200){
            this.list = response.data;
            console.log(this.list);
            this.formData.name = this.list.name;
            this.formData.gender = this.list.gender;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    methods: {
      //添加英雄
      handleEdit() {
        console.log(this.formData.name +"======="+this.list.name);
        console.log(this.formData.gender+"======="+this.list.gender);
        if (this.formData.name === this.list.name && this.formData.gender === this.list.gender){
          alert("您并没有修改任何数据");
          return
        }
        if (this.formData.name === '') {
          alert('请输入英雄名称');
          return
        }else if (this.formData.gender === ''){
          alert('请输入性别');
          return
        }
        //发送ajax请求
        axios
          .patch(`http://127.0.0.1:3001/heroes/${this.id}`, this.formData)
          .then((response) => {
            if (response.status === 200) {
              this.$router.push('/heroes');
            } else {
              console.log('修改失败');
            }
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }
</script>

<style scoped>

</style>
