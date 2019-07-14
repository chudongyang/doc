const sidebar = require('./sidebar');
const nav = require('./nav');
module.exports = {
	title: 'Promise-学习笔记', // 网站的标题，它将会被用作所有页面标题的前缀
	// 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中
	description: '梳理日常笔记，记录知识点。基础js、vue、react等框架', 
	base: '/', // 基路径
	// 需要被注入到当前页面的 HTML <head> 中的标签
	head: [
		// 路径的"/"就是public资源目录
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	// 指定用于 dev server 的主机名 和 端口号
	host: '127.0.0.1',
	port: '8080',
	// 指定 vuepress build 的输出目录。
	dest: '.vuepress/dist',
	Markdown: {
		// 是否在每个代码块的左侧显示行号。
		lineNumbers: true,
	},
	themeConfig: {
    sidebarDepth: 1, // 嵌套的标题链接深度。
		lastUpdated: 'Last Updated', // 最后更新时间
		displayAllHeaders: false, // 显示所有页面的标题链接
		// 头部导航配置
		nav,
		// 侧边栏配置
		sidebar: [
			{
				title: 'javaScript相关',
				collapsable: false,
				children: [
					'/javaScript/basic'
				]
			},
			{
				title: 'vue相关',
				collapsable: false,
				children: [ 
					'/vue/basic'
				]
			},
			{
				title: 'react相关',
				collapsable: false,
				children: [ 
					'/react/basic'
				]
			},
			{
				title: 'TypeScript相关',
				collapsable: false,
				children: [ 
					'/TypeScript/basic',
					'/TypeScript/数据类型',
					'/TypeScript/函数'
				]
			}
		]
  }
}