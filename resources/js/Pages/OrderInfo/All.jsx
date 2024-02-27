import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Head, router, usePage } from '@inertiajs/react'; 
import CustAuthenticatedLayout from '@/Layouts/CustAuthenticatedLayout';



export default function All({ auth, menu , success}) {


    let arr = menu.map((item, i) => { 
        return{
            menu_id: item.menu_id,
            menu_name: item.menu_name, 
            price: item.price,
            quantity: 0, 
            amount: 0, 
            isSelected: false,
        }
    });
    
    const [increment, setIncrement] = useState([...arr]);

    const handleQuantityIncrease = (i) => {
        const newItems = [...increment];
        newItems[i].quantity++;
        newItems[i].amount = newItems[i].price * newItems[i].quantity;
        setIncrement(newItems);
    };
    const handleQuantityDecrease = (i) => {
        const newItems = [...increment];
        newItems[i].quantity--;
        newItems[i].amount = newItems[i].price * newItems[i].quantity;
        setIncrement(newItems);
    };
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); orderList();}

    const [dt, setDt] = useState([]);
    const [arrSubmit, setArrSubmit] = useState([]);

    const orderList = () => {
        const orderList = [...increment];
        const newList = orderList.filter((orderList) => orderList.quantity != 0);
        const itemList = newList.map((item, i) => 
            <div key={i}>
                {item.quantity} Qty - {item.menu_name}  Total: £{item.amount}
            </div>
        );
        setArrSubmit(newList);
        setDt(itemList);

    };

    

    const handleSubmit = (e) => {
        let total_amount = 0;

        let orderDetail = arrSubmit.map((item, i) => { 
            total_amount = total_amount + item.amount ;
            return {
                menu_id: item.menu_id,
                no_of_servings: item.quantity,
                amount: item.amount,
            }
        });
        
        

        let formSubmit = {
            'orderDetail': orderDetail,
            'customer_id': auth.user.id,
            'total_amount': total_amount, 
            'order_status': 'Ordered', 
            'processed_by': '0', 
        }

        e.preventDefault();
        router.post('/customer/orderInfo', formSubmit);
    }


    return (
        <CustAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders</h2>}
        >
            <Head title="Orders" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg"  style={{ background: '#DCCA87'}}>
                        <Container>
                            {menu.map((menu, i) => 
                                <Row className="items-center rounded-lg border-4 bg-white" key={i} style={{margin: '1rem' }}>
                                    <Col xs={3} sm={3} md={2} lg={2}><img src={menu.menu_image} style={{width: '15vw'}}/></Col>
                                    <Col xs={5} sm={5} md={7} lg={8}>
                                        <b><u>{menu.menu_name}</u></b><br/>
                                        Ingredients: {menu.ingredients}<br/>
                                        Price: £{menu.price}
                                    </Col> 
                                    <Col xs={4} sm={4} md={3} lg={2}>
                                        <Button variant="warning" disabled={increment[i].quantity === 0} onClick={() => { handleQuantityDecrease(i)}}>–</Button>
                                        &ensp;<b>{increment[i].quantity}</b>&ensp;
                                        
                                        <Button variant="warning" onClick={() => { handleQuantityIncrease(i) }}>+</Button> 
                                    </Col>
                                </Row>
                            )}
                            <Row className="items-center" style={{margin: '1.5rem 1rem' }}>
                                <Button variant="dark" size="lg" type="submit" onClick={handleShow} > Order now</Button>
                            </Row>
                            
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Confirm Order</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    {(arrSubmit.length > 0) ?  dt : 'Order Now' }

                      


                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                    Close
                                    </Button>
                                    {(arrSubmit.length > 0) &&
                                        <Button variant="primary" onClick={handleSubmit}>
                                        Save Changes
                                        </Button>
                                    }
                                </Modal.Footer>
                            </Modal>
                        </Container>
                    </div>
                </div>
            </div>

            
        </CustAuthenticatedLayout>
    );
}


