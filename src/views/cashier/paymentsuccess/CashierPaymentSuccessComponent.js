export default {
    name: "CashierPaymentSuccessComponent",
    data() {
        return {
            name: '',
            pname: '',
            quantity: '',
            amount: '',
            users: [],
            products: [],
            total: ''
        }
    },
    methods: {
        onAdd() {
            console.log(this.users);
            // let info = {Name: this.allInfo.name, Quantity : this.allInfo.quantity, Amount : this.allInfo.amount}
            if (JSON.parse(window.localStorage.getItem("cahier_order"))) {
                this.users = JSON.parse(window.localStorage.getItem("cahier_order"))
            }
            this.users.push({ pname: this.pname, quantity: this.quantity, amount: this.amount });
            window.localStorage.setItem("cahier_order", JSON.stringify(this.users));
            this.clear();
            this.products = JSON.parse(window.localStorage.getItem("cahier_order"))
            let sum = this.products.map(o => parseFloat(o.amount)).reduce((a, c) => { return a + c });
            this.total = sum;
        },
        getProduct() {
            this.products = JSON.parse(window.localStorage.getItem("cahier_order"))
            let sum = this.products.map(o => parseFloat(o.amount)).reduce((a, c) => { return a + c });
            this.total = sum;
        },
        clear() {
            this.pname = '',
                this.quantity = '',
                this.amount = ''
        }

    },
    computed: {},
    mounted() {
        if (JSON.parse(window.localStorage.getItem("cahier_order"))) {
            this.products = JSON.parse(window.localStorage.getItem("cahier_order"))
        }
        this.getProduct()
    }
}