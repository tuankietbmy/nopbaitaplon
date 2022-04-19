// add 4 Best Sellers
let BestSeller = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'b',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

BestSeller.add('../img/anh1.jpg',
'Gel Rửa Mặt Cosrx Tràm Trà',
'Sữa Rữa Mặt',
'366000',
`Độ pH lý tưởng 4.5 - 5.5 không gây khô căng da sau khi rửa mặt, giữ độ ẩm cân bằng tự nhiên cho da.
Chiết xuất tinh dầu tràm trà kết hợp với 0,5% BHA tự nhiên có khả năng kháng khuẩn, loại bỏ mụn, tẩy tế bào chết nhẹ nhàng mang lại làn da sạch thoáng.
Allantoin có công dụng làm dịu, dưỡng ẩm làn da giữ da mềm mại sau khi rửa mặt.
Kết cấu dạng gel trong suốt và có khả năng tạo bọt nhẹ nhàng giúp loại sạch bụi bẩn dư thừa trên da.`,
'24 Tháng kể từ ngày sản xuất');

BestSeller.add('../img/anh2.jpg',
'Son YSL Dazzling Lights Edition',
'Son',
'450000',
`Thương Hiệu: YSL
Xuất Xứ: Pháp
Dòng: Rouge Pur Couture Dazzling Lights Edition`,
'3 năm kể từ ngày sản xuất');

BestSeller.add('../img/anh3.jpg',
`Kem Dưỡng Ban Đêm Olay Regenerist Ngừa Lão Hóa`,
'Kem Dưỡng Da',
'352000',
`Cung cấp độ ẩm và Vitamin cho làn da căng mịn và khỏe mạnh.
Ngăn ngừa lão hóa, hỗ trợ làm mềm & làm mờ đi các nếp nhăn, rãnh nhăn trên da.
Giảm sự xuất hiện của các nếp nhăn mới.
Giúp da trở nên săn chắc và đàn hồi hơn.
Hỗ trợ tái tạo và phục hồi lại làn da tươi trẻ mịn màng.`,
'18 Tháng kể từ ngày sản xuất');

BestSeller.add('../img/anh4.jpg',
`Phấn phủ hoàn hảo YHL Shining`,
'Phấn Trang Điểm',
'329000',
`Có tác dụng bảo vệ da trước ánh nắng mặt trời, Phấn phủ hoàn hảo YHL Shining che phủ, giúp da trở nên mềm mịn và sáng hơn.
Khối lượng: 13 g
Xuất xứ: Hàn Quốc`,
'3 năm kể từ ngày sản xuất')

BestSeller.add('../img/anh5.jpg',
`Kem Chống Nắng Anessa Dưỡng Da Kiềm Dầu`,
'Kem Chống Nắng',
'429000',
`Sản phẩm phù hợp với mọi loại da, đặc biệt là da thường đến da dầu/hỗn hợp thiên dầu.
Có thể sử dụng cho da mặt và toàn thân.
Dầu thừa - lỗ chân lông to
Thích hợp sử dụng hàng ngày và trong các hoạt động thể thao/hoạt động ngoài trời (marathon, chạy bộ,...)`,
'20 tháng kể từ ngày sản xuất')

BestSeller.add('../img/anh6.jpg',
`Sữa rửa mặt trắng da trị nám Transino Clear Wash`,
'Sữa Rữa Mặt',
'529000',
`Làm sạch sâu bụi bẩn, bã nhờn hay lớp sừng già cỗi, trả lại độ thông thoáng cho làn da.
Nuôi dưỡng làn da trắng sáng, đều màu và làm mềm vùng da thô ráp.
Giảm thiểu sự hình thành và phát triển quá mức hắc tố melanin gây tối màu da hay thâm nám, sạm da.
Hỗ trợ thúc đẩy sản sinh tế bào mới, hạn chế sự xuất hiện các dấu hiệu “xuống cấp” do tuổi tác.`,
'18 tháng kể từ ngày sản xuất')

BestSeller.add('../img/anh7.jpg',
`Son Pat McGrath Labs Matte`,
'Son',
'594000',
`BẢO ĐẢM HÀNG CHẤT LƯỢNG CHÍNH HÃNG 100%
DATE MỚI NHẤT
GIAO HÀNG NHANH NHẤT
PHỤC VỤ ĐẾN KHI KHÁCH HÀNG HÀI LÒNG
30 NGÀY BAO NGÀY ĐỔI TRẢ, HOÀN TIỀN 100% NẾU KHÔNG ĐÚNG CHẤT LƯỢNG`,
'2 năm kể từ ngày sản xuất')

localStorage.setItem('BestSellers', JSON.stringify(BestSeller.arr));

