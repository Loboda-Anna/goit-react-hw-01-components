import styled from '@emotion/styled';


export const ProfileContainer = styled.div `
margin: 30px auto;
width: 300px;
background-color: white;
padding-top: 20px;
box-shadow: 10px 10px 15px -5px rgba(120,111,111,0.66); 
`;

export const Avatar = styled.img`
display:block;
width: 110px;
border-radius: 50%;
margin: 0 auto;
`;

export const Description = styled.div`
text-align:center;
`
export const Name = styled.p`
font-size: 27px;
font-weight: bold;
margin-bottom:15px;
margin-top:15px;
`;
export const Tag = styled.p`
color:RGBA(0,0,0,0.7);
margin-top:0;
margin-bottom:10px;
`; 
export const Location = Tag;
export const Stats = styled.ul`
display:flex;
margin:0;
padding:0;
justify-content: space-around;
align-items: center;
list-style:none;
background-color: RGBA(0,0,0,0.08);
`;
export const StatsItems = styled.li`
display:flex;
width:33%;
flex-direction:column;
align-items:center;
padding:20px 0 20px 0;
gap: 5px;
border-right: 1px solid RGBA(0,0,0,0.09);
`;
export const Label = styled.span`
color:RGBA(0,0,0,0.7);
font-size:12px;
`;
export const Quantity = styled.span`
font-weight: bold;
`;