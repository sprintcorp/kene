<template>
  <!-- <RetailerLayoutComponent> -->
    <div>
      <div class="main-content style2" style="background-color: #e8edf2;min-height:80vh">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md 8">
                   
                   <p>
                    <strong> Welcome back, </strong>
                     <span>{{name}} Ronke.</span>
                   </p>
                   <!-- <div class="input-group mb-3" style="box-shadow:none">
                    <div class="input-group-prepend">
                      <span class="input-group-text " id="basic-addon1">
                        <i class="fa fa-search"></i>
                      </span>
                    </div>
                    <input type="text" class="form-control shadow-none" placeholder="Type to search for a product" aria-label="Username" aria-describedby="basic-addon1">
                  </div> -->
                   <!-- <input type="text" class="form-control" placeholder="type to search for a product"/> -->
                <div class="title">
                  <div class="row d-flex">
                  <h4>Products Category</h4>
                  <button class="btn btn-outline-secondary ml-auto" type="button" style="border-radius: 30px; color:#007bff; margin-left:100px;">VIEW PAYMENT HISTORY</button>
                </div>
                </div>

                <div class="row d-flex">
                  <div class="col-md-12">

                      <div class="row d-flex ">
                      <div class="col-md-3">
                        <div class="card h-100">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img1.png')" class='' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Groceries
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card h-100">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img2.png')" class='' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Home Appliances
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 ">
                        <div class="card h-100">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img3.png')" class='rounded' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Cosmetics
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="card h-100">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img4.png')" class='rounded' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Drinks & Beverages
                          </div>
                        </div>
                      </div>

                      <div class="col-md-3 pt-3">
                        <div class="card h-100">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img5.png')" class='rounded' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Gadgets
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 pt-3">
                        <div class="card h-100">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img6.png')" class='rounded' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Sports
                          </div>
                        </div>
                      </div>
                      <div class="col-md-3 pt-3">
                        <div class="card shadow h-100 border-0">
                          <div class="mx-auto mt-3">
                          <img :src="require('@/assets/images/img7.png')" class='rounded' alt="img"/>
                          </div>
                          <div class="card-body text-center">
                            Books
                          </div>
                        </div>
                      </div>
                      <!-- </div> -->
                    </div>

                  </div>
                </div>

                </div>
                <div class="col-md-4 bg-dark" style="min-height:100vh;">
                  <table class="table table-dark">
                    <thead class="">
                        <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr>
                        <td>Samsung S20</td>
                        <td>1</td>
                        <td>₦33,000</td>
                        </tr>
                        <tr>
                        <td>Coca Cola Pet Size</td>
                        <td>3</td>
                        <td>₦300</td>
                        </tr>
                        <tr>
                        <td>Absolut Vodka 1L</td>
                        <td>2</td>
                        <td>₦1,300</td>
                        </tr>
                        <tr>
                        <td>Baileys Original Irish Cream</td>
                        <td>3</td>
                        <td>₦9,200</td>
                        </tr> -->
                        <tr v-for="(product, i) in products" :key='i'>
                           <td>{{product.pname}}</td>
                           <td>{{product.quantity}}</td>
                           <td>₦{{product.amount}}</td>
                         </tr>
                        <br><br><br>
                        <tr>
                           <td>TAX</td>
                           <td></td>
                           <td>₦300</td>
                        </tr>
                        <tr>
                           <td>Total</td>
                           <td>{{products.length}}</td>
                           <td>₦{{total}}</td>
                         </tr>
                          <tr>
                           <td colspan="">Enter Receipt Number</td>
                           <td></td>
                           <td>NGDUIQ1234</td>
                        </tr>
                        <!-- <tr><td></td><td></td><td></td></tr> -->
                    </tbody>
                    </table>
                    <div class="row d-flex">
                    <div class="align-self-center mx-auto">
                       <a href="/cashierpaymentsuccess" class="btn btn-warning rounded-pill text-dark px-5 py-2">Confirm Transaction</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    

  
        
      </div>
    </div>
  <!-- </RetailerLayoutComponent> -->
</template>

<script src="./CashierPaymentComponent.js">
</script>

<style scoped>
  .shape{
    background: #e8edf2;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
</style>
