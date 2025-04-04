<script setup>
  // 导入消息提示框
  import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
  import { reactive, ref } from 'vue'
  // 消息弹窗
  const open_msg = () => {
    ElMessage({
      type: 'success',  // success | warning | info | error
      message: 'Are you ok?',
      showClose: true,  // 允许关闭
    })}

  // 确认弹窗
  const open_confirm = () => {
    ElMessageBox.confirm("Are you happy?", 'title', {
      type: 'warning',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'cancel',
    }).then(() => {
      console.log("confirm ok")
    }).catch(() => {
      console.log('cancel ok')
    })}
  
  // 通知弹窗
  const open_notify = () => {
    ElNotification({
      title: "title - title",
      message: "message - message",
      duration: 1500 // 展示时间 [单位: 毫秒]
      // 默认右上角展示
    })}

    // 通知弹窗
  const open_notify2 = () => {
    ElNotification({
      type: 'success', // success | warning | info | error
      title: "title - 2",
      message: "message - 2",
      duration: 1500, // 展示时间 [单位: 毫秒]
      position: "bottom-right"  // 右下角展示
    })}

  // 导航栏的选择
  const selectedIndex = ref("2-3")  // 绑定的默认选中效果
  const selected = (index, indexPath) => {
    console.log("导航", "index", index, "indexPath", indexPath)
  }

  // 点击下拉菜单的回调
  const user_command = (command) => {
    console.log("command:", command)
  }

  // 标签页和切换事件
  const selected_name = ref("2")
  const tab_click = (tab, event) => {
    console.log("tab", tab.props, "event", event)
  }

  // 动态标签页
  const tab = reactive({
    arr: [
      { name: "1", title: "title1", content: "content1"},
      { name: "2", title: "title2", content: "content2"},
      { name: "3", title: "title3", content: "content3"},
    ]
  })
  // 添加和删除标签
  const tab_add = () => {
    let idx = tab.arr.length
    idx += 1
    tab.arr.push({
      name: idx,
      title: 'new title' + idx,
      content: 'new content' + idx,
    })
  }
  const tab_remove = (name) => {
    console.log("remove ", name)
    const idx = tab.arr.findIndex((val) => val.name == name)
    tab.arr.splice(idx, 1)  // 移除元素    
  }

  // 输入框参数
  const name = ref('')
  const pwd = ref('')
  const content = ref('')
  const url1 = ref('')
  const url2 = ref('')
  const email = ref('')
  const input_selected = ref('2') // 选中的下拉框
</script>

<template>
<h5>Button type</h5>
<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="success">成功按钮</el-button>
<el-button type="info">信息按钮</el-button>
<el-button type="warning">警告按钮</el-button>
<el-button type="danger">危险按钮</el-button>
<hr>
<h5>按钮属性</h5>
<el-button plain>朴素按钮</el-button>
<el-button round>圆角按钮</el-button>
<el-button circle>圆</el-button>
<el-button disabled>禁用按钮</el-button>
<el-button loading>加载中</el-button>
<hr>
<h5>尺寸 size</h5>
<el-button size="large">大型按钮</el-button>
<el-button >默认按钮</el-button>
<el-button size="small">小型按钮</el-button>
<hr>
<h5>图标</h5>
<el-icon><Plus /></el-icon>
<el-icon><Edit /></el-icon>
<el-icon><Delete /></el-icon>
<el-icon class="is-loading"><Loading /></el-icon>
<hr>
<h5>属性 有 size 和 color</h5>
<el-icon size="30" color="red"><Search /></el-icon>
<hr>
<h5>组合按钮</h5>
<el-button type="primary">
    <el-icon ><Search /></el-icon>
    <span> 搜索 </span>
</el-button>
<el-button type="primary">
    <el-icon ><Search /></el-icon>
</el-button>
<el-button circle type="primary">
    <el-icon ><Search /></el-icon>
</el-button>
<hr>
<h5>按钮组</h5>
<el-button-group>
  <el-button type="primary">
    <el-icon><Plus /></el-icon>
  </el-button>
  <el-button type="primary">
    <el-icon><Edit /></el-icon>
  </el-button>
  <el-button type="primary">
    <el-icon><Delete /></el-icon>
  </el-button>
