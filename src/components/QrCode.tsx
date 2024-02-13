import React from 'react';
import { Image, ImageURISource, View } from 'react-native';

type QRCodeProps = {
  data: string;
  size: number;
};

const QR_GENERATOR_API =
  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&margin=10';

const QRCode: React.FC<QRCodeProps> = ({ data, size }) => {
  const [qrImage, setQrImage] = React.useState<ImageURISource>({
    uri: ''
  });

  React.useEffect(() => {
    if (data) {
      const qrCode = `${QR_GENERATOR_API}&data=${data}`;
      setQrImage({ uri: qrCode });
    }
  }, [data]);

  const dimensions = React.useMemo(() => {
    return size ? { width: size, height: size } : {};
  }, [size]);

  if (!data) {
    return null;
  }

  return (
    <View style={[dimensions]}>
      {!!qrImage.uri && <Image source={qrImage} style={[dimensions]} />}
    </View>
  );
};

export default QRCode;
