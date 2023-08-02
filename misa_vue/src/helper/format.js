const format = {
    /**
     * Định dạng ngày /tháng/nắm
     * Author:DTThanh(01/08/2023)
     */
    formatDate: function(date) {
        try {
            if (!date) {
                return "";
            }
            date = new Date(date);
            let dateValue = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${dateValue}/${month}/${year}`;

        } catch (error) {
            console(error);
            return "";
        }
    }
}

export default format;