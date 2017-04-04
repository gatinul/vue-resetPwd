
var Vue = require('vue')

var app = new Vue({
	el:'#app',
	data:{
		message:'Hello World'
	}
})

var app2 = new Vue({
	el:'#app-2',
	data:{
		message:`You loaded this page on ${new Date()} again`
		// 可通过在控制台 app2.message=''来 修改
	}
})

var app3 = new Vue({
	el:'#app-3',
	data:{
		show:true
	}
})

var app4 = new Vue({
	el:'#app-4',
	data:{
		todos:[
			{text:'Learn ES6'},
			{text:'Learn Vue'},
			{text:'Learn Koa'}
		]
	}
})

var app5 = new Vue({
	el:'#app-5',
	data:{
		message:'Hello Vue.js'
	},
	methods:{
		reverseMessage:function(){
			this.message=this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el:'#app-6',
	data:{
		message:'The first try'
	}
})

Vue.component('todo-item',{
	props:['todos'],
	template:'<li>{{todos.text}}</li>'
})

var app7 = new Vue({
	el:'#app-7',
	data:{
		myList:[
			{text:'live'},
			{text:'live good'},
			{text:'love'}
		]
	}
})
