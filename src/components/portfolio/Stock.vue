<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price : {{ stock.price }}) | Quantity : {{ stock.quantity }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                    type="number" 
                    class="form-controle"
                    :class="{danger: insufficientQuantity || quantity < 0}"
                    placeholder="Quantity"
                    v-model.number="quantity"
                    >
                </div>
                <div class="pull-right">
                    <button 
                    class="btn btn-success"
                    @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    > {{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stock'],    
    computed:{
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        },
    },
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            placeSellOrder: 'sellStock'
        }),
        sellStock() {
            const order={
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            }
            console.log(order)
            this.placeSellOrder(order)
            this.quantity = 0
        },
        dataQuantity() {
            if (this.quantity < 0) {
                this.quantity = 0
            }
        }
    }
}
</script>