<template>
    <div>
        <div class="top-bar style2">
            <div class="logo">
                <a href="#" title=""><i class="fa fa-shopping-bag"></i> Inventory Management System</a>
            </div>

            <form class="search-form">
                <input type="text" placeholder="Search Here..." />
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>

            <ul class="dis-none">
                <li><a title=""><i class="fa fa-plus"></i>New Tasks</a></li>
                <li><a title=""><i class="fa fa-cloud-upload"></i>Upload Files</a></li>
            </ul>
            <div class="quick-links">
                <ul>
                    <li><a title="" class="yellow-skin"><i class="fa fa-user"></i></a></li>
                    <li><a title="" id="toolFullScreen" class="black-skin" @click="logout()"><i class="fa fa-sign-out"></i></a></li>
                </ul>
            </div>
        </div>

        <header class="horizontal-menu">
            <span class="open-hide-menu"><i class="fa fa-bars"></i></span>
            <nav>
                <ul>
                    <li class="menu-item-has-children" v-if="roleIsCashier">
                        <router-link :to="{name:'dashboard'}" title=""><i class="fa fa-home"></i> <span>My Businesses</span></router-link>
                    </li>
                        <li class="menu-item-has-children" v-if="roleIsCashier">
                        <router-link :to="{name:'cashierDashboard',params:outlet}"><i class="fa fa-list"></i> <span>Dashboard</span></router-link>
                    </li>

                    <li class="menu-item-has-children" v-if="roleIsCashier">
                        <router-link :to="{name:'cashierTransaction'}"><i class="fa fa-list"></i> <span>Transaction</span></router-link>
                    </li>
                    <!-- <li class="menu-item-has-children" v-if="((this.$router.currentRoute.name == 'cashierDashboard')) || ((this.$router.currentRoute.name == 'cashierTransaction')) || ((this.$router.currentRoute.name == 'cashierPayment')) || ((this.$router.currentRoute.name == 'cashierPaymentSuccess')) || ((this.$router.currentRoute.name == 'cashierProduct'))">
                        <router-link :to="{name:'cashierDashboard'}"><i class="fa fa-list"></i> <span>My Businesses</span></router-link>
                    </li> -->
                    <li v-if="((this.$router.currentRoute.name != 'dashboard') && (this.$router.currentRoute.name != 'business')) && (this.$router.currentRoute.name != 'cashierTransaction') && (this.$router.currentRoute.name != 'cashierDashboard') && (this.$router.currentRoute.name != 'cashierPayment') && (this.$router.currentRoute.name != 'cashierPaymentSuccess') && (this.$router.currentRoute.name != 'cashierProduct')">
                        <router-link :to="{name:'retailerOrder',params:outlet}" title=""><i class="fa fa-cube"></i> <span>Order Distributor Product</span></router-link>
                    </li>
                    <li v-if="((this.$router.currentRoute.name != 'dashboard') && (this.$router.currentRoute.name != 'business')) &&(this.$router.currentRoute.name != 'cashierTransaction') && (this.$router.currentRoute.name != 'cashierDashboard') && (this.$router.currentRoute.name != 'cashierPayment') && (this.$router.currentRoute.name != 'cashierPaymentSuccess') && (this.$router.currentRoute.name != 'cashierProduct')">
                        <router-link :to="{name:'retailerOrderOverview',params:outlet}" title=""><i class="fa fa-list"></i> <span>My Orders</span></router-link>
                    </li>

                    <li  v-if="((this.$router.currentRoute.name != 'dashboard') && (this.$router.currentRoute.name != 'business')) &&(this.$router.currentRoute.name != 'cashierTransaction') && (this.$router.currentRoute.name != 'cashierDashboard') && (this.$router.currentRoute.name != 'cashierPayment') && (this.$router.currentRoute.name != 'cashierPaymentSuccess') && (this.$router.currentRoute.name != 'cashierProduct')">
                        <router-link :to="{name:'productOverview',params:outlet}" title=""><i class="fa fa-shopping-bag"></i> <span>My Products</span></router-link>
                    </li>

                    <li class="menu-item-has-children" v-if="((this.$router.currentRoute.name != 'dashboard') && (this.$router.currentRoute.name != 'business')) &&(this.$router.currentRoute.name != 'cashierTransaction') && (this.$router.currentRoute.name != 'cashierDashboard') && (this.$router.currentRoute.name != 'cashierPayment') && (this.$router.currentRoute.name != 'cashierPaymentSuccess') && (this.$router.currentRoute.name != 'cashierProduct')">
                        <router-link :to="{name:'transactionOverview',params:outlet}" title=""><i class="fa fa-credit-card"></i> <span>Customer Transactions</span></router-link>
                    </li>
                    
                    <li class="menu-item-has-children" v-if="((this.$router.currentRoute.name != 'dashboard') && (this.$router.currentRoute.name != 'business')) &&(this.$router.currentRoute.name != 'cashierTransaction') && (this.$router.currentRoute.name != 'cashierDashboard') && (this.$router.currentRoute.name != 'cashierPayment') && (this.$router.currentRoute.name != 'cashierPaymentSuccess') && (this.$router.currentRoute.name != 'cashierProduct')">
                        <router-link :to="{name:'outletOrder',params:outlet}"><i class="fa fa-list"></i> <span>Customer Order</span></router-link>
                    </li>

         

                    <!-- <li class="menu-item-has-children" v-if="((this.$router.currentRoute.name == 'dashboard') )">
                        <router-link :to="{name:'outletOrder',params:outlet}"><i class="fa fa-list"></i> <span>Dashboard</span></router-link>
                    </li> -->
                    <!-- <li class="menu-item-has-children"  v-if="((this.$router.currentRoute.name != 'dashboard') && (this.$router.currentRoute.name != 'business'))">
                        <a title=""><i class="fa fa-users"></i> <span>My Customers</span></a>
                    </li> -->

                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
import {logout,getOutlet} from '../../config';
import { ROLE } from '../../env';
    // import MainMenuComponent from "./MainMenuComponent";

    export default {
        name: "HeaderComponent",
        // components: {MainMenuComponent},
        data(){
            return{
                route:'',
                outlet:'',
                show:false,
                roleIsCashier : false
            }
        },
       
        methods: {
            logout() {
                logout();
                this.$router.push({ name: 'welcome' });
            }
        },
         mounted(){
            
            this.outlet = getOutlet();

            console.log(localStorage.getItem(ROLE));

            if (localStorage.getItem(ROLE) === 'Cashier'){
                this.roleIsCashier = true;

            }
            
        },
        
    }
</script>

<style scoped>

</style>
