<template>
  <div class="sidemenu-wraper">
    <ul class="firstmenu">
      <li v-for="(item,index) in dataSource" :key="item.id" @click="onClickFirstmenu(index)">
          <a href="#">
           {{item.name}}
          </a>
        <div class="first-subitem">
          <ul v-if="item.children.length>0" class="secondmenu">
            <li v-for="(subitem,index) in item.children" :key="subitem.id" @click="onClickSecondmenu(index)">
                <a href="#">
                 {{subitem.name}}
                </a>
              <div class="second-subitem">
                <ul v-if="subitem.children.length>0" class="thirdmenu">
                  <li v-for="(subitem,index) in subitem.children" :key="subitem.id">
                    <a href="#">
                      {{subitem.name}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'SidemenuList',
    data(){
      return{
        dataSource:[ {
          'name':'收银',
          'id': 1,
          children:[
            {
              'name':'收银开单',
              'id': 11,
              children: []
            },
            {
              'name':'寄存管理',
              'id': 12,
              children: []
            },
            {
              'name':'预约管理',
              'id': 13,
              children: []
            }
          ]
        },
        {
          'name':'会员',
          'id': 2,
          children:[
            {
              'name':'会员管理',
              'id': 21,
              children: []
            },
            {
              'name':'会员卡管理',
              'id': 22,
              children:[
                {
                  'name':'会员卡设置',
                  'id':221,
                  children: []
                },
                {
                  'name':'会员卡信息',
                  'id':222,
                  children: []
                }
              ]
            },
            {
              'name':'积分管理',
              'id': 23,
              children: []
            }
        ]
      }]
      }
    },
    methods:{
      onClickFirstmenu : function(index){
        alert("onClickFirstmenu");
        $('.first-subitem').css("display","none");
      },
      onClickSecondmenu : function(index){
        alert("onClickSecondmenu")
        $('.second-subitem').toggle();
      }
    }
  }
</script>

<style scoped>
  .sidemenu-wraper{
    width: 300px;
    height: 100%;
    background-color:yellow;
  }

  .sidemenu-wraper>ul{
    margin-left: -40px;
    margin-top: -36px;
  }

  .sidemenu-wraper>ul li{
    list-style: none;
    background: blue;
    border-bottom: 1px solid #fff;
  }

  .sidemenu-wraper>ul li a{
    display: inline-block;
    padding-left:20px;
    width: 280px;
    height: 40px;
    line-height: 40px;
    background: orange;
    text-decoration: none;
    text-align: left;
  }
  .first-subitem>ul{
    margin-left: -40px;
  }
  .first-subitem>ul li{
    list-style: none;
    background: blue;
    border-bottom: 1px solid #fff;
  }

  .first-subitem>ul li a{
    display: inline-block;
    padding-left:40px;
    width: 260px;
    height: 40px;
    line-height: 40px;
    background: orange;
    text-decoration: none;
    text-align: left;
  }
  .second-subitem>ul{
    margin-left: -40px;
  }
  .second-subitem>ul li{
    list-style: none;
    background: blue;
    border-bottom: 1px solid #fff;
  }

  .second-subitem>ul li a{
    display: inline-block;
    padding-left:60px;
    width: 240px;
    height: 40px;
    line-height: 40px;
    background: orange;
    text-decoration: none;
    text-align: left;
  }

</style>
