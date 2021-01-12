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
                        <tr v-for="(product, i) in products" :key='i'>
                           <td>{{product.pname}}</td>
                           <td>{{product.quantity}}</td>
                           <td>₦{{product.amount}}</td>
                         </tr>
                        <br><br><br><br><br><br>
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
                    </tbody>
                    </table>
                    <div class="row d-flex">
                    <div class="align-self-center mx-auto">
                       <a href="/cashiertransactions" class="btn btn-success rounded-pill text-dark px-5 py-2">Transaction Successful</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    

  
        
      </div>
    </div>
  <!-- </RetailerLayoutComponent> -->
</template>

<script src="./CashierPaymentSuccessComponent.js">
</script>

<style scoped>
  .shape{
    background: #e8edf2;
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
</style>
