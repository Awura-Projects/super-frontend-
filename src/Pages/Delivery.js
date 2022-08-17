
import "../Assets/styles/global.css"
import "../Assets/styles/SideNavBar.css"
import "../Assets/styles/EmployeeList.css"
import "../Assets/styles/delivery.css"
import deliveries from "../Helpers/DeliveryData"
import * as ReactBootStrap from 'react-bootstrap'
const Delivery = () => {
    return (
        <>
            <body className="Body">
                <section className="delivery_listing_whole">
                    <h1>delivery listing</h1>


                    <div class="delivery_listing">

                        <ReactBootStrap.Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>photo</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>phone number</th>
                                    <th>birthdate</th>
                                    <th>identification card</th>

                                </tr>
                            </thead>
                            <tbody>
                                {deliveries.map((delivery) => {
                                    return (

                                        <tr key={delivery.id}>
                                            <td>{delivery.id}</td>
                                            <td> <img src={delivery.profile_picture} alt="Mark Zuckerberg"
                                                class="picture" /> </td>
                                            <td>{delivery.user.first_name} {delivery.user.last_name}</td>
                                            <td>{delivery.user.email}</td>
                                            <td>{delivery.user.phone}</td>
                                            <td>{delivery.birthdate}</td>
                                            <td><img src={delivery.identification_card} alt="Mark Zuckerberg"
                                                class="picture" /></td>

                                        </tr>
                                    )
                                })}


                            </tbody>
                        </ReactBootStrap.Table>
                    </div>

                </section>


                <section>

                    <div class="Employewrapper">
                        <div class="title">
                            Delivery registration
                        </div>
                        <form class="form">
                            <div class="inputfield">
                                <label>First Name</label>
                                <input type="text" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Last Name</label>
                                <input type="text" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Email</label>
                                <input type="email" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Password</label>
                                <input type="password" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Confirm password</label>
                                <input type="password" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Phone</label>
                                <input type="tel" class="input" />
                            </div>

                            <div class="inputfield">
                                <label for="file">Profile Picture</label>
                                <input type="file" id="file" accept="image/*" class="input" />
                            </div>
                            <div class="inputfield">
                                <label>Birthdate</label>
                                <input type="date" class="input" />
                            </div>
                            <div class="inputfield">
                                <label for="file">Id Card</label>
                                <input type="file" id="file" accept="image/*" class="input" />
                            </div>
                            <div class="inputfield">
                                <input type="submit" class="btn" />
                            </div>
                        </form>
                    </div>
                </section>
            </body>
        </>
    )
}
export default Delivery;