/**
 * Created by tj on 2018/8/2.
 */
import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        menuData:[
            {
                'name':'系统信息',
                'id': 1,
                children:[
                    {
                        'name':'主机信息',
                        'id': 11
                    },
                    {
                        'name':'用户信息',
                        'id': 12
                    }
                ]
            },
            {
                'name':'进程信息',
                'id': 2,
                children:[
                    {
                        'name':'黑名单',
                        'id': 21
                    },
                    {
                        'name':'白名单',
                        'id': 22
                    }
                ]
            }
        ]
    }
})
