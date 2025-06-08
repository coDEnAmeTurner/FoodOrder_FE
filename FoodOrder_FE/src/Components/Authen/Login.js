import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { AuthenStyle } from "@/src/stylesheets/AuthenStyle/AuthenStyle";
import { useState } from "react";
import AxiosInst from "@/src/APIs/AxiosInst";
import Endpoints from "@/src/APIs/Endpoints";
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const AsyncStorage = useAsyncStorage('tokenObj')

  const invalidate = () => {
    if (username.length < 1) {
      setError("Username is empty");
      return false;
    }

    if (pass.length < 1) {
      setError("Password is empty");
      return false;
    }

    return true;
  };

  const retrieveToken = async () => {
    setError("");
    setLoading(true);

    if (!invalidate()) {
      setLoading(false);
      return;
    }

    try {
      const resp = await AxiosInst.post(Endpoints.RETRIEVE_TOKEN, {
        username: username,
        password: pass,
        client_id: "D0xi0qvRuL8eVfIvaVPzbfJsU6bXWhSsTNfXtmKo",
        client_secret:
          "MgaGR1UvZ9n4ipEXSksKz9w4BVEquqhZr08KFv1anuzN5zgJKIp1mEd01FzqhR4DPrESax4nVJnD7eqp8J8zXfCz5147r8JCkysfJXyMb6gdTfswh8Yh2YIDnZAO4TMi",
        grant_type: "password",
      });

      if (resp.status === 200) {
        await AsyncStorage.setItem(JSON.stringify(resp.data));
      } else {
        throw Error(resp.data);
      }
      setLoading(false);
    } catch (ex) {
      console.error(Error(ex).message);
      setLoading(false);
    }
  };

  const retrieveUser = async () => {};

  return (
    <View style={AuthenStyle.loginContainer}>
      {error !== "" ? (
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      ) : (
        <></>
      )}
      <View style={AuthenStyle.loginTitle}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>LOGIN</Text>
      </View>
      <View style={AuthenStyle.loginContent}>
        <View
          style={[
            AuthenStyle.loginField,
            { justifyContent: "flex-end", paddingBottom: "10%" },
          ]}
        >
          <Text style={AuthenStyle.loginLabel}>Username*:</Text>
          <TextInput
            numberOfLines={1}
            style={AuthenStyle.loginControl}
            value={username}
            onChangeText={(v) => setUsername(v)}
          ></TextInput>
        </View>
        <View style={AuthenStyle.loginField}>
          <Text style={AuthenStyle.loginLabel}>Password*:</Text>
          <TextInput
            numberOfLines={1}
            style={AuthenStyle.loginControl}
            value={pass}
            onChangeText={(v) => setPass(v)}
          ></TextInput>
        </View>
        <View style={AuthenStyle.loginButton}>
          {loading ? (
            <ActivityIndicator
              size={"large"}
              color="orange"
            ></ActivityIndicator>
          ) : (
            <TouchableOpacity
              onPress={async () => {
                await retrieveToken();
              }}
              style={AuthenStyle.loginButtControl}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  color: "white",
                }}
              >
                NEXT
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Login;
