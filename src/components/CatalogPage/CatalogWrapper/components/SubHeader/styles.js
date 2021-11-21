import styled from 'styled-components';
import BgPicture from '../../../../../images/red-min.jpg';

export const CatalogSubHeaderContainer = styled.header`
    position: relative;
    background: url(${BgPicture}) no-repeat;
    background-size: cover;
    background-position: 40% 0;
    max-width: 768px;
    width: 100%;
    margin: 40px auto;
    padding: 245px 15px 100px;
    box-sizing: border-box;
    color: #f75995;
    text-align: center;

    border: 1px solid #e0e6ed;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px 10px rgba(162, 8, 147, 0.1);

    ul {
        position: relative;
        list-style: none;
        margin: 0;
        padding: 0;
        z-index: 10;
        li {
            font-size: 13px;
            /* color: #e5428e; */
            color: #0d0d0d;
            font-weight: 600;
            span {
                /* color: #cb50ce; */
                color: #e60670;
            }
        }
    }
    h4 {
        position: relative;
        color: #e60670;
        text-align: right;
        font-size: 18px;
        z-index: 10;
        span {
            position: relative;
            color: #ffffff;
            padding-left: 5px;
            &::after {
                content: '';
                position: absolute;
                z-index: -1;
                top: 9px;
                left: 12px;
                width: 4px;
                height: 2px;
                box-shadow: 0px 0px 10px 10px rgba(230, 6, 112, 0.3);
            }
        }
    }
`;

export const WhiteBackground = styled.div`
    border-radius: 11px;
    position: absolute;
    top: -1px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: rgba(255, 255, 255, 0.7);
`;

export const ListBlack = styled.li`
    font-size: 16px!important;
    color: #0d0d0d!important;
`;

export const ListSeparate = styled.li`
    padding: 7px 0;
`;