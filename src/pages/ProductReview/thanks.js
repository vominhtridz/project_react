
import { Link } from 'react-router-dom'
import './ProductReview.css'

  const Thanks =()=>{
    return (
        <div>
        <header>
            <h1>Cảm Ơn Bạn Đã Đánh Giá</h1>
        </header>

        <section class="thanks">
            <p>Xin cảm ơn bạn đã dành thời gian để đánh giá sản phẩm của chúng tôi. Ý kiến của bạn quan trọng với chúng tôi!</p>
            <Link to="/">Quay lại trang chính</Link>
        </section>
        </div>
    )
  }

  export default Thanks