import styled from 'styled-components';

interface MiniatureData {
    miniature:{
        path: string;
        extension: string;
    
    };
}

export const Container = styled.main`
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
  height: 100%;
  `;


  export const CardList = styled.div`
    display: flex; // alignement des image, défile
    flex-wrap: wrap;
    justify-content: center; // on megts le tout au centre
  `;

  const urlImg = (props:MiniatureData)=> `${props.miniature.path}.${props.miniature.extension}`

  export const Card = styled.div`
    background: #F14C4C;
    height:450px;
    width: 300px;
    margin: 10px;
    border-radius:  5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);

    h2, 
    p {
       padding: 5px;
       text-align: justify;
    }

    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;

        transition: all 1s; //notre animation
    }
    &:hover{
        div#img{
            height: 100px;
        }
    }
  `;


export const BoutonPlus = styled.div`
  background: #f1f1f1;
  height: 40px;
  display:flex;
  align-items: center;
  justify-content: space-around;

cursor: pointer;
box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
margin: 20px auto;
padding: 0 50px;
border-radius: 5px;
transition: all 0,3s;
//changement de couleur de mon PLUS
&:hover{
    background: #ec1d24;

}

svg {
  margin: 0 8px;
}

`;
