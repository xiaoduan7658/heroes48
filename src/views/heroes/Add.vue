<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">英雄名称</label>
        <input v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
      </div>
      <div class="form-group">
        <label for="sex">英雄性别</label>
        <input v-model="formData.gender" class="form-control" id="sex" placeholder="请输入性别">
      </div>
      <button @click="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        //1 绑定文本框的数据,将来也是post给服务器的数据
        formData: {
          name: '',
          gender: ''
        }
      }
    },
    methods: {
      //添加英雄
      handleAdd() {
        if (this.formData.name === '') {
          alert('请输入英雄名称');
          return
        }else if (this.formData.gender === ''){
          alert('请输入性别');
          return
        }
        //发送ajax请求
        axios
          .post('http://127.0.0.1:3001/heroes', this.formData)
          .then((response) => {
            if (response.status === 201) {
              this.$router.push('/heroes');
            } else {
              console.log('添加失败');
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
