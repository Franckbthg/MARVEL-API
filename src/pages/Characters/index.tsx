import React, { useCallback, useEffect, useState} from 'react';
import { FiChevronDown} from 'react-icons/fi';
import api from '../../services/api';


import { Container, CardList, Card, BoutonPlus} from './styles';

interface ResponseData{
    id: string;
    nom: string;
    Histoire: string;
    miniature:{
        path: string;
        extension: string;
    
    };


}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]>([])
 
  useEffect(() => {
    api
        .get('/characters')
        .then(response =>{
            setCharacters(response.data.data.results);
        })
        .catch(err => console.log( 'Erreur',err));
  }, []);

  const handleMore = useCallback ( async () => {
    try {
      const offset = characters.length;
      const response = await api.get('characters', {
        params: {
          offset,
        },
      });

      setCharacters([... characters, ... response.data.data.results]);

    }catch (err) {
      console.log(err);
    }
  }, [characters]);

return (
  <Container>
    <CardList>

     {characters.map(character => {
      return (
        <Card key={character.id} miniature={character.miniature}>
          <div id='img'/>
          <h2>{character.nom}</h2>
          <p>{character.Histoire}</p>

        </Card>
       
      );  
     })}

    </CardList >
     <BoutonPlus onClick={handleMore}>
     < FiChevronDown size = {20} />
       Plus
     < FiChevronDown size = {20}/>
     </BoutonPlus>
     
  </Container>
  );
};

export default Characters;
