import CustAuthenticatedLayout from '@/Layouts/CustAuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function All({ auth, custOrder}) {
    console.log(custOrder.order_details);
    return (
        <CustAuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Orders Details #{custOrder.order_id}</h2>}
        >
             <Head title={"Order Details #" + custOrder.order_id} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg" style={{ background: '#DCCA87'}}>
                        <Container>
                            {custOrder.order_details.map((order_detail, i) =>
                                <Row className="items-center rounded-lg border-4 bg-white" key={i} style={{margin: '1rem' }}>
                                    <Col xs={4} sm={4} md={2} lg={2}>
                                        <img src={order_detail.menu_detail.menu_image} style={{width: '15vw'}}/>
                                    </Col>
                                    <Col xs={5} sm={5} md={7} lg={8}  className='text-xl'>
                                        <b><u>{order_detail.menu_detail.menu_name}</u></b><br/>
                                        Ingredients: {order_detail.menu_detail.ingredients}<br/>
                                        
                                    </Col> 
                                    <Col xs={3} sm={3} md={2} lg={2}  className='text-xl'>
                                        {order_detail.no_of_servings} Qty
                                    </Col>
                                    {/* xs={7} sm={7} md={7} lg={8} */}
                                </Row>
                            )}
                            <Row className="items-center rounded-lg border-4 bg-white" style={{margin: '1rem' }}>
                                <Col className='text-xl'>

                                        Order Status: <b>{custOrder.order_status}</b> <br/>
                                        Total amount: <b>£{custOrder.total_amount}</b>

                                </Col>
                            </Row>
                        </Container>
                        
                    </div>
                </div>
            </div>
        </CustAuthenticatedLayout>
    )
}
