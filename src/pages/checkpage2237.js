import * as React from 'react'
import { Helmet } from "react-helmet";
import "../common-style/style.css"
import { CatalogFooter } from '../components/CatalogPage/CatalogFooter';

const Checkpage2237 = () => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        axios
            .get("https://astrolog-fortuna-server.herokuapp.com/api/email/read-user-contact")
            .then((res) => {
                setData(res.data);
            });
    }, []);
    return (
        <>
            <Helmet title='Осторожно! Здесь я' />

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <div style={{
                    width: '100%',
                    padding: '50px 0 100px',
                    background: 'radial-gradient(circle, rgba(88,92,115,1) 10%, rgba(3,0,41,0.99) 80%, rgba(3,0,41,1) 100%)'
                }}>
                    <table>
                        <tr>
                            <th>Дата</th>
                            <th>email</th>
                            <th>Телефон</th>
                            <th>Приз №</th>
                        </tr>

                        {
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.createDate}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.idPrize}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                <CatalogFooter />
            </div>
        </>
    )
}

export default Checkpage2237;
