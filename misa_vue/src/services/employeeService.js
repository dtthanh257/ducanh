import axios from "axios";


class EmployeeService {
    /**
     * 
     * Gọi api đổ dữ liệu vào bảng
     * Author:DTThanh(31/07/2023)
     */
    async getEmployee() {
            return await axios({
                method: "get",
                url: "https://cukcuk.manhnv.net/api/v1/Employees",
            });
        }
        /**
         * 
         * Gọi api lấy mã nhân viên mới
         * Author:DTThanh(31/07/2023)
         */
    async getEmployeeCode() {
            return await axios({
                method: "get",
                url: "https://cukcuk.manhnv.net/api/v1/Employees/NewEmployeeCode",
            });
        }
        /**
         * 
         *Gọi Api thêm mới 1 bản ghi 
         Author: DTThanh (31/07/2023)
         */
    async addEmployee(data) {
        return await axios({
            method: "post",
            url: "https://cukcuk.manhnv.net/api/v1/Employees",
            headers: {
                accepts: "*/*",
                "Content-Type": "application/json-patch+json",
            },
            data: data,
        });

    }
}

export default new EmployeeService();