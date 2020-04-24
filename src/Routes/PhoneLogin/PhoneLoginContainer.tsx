import React, { ChangeEventHandler } from "react";
import PhoneLoginPresenter from "./PhoneLoginPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  countryCode: string;
  phoneNumber: string;
}

class PhoneLoginContainer extends React.Component<
  RouteComponentProps<any>,
  IState
> {
  public state = {
    countryCode: "+82",
    phoneNumber: "",
  };

  public render() {
    const { countryCode, phoneNumber } = this.state;
    return (
      <PhoneLoginPresenter
        countryCode={countryCode}
        phoneNumber={phoneNumber}
        onInputChange={this.onInputChange}
        onSubmit={this.onSubmit}
      />
    );
  }
  public onInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (event) => {
    const {
      target: { name, value },
    } = event;

    this.setState({
      [name]: value,
    } as any);
  };

  public onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const { countryCode, phoneNumber } = this.state;
    console.log(countryCode, phoneNumber);
  };
}

export default PhoneLoginContainer;
