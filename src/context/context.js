import React, {
    useEffect,
    useState
} from "react";
import {
    getAllProducts,
    getAllCart,
    getProductsById,
    getAllProductPostedByUser,
    getAllOrdersToApprove,
    getAllOrdersForUser,
    getAllWishlist,
    searchBy,
    submitOrder,
    getOneProducts
} from "../api/api";
import {
    isAuthenticated
} from '../auth';
// import {
//     v4 as uuid
// } from 'uuid';

export const Context = React.createContext();

export default function ContextWrapper(props) {


    // const unique_id = uuid();
    // const small_id = unique_id.slice(0, 8)

    const {
        user,
        token
    } = isAuthenticated();

    const [products, setProducts] = useState("");
    const [cartProducts, setCartProducts] = useState([]);
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [myItems, setMyItems] = useState([])
    const [ordersToApprove, setOrdersToApprove] = useState([]);
    const [orders, setOrders] = useState([]);
    const [itemsInWishlist, setItemsInWishlist, ] = useState([]);
    const [productsInWishlist, setProductsInWishlist] = useState([]);
    const [filter, setFilter] = useState('Filtered By')
    const [search, setSearch] = useState({
        input: '',
        filteredBy: 'name'
    });
    const [searchData, setSearchData] = useState([]);

    const [order, setOrder] = useState({
        payment_method: "cash on delivery",
        adress: isAuthenticated()? user.adress : '',
        total_price:''
    })
    const [orderToSubmit, setOrderToSubmit] = useState([]);
    const [orderCollection, setOrderCollection] = useState({
        id: '',
        date: '',
        status: '',
        isRecived: false,
        paymentMethod: '',
        adress: '',
        userId: 9,
        totalPrice: '',
        numOfItems: '',
        items: []
    });
    const [itemDetails, setItemDetails] = useState({});

    const confirmedOrders = async () => {
        let x = await getAllOrdersToApprove(token);
        setOrdersToApprove(x)
    }

    const allPostedProducts = async () => {
        if (isAuthenticated()) {
            let postedProducts = await getAllProductPostedByUser(user.id, token);
            setMyItems(postedProducts);
        }
    }

    const loadItems = async () => {
        await getAllProducts().then((data) => {
            if (data.error) {
                setError(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const cartItems = async () => {
        let itemsInCart = await getAllCart(token);
        setItems(itemsInCart);
        // if (itemsInCart.length !== 0) {
            let Ids = itemsInCart.map((e, idx) => {
                if (e.product_id) {
                    return e.product_id;
                }
            });
            let productsInCart = await getProductsById(Ids);
        setCartProducts(productsInCart);
            let totalPrice =cartProducts.reduce((acc, cv) => {
            return acc + parseInt(cv.price)
        }, 0)
            setOrder({
            ...order,
            total_price:totalPrice
        });
        // }
    };


    const wislistItems = async () => {
        let itemsInWishlist = await getAllWishlist(token);
        setItemsInWishlist(itemsInWishlist);
        if (itemsInWishlist.length !== 0) {
            let Ids = itemsInWishlist.map((e) => {
                return e.product_id;
            });
            let productsInWishlist = await getProductsById(Ids);
            setProductsInWishlist(productsInWishlist);
        }
    };
    const handleSubmitedOrder = async () => {
        let itemsToOrder = await submitOrder(order, token);
        setOrderToSubmit(itemsToOrder)
    };
    const getItemDetails = async (itemId) => {
        let details = await getOneProducts(itemId);
        setItemDetails(details)
    };

    const orderDetails = async () => {
        let x = await getAllOrdersForUser(token);
        setOrders(x)
        if (orderToSubmit.length > 0) {
            let Ids = orderToSubmit.map((e) => {
                return e.product_id;
            });
            let orderItems=await getProductsById(Ids)
            setOrderCollection({
                ...orderCollection,
                id: '111111',
                date: orderToSubmit[0].date,
                status:orderToSubmit[0].status,
                isRecived: orderToSubmit[0].isRecived,
                paymentMethod: orderToSubmit[0].payment_method,
                adress: orderToSubmit[0].adress,
                userId: orderToSubmit[0].user_id,
                totalPrice: orderToSubmit[0].total_price,
                numOfItems: orderToSubmit.length,
                items: [orderItems]
            })
        }
    }

    const searchItems = async () => {
        let items = await searchBy(search);
        setSearchData(items)
    }

    useEffect(() => {
        orderDetails()
    }, [orders])

    useEffect(() => {
        cartItems();
    }, [cartProducts]);

    useEffect(() => {
        loadItems();
    }, [products]);

    useEffect(() => {
        allPostedProducts();
    }, [])

    useEffect(() => {
        confirmedOrders()
    }, [])



    useEffect(() => {
        wislistItems();
    }, [productsInWishlist]);

    const allStates = {
        user,
        token,
        products,
        cartProducts,
        items,
        myItems,
        ordersToApprove,
        orders,
        productsInWishlist,
        itemsInWishlist,
        filter,
        setFilter,
        search,
        setSearch,
        searchData,
        searchItems,
        orderCollection,
        order,
        setOrder,
        handleSubmitedOrder,
        orderToSubmit,
        itemDetails,
        getItemDetails,
        cartItems
    }
    return (
        <Context.Provider value={allStates}>
            {props.children}
        </Context.Provider>
    )
}