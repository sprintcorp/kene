<template>
    <!-- <RetailerLayoutComponent> -->
        <div>
          <div class="main-content style2" style="background-color: #e8edf2;min-height:80vh">
              <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                        <div class="headerTitle">
                            <div class="row d-flex">
                            <h4>Transaction</h4>
                            <div class="dropdown mb-2 ml-auto px-5">
                                    <button class="btn btn-transparent btn-outline-secondary dropdown-toggle rounded-pill " type="button" data-toggle="dropdown">Filtered by Transaction
                                    <span class="caret"></span></button> 
                                    <ul class="dropdown-menu">
                                        <li><a href="#">From last 30 days</a></li>
                                        <li><a href="#">From last 60 days</a></li>
                                     </ul>
                            </div>
                            </div>
                        </div>
                    <table class="table">
                    <thead class="thead-light">
                        <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="row">Price</th>
                        <!-- <th scope="col">Date Sold</th> -->
                        </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, i) in products" :key='i'>
                           <td>{{product.pname}}</td>
                           <td>{{product.quantity}}</td>
                           <td>₦{{product.amount}}</td>
                           <!-- <td>{{getDate()}}</td> -->
                         </tr>
                        <!-- <tr>
                        <td>Samsung S20</td>
                        <td>#1893</td>
                        <td>Phones</td>
                        <td>Sold</td>
                        <td>6/12/2020</td>
                        <td>9/12/2020</td>
                        <td>₦583,000</td>
                        </tr>
                        <tr>
                        <td>Apple iPhone 12 Pro</td>
                        <td>#1894</td>
                        <td>Phones</td>
                        <td>Sold</td>
                        <td>6/12/2020</td>
                        <td>9/12/2020</td>
                        <td>₦683,000</td>
                        </tr>
                        <tr>
                        <td>Apple iPhone 12 Pro Max</td>
                        <td>#1895</td>
                        <td>Phones</td>
                        <td>Sold</td>
                        <td>6/12/2020</td>
                        <td>9/12/2020</td>
                        <td>₦583,000</td>
                        </tr>-->
                    </tbody>
                    </table>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    <!-- </RetailerLayoutComponent> -->
</template>
<script src="./CashierTransactionComponent.js">
</script>

<style scoped>
</style>