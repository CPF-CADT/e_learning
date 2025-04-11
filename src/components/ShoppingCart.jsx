import { Link } from "react-router-dom"
export default function ShoppingCart({myCart}){
    return(
        <div className="max-w-[1270px] mx-auto" >
            <h2 className="font-bold text-3xl text-[#414458]">Shopping Cart</h2>
            {(myCart.length ===0)&&
            <div className="text-[#414458]">
                <h3 className="font-bold text-lg text-[#414458] mt-5" >0 Course in Cart</h3>
                <div className="flex flex-col items-center">
                    <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg" alt="course_cart" />
                    <p>Your cart is empty. Keep shopping to find a course!</p>
                    <Link className=" py-4 px-4 bg-blue-600 flex items-center rounded-2xl text-white font-bold mt-5" to='/course' >
                        Keep Shopping
                    </Link>
                </div>
            </div>}
            {(myCart.length > 0)&&
            <div>
                Your Course Cart    
            </div>}
        </div>
    )
}