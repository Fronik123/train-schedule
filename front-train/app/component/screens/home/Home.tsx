import Schedules from "../schedule/schedules/Schedules";
import Layout from "@/component/layout/Layout";
import { Text, View } from "react-native";
import { FC } from "react";

const Home: FC = () => {
  return (
    <Layout>
      <View>
        <Schedules />
      </View>
    </Layout>
  );
};

export default Home;
