import { useDispatch, useSelector } from "react-redux";
// import { apolloClient } from "../../graphql/apolloClient";
import { GET_CHARACTERS } from "../../graphql/character";
import { selectCharacterList, actions } from "../slice/character";
import { client } from "../../graphql/apolloClient";
export default function useCharacter() {
  const dispatch : any = useDispatch();
  const characterList : any = useSelector(selectCharacterList);

  const getCharacterList = async() => {
        const response = await client.query({
                query: GET_CHARACTERS
        })
   
        dispatch(actions.setCharacterList(response.data.characters.results))
        return {getCharacterList, characterList}
  }
}