</el-button-group>
<hr>
<h5>消息弹窗</h5>
<el-button @click="open_msg">消息</el-button>
<el-button @click="open_confirm">确认框</el-button>
<el-button @click="open_notify">通知</el-button>
<el-button @click="open_notify2">通知2</el-button>
<hr>
<h5>水平导航</h5>
<!-- mode 默认为纵向，设置为 horizontal 指定为横向 -->
<!-- :default-active 默认选中的效果 -->
<!-- select 绑定事件 -->
<el-menu mode="horizontal" :default-active="selectedIndex" @select="selected">
  <el-menu-item index="1">menu1</el-menu-item>
  <el-sub-menu index="2">
    <template #title>menu2</template>
    <el-menu-item index="2-1">menu2-item1</el-menu-item>
    <el-menu-item index="2-2">menu2-item2</el-menu-item>
    <el-menu-item index="2-3">menu2-item3</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="3">menu3</el-menu-item>
  <el-menu-item index="4">menu4</el-menu-item>
</el-menu>
<hr>
<h5>水平导航 自定义样式</h5>
<el-menu mode="horizontal" :default-active="selectedIndex" @select="selected" 
background-color="#545c64" text-color="#fff" active-text-color="#ffe04b" style="height: 40px; width: 600px;">
  <el-menu-item index="1">menu1</el-menu-item>
  <el-sub-menu index="2">
    <template #title>menu2</template>
    <el-menu-item index="2-1">menu2-item1</el-menu-item>
    <el-menu-item index="2-2">menu2-item2</el-menu-item>
    <el-menu-item index="2-3">menu2-item3</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="3">menu3</el-menu-item>
  <el-menu-item index="4">menu4</el-menu-item>
</el-menu>
<hr>
<h5>面包屑 sparator 分隔符</h5>
<el-breadcrumb sparator="/">
  <el-breadcrumb-item><a href="#">首页</a></el-breadcrumb-item>
  <el-breadcrumb-item>第一节</el-breadcrumb-item>
  <el-breadcrumb-item>第二节</el-breadcrumb-item>
</el-breadcrumb>
<hr>
<h5>下拉菜单</h5>
<el-dropdown @command="user_command">
  <span>个人中心 <el-icon><User /></el-icon></span>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item command="order">订单</el-dropdown-item>
      <el-dropdown-item command="logout">退出</el-dropdown-item>
    </el-dropdown-menu>
  </template>
</el-dropdown>
<hr>
<h5>标签页</h5>
<!-- v-model 代表绑定选中的项目，可以增加 type="card" 指定卡片风格， border-card 边框卡片风格-->
<el-tabs v-model="selected_name" @tab-click="tab_click">
  <el-tab-pane label="C1" name="1">Content1</el-tab-pane>
  <el-tab-pane label="C2" name="2">Content2</el-tab-pane>
  <el-tab-pane label="C3" name="3">Content2</el-tab-pane>
</el-tabs>
<hr>
<h5>动态添加</h5>
<el-button @click="tab_add">添加</el-button>
<el-tabs v-model="selected_name" @tab-remove="tab_remove" closable type="card" @tab-click="tab_click">
  <el-tab-pane v-for="(val, key) in tab.arr" :key="val.name" :label="val.title" :name="val.name">{{ val.content }}</el-tab-pane>
</el-tabs>
<div style="width: 500px;">
  <!-- clearable 可以一键清空 -->
  <h5>输入框</h5> 
  <!-- el-input 必须绑定变量才能输入 -->
<el-input size="large" v-model="name" clearable placeholder="请输入用户名" />
<!-- show-password 可切换显示隐藏密码 -->
<h5>密码框</h5> 
<el-input v-model="pwd" show-password placeholder="请输入密码" />
<h5>文本域</h5>
<!-- rows="2" 代表初始是 2 行 -->
<el-input type="textarea" v-model="content" rows="2"/>
<h5>输入内容长度限制 - 输入框</h5> 
<el-input v-model="name" maxlength="10" show-word-limit/>
<h5>输入内容长度限制 - 文本域</h5> 
<el-input type="textarea" v-model="content" rows="3" maxlength="20" show-word-limit/>

<h5>前置</h5>
<el-input v-model="url1">
  <template #prepend>https://</template>
</el-input>
<h5>后置</h5>
<el-input v-model="email">
  <template #append>@qq.com</template>
</el-input>
<h5>前置后置</h5>
<el-input v-model="url2">
  <template #prepend>https://</template>
  <template #append>.com</template>
</el-input>
<h5>前置后置 拓展 - 搜索</h5>
<el-input placeholder="请输入搜索条件" v-model="name">
  <template #prepend>
    <el-select v-model="input_selected" placeholder="select pls" style="width: 200px;">
      <el-option label="select item1" value="1" />
      <el-option label="select item2" value="2" />
      <el-option label="select item3" value="3" />
    </el-select>
  </template>
  <template #append>
      <el-button>
        <el-icon><Search /></el-icon>
      </el-button>
    </template>
</el-input>
</div>
</template>
<style scoped>
</style>
