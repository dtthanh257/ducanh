<template>
      <div id="dialogName" class="dialog-modal">
        <div class="dialog">
            <!-- <div class="dialog-header d-flex-row mb-24">
                <h3 class="dialog-title" >{{ dialogTitle }}</h3>
                <div id="closeDialog" @click="closeDialog()" class="dialog-close icon icon-close"></div>
            </div> -->

            <div class="dialog-content d-flex-row mb-24">
                <div class="icon-dialog-error icon "></div>
                <div class="dialog-discr" >{{ dialogText }}</div>
            </div>
            <div class="dialog-bottom d-flex-row-center gap-8">
                
                <button class="btn btn-pri" @click="closeDialog()">Đồng ý</button>
            </div>
        </div>
    </div>
</template>
<script >
    export default {
        name: "TheDialog",
        props: {
    dialogText:String,
    dialogTitle:String,
    
  },
        methods: {
            closeDialog() {
      try {
        this.$emit("close-dialog");
        console.log(this.dialogText);
      } catch (error) {
        console.log(error);
      }
    }   
        },
    }
</script>
<style> </style>