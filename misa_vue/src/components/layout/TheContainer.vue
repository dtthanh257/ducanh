<template>
     <div class="container">
        <div class="container-employ">
            <h3 class="container-employ-title">Nhân viên</h3>
            <button @click="showEmployeeForm" class="btn btn-pri">Thêm mới nhân viên</button>
        </div>
        <div class="container-content">
            <div class="container-content-action">
                <div class="textfield default">
                    <div class="textfield-with-acion"><input type="text" name="input" placeholder="Tìm theo mã, tên nhân viên">
                        <span><i class="fa-solid fa-magnifying-glass"></i></span></div>
                </div>
                <div class="icon icon-reload"></div>
            </div>
            <div class="container-content-table m-table">
                <table>
                    <thead>
                        <tr class="table-head">
                            <th class="text-align-center"> <input type="checkbox"></th>
                            <th class="text-align-left">MÃ NHÂN VIÊN</th>
                            <th class="text-align-left mw-200">TÊN NHÂN VIÊN</th>
                            <th class="text-align-left">GIỚI TÍNH</th>
                            <th class="text-align-center">NGÀY SINH</th>
                            <th class="text-align-left">SỐ CMND</th>
                            <th class="text-align-left">CHỨC DANH</th>
                            <th class="text-align-left">TÊN ĐƠN VỊ</th>
                            <th class="text-align-left">SỐ TÀI KHOẢN</th>
                            <th class="text-align-left">TÊN NGÂN HÀNG</th>
                            <th class="text-align-left">CHI NHÁNH NGÂN HÀNG</th>
                            <th class="text-align-right">CHỨC NĂNG</th>
                        </tr>
                    </thead>
                    <tbody id="employeeData">
                     
                        <tr v-for=" (employee,index) in this.tableData" :key="index">
                            <td class="text-align-center"><input type="checkbox"></td>
                            <td class="text-align-left">{{ employee.EmployeeCode }}</td>
                            <td class="text-align-left mw-200">{{ employee.FullName }}</td>
                            <td class="text-align-left">{{ employee.GenderName }}</td>
                            <td class="text-align-center">{{ $format.formatDate(employee.DateOfBirth) }}</td>
                            <td class="text-align-left">{{ employee.IdentityNumber }}</td>
                            <td class="text-align-left">{{ employee.PositionName }}</td>
                            <td class="text-align-left">{{ employee.DepartmentName }}</td>
                            <td class="text-align-left">{{  }}</td>
                            <td class="text-align-left">{{ "ACB"}}</td>
                            <td class="text-align-left">{{ "Hà Nội"}}</td>
                            <td class="text-align-right">
                                <div class="d-flex-row-center gap-8">
                                    <button class="btn btn-fix btn-link" @click="showEmployeeForm()">Sửa</button>
                                    <button class="btn-link btn-drop-down-fix show-fix-menu" @click="showFixMenu()">
                                        <ContextMenu v-if="fixMenu"></ContextMenu>
                                    </button>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <div class="table-footer d-flex-row">
                    <div class="d-flex-row flex-1">Tổng số <b id="dataNumber"> {{ totalRecords }} </b> bản ghi</div>
                    <div class="combo-page">
                        <select name="" id="">
                            <option value="0 ">10 bản ghi trên trang</option>
                            <option value="1 ">20 bản ghi trên trang</option>
                            <option value="2 ">30 bản ghi trên trang</option>
                            <option value="3 ">40 bản ghi trên trang</option>
                            <option value="4 ">50 bản ghi trên trang</option>    
                            </select>
                    </div>
                    <div class="table-page d-flex-row-center">
                        <button class="table-page-pre icon icon-pre"></button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button class="table-page-next icon icon-next"></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="employ-form" v-if="this.showForm" id="employForm">
            <div class="employ-form-container">
                <div class="form-header">
                    <h1 class="form-title">Thông tin nhân viên</h1>
                    <div class="employ-check">
                        <div class="is-check"><input type="checkbox">Là khách hàng</div>
                        <div class="is-check"><input type="checkbox">Là nhà cung cấp</div>
                    </div>
                    <div class="form-header-action">
                        <button class="form-help"></button>
                        <button class="form-close" id="formClose" @click="closeForm()"></button>
                    </div>
                </div>
                <div class="d-flex-row gap-28">
                    <div class="employ-info w1-2">
                        <div class="d-flex-row gap-8">
                            <div class="textfield w2-5" :class="{ 'textfield-error textfield-code-error': textfieldCode }" id="codeTextfield"> <label>Mã nhân viên <span class="require">*</span></label>
                                <input id="txtEpCode" v-model="employeeCode" type="text" name="input" placeholder="">
                            </div>
                            <div class="textfield w3-5" :class="{ 'textfield-error textfield-name-error': textfieldName }" id="nameTextfield"> <label>Tên <span class="require">*</span></label>
                                <input id="txtEmployeeName" v-model="employeeName" type="text" name="input" placeholder="">
                            </div>
                        </div>

                        <div class="textfield" :class="{ 'textfield-error textfield-department-error': textfieldDepartment }" id="departmentTextfield"> <label>Đơn vị <span class="require">*</span></label>
                            <input id="txtEmployeeDepartment" v-model="employeeDepartment" type="text" name="input" placeholder="">
                        </div>
                        <div class="textfield"> <label>Chức danh</label>
                            <input id="txtEmployeePosition" type="text" name="input" placeholder="">
                        </div>
                    </div>
                    <div class="employ-info w1-2">
                        <div class="d-flex-row gap-16">
                            <div class="textfield"> <label>Ngày sinh</label>
                                <input id="employeeDateOfBirth" value="" type="date" name="input" placeholder="DD/MM/YYYY">
                            </div>
                            <div class="textfield"> <label>Giới tính</label>
                                <div class="textfield-flex">
                                    <div class="gender"><input type="radio" name="gender" value="0" placeholder="" checked>Nam</div>
                                    <div class="gender"><input type="radio" name="gender" value="1" placeholder="">Nữ</div>
                                    <div class="gender"><input type="radio" name="gender" value="2" placeholder="">Khác</div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex-row">
                            <div class="textfield-flex gap-8">
                                <div class="textfield w3-5 tooltip-place-id "> <label>Số CMND</label >
                                    <input id="employeeIdentity" type="text" name="input" placeholder="">
                                    <div class="tooltip-id">
                                        Nhập số Chứng minh nhân dân của bạn
                                    </div>  
                                </div>
                                <div class="textfield w2-5"> <label>Ngày cấp</label>
                                    <input id="employeeIdentityDate" value="" type="date" name="input" placeholder="DD/MM/YYYY">
                                </div>
                            </div>
                        </div>
                        <div class="textfield"> <label>Nơi cấp</label>
                            <input id="employeeIdentityPlace" type="text" name="input" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="d-flex-column">
                    <div class="textfield w1-1"> <label>Địa chỉ</label>
                        <input id="employeeAddress" type="text" name="input" placeholder="">
                    </div>
                    <div class="d-flex-row gap-8 w4-5">
                        <div class="textfield w1-1 tooltip-place-phone "> <label>ĐT di động</label>
                            <input id="employeePhone" type="text" name="input" placeholder="">
                            <div class="tooltip-phone">
                                Nhập số điện thoại di động của bạn
                            </div>
                        </div>
                        <div class="tooltip-place-phone-main textfield w1-1 "> <label>ĐT cố định</label>
                            <input type="text" name="input" placeholder="">
                            <div class="tooltip-phone-main">
                                Nhập số điện thoại cố định của bạn
                            </div>
                        </div>
                        <div class="textfield w1-1"> <label>Email</label>
                            <input id="employeeEmail" type="text" name="input" placeholder="">
                        </div>
                    </div>
                    <div class="d-flex-row gap-8 w4-5">
                        <div class="textfield w1-1"> <label>Tài khoản ngân hàng</label>
                            <input type="text" name="input" placeholder="">
                        </div>
                        <div class="textfield w1-1"> <label>Tên ngân hàng</label>
                            <input type="text" name="input" placeholder="">
                        </div>
                        <div class="textfield w1-1"> <label>Chi nhánh</label>
                            <input type="text" name="input" placeholder="">
                        </div>
                    </div>
                </div>
                <div class="form-footer">
                    <div class="d-flex-row  gap-8">
                        <div class="form-footer-action  btn-flex-1"><button class="btn btn-sec" @click="closeForm()">Hủy</button></div>
                        <div class="form-footer-action gap-12">
                            <button class="btn btn-sec" onclick="updateEmployee()">Cất</button>
                            <button class="btn btn-pri" :dialogText="dialogText" :dialogTitle="dialogTitle" :dialog="dialog" @click="validateText(code,name,department)">Cất và thêm</button></div>
                    </div>
                </div>
            </div>
        </div>
        <TheDialog v-if="dialogCode" @close-dialog="closeDialog()" :dialogTitle="'Hello'" :dialogText="'Mã nhân viên không được bỏ trống'"/>
        <TheDialog v-if="dialogName" @close-dialog="closeDialog()" :dialogTitle="'Hello'" :dialogText="'Tên nhân viên không được bỏ trống'"/>
        <TheDialog v-if="dialogDepartment" @close-dialog="closeDialog()" :dialogTitle="'Hello'" :dialogText="'Đơn vị không được bỏ trống'"/>
        
 </div>
