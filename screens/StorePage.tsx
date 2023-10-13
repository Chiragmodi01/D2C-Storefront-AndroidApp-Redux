import React, {useState} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import StoreData from '../components/StoreData/StoreData';
import {launchImageLibrary} from 'react-native-image-picker';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {firebaseStorage} from '../firebaseConfig';
import {Uploading} from '../components/Uploading/Uploading';
import {UploadingAndroid} from '../components/UploadingAndroid/UploadingAndroid';
import useStoreData from '../CustomHooks/useStoreData';

//upload multiple images

const StorePage = ({route}) => {
  const {
    params: {store, user},
  } = route;
  const {actions} = useStoreData(user);
  const {getStoreData} = actions;

  const [storeInstance, setStoreInstance] = useState(store);
  const [progressNumber, setProgressNumber] = useState(0);

  async function saveRecord(imageUri) {
    let {storeId, ...dbRecord} = storeInstance;
    dbRecord.image = imageUri;

    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(dbRecord),
      redirect: 'follow',
    };
    const response = await fetch(
      'https://kirana-db-default-rtdb.firebaseio.com/stores/' +
        storeId +
        '.json',
      requestOptions,
    );
    dbRecord.storeId = storeId;
    setStoreInstance(dbRecord);

    getStoreData();
  }

  async function uploadImage(uri, fileType) {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storageRef = ref(firebaseStorage, '' + new Date().getTime());
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log({progress});
        setProgressNumber(progress);
      },
      error => {
        console.log('err', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          await saveRecord(downloadURL);
          setImage('');
        });
      },
    );
  }

  const [image, setImage] = useState('');
  async function pickImage() {
    let result = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.2,
    });
    if (!result.didCancel) {
      setImage(result.assets[0].uri);
      await uploadImage(result.assets[0].uri, 'image');
    }
  }

  const imageToShow = storeInstance?.image || '';
  return (
    <View style={styles.container}>
      <StoreData store={storeInstance} />
      {imageToShow ? (
        <>
          <Text
            style={{
              alignSelf: 'flex-start',
              fontWeight: '700',
              fontSize: 15,
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 20,
            }}>
            Image Gallery
          </Text>
          <Image
            source={{uri: imageToShow}}
            style={{
              width: '90%',
              height: 150,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
        </>
      ) : (
        <>
          <Pressable onPress={pickImage}>
            <Text style={styles.uploadImageText}>Upload Image</Text>
          </Pressable>
          {image &&
            (Platform.OS === 'ios' ? (
              <Uploading image={image} progress={progressNumber} />
            ) : (
              <UploadingAndroid image={image} progress={progressNumber} />
            ))}
        </>
      )}
    </View>
  );
};

export default StorePage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingVertical: 100,
  },
  uploadImageText: {
    textDecorationLine: 'underline',
    color: '#669999',
    fontWeight: '500',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
