两种导航守卫使用的方式：

一、router.js
	vue-cli中怎么用，nuxt中就怎么用，几乎一样。

二、nuxtjs
	2.1 中间件 : middleware
		a>全局
			1. nuxt.config.js进行配置
				router:{
				    middleware:'auth'
				}
			2. 新建middleware/auth.js文件
				export default ()=>{
					console.log( 'middleware' );
				}

		b>局部
			新建middleware/auth.js文件
				export default ()=>{
					console.log( 'middleware' );
				}
			<scrip>
			export default{
				middleware:'auth'
			}
			</script>

			或：

			<script>
			export default{
				middleware(){

				}
			}
			</script>

	2.2 插件  : plugins 全局
		a> nuxt.config.js进行配置
			plugins: [
			    '~/plugins/router.js'
			]

		b> 新建plugins/router.js
			export default ({app})=>{
				app.router.beforeEach((to,from,next)=>{
					console.log( to );
					next();
				})
			}


****补充：服务端不能使用localStorage和cookie的解决方案

参考链接：https://www.npmjs.com/package/cookie-universal-nuxt

1. 安装下载

	npm i --save cookie-universal-nuxt

2. nuxt.config.js进行配置

	modules: [
	    'cookie-universal-nuxt'
	]
3. 就正常使用

	this.$cookies.set()
	this.$cookies.get()
	....


