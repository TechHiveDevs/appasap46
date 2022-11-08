
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowRating(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<ReferenceField source="productsid" reference="products" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}