import * as React from "react";
import { observer } from 'mobx-react';
import { TextInputProperties } from "react-native";
import TextInputTypeProvider from "../text-input-type-provider";
import { TextInputTypeProviderType } from "../text-input-type-provider/PropsType";
import TextInput from "../text-input";

export interface TextInputWithTypeProps extends TextInputTypeProviderType {}

const TextInputWithType = (props: TextInputTypeProviderType) => (
  <TextInputTypeProvider {...props}>
    {(textInputProps: TextInputProperties) => <TextInput {...textInputProps} />}
  </TextInputTypeProvider>
);
export default TextInputWithType;
