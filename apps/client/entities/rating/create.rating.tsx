
import { 
  Create,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateRating(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <ReferenceInput label="products" source="productsid" reference="products">
        <AutocompleteInput variant="outlined" /* optionText="products"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
