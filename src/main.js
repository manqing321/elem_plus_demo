import { createApp } from 'vue'
import App from './App.vue'
// 整体导入 ElementPlus 组件库
import ElementPlus from 'element-plus'
// 导入样式
import 'element-plus/dist/index.css'
// 导入全部的图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 将图标注册到全局 Vue 对象中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')
