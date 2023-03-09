import styled from '@emotion/styled';
// import data from 'components/Statistics/data.json';

export const StatisticsContainer = styled.section`
display: block;
margin: 30px auto;
width: 350px;
padding-top:30px;
background-color: white;
box-shadow: 10px 10px 15px -5px rgba(120,111,111,0.66); 
`;

export const Title = styled.h2`
font-size: 20px;
font-weight: bold;
text-align:center;
margin: 0 0 30px 0;
text-transform: uppercase;
color:RGBA(0,0,0,0.6);
`
export const StatList = styled.ul`
display:flex;
margin:0;
padding:0;
justify-content: space-around;
align-items: center;
list-style:none;
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 63%, rgba(252,176,69,1) 100%);
`;

export const Item = styled.li`
padding: 15px;
display:flex;
flex-direction:column;
align-items:center;
width: 20%;
color: white;
gap:5px;
`;

export const Percentage = styled.span`
font-size: 20px;
`;