let FeatureProduct = {
    arr: [],
    add: function(_img, _name, _brand, _price, _desc, _warranty ) {
        var a = {
            id: this.arr.length + 1 + 'f',
            img: _img,
            name: _name,
            brand: _brand,
            price: _price,
            desc: _desc,
            warranty : _warranty
        };
        this.arr.push(a);
    }
}

FeatureProduct.add('../img/anh8.jpg',
`Sữa Rửa Mặt Hada Labo Sạch Sâu Dưỡng Ẩm Da`,
'Sữa Rửa Mặt',
`297000`,
`Dung tích: 25g, 80g
Thương hiệu: Hada Labo thuộc công ty Rohto-Mentholatum (Việt Nam)
Xuất xứ thương hiệu: Nhật Bản
Sản xuất tại: Việt Nam`,
'18 Tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh9.jpg',
`SON MÔI 3CE RED RECIPE`,
'Son',
`410000`,
`Son 3CE 211 Dolly có chất satin bóng nhẹ
Màu lên căng mướt và có độ ánh sáng giúp đôi môi trông căng mọng hơn
Có sắc đỏ đậm phớt chút cam, cực kỳ tôn da`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh10.jpg',
`Kem Dưỡng Vichy Sáng Da, Mờ Thâm Nám Ban Đêm`,
'Kem Dưỡng Da',
`788000`,
`Mang lại cảm giác da săn chắc và mịn màng ngay tức thì.
Cung cấp độ ẩm sâu và nuôi dưỡng làn da ngay cả trong giấc ngủ, giúp da trông rạng rỡ hơn vào buổi sáng hôm sau.
Cải thiện các dấu hiệu lão hóa như nếp nhăn, độ đàn hồi kém, da không đều màu.
Củng cố chức năng của hàng rào bảo vệ da, tăng cường khả năng chống oxy hóa, hỗ trợ phục hồi làn da khỏe mạnh.
Công thức đã qua kiểm nghiệm da liễu, không gây kích ứng da.`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh11.jpg',
`Phấn trang điểm Menard Jupier Make Up Base tươi mát`,
'Phấn Trang Điểm',
`654000`,
`Độ mỏng mịn hoàn hảo, giúp che lỗ chân lông và khuyết điểm trên da
Ngăn cách lớp dưỡng da và lớp trang điểm, đồng thời bảo vệ da.
Tạo sắc diện đồng đều và tươi sáng, tạo hiệu ứng “phủ lụa” nhờ chứa Hạt phấn hình lập phương có nguồn gốc từ San Hô.
Dưỡng ẩm và duy trì độ ẩm với Collagen, Acid Hyaluronic, NMF…
Giúp lớp trang điểm bám bền suốt cả ngày.`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh12.jpg',
`Kem Chống Nắng Sunplay Hiệu Chỉnh Sắc Da Skin Aqua Tone Up UV Milk Lavender`,
'Kem Chống Nắng',
`236000`,
`Các hạt ngọc trai siêu mịn phản chiếu ánh sáng đa chiều, sản phẩm sẽ tạo hiệu ứng trong suốt 3D, giúp da trở nên trong suốt và rạng rỡ hơn bao giờ hết.
Công thức chứa các hạt phấn siêu mịn giúp kiểm soát dầu, Vitamin C và B3 với hàm lượng cao giúp dưỡng da sáng hồng tự nhiên.
Sản phẩm không chứa cồn, không chứa chất bảo quản, an toàn cho làn da khi sử dụng.
Kết cấu dạng sữa mỏng nhẹ, thấm nhanh, không gây bết dính da, đặc biệt phù hợp với điều kiện khí hậu tại Việt Nam, lý tưởng dành cho da dầu / hỗn hợp.
Khả năng chịu nước và mồ hôi cao, giúp duy trì khả năng bảo vệ làn da suốt nhiều giờ liền.
Sản phẩm được thiết kế dành riêng cho da mặt, thích hợp sử dụng hằng ngày và có thể dùng làm lớp lót trang điểm.`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh13.jpg',
`Sữa rửa mặt Esunvy`,
'Sữa Rữa Mặt',
`432000`,
`Chiết xuất từ rễ cây ngưu bàng: Mang đến công dụng làm giảm sự tiết bã nhờn, giảm mụn một cách hiệu quả.
Chiết xuất từ hành tây tím: Giúp diệt khuẩn, làm mờ cho sẹo, tàn nhang và vết thâm.
Chiết xuất từ lô hội: Giúp dưỡng ẩm, làm mềm và chăm sóc cho da êm dịu.
Làm sạch hiệu quả các bụi bẩn, bã nhờn tận gốc cho lỗ chân lông, loại bỏ được dầu ở trên da.
Giúp loại bỏ sạch sẽ các vi khuẩn gây mụn, ngăn ngừa các loại mụn như mụn trứng cá, mụn viêm, mụn cám, mụn đầu trắng, mụn đầu đen, mụn bọc…`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh14.jpg',
`Son Lì Essance Lâu Trôi RD402 Chili Powder`,
'Son',
`654000`,
`Hiệu ứng mịn lì sắc sảo nhờ sự kết hợp thành phần Velvet Powder và Matter Powder.
Các hạt thành phần có độ lớn khách nhau giúp son bám chặt trên đôi môi.
Matte powder tơi xốp chứa dầu giúp hạn chế tình trạng khô môi, bong tróc.
Lướt mềm mại nhưng bám chặt trên đôi môi nhờ công thức cải tiến với sự kết hợp của dầu Sliding và dầu Fitting mang lại hiểu quả bền màu vượt trội.
Lên màu chuẩn với một lần chạm nhờ áp dụng kĩ thuật cao trong việc phân tán sắc tố đậm đặc, các hạt màu được dàn trải đồng đều, không vón cục. `,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh15.jpg',
`Kem Dưỡng Da Mặt ban đêm Riori Night Cream`,
'Kem Dưỡng Da',
`445000`,
`Có tác dụng dưỡng trắng và làm mờ các vết sạm, nám và tàn nhang mang lại cho bạn làn da trắng mịn.
Sản phẩm có chức  năng dưỡng ẩm cao giúp nuôi dưỡng tế bào da vào ban đêm khi ngủ đồng thời nuôi dưỡng những làn da yếu.
Sử dụng đều đặn sẽ giúp da trắng mịn hồng hào tự nhiên và đặc biệt không gây kích ứng da.
Thành phần vitamin B3 có trong sản phẩm giúp làm mờ những nếp nhăn, vết chân chim, mang đến làn da tươi trẻ.`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh16.jpg',
`Phấn trang điểm trắng da Thorakao Two Way Cake`,
'Phấn Trang Điểm',
`323000`,
`Dâu tắm : Dưỡng da cho bạn một làn da trắng sáng .
Cám gạo : Giữ ẩm cho làn da luôn tươi trẻ mịn màng .
Giúp da trắng sáng ,thấm hút lượng dầu thừa trên bề mặt da.
Tạo lớp nền mỏng mịn ,giữ độ ẩm và bảo vệ da trước ánh nắng mặt trời .`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh17.jpg',
`Kem Chống Nắng, Dưỡng Ẩm Da Fixderma Shadow`,
'Kem Chống Nắng',
`288000`,
`Đặc tính nổi bật:không nhờn,công thức chống nước
Rất phù hợp với:da nhờn/ da hỗn hợp,da ra nhiều mồ hôi
Hướng dẫn sử dụng:
Thoa gel 15 phút trước khi ra nắng.
Sau các hoạt động thể chất như bơi lội,… hoặc đổ nhiều mồ hôi thì có thể thoa thêm theo nhu cầu.`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh18.jpg',
`SỮA RỬA MẶT NGỪA MỤN DECUMAR`,
'Sữa Rữa Mặt',
`324000`,
`Nano Curcumin: Các hạt phân tử siêu nhỏ giúp thẩm thấu Curcumin tốt hơn gấp 7.500 lần nghệ thường.
Chiết xuất lá chanh sim: Kiểm soát nhờn tối ưu, ngăn ngừa mụn quay lại
Chiết xuất lá Neem: Làm sạch da, ức chế vi khuẩn gây mụn, làm lành vết thương 
Chiết xuất lô hội: Tăng cường giữ ẩm, bảo vệ da`,
'48 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh19.jpg',
`Son Shu Uemura`,
'Son',
`999000`,
`Xuất xứ: Hàn Quốc
Màu Sắc: Đỏ
Dáng ngoài quý phái sang trọng
Thương hiệu nổi tiếng
Bảo vệ môi hạn chế tình trạng bong tróc
Dưỡng môi không bị khô`,
'24 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh20.jpg',
`Kem Dưỡng Ẩm Nivea Dưỡng Da Sáng Mịn Nivea Cream`,
'Kem Dưỡng Da',
`433000`,
`Giúp bảo vệ và nuôi dưỡng làn da mềm mại, mịn màng.
Các thành phần giúp dưỡng ẩm chuyên sâu, đặc biệt thích hợp chp làn da khô ráp hoặc sử dụng cho nơi có khí hậu khô lạnh.
Bảo quản:Nơi khô ráo,thoáng mát,tránh ánh nắng trực tiếp, đậy kín nắp sau khi sử dụng, để xa tầm tay trẻ em.
Dung tích: 30ml; 60ml; 150ml
Thương hiệu: Nivea
Xuất xứ thương hiệu: Đức
Sản xuất tại: Thái Lan.`,
'36 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh21.jpg',
`Phấn Nền Trang Điểm Siêu Mịn - Perfection Two Way Cake`,
'Phấn Trang Điểm',
`466000`,
`Mặt phấn siêu mịn với kết cấu vững chắc, che lấp khuyết điểm hoàn hảo, giữ lớp nền bền suốt cả ngày. 
Chức năng điều tiết mồ hôi và bã nhờn trên da, điều chỉnh màu sắc, tạo cho da có sắc trẻ trung và độ sáng tự nhiên giúp da bạn luôn mịn màng. 
Tiện lợi với 2 cách sử dụng khô và ướt tuỳ vào từng loại da.`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh22.jpg',
`Kem chống nắng Eucerin Sun Gel Creme Oil Control Dry Touch SPF 50+`,
'Kem Chống Nắng',
`268000`,
`Bảo vệ da khỏi tia tử ngoại.
Ức chế hoạt động của các gốc tự do giúp ngăn ngừa và làm chậm quá trình lão hóa.
Kháng khuẩn, làm dịu vùng da bị cháy nắng.
Kiểm soát dầu nhờn trên da giúp hạn chế việc hình thành mụn.`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh23.jpg',
`Sữa Rửa Mặt Cho Da Nhạy Cảm Cetaphil`,
'Sữa Rữa Mặt',
`344000`,
`Chứa chất làm sạch và tạo bọt nhẹ. Giúp làm sạch hiệu quả và dịu nhẹ cho làn da
Không chứa xà phòng, hương liệu và lanolin. Không khô da, kích ứng
Thích hợp sử dụng hàng ngày, pH tương đương với pH sinh lý của da, giúp duy trì chức năng hàng rào bảo vệ da
Chứa chất làm ẩm, giúp da mềm mại và mịn màng
Có thể dùng với nước hoặc dùng khô, thuận tiện cho du lịch; tắm khô cho sản phụ sau sinh`,
'30 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh24.jpg',
`Son Thỏi M.O.I x CONGTRI 06 Cotton `,
'Son',
`422000`,
`Vỏ son được thiết kế sang trọng với chất liệu da thời thượng và đẹp mắt, tông trắng - vàng gold tinh tế cùng nút bấm mở son hiện đại.
Màu son trendy, được lựa chọn bởi chính Hồ Ngọc Hà và NTK Công Trí.
Tự tin cả ngày với đôi môi cực nhẹ, giữ màu.
Mang đến một làn môi mọng nước mềm mượt.
Chứa thành phần dưỡng chất giúp ngăn ngừa lão hóa cho da môi.`,
'3 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh25.jpg',
`Kem dưỡng da trắng hồng rạng rỡ Pond's White Beauty ban ngày`,
'Kem Dưỡng Da',
`232000`,
`Khi da bị tổn thương bởi ánh nắng mặt trời và ô nhiễm sẽ dẫn đến việc sản xuất dư thừa melanin, gây ra đốm thâm và trông mất sức sống.
Các hợp chất ưu việt có trong dòng sản phẩm của Pond's như Pro-Vitamin B3 tác động sâu bên trong giúp cân bằng melanin của da, 
Làm mờ vết thâm và giúp da sáng hơn chỉ trong 7 ngày.
Kem dưỡng trắng toàn diện trắng hồng rạng rỡ Pond's White Beauty Perfector Cream giúp khơi dậy sức mạnh dưỡng trắng từ sâu bên trong, 
Mang đến làn da sáng mịn sáng mịn tức thì, trắng hồng dài lâu bên ngoài`,
'24 tháng kể từ ngày sản xuất');

