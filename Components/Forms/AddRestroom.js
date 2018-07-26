import {
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Picker } from "react-native-picker-dropdown";
import { Dropdown } from "react-native-material-dropdown";
import ModalDropdown from "react-native-modal-dropdown";

export default class AddRestroom extends Component {
  onValueChange() {}
  handleChange() {}
  render() {
    return (
      <View style={styles.container}>
        <FormLabel>Name of Establishment</FormLabel>
        <FormInput onChangeText={this.handleChange} />
        <FormValidationMessage>
          {"This field is required."}
        </FormValidationMessage>

        <FormLabel>Image URL</FormLabel>
        <FormInput onChangeText={this.handleChange} />
        <FormValidationMessage>
          {"This field is required."}
        </FormValidationMessage>

        <FormLabel>Address</FormLabel>
        <FormInput onChangeText={this.handleChange} />
        <FormValidationMessage>
          {"This field is required."}
        </FormValidationMessage>

        <FormLabel>General Schedule</FormLabel>
        <ModalDropdown
          style={styles.dropdown}
          textStyle={styles.dropdown_text}
          dropdownStyle={styles.dropdown_style}
          options={["option 1", "option 2"]}
        />
        {/* <FormLabel>Opens</FormLabel>
        <Picker
          // selectedValue={this.state.hours}
          // onValueChange={this.onValueChange}
          mode="dialog"
        >
          <Picker.Item label="-- Select One --" />
          <Picker.Item label="7:00 am" value="7:00 am" />
          <Picker.Item label="7:30 am" value="7:30 am" />

          <Picker.Item label="8:00 am" value="8:00 am" />
          <Picker.Item label="8:30 am" value="8:30 am" />

          <Picker.Item label="9:00 am" value="9:00 am" />
          <Picker.Item label="9:30 am" value="9:30 am" />

          <Picker.Item label="10:00 am" value="10:00 am" />
          <Picker.Item label="10:30 am" value="10:30 am" />

          <Picker.Item label="11:00 am" value="11:00 am" />
          <Picker.Item label="11:30 am" value="11:30 am" />

          <Picker.Item label="12:00 pm" value="12:00 pm" />
          <Picker.Item label="12:30 am" value="12:30 pm" />

          <Picker.Item label="1:00 pm" value="1:00 pm" />
          <Picker.Item label="1:30 am" value="1:30 pm" />

          <Picker.Item label="2:00 pm" value="2:00 pm" />
          <Picker.Item label="2:30 am" value="2:30 pm" />

          <Picker.Item label="3:00 pm" value="3:00 pm" />
          <Picker.Item label="3:30 am" value="3:30 pm" />

          <Picker.Item label="4:00 pm" value="4:00 pm" />
          <Picker.Item label="4:30 am" value="4:30 pm" />

          <Picker.Item label="5:00 pm" value="5:00 pm" />
          <Picker.Item label="5:30 am" value="5:30 pm" />

          <Picker.Item label="6:00 pm" value="6:00 pm" />
          <Picker.Item label="6:30 am" value="6:30 pm" />

          <Picker.Item label="7:00 pm" value="7:00 pm" />
          <Picker.Item label="7:30 am" value="7:30 pm" />

          <Picker.Item label="8:00 pm" value="8:00 pm" />
          <Picker.Item label="8:30 am" value="8:30 pm" />

          <Picker.Item label="9:00 pm" value="9:00 pm" />
          <Picker.Item label="9:30 am" value="9:30 pm" />

          <Picker.Item label="10:00 pm" value="10:00 pm" />
          <Picker.Item label="10:30 am" value="10:30 pm" />

          <Picker.Item label="11:00 pm" value="11:00 pm" />
          <Picker.Item label="11:30 am" value="11:30 pm" />

          <Picker.Item label="12:00 am" value="12:00 am" />
          <Picker.Item label="12:30 am" value="12:30 am" />

          <Picker.Item label="1:00 am" value="1:00 am" />
          <Picker.Item label="1:30 am" value="1:30 am" />

          <Picker.Item label="2:00 am" value="2:00 am" />
          <Picker.Item label="2:30 am" value="2:30 am" />

          <Picker.Item label="3:00 am" value="3:00 am" />
          <Picker.Item label="3:30 am" value="3:30 am" />

          <Picker.Item label="4:00 am" value="4:00 am" />
          <Picker.Item label="4:30 am" value="4:30 am" />

          <Picker.Item label="5:00 am" value="5:00 am" />
          <Picker.Item label="5:30 am" value="5:30 am" />

          <Picker.Item label="6:00 am" value="6:00 am" />
          <Picker.Item label="6:30 am" value="6:30 am" />
        </Picker>

        <FormLabel>Closes</FormLabel>
        <Picker
          // selectedValue={this.state.hours}
          // onValueChange={this.onValueChange}
          mode="dropdown"
        >
          <Picker.Item label="-- Select One --" />
          <Picker.Item label="7:00 am" value="7:00 am" />
          <Picker.Item label="7:30 am" value="7:30 am" />

          <Picker.Item label="8:00 am" value="8:00 am" />
          <Picker.Item label="8:30 am" value="8:30 am" />

          <Picker.Item label="9:00 am" value="9:00 am" />
          <Picker.Item label="9:30 am" value="9:30 am" />

          <Picker.Item label="10:00 am" value="10:00 am" />
          <Picker.Item label="10:30 am" value="10:30 am" />

          <Picker.Item label="11:00 am" value="11:00 am" />
          <Picker.Item label="11:30 am" value="11:30 am" />

          <Picker.Item label="12:00 pm" value="12:00 pm" />
          <Picker.Item label="12:30 am" value="12:30 pm" />

          <Picker.Item label="1:00 pm" value="1:00 pm" />
          <Picker.Item label="1:30 am" value="1:30 pm" />

          <Picker.Item label="2:00 pm" value="2:00 pm" />
          <Picker.Item label="2:30 am" value="2:30 pm" />

          <Picker.Item label="3:00 pm" value="3:00 pm" />
          <Picker.Item label="3:30 am" value="3:30 pm" />

          <Picker.Item label="4:00 pm" value="4:00 pm" />
          <Picker.Item label="4:30 am" value="4:30 pm" />

          <Picker.Item label="5:00 pm" value="5:00 pm" />
          <Picker.Item label="5:30 am" value="5:30 pm" />

          <Picker.Item label="6:00 pm" value="6:00 pm" />
          <Picker.Item label="6:30 am" value="6:30 pm" />

          <Picker.Item label="7:00 pm" value="7:00 pm" />
          <Picker.Item label="7:30 am" value="7:30 pm" />

          <Picker.Item label="8:00 pm" value="8:00 pm" />
          <Picker.Item label="8:30 am" value="8:30 pm" />

          <Picker.Item label="9:00 pm" value="9:00 pm" />
          <Picker.Item label="9:30 am" value="9:30 pm" />

          <Picker.Item label="10:00 pm" value="10:00 pm" />
          <Picker.Item label="10:30 am" value="10:30 pm" />

          <Picker.Item label="11:00 pm" value="11:00 pm" />
          <Picker.Item label="11:30 am" value="11:30 pm" />

          <Picker.Item label="12:00 am" value="12:00 am" />
          <Picker.Item label="12:30 am" value="12:30 am" />

          <Picker.Item label="1:00 am" value="1:00 am" />
          <Picker.Item label="1:30 am" value="1:30 am" />

          <Picker.Item label="2:00 am" value="2:00 am" />
          <Picker.Item label="2:30 am" value="2:30 am" />

          <Picker.Item label="3:00 am" value="3:00 am" />
          <Picker.Item label="3:30 am" value="3:30 am" />

          <Picker.Item label="4:00 am" value="4:00 am" />
          <Picker.Item label="4:30 am" value="4:30 am" />

          <Picker.Item label="5:00 am" value="5:00 am" />
          <Picker.Item label="5:30 am" value="5:30 am" />

          <Picker.Item label="6:00 am" value="6:00 am" />
          <Picker.Item label="6:30 am" value="6:30 am" />
        </Picker> */}

        <FormLabel>Daily Schedule</FormLabel>
        <FormInput onChangeText={this.handleChange} />

        <FormLabel>Average Wait Time</FormLabel>
        <FormInput onChangeText={this.handleChange} />

        <FormLabel>Rating</FormLabel>
        <Picker
          // selectedValue={this.state.hours}
          // onValueChange={this.onValueChange}
          mode="dialog"
        >
          <Picker.Item label="-- Select One --" />
          <Picker.Item label="1 - Just No" value="1" />
          <Picker.Item label="2 - Needs Improvement" value="2" />
          <Picker.Item label="3 - Satisfactory" value="3" />
          <Picker.Item label="3 - Great" value="4" />
          <Picker.Item label="5 - Excellent" value="5" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  pickerText: {
    color: "black"
  },
  dropdown: {
    // flex: 1,
    // top: 32,
    // left: 8,
    // alignSelf: "flex-end",
    // marginTop: 32,
    // right: 8,
    // borderWidth: 0
    width: 150,
    height: 300
    // borderWidth: ,
    // borderRadius: 3
  },
  dropdown_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 14,
    color: "black",
    textAlign: "center",
    textAlignVertical: "center"
  },
  dropdown_image: {
    marginLeft: 4,
    width: 30,
    height: 30
  },
  dropdown_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: "navy",
    textAlignVertical: "center"
  },
  dropdown_separator: {
    height: 1,
    backgroundColor: "cornflowerblue"
  }
});
