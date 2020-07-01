import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    height: 250px;
    width: 100%;
    background: #fff;
    color: #333;
    margin: 0 15px;
    font-size: 2rem;
    @media(max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 0;
        height: 350px;
    }
`