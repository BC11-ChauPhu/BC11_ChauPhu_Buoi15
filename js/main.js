/**
 * QUẢN LÝ TUYỂN SINH
 * Input:
 *  - Điểm chuẩn của hội đồng
 *  - Điểm 3 môn của thí sinh
 *  - Khu vực
 *  - Đối tượng dự thi
 * Process: 
 *  - Lấy thông tin từ form
 *  - Khu vực A => điểm ưu tiên += 2
 *  - Khu vực B => điểm ưu tiên += 1
 *  - Khu vực C => điểm ưu tiên += 0.5
 *  - Đối tượng 1 => điểm ưu tiên += 2.5
 *  - Đối tượng 2 => điểm ưu tiên += 1.5
 *  - Đối tượng 3 => điểm ưu tiên += 1
 *  - Điểm tổng kết = tổng điểm 3 môn + điểm ưu tiên
 *  - So sánh điểm chuẩn hội đồng với điểm tổng kết
 * Output:
 *  - Đậu hay rớt
 *  - Tổng điểm đạt được
 */

let quanLyTuyenSinh = () => {
    let diemChuan = parseInt(document.querySelector('#inputDiemChuan').value)
    let tong3mon = parseInt(document.querySelector('#inputDiemTongKet').value)
    let khuVuc = document.querySelector('#khuVuc').value
    let doiTuong = parseInt(document.querySelector('#doiTuong').value)

    let diemUuTien = 0

    switch (khuVuc) {
        case 'A':
            diemUuTien += 2
            break
        case 'B':
            diemUuTien += 1
            break
        case 'C':
            diemUuTien += 0.5
            break
    }

    switch (doiTuong) {
        case 1:
            diemUuTien += 2.5
            break
        case 2:
            diemUuTien += 1.5
            break
        case 3:
            diemUuTien += 1
            break
    }

    let diemTongKet = tong3mon + diemUuTien

    if (diemChuan > diemTongKet) {
        document.querySelector('#resultQLSV').innerHTML = `Kết quả: Rớt <br> Tổng điểm: ${diemTongKet} `
    } else {
        document.querySelector('#resultQLSV').innerHTML = `Kết quả: Đậu <br> Tổng điểm: ${diemTongKet} `

    }
}

document.querySelector('#calcTuyenSinh').onclick = quanLyTuyenSinh

/**
 * TÍNH TIỀN ĐIỆN
 * Input:
 *  - Tên
 *  - Số Kw
 * Process:
 *  - switch (Số Kw)
 *      case <= 50 : tiền điện = 500d * số Kw
 *      case > 50 và <= 100 : tiền điện = 500 * 50 + 650 * (số Kw - 50)
 *      case > 100 và <= 200: tiền điện = 500 * 50 + 650 * 50 + 850 * (số Kw - 100)
 *      case > 200 và <= 350 : tiền điện = 500 * 50 + 650 * 50 + 850 * 100 + 1100d * (số Kw - 200)
 *      case > 350 : tiền điện = 500 * 50 + 650 * 50 + 850 * 100 + 1100d * 150 + 1300 * (số Kw - 350)
 * Output:
 *  - Tiền điện
 */

let tinhTienDien = () => {
    let tenTienDien = document.querySelector('#tenTienDien').value
    let soKw = parseFloat(document.querySelector('#soKw').value)


    let tienDien = 0;

    switch (true) {
        case soKw <= 50:
            tienDien = 500 * soKw
            console.log(tienDien)
            break
        case soKw > 50 && soKw <= 100:
            tienDien = 500 * 50 + 650 * (soKw - 50)
            break
        case soKw > 100 && soKw <= 200:
            tienDien = 500 * 50 + 650 * 50 + 850 * (soKw - 100)
            break
        case soKw > 200 && soKw <= 350:
            tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (soKw - 200)
            break
        case soKw > 350:
            tienDien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (soKw - 350)
            break
    }

    tienDien = tienDien.toLocaleString()
    console.log(tienDien)

    document.querySelector('#resultTienDien').innerHTML = `Tên: ${tenTienDien} <br> Tiền điện: ${tienDien}d`
}

document.querySelector('#calcTienDien').onclick = tinhTienDien

