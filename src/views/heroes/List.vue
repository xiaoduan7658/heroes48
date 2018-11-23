<template>
  <div>
    <h2 class="sub-header">英雄管理</h2>
    <!--<a class="btn btn-success" href="./Add.html">Add</a>-->
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
        <tr>
          <th>#</th>
          <th>姓名</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="item.id">
          <td>{{index +1}}</td>
          <td>{{ item.name}}</td>
          <td>{{item.gender}}</td>
          <td>
            <router-link :to="'/heroes/'+ item.id">Edit</router-link>
            &nbsp;&nbsp;
            <a @click="handleDelete(item.id)" href="javascript:void(0)">delete</a>
          </td>
        </tr>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  // 导入axios模块
  import axios from 'axios'

  export default {
    data() {
      return {
        list: []
      }
    },
    created() {
      //发送异步请求,获取数据
      this.laodDtat();
    },
    methods: {
      laodDtat() {
        axios
          .get('http://127.0.0.1:3001/heroes')
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              this.list = response.data;
            }
          })
          .catch((err) => {
            console.log(err);
          })
      },
      handleDelete(id) {
        if (!confirm('确定要删除吗?')) {
          return;
        }
        axios
          .delete('http://127.0.0.1:3001/heroes/' + id)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              this.laodDtat();
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
</script>

<style scoped>

</style>
