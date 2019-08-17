// 引入 mockjs库 得到的是一个构造函数 Mock
import Mock from 'mockjs'

// home组件数据
import homeData from './home_data.json'
import discernData from './shiwu_data.json'
import classifyData from './fenlei_data.json'

Mock.mock('/home', {code: 0, data: homeData})

Mock.mock('/discern', {code: 0, data: discernData})

Mock.mock('/classify', {code: 0, data: classifyData})