/**
 * TÍNH THUẾ THU NHẬP CÁ NHÂN
 * Input:
 *  - Họ tên
 *  - Tông thu nhập năm
 *  - Số người phụ thuộc
 * Process:
 *  - Thu nhập chịu thuế = Tổng thu nhập năm - 4tr - số người phụ thuộc * 1.6tr
 *  - switch (true)
 *      case Thu nhập chịu thuế <= 60m => 5%
 *      case Thu nhập chịu thuế > 60  và <= 120 => 10%
 *      case Thu nhập chịu thuế > 120 và <= 210 -> 15%
 *      case Thu nhập chịu thuế > 210 và <= 384 => 20%
 *      case Thu nhập chịu thuế > 384 và <= 624 => 25%
 *      case Thu nhập chịu thuế > 624 và <= 960 => 30%
 *      case Thu nhập chịu thuế > 960 => 35%
 * Output: 
 * Thuế phải trả = Tổng thu nhập năm * phần trăm bị đánh thuế
 */

let tinhThueCaNhan = () => {
    let name = document.querySelector('#tenThue').value
    let tongThuNhap = parseInt(document.querySelector('#tongThuNhap').value)
    let nguoiPhuThuoc = parseInt(document.querySelector('#phuThuoc').value)
    let thuNhapChiuThue = 0

    console.log(`Tổng thu nhập: ${tongThuNhap}`)

    thuNhapChiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc * 1600000)
    console.log(`Thu nhập chịu thuế ${thuNhapChiuThue}`)

    let tiLeDongThue = 0

    switch (true) {
        case thuNhapChiuThue <= 60000000:
            tiLeDongThue = 5
            break
        case thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000:
            tiLeDongThue = 10
            break
        case thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000:
            tiLeDongThue = 15
            break
        case thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000:
            tiLeDongThue = 20
            break
        case thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000:
            tiLeDongThue = 25
            break
        case thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000:
            tiLeDongThue = 30
            break
        case thuNhapChiuThue > 960000000:
            tiLeDongThue = 35
            break
    }

    console.log(`Tỉ lệ đóng thuế: ${tiLeDongThue}`)




    let thuePhaiTra = 0
    thuePhaiTra = thuNhapChiuThue * tiLeDongThue / 100

    if (thuePhaiTra < 0) {
        document.querySelector('#resultTienThue').innerHTML = `Họ tên: ${name} <br> Thuế thu nhập cá nhân phải trả: 0`
    } else {
        thuePhaiTra = thuePhaiTra.toLocaleString()
        document.querySelector('#resultTienThue').innerHTML = `Họ tên: ${name} <br> Thuế thu nhập cá nhân phải trả: ${thuePhaiTra}`
    }

}

document.querySelector('#calcTienThue').onclick = tinhThueCaNhan

/**
 * TÍNH TIỀN CÁP
 * Input: 
 * - Mã khách hàng
 * - Loại khách hàng 
 * - Số kết nối
 * - Số kênh cao cấp
 * Process: 
 * - Nếu loại khách hàng là doanh nghiệp thì disabled => active
 * - Loại khách hàng = nhà dân => tiền cáp = 4.5 + 20.5 + số kênh cao cấp * 7.5
 * - Loại khách hàng = doanh nghiệp => tiền cáp = 15 + (nếu kênh < 10 => 75 * số kênh else 75 * 10 + 5 * số kênh - 10) + số kênh cao cấp * 50
 * Output:
 * - Tiền cáp
 */


let showPreConnections = () => {
    let a = document.querySelector('#customerType').value
    
    if (a == 'business') {
        document.querySelector('.connections').classList = 'connections form-group active'
    } else {
        document.querySelector('.connections').classList = 'connections form-group disabled'
    }
}

// document.getElementById('classBussiness').onclick = showPreConnections


let tinhTienCap = () => {
    let maKH = document.querySelector('#customerSerial').value
    let loaiKH = document.querySelector('#customerType').value
    let normalConnections = parseInt(document.querySelector('#connectionNum').value)
    let premiumConnections = parseInt(document.querySelector('#premiumConnectionNum').value)

    // console.log(maKH)
    console.log(loaiKH)
    // console.log(premiumConnections)

    let tienCap = 0

    switch (loaiKH) {
        case 'personal':
            tienCap = 4.5 + 20.5 + (7.5 * premiumConnections)
            break
        case 'business':
            if (normalConnections < 10) {
                tienCap = 15 + (75 * normalConnections) + 50 * premiumConnections
            } else {
                tienCap = 15 + (75 * 10 + 5 * (normalConnections - 10)) + (50 * premiumConnections)
            }
            break
    }


    document.querySelector('#resultSubcribe').innerHTML = `Mã khách hàng: ${maKH} <br> Tiền cáp phải trả: ${tienCap}$`

}

document.querySelector('#calcSubcribe').onclick = tinhTienCap