<template>
    <div>
        <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
    </div>
</template>

<script>

import Stock from './Stock'

export default {
    data() {
        return {
            stocks : [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Max', price: 120},
                {id: 3, name: 'cc', price: 140},
                {id: 4, name: 'Mercedes', price: 510},
            ]
        }
    },
    components: {
        appStock: Stock
    }
}
</script>
