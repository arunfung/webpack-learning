<template>
    <div>

        <H1>{{message}}</H1>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                message: 'webpack-dev-server --inline --hot',
                mes: 'webpack --profile --json > stats.json'
            }
        }
    }
</script>