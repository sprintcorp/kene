export default {
    name: "CashierDashboardComponent",
    data() {
        return {
            name: '',
            pname: '',
            quantity: '',
            amount: '',
            users: [],
            products: [],
            total: '',
            date: '',
            fullDate: []
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
        // getProduct() {
        //     this.products = JSON.parse(window.localStorage.getItem("cahier_order"))
        //     let sum = this.products.map(o => parseFloat(o.amount)).reduce((a, c) => { return a + c });
        //     this.total = sum;
        // },
        getDate(){
            var date = new Date(); 
            var year = date.getFullYear(); 
            var month = date.getMonth()+1; 
            var day = date.getDate(); 
            console.log(`date: ${day}/ ${month}/${year}`);
            this.fullDate.push({Day: this.day, Month: this.month, Year: this.year});
            
        },
        clear() {
            this.pname = '',
                this.quantity = '',
                this.amount = ''
        }

    },
    mounted() {
        if (JSON.parse(window.localStorage.getItem("cahier_order"))) {
            this.products = JSON.parse(window.localStorage.getItem("cahier_order"))
        }
        this.getProduct()
    }
}