import React from 'react'

const SellerProducts = () => {
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sn</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Condom</td>
                        <td>100</td>
                        <td>Rs 5</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Dildo</td>
                        <td>50</td>
                        <td>Rs 5000</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Vibrator</td>
                        <td>50</td>
                        <td>Rs 200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SellerProducts