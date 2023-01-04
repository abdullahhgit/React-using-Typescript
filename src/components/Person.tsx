interface Props {
    name: string;
    email: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: string;
}

export enum Country {
    Brazil = "Brazil",
    Canada = "Canada",
    Pakistan = "Pakistan",
}

export const Person = (props: Props) => {
  return (
    <div>
      <h3>My name is: {props.name}</h3>
      <h3>My email is: {props.email}</h3>
      <h3>My age is: {props.age}</h3>
      <h3>My Marriage is: {props.isMarried ? <h3>Married</h3>: <h3>Not Married</h3>}</h3>
      <h3>My Friends are: {props.friends.map((friend) => <span>{friend} &nbsp;</span>)}</h3>
      <h3>My Country is: {props.country}</h3>
    </div>
  )
}

