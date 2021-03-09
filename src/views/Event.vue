<template>
 <div>
<router-link to="/">ホームへ戻る</router-link>
<router-link to="/event/1">イベント1</router-link>
<router-link to="/event/2">イベント2</router-link>
<router-link to="/event/3">イベント3</router-link>
<h1>イベントナンバー{{ eventNO }}</h1>
 </div>
</template>


<script>
    export default{
        name:"Event",
        components:{},
        computed:{
            eventNO:{
                get(){
                    return this.$route.params["eventNO"]; 
                }
            }
        }
    }
</script>