import { StyleSheet } from "react-native";

export const AuthenStyle = StyleSheet.create({
  loginContainer: {
    flex: 1,
    paddingLeft:'5%',
    paddingRight:'5%',
    paddingBottom:'70%'
  },
  loginTitle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginContent: {
    flex: 2,
    borderColor: "brown",
    borderWidth: 3,
    borderRadius: 20,
    padding:20,
  },
  loginField: {
    flex: 1,
  },
  loginLabel: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loginControl: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "brown",
  },
  loginButton: {
    flex:0.5,
    borderTopColor:'red',
    borderTopWidth:1,
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:'2%'
  },
  loginButtControl: {
    borderWidth:2,
    borderColor:'red',
    borderRadius:30,
    width:'50%',
    margin:5,
    justifyContent:'center',
    backgroundColor:'green'
  }
});
