import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "../config";

import WelcomeComponent from "../views/public/welcome/WelcomeComponent.vue";
import RetailerLayoutComponent from "../components/layout/RetailerLayoutComponent.vue";
import DashboardComponent from "../views/user/dashboard/DashboardComponent.vue";
import BusinessComponent from "../views/user/business/Business.vue";
import OutletComponent from "../views/user/outlet/Outlet.vue";
import TransactionComponent from "../views/user/transaction/Transaction.vue";
import ProductComponent from "../views/user/product/Product.vue";
import OrderComponent from "../views/user/order/Orders.vue";
import RetailerOrderOverviewComponent from "../views/user/order_overview/Order.vue";
import RetailerOrderComponent from "../views/user/place_order/PlaceOrder.vue";
import CashierLayoutComponent from "../components/layout/CashierLayoutComponent.vue";
import CashierDashboardComponent from "../views/cashier/dashboard/CashierDashboardComponent.vue";
import CashierTransactionComponent from "../views/cashier/transaction/CashierTransactionComponent.vue";
import CashierPaymentComponent from "../views/cashier/confirmpayment/CashierPaymentComponent.vue";
import CashierPaymentSuccessComponent from "../views/cashier/paymentsuccess/CashierPaymentSuccessComponent.vue";
import CashierProductComponent from "../views/cashier/product/CashierProductComponent.vue";
Vue.use(VueRouter);

const preventRoutes = {
    beforeEnter: (to, from, next) => {
        if (getToken()) {
            next()
        } else {
            next('/')
        } 
    }
};

const routes = [{
        name: "welcome",
        path: "/",
        component: WelcomeComponent,

    },

    {
        path: '/retailer',
        component: RetailerLayoutComponent,
        redirect: {
            name: 'dashboard'
        },
        children: [{
                name: "dashboard",
                path: "/retailer",
                component: DashboardComponent,
                ...preventRoutes
            },
            {
                name: "business",
                path: "/business/:id",
                component: BusinessComponent,
                ...preventRoutes
            },
            {
                name: "outletOverview",
                path: "/outlet/:id",
                component: OutletComponent,
                ...preventRoutes
            },
            {
                name: "transactionOverview",
                path: "/transaction/overview/:id",
                component: TransactionComponent,
                ...preventRoutes
            },
            {
                name: "productOverview",
                path: "/product/overview/:id",
                component: ProductComponent,
                ...preventRoutes
            },
            {
                name: "outletOrder",
                path: "/my/order/:id",
                component: OrderComponent,
                ...preventRoutes
            },
            {
                name: "retailerOrder",
                path: "/user/order/:id",
                component: RetailerOrderComponent,
                ...preventRoutes
            },
            {
                name: "retailerOrderOverview",
                path: "/retailer/order/:id",
                component: RetailerOrderOverviewComponent,
                ...preventRoutes
            },
        ]
        
    },
    {
        path: '/cashier',
        component: CashierLayoutComponent,
        redirect: {
            name: 'dashboard1'
        },
        children :[
            {
                name: "cashierDashboard",
                path: "/cashiercomponent",
                component: CashierDashboardComponent,
                ...preventRoutes
            },
            {
                name: "cashierTransaction",
                path: "/cashiertransactions",
                component: CashierTransactionComponent,
                ...preventRoutes
            },
            {
                name: "cashierPayment",
                path: "/cashierpayment",
                component: CashierPaymentComponent,
                ...preventRoutes
            },
            {
                name: "cashierPaymentSuccess",
                path: "/cashierpaymentsuccess",
                component: CashierPaymentSuccessComponent,
                ...preventRoutes
            },
            {
                name: "cashierProduct",
                path: "/cashierproduct",
                component: CashierProductComponent,
                ...preventRoutes
            }
        ]
    }
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;