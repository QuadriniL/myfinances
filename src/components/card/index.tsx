import {CardView, CardHeader} from "./styles";
import {ShadowPropTypesIOS} from "react-native";

export function Card(props: { title: string, children: any }) {
  const {
    title,
    children,
  } = props;

  return (
      <>
        <CardView>
          <CardHeader>{title}</CardHeader>
          {children}
        </CardView>
      </>

      );
}