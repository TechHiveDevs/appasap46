
import { 
  Edit,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditProducts(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}