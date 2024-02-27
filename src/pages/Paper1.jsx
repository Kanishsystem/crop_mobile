import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Card, Checkbox, Dialog, FAB, TextInput, Title, Paragraph, Snackbar } from 'react-native-paper';

const Paper1 = () => {
  const [visible, setVisible] = React.useState(false);
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const handleSnackbar = () => setSnackbarVisible(true);

  return (
    <View style={styles.container}>
      <Title>Welcome to React Native Paper</Title>
      <Paragraph>Enhance your app with beautiful components!</Paragraph>

      <Button icon="camera" mode="contained" onPress={handleSnackbar}>
        Take a Photo
      </Button>

      <Card>
        <Card.Cover source={{ uri: 'https://example.com/image.jpg' }} />
        <Card.Content>
          <Title>Card Title</Title>
          <Paragraph>Card Content goes here.</Paragraph>
        </Card.Content>
      </Card>

      <Checkbox.Android />
      
      <TextInput label="Type something" />

      <FAB icon="plus" onPress={showDialog} style={styles.fab} />

      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Content>
          <Paragraph>Dialog content goes here.</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={hideDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{ label: 'Dismiss', onPress: () => setSnackbarVisible(false) }}
      >
        Photo taken!
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Paper1;