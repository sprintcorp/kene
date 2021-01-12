<template>
<div>
    <div class="container-fluid">
            <div class="main-content style2" style="background-color: #e8edf2;min-height:100vh">
            <div class="row d-flex">
                <div class="col-md-12">
                         <button class="btn btn-outline-warning bg-warning rounded-pill text-dark px-3" data-toggle='modal' data-target='#addProductModal'> 
                            <span class="rounded-circle border border-dark">✚</span>
                            Add Product
                        </button> &nbsp;&nbsp;
                        <!-- Modal -->
<div class="modal fade" id="addProductModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title mx-auto" id="exampleModalLongTitle">Add Product</h5>
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> -->
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter product name">
            </div>
             <div class="form-group">
                <input type="text" class="form-control" placeholder="Enter product ID">
            </div>
              <div class="form-group">
                <input type="date" class="form-control" placeholder="Date ordered">
            </div>
            <div class="form-group">
                <input type="date" class="form-control" placeholder="Date sold">
            </div>
            <div class="form-group">
                <input type="currency" class="form-control" placeholder="Amount">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
                      <button class="btn btn-transparent btn-outline-secondary rounded-pill px-3" >
                            <span>◉</span>
                            Update Product
                        </button>
                     
                     
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
  /* *{
     margin: 0;
     padding:0;
  }   */
</style>


