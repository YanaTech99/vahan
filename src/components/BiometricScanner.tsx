import { Box, Image, Text, VStack } from "@gluestack-ui/themed";
import { FC, useState } from "react";
import FingerprintScanner from "react-native-fingerprint-scanner";
import type { Biometrics } from "react-native-fingerprint-scanner";
import { useTranslations } from "../hooks";
import { TouchableOpacity } from "react-native";
import { Icons } from "../theme";

type BiometricsProps = {
  biometryType: Biometrics;
  showAuthenticationDialog: (type: Biometrics) => Promise<void>;
};

type Props = {
  onAuthenticationSuccess: () => void;
};

const IosBiometrics: FC<BiometricsProps> = ({
  biometryType,
  showAuthenticationDialog,
}) => {
  const { strings } = useTranslations();
  return (
    <>
      <Text>{biometryType}</Text>
      <VStack>
        <TouchableOpacity onPress={() => showAuthenticationDialog("Face ID")}>
          <Image
            source={Icons.faceIdIcon}
            alignSelf="center"
            marginVertical={20}
          />
        </TouchableOpacity>
      </VStack>
    </>
  );
};

const BiometricScanner: FC<Props> = () => {
  return <Box></Box>;
};

export default BiometricScanner;
