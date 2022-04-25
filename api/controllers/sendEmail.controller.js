const nodemailer = require('nodemailer');
const controllers = require('../controllers/allProducts.controller');

module.exports.send = async (req, res) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'electrostore64@gmail.com', // generated ethereal user
            pass: process.env.EMAIL_PASS, // generated ethereal password
        },
    });

    const allProds = await controllers.getAllProds();
    console.log(allProds[0])
    const productsInCart = req.body.prod_Ids;
    productsInCart.map(item => {
        var prod = allProds.find(value => value._id == item.prod_id);
        item.name = prod.name;
        item.price = prod.price;
        item.salePrice = prod.salePrice;
        return item;
    })
    let total = productsInCart.reduce((total, item) => total + item.quantity * item.salePrice, 0);
    let formattedTotal = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(total);
    let template = '<h3>Chào bạn, dưới đây là danh sách sản phẩm bạn đã đặt mua: </h3>'
    + '<table border=1><tr><th>Tên sản phẩm</th><th>Số lượng</th><th>Đơn giá</th><th>Thành tiền</th></tr>';
    var content = productsInCart.map((item) => {
        return '<tr><td>' + item.name + '</td>' + '<td style="text-align: center">' + item.quantity + '</td>'
        + '<td style="text-align: center">' + item.salePrice + '</td>' + '<td style="text-align: center">' + item.quantity * item.salePrice + '</td></tr>';
    })
    
    var mailOptions = {
        from: 'electrostore64@gmail.com',
        to: req.body.toEmail,
        subject: 'Electro Store - Thông báo đơn đặt hàng',
        html: template + content.join('') + '</tr></table><p><b>Tổng tiền:</b> ' + formattedTotal + '</p><p>Hỗ trợ viên sẽ liên hệ với quý khách để xác nhận đơn hàng trong giây lát.</p>'
        + '<p>Mọi thắc mắc về đơn hàng, quý khách vui lòng gọi vào hotline: <span style="color: red">0999145558.</span></p>'
        + '<p>Cảm ơn quý khách đã sử dụng dịch vụ của Electro Store!</p>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.json({message: error});
        } else {
            console.log('Email sent: ' + info.response);
            res.json("Email sent successfully!");
        }
    });
};