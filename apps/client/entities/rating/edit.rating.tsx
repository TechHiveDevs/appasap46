
import { 
  Edit,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditRating(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <ReferenceInput label="products" source="productsid" reference="products">
        <AutocompleteInput variant="outlined" /* optionText="products"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}