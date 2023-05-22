import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldValues, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import { FatLink } from "../components/shared";
import routes from "../routes";
import PageTitle from "../components/PageTitle";
import { createAccount, createAccountVariables } from "../__generated/createAccount";
import FormError from "../components/auth/FormError";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;


const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $location: String!
    $password: String!
    $avatarURL: String!
    $githubUsername: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      location: $location
      password: $password
      avatarURL: $avatarURL
      githubUsername: $githubUsername
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data: createAccount) => {
    const { username, password } = getValues();
    if (!data.createAccount.ok) {
      setError('root', {
        message: data.createAccount.error || '',
      })
      return;
    }
    history.push(routes.home, {
      message: "Account created. Please log in.",
      username,
      password,
    });
  };
  const [doMutation, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, formState, getValues, setError, clearErrors } = useForm<createAccountVariables>({
    mode: "onChange",
  });
  const onSubmitValid = (data: FieldValues) => {
    if (loading) {
      return;
    }
    doMutation({
      variables: {
        ...data,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>
            Sign up to see photos and videos from your friends.
          </Subtitle>
        </HeaderContainer>
        
        <form onSubmit={handleSubmit(onSubmitValid)} onChange={() => clearErrors("root")}>
          <Input
            {...register("username")}
            placeholder="username"
            required={true}
          />
          <Input
            {...register("email")}
            placeholder="email"
            required={true}
          />
          <Input
            {...register("name")}
            placeholder="name"
            required={true}
          />
          <Input
            {...register("location")}
            placeholder="location"
            required={true}
          />
          <Input
            {...register("password")}
            placeholder="password"
            required={true}
            type="password"
          />
          <Input
            {...register("avatarURL")}
            placeholder="avatarURL"
            required={true}
          />
          <Input
            {...register("githubUsername")}
            placeholder="githubUsername"
            required={true}
          />
          <Button
            type="submit"
            value={loading ? "Loading..." : "Sign up"}
            disabled={!formState.isValid || loading}
          />
          <FormError message={formState.errors.root?.message} />
        </form>
      </FormBox>
      <BottomBox cta="Have an account?" linkText="Log in" link={routes.home} />
    </AuthLayout>
  );
}
export default SignUp;