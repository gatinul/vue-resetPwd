var Vue = require('vue');
var axios = require('axios');
var lodash =require('lodash');

var Profile = Vue.extend({
	template:'<p>{{firstName}} {{lastName}} is {{age}}</p>',
	data:function(){//data必为函数
		return{
			firstName:'Paul',
			lastName:'Jones',
			age:19
		}

	}
})
new Profile().$mount('#gati-point') //

// 实例 构造器
let data = {a:1}
const vm = new Vue({
	el:'#example',
	data:data
})
vm.a === data.a //true 完全一样 因为vm已经代理了data
vm.$el===document.getElementById('example')
// 实时监视
vm.$watch('a',function(newVal,oldVal){
	console.log(`a is changed from ${oldVal} to ${newVal}`)
})
data.a =3

// 钩子  created,mounted,updated,destroyed

// filter  ???

// v-on:click= 缩写为 @click=    v-bind:href= 缩写为 :href=

// 计算属性
let arr= [0,1,4]
const vm1 = new Vue({
	el:'#gatinul',
	data:{
		array:arr
	},
	computed:{
		addNumber:function(){
			console.log(`this:${this.array}`)
			this.array.push('3')
			return this.array[this.array.length-1]
		}
	}
	// methods:{
	// 	addNumber:function(){
	// 		console.log('1')
	// 		this.array.push('3')
	// 		return this.array[this.array.length-1]
	// 	}
	// }
})

const vm2 = new Vue({
	el:'#demo',
	data:{
		firstName:'Qoo',
		lastName:'Bar'
	},
	// computed:{
	// 	fullName:function(){
	// 		return this.firstName+''+this.lastName
	// 	}
	// }
	computed:{ //自己创建了一个setter方法
		fullName:{
			//getter
			get:function(){
				return this.firstName+''+this.lastName
			},
			//setter
			set:function(newValue){
				var names = newValue.split(' ')
				this.firstName=names[0]
				this.lastName=names[names.length-1]
			}
		}
	}
})
vm2.fullName = 'Shi xy'

// watchers 高频率异步

const watchExample = new Vue({
	el:'#watch-example',
	data:{
		question:'',
		answer:'I cannot give you an answer until you ask a question!',
		image:''
	},
	watch:{
		question:function(newQuestion){
			this.answer = '正在输入...'
			this.getAnswer()
		}
	},
	methods:{
		getAnswer:_.debounce(
			function(){
				let vm = this
				if(this.question.indexOf('?')===-1){
					vm.answer='应以问号结尾'
					return
				}
				vm.answer = '搜索中...'
				axios.get('https://yesno.wtf/api')
					.then(function(response){
						vm.answer = response.data.answer
					})
					.catch(function(error){
						vm.answer = `无法搜索：${error}`
					})
			},500
		)
	}
})

const app = new Vue({
	el: '#for-example',
	data: {
		object: {
			FirstName: 'John',
			LastName: 'Doe',
			Age: 30
		}
	}
})








// end
