<template>
</template>

<script>
import moment from 'moment';
export default {
    props: ['slot-key'],
    mounted () {
        moment.locale('zh-CN');
        this.$page.lastUpdated = moment(new Date()).fromNow();
    }
};
</script>