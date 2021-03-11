<template>
    <div>
        <v-card class="mx-auto mt-5" max-width="344">
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline text-h4 mb-1">
                        <!-- classのtext-h4はテキストの大きさを表してるh4のサイズ
                        https://vuetifyjs.com/ja/styles/text-and-typography/#typography
                        classのmb-1はmarginーbottomの略
                        https://vuetifyjs.com/ja/styles/spacing/ -->
                        {{event.name}}
                    </v-list-item-title>
                    <v-list-item-title class="ma-1">
                        開始日 
                        {{event.start}}
                    </v-list-item-title>
                    <v-list-item-title class="ma-1">
                        終了日 
                        {{event.end}}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-h5 my-5">詳細</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ event.detail }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-actions>
                <!-- <v-chip class="ma-2" :color="event.color">
                    {{event.color}}
                </v-chip> -->
                <router-link to="/">ホームへ戻る</router-link>
            </v-card-actions>
        </v-card>
    </div>
</template>


<script>
export default {
    name: "Event",
    components: {},
    computed: {
        event: {
            get() {
                return this.$store.getters["event/event"](this.$route.params["eventNo"]);
            }
        }
    }
}
</script>