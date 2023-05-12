export default defineNuxtConfig({
  // 为了让自动导入工作于嵌套模块，可以在composables/index.js 重新导出它们(推荐) 或 配置扫描器包含嵌套目录如下；
  // imports: {
  //   dirs: [
  //     'composables',
  //     'composables/*/index.{ts,js,mjs,mts}',
  //     'composables/**'
  //   ]
  // }
})