</template>
<script>
import EmployeeService from "@/services/employeeService.js"
import TheDialog from '@/components/layout/TheDialog.vue'
import ContextMenu from '@/components/layout/ContextMenu.vue'
export default {
    name: "TheContainer",
    components:{ TheDialog,ContextMenu
    },
     data() {
    return {
      tableData: [], // Mảng lưu trữ dữ liệu nhân viên
      totalRecords: 0,
      showForm : false,
      employeeCode : "",
      textfieldCode:"",
      textfieldName:"",
      textfieldDepartment:"",
      dialogDepartment:false,
      dialogName:false,
      dialogCode:false,
      employeeDepartment:"",
      employeeName:"",
      dialogText: "",
      dialogTitle: "",
      isMenuOpen: false,
      fixMenu:false,
    };
  },
  async mounted() {
    await this.getEmployeesData(); // Gọi hàm để lấy dữ liệu từ API khi component được mount
  },
  methods: {
    /**
     * Hàm tải dữ liệu vào bảng
     * Author:DTThanh (31/07/2023)
     */
    async getEmployeesData() {
      try {
        const response = await EmployeeService.getEmployee();
        this.tableData = response.data; // Lưu dữ liệu từ API vào biến tableData
        this.totalRecords = response.data.length;
        console.log(response);
      
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    },
   /**
    * Mở form thêm nhân viên
    * Author: DTThanh (31/07/2023)
    */
    showEmployeeForm () {
        this.showForm=true;
        EmployeeService.getEmployeeCode().then((response) => {
            this.employeeCode = response.data; // Cập nhật giá trị mã nhân viên vào txtEpCode
        });
    },
    /**
     * Đóng form thêm nhân viên
     * Author: DTThanh(31/07/2023)
     */
    closeForm() {
    try {this.employeeName = "";
    this.employeeDepartment = "";
    this.textfieldCode==false;
    this.textfieldDepartment=false   
    this.textfieldName=false;
    this.showForm=false;
    } catch (err) {
        console.log(err);
    }
    },
    /**
     * Hàm vailidate và thêm nhân viên
     * Author:DTThanh(01/08/2023)
     */
   async validateText() {
        /* eslint-disable */
    if(
        this.employeeCode === "" || this.employeeName === ""||this.employeeDepartment === ""
    ){
        if (this.employeeCode === "") {
    this.dialogCode=true;
    this.textfieldCode = true;
  }else{this.textfieldCode==false;}
  if (this.employeeName === "") {
    this.dialogName=true;
    this.textfieldName=true;
  }else{this.textfieldName=false}
  if (this.employeeDepartment === "") {
    this.dialogDepartment = true;
    this.textfieldDepartment=true;
}else {this.textfieldDepartment=false}
return;}
if (this.employeeCode != ""&& this.employeeName!="" && this.employeeDepartment != ""){
    
    const employeeData = {
    employeeCode: this.employeeCode,
    fullName: this.employeeName,
    gender: 0,
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
    identityNumber: "",
    identityDate: "",
    identityPlace: "",
    joinDate: "",
    martialStatus: 0,
    educationalBackground: 0,
    nationalityId: "",
    workStatus: 0,
    personalTaxCode: "",
    salary: 0,
    positionCode: "",
    positionName: "",
    departmentCode: "",
    departmentName: this.employeeDepartment,
    qualificationName: "",
    nationalityName: "",
  };

  var raw = JSON.stringify(employeeData);

  EmployeeService.addEmployee(raw).then(() => {
    console.log('ss');
  }).catch((err) => {
    console.log(err);
  })
}
},

    /**
     * Hàm tắt Dialog
     * Author:DTThanh(31/07/2023)
     */
    closeDialog() {
        try {
           this.dialogCode=false;
           this.dialogName=false;
           this.dialogDepartment=false;
            console.log("s");
        } catch (error) {
            console.log(error);
        }
    },
   
    showFixMenu() {
  this.fixMenu = !this.fixMenu;
}
  },
 
   
}
</script>
<style scoped>

</style>