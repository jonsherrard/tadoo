import * as React from 'react';
import { Alert } from 'react-native';
import { Headline, Paragraph, Card, Button } from 'react-native-paper';

const notReady = () =>
  Alert.alert('Not Ready', 'This feature is in progress', [
    { text: "Fine I'll wait" },
  ]);

const VenueCard = () => (
  <>
    <Card elevation={3} style={{ marginBottom: 20 }}>
      <Card.Cover
        source={{ uri: 'https://picsum.photos/700' }}
        style={{ marginBottom: 10 }}
      />
      <Card.Content>
        <Headline style={{ marginBottom: 20 }}>
          Bottomless Brunch &amp; Infinite Art and other things
        </Headline>
        <Paragraph style={{ marginBottom: 20 }}>
          A collection of technical articles published or curated by Google
          Cloud Developer Advocates. The views expressed are those of the
          authors and don't necessarily reflect those of Google.
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button icon="calendar-plus" onPress={notReady}>
          Book
        </Button>
        <Button
          icon="bookmark-plus-outline"
          style={{ marginLeft: 'auto' }}
          onPress={notReady}>
          Save
        </Button>
      </Card.Actions>
    </Card>
  </>
);

export default VenueCard;
