import { createApp } from 'vue'
import App from './App.vue'
// 整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus'
// 导入样式
import 'element-plus/dist/index.css'
// 导入全部的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 导入中文语言包
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const app = createApp(App)

// 将图标注册到全局 Vue 对象中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// app.use(ElementPlus)
// 设置中文语言包
app.use(ElementPlus, { locale: zhCn })

app.mount('#app')
