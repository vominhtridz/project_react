import './ProductReview.css'
import { useNavigate } from 'react-router-dom'
const Productsreview = ()=>{
    const navigate = useNavigate()
    const handleDanhgia =()=>{
        alert('Thanks for feedback!')
        navigate('/Thanks')
    }
    // phần đánh gía
    return (
    <div className='ProductReview'>
        <header className='.header1'><h1>Đánh Giá Sản Phẩm Bán Quần Áo</h1></header>
        <section class="product">
            <h2>Áo Polo Trắng</h2>
            <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
            </div>
            <p class="review">"Sản phẩm rất tốt. Chất lượng vải làm thoải mái, giá cả hợp lý."</p>
            <button onClick={handleDanhgia} className='danhgia'>Đánh giá</button>
        </section>

        <section class="product">
            <h2>Quần Jean Đen</h2>
            <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9734;</span>
                <span class="star">&#9734;</span>
            </div>
            <p class="review">"Quần jean ok, nhưng hơi chật so với kích thước thông thường."</p>
            <button onClick={handleDanhgia} className='danhgia'>Đánh giá</button>
        </section>
        
        <section class="product">
        <h2>Quần Jean Đen</h2>
        <div class="rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9734;</span>
        <span class="star">&#9734;</span>
        </div>
        <p class="review">"Quần jean ok, nhưng hơi chật so với kích thước thông thường."</p>
        <button onClick={handleDanhgia} className='danhgia'>Đánh giá</button>
    </section>

    <section class="product">
        <h2>Quần Jogger Xám</h2>
        <div class="rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        </div>
        <p class="review">"Quần jogger rất thoải mái và phong cách, tôi rất thích."</p>
        <button onClick={handleDanhgia} className='danhgia'>Đánh giá</button>
    </section>

    <section class="product">
        <h2>Áo Thun Trắng</h2>
        <div class="rating">
        <span class="star">&#9733;</span>
        <span class="star">&#9733;</span>
        <span class="star">&#9734;</span>
        <span class="star">&#9734;</span>
        <span class="star">&#9734;</span>
        </div>
        <p class="review">"Áo thun có vẻ tốt, nhưng chất liệu không quá ấn tượng."</p>
        <button onClick={handleDanhgia} className='danhgia'>Đánh giá</button>
    </section>

    </div>
    )
}
export default Productsreview;