import * as React from 'react'
import { Helmet } from "react-helmet";
import "../common-style/style.css"
import axios from "axios";
import { CatalogFooter } from '../components/CatalogPage/CatalogFooter';

const Checkpage2237 = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
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
                    background: 'radial-gradient(circle, rgba(88,92,115,1) 10%, rgba(3,0,41,0.99) 80%, rgba(3,0,41,1) 100%)',
                    color: 'white'
                }}>
                    <table>
                        <tr>
                            <th style={{padding: '7px 11px'}}>#</th>
                            <th style={{padding: '7px 11px'}}>Дата</th>
                            <th style={{padding: '7px 11px'}}>email</th>
                            <th style={{padding: '7px 11px'}}>Телефон</th>
                            <th style={{padding: '7px 11px'}}>Приз №</th>
                        </tr>

                        {
                            data.map((item, ind) => (
                                <tr key={item.id}>
                                    <td style={{padding: '7px 11px'}}>{ind}</td>
                                    <td style={{padding: '7px 11px'}}>{Date(item.createDate)}</td>
                                    <td style={{padding: '7px 11px'}}>{item.email}</td>
                                    <td style={{padding: '7px 11px'}}>{item.phone}</td>
                                    <td style={{padding: '7px 11px'}}>{item.idPrize}</td>
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
