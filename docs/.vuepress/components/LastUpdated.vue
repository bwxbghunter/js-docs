<template>
</template>

<script>
export default {
    props: ['slot-key'],
    mounted () {
        this.$page.lastUpdated = "2022/1/6 下午2:00:00";
        console.log(this.formatBytes())
        console.log(this.formatBytes(1024 * 0.1))
        console.log(this.formatBytes(1024 * 1))
        console.log(this.formatBytes(1024 * 1024))
        console.log(this.formatBytes(`${1024 * 1024 * 1024}`))
        console.log(this.formatBytes(1024 * 1024 * 1024 * 1024))
    },
    methods: {
        formatBytes(bytes, decimals) {
            if (!bytes || bytes === 0) return "0 B"
            let k = 1024
            let dm = decimals <= 0 ? 0 : decimals || 2
            let sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
            let i = Math.floor(Math.log(bytes) / Math.log(k))
            return (
                parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) +
                " " +
                sizes[i]
            )
        }
    }
};
</script>