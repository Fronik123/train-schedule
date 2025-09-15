import RnToast, { BaseToast } from "react-native-toast-message";
import { FC } from "react";

const optional = (primaryColor: string) => ({
  style: { backgroundColor: "#080808", borderLeftColor: primaryColor },
  text1Style: {
    color: "#ffff",
    fontSize: 16,
  },

  text2Style: {
    fontSize: 14,
  },
});

const Toast: FC = () => {
  return (
    <RnToast
      topOffset={50}
      config={{
        success: (props) => <BaseToast {...props} {...optional("#67e769")} />,
        info: (props) => <BaseToast {...props} {...optional("#65d4ff")} />,
        error: (props) => <BaseToast {...props} {...optional("#ff4949")} />,
      }}
    />
  );
};

export default Toast;
