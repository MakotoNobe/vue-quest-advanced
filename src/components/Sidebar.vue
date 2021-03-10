<template>
  <div>
    <v-navigation-drawer app v-model="IsOpenSideBar" right>
      <v-list-item>
          <v-list-item-title class="title">
            ToDo
          </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>
     <v-divider />
         <v-list-group color="primary">
             
      <v-list rounded>
        <v-list-item>          
          <v-list-item-content>
            <v-list-item-title>
                <v-icon>mdi-plus</v-icon>
                アイテムボタン
                </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>          
          <v-list-item-content>
            <v-list-item-title>
                アイテム
                </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-list-group>
    </v-navigation-drawer>
  </div>
</template> 

<script>
export default {
    data(){
        return{};
    },
    computed:{
        IsOpenSideBar:{
            get(){
                return this.$store.state.IsOpenSideBar;
            },
            set(value){
                this.$store.dispatch("switchSideBar",value);
            }
        }
    },
    methods:{}
};
</script>