## Setup project
- **express**
- **morgan:** Middleware để ghi log các request đến server
- **helmet:** Middleware để bảo vệ ứng dụng bằng cách thiết lập các header HTTP (Che giấu thông tin stack phía server, thông tin riêng tư...)
- **compression:** Middleware để nén dữ liệu trước khi gửi đến client (request, response)

## MongoDB
    1 - Nhược điểm của cách connect cũ
    2 - Cách connect mới, khuyên dùng
    3 - Kiểm tra hệ thống có bao nhiêu connect
    4 - Thông báo khi server quá tải connect
    5 - Có nên disConnect() liên tục hay không?
    6 - PoolSize là gì? Vì sao lại quan trọng?
    7 - Nếu vượt quá kết nối poolsize?