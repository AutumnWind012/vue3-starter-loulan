<template>
  <p><button @click="toggleUserInfo">查看个人信息页面</button></p>
  <div class="userInfo" v-show="showUserInfo">
    <h2>个人信息</h2>
    <p>年龄：<input type="number" v-model="userInfo.age"></p>
    <p>性别：<input type="radio" value="1" v-model="userInfo.gender">男
      <input type="radio" value="2" v-model="userInfo.gender">女
    </p>
    <p>岗位：<select v-model="userInfo.department">
        <option value="dev">开发工程师</option>
        <option value="test">测试工程师</option>4
        <option value="devops">运维工程师</option>
      </select></p>
    <p>技术栈：<span v-for="skill in userInfo.skills" :key="skill"> {{ skill }}</span></p>
    <p>新技术：<input type="text" placeholder="你学会了什么？" v-model="newSkill">
      <button @click="getNewSkill">确定</button>
    </p>

    <!-- 在这里展示个人信息（使用双向绑定） -->
    <p>个人信息汇总：{{ userInfo }}</p>

  </div>
</template>


<script lang="ts">
export default {
  data() {
    return {
      userInfo: {
        age: 0,
        gender: 1,
        department: '',
        skills: ['java', 'python', 'vue']
      },
      newSkill: '',
      showUserInfo: false
    }
  },
  methods: {
    getNewSkill() {
      // 不为空就插入数据
      if (this.newSkill) {
        this.userInfo.skills.push(this.newSkill);
      }
    },
    toggleUserInfo() {
      this.showUserInfo = !this.showUserInfo;
    }
  }
}
</script>

<style scoped>
.userInfo {
  background-color: aqua;
  widows: 80%;
  width: 500px;
  position: relative;
  ;
}

.userInfo span {
  background-color: yellow;
  margin-left: 10px;
  border: 1px;
  border-radius: 5px;
}
</style>