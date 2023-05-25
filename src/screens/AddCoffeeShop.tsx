import { gql, useMutation } from "@apollo/client";
import { FieldValues, useForm } from "react-hook-form";
import { CreateCoffeeShop, CreateCoffeeShopVariables } from "../__generated/CreateCoffeeShop";
import { useHistory } from "react-router-dom";
import routes from "../routes";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Button from "../components/auth/Button";

const CREATE_COFFEE_SHOP = gql`
  mutation CreateCoffeeShop(
    $name: String!
    $latitude: String!
    $longitude: String!
    $categoryNames: [String!]!
    $photos: [Upload!]!
  ) {
    createCoffeeShop(
      name: $name
      latitude: $latitude
      longitude: $longitude
      categoryNames: $categoryNames
      photos: $photos
    ) {
      ok
      error
    }
  }
`


function AddCoffeeShop() {
  const history = useHistory();
  const onCompleted = (data: CreateCoffeeShop) => {
    if (!data.createCoffeeShop.ok) {
      setError('root', {
        message: data.createCoffeeShop.error || '',
      })
      return;
    }
    history.push(routes.home, {
      message: 'CoffeeShop Added',
    })
  }
  const [doMutation, { loading }] = useMutation(CREATE_COFFEE_SHOP, { onCompleted });
  const { register, handleSubmit, formState, getValues, setError, clearErrors } = useForm<CreateCoffeeShopVariables>({
    mode: 'onChange'
  });
  const onSubmitValid = (data: FieldValues) => {
    if (loading) {
      return;
    }
    doMutation({
      variables: {
        ...data,
        photos: [],
        categoryNames: [],
      },
    })
  }
  return (
    <FormBox>
      <form onSubmit={handleSubmit(onSubmitValid)} onChange={() => clearErrors('root')}>
        <Input
          {...register('name', {
            required: 'name is required',
          })}
          placeholder='name'
        />
        <Input
          {...register('latitude', {
            required: 'latitude is required',
          })}
          placeholder='latitude'
        />
        <Input
          {...register('longitude', {
            required: 'longitude is required',
          })}
          placeholder='longitude'
        />
        <Button
          type="submit"
          value={loading ? "Loading..." : "Log in"}
          disabled={!formState.isValid || loading}
        />
      </form>
    </FormBox>
  )
}

export default AddCoffeeShop;