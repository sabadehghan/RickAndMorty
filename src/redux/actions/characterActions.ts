import { useDispatch, useSelector } from "react-redux";
// import { apolloClient } from "../../graphql/apolloClient";
import { GUERY_CHARACTERS } from "../../graphql/character";
import { selectCharacterList, actions } from "../slice/characterSlice";
import { client } from "../../graphql/apolloClient";
export default function useCharacter() {
  const dispatch: any = useDispatch();
  const characterList: any = useSelector(selectCharacterList);

  const getCharacterList = async () => {
    const query = GUERY_CHARACTERS();
    const response = await client.query({
      query: query,
    });

    dispatch(actions.setCharacterList(response.data.characters.results));
    return { getCharacterList, characterList };
  };
}