FeatureProduct.add('../img/anh26.jpg',
`Phấn Trang Điểm AUG`,
'Phấn Trang Điểm',
`412000`,
`Hạt phấn siêu mịn chứa khoáng chất, vitamin E cùng độ bám cao cho lớp nền mỏng mịn, kiềm dầu, không trôi suốt nhiều giờ. 
Công thức tiên tiến phù hợp cho da thường đến da hỗn hợp, chỉ số SPF 35 PA+++ bảo vệ da an toàn dưới ánh nắng mặt trời và tia UVA-UVB. 
Hiệu chỉnh sắc da  chỉ sau 1 lần phủ phấn.Sử dụng: Dùng bông phấn đính kèm lấy một lượng vừa đủ thoa đều lên...`,
'2 năm kể từ ngày sản xuất');

FeatureProduct.add('../img/anh27.jpg',
`Kem Chống Nắng Kuroa`,
'Kem Chống Nắng',
`409000`,
`Xuất xứ: Tây Ban Nha, Phân phối độc quyền Dova Group
Hương Dova : nhà phân phối chính hãng trực thuộc tổng công ty Dova.
Cam kết 100% chính hãng.`,
'30 tháng kể từ ngày sản xuất');

localStorage.setItem('FeatureProduct', JSON.stringify(FeatureProduct.arr));