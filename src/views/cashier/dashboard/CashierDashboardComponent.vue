<template>
  <!-- <RetailerLayoutComponent> -->
    <div>
      <div class="main-content style2" style="background-color: #e8edf2;min-height:80vh">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md 8">
                   
                   <p>
                    <strong> Welcome back, </strong>
                     <span>{{this.name}}</span>
                   </p>
                   
                <div class="title">
                  <div class="row d-flex">
                  <h4>Products Category</h4>
                  <button class="btn btn-outline-warning bg-warning rounded-pill text-dark ml-auto" data-toggle='modal' data-target='#productModal'> 
                    <span class="rounded-circle border border-dark">✚</span>
                      Add Product
                  </button>
                  <button class="btn btn-outline-secondary rounded-pill ml-auto" type="button" style="color:#007bff; margin-left:100px;">VIEW PAYMENT HISTORY</button>
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
                        <br><br><br><br><br><br><br><br><br><br>
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
                       <button class="btn btn-warning rounded-pill text-dark px-5 py-2" data-toggle="modal" data-target="#modeofpaymentModal">Pick a payment method</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    <!-- Add product modal -->
  <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
       <div class="modal-header">
        <h5 class="modal-title mx-auto" id="exampleModalLongTitle">Add Product</h5>
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter product name" v-model="pname">
            </div>
             <div class="form-group">
                <input type="number" class="form-control" placeholder="Enter quantity" v-model="quantity">
            </div>
            <div class="form-group">
                <input type="currency" class="form-control" placeholder="Amount" v-model="amount">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click='onAdd'>Add</button>
      </div>
    </div>
  </div>
</div>  
<!--Payment Method Modal -->
<div class="modal fade" id="modeofpaymentModal" tabindex="-1" role="dialog" aria-labelledby="modeofpaymentModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title font-weight-bold"> Pick a payment method</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body row">
        <div class="col-md-4 ">
          <div class="card mt-1 h-100">
              <div class="mx-auto mt-1">
                  <img :src="require('@/assets/images/img8.png')" class='rounded' alt="img"/>
              </div>
                <div class="card-body text-center">
                   <a href="#" class="nav-link text-dark" data-toggle="modal" data-target="#optionModal" data-dismiss="modal">
                     Wallet to Wallet
                     </a> 
                </div>
          </div>
        </div>
        <div class="col-md-4 ">
          <div class="card mt-1 h-100">
               <div class="mx-auto mt-1">
                <img :src="require('@/assets/images/img9.png')" class='rounded' alt="img"/>
              </div>
                <div class="card-body text-center">
                    POS
                </div>
          </div>
        </div>
        <div class="col-md-4 ">
          <div class="card mt-1 h-100">
                <div class="mx-auto mt-1">
                  <img :src="require('@/assets/images/img10.png')" class='rounded' alt="img"/>
              </div>
                <div class="card-body text-center">
                    USSD
                </div>
          </div>
        </div>
        <div class="col-md-4 pt-3">
          <div class="card mt-1 h-100">
                <div class="mx-auto mt-1">
                  <img :src="require('@/assets/images/img11.png')" class='rounded' alt="img"/>
              </div>
                <div class="card-body text-center">
                   <!-- <a href="#exampleModalCenter" class="nav-link text-dark"> -->
                    Bank Transfer
                    <!-- </a>  -->
                </div>
          </div>
        </div>
        <div class="col-md-4 pt-3">
          <div class="card mt-1 h-100">
             <div class="mx-auto mt-1">
                  <img :src="require('@/assets/images/img12.png')" class='rounded' alt="img"/>
              </div>
                <div class="card-body text-center">
                    Cash
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="optionModal" tabindex="-1" role="dialog" aria-labelledby="optionModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button class="btn btn-outline-secondary rounded-pill">Wallet to wallet</button>
        <button type="button" class="" data-dismiss="" aria-label="">
          <span aria-hidden="true" class="text-primary mt-3" data-toggle="modal" data-target="#modeofpaymentModal" data-dismiss="modal">&leftarrow; Back to payment methods</span>
        </button>
      </div>
      <div class="modal-body text-center text-dark">
        <p class="">Please give the customer the Account ID <br> below to make payments.
        </p>
         <button class="btn btn-outline-secondary rounded-pill">Account ID: RST12345</button> <br>
         <a href="/CashierPayment" class="btn btn-warning rounded-pill mt-4">Continue</a>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  <!-- </RetailerLayoutComponent> -->
</template>

<script src="./CashierDashboardComponent.js">
</script>

<style scoped>
</style>
