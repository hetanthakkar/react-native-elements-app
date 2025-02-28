import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import {
  Avatar,
  FAB,
  Icon,
  ListItem,
  Text,
  Badge,
  Tab,
} from 'react-native-elements';
import { ScreenWidth } from 'react-native-elements/src/helpers';

const WhatsappClone: React.FunctionComponent = () => {
  const [index, setIndex] = React.useState(0);
  const scrollRef = React.useRef<ScrollView>(null);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header1}>
          <Text style={{ color: '#fff', fontSize: 20, flexGrow: 1 }}>
            WhatsApp
          </Text>
          <Icon name="search" color="white" style={styles.icon} />
          <Icon
            name="md-ellipsis-vertical"
            style={styles.icon}
            type="ionicon"
            color="white"
          />
        </View>

        <View style={styles.header2}>
          <Icon
            name="camera"
            type="ionicon"
            color="white"
            style={styles.icon}
          />
          <Tab
            value={index}
            onChange={(e) => {
              setIndex(e);
              scrollRef.current?.scrollTo({
                x: ScreenWidth * e,
              });
            }}
            indicatorStyle={{
              backgroundColor: 'white',
            }}
            style={{ backgroundColor: 'transparent' }}
          >
            <Tab.Item
              title="chat"
              titleStyle={{ color: '#fff' }}
              containerStyle={{ backgroundColor: 'transparent' }}
            />
            <Tab.Item
              title="status"
              titleStyle={{ color: '#fff' }}
              containerStyle={{ backgroundColor: 'transparent' }}
            />
            <Tab.Item
              title="calls"
              titleStyle={{ color: '#fff' }}
              containerStyle={{ backgroundColor: 'transparent' }}
            />
          </Tab>
        </View>
      </SafeAreaView>
      <ScrollView
        nestedScrollEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={30}
        onMomentumScrollEnd={(e) => {
          setIndex(e.nativeEvent.contentOffset.x / ScreenWidth);
        }}
        ref={scrollRef}
      >
        <View style={styles.view}>
          <ScrollView nestedScrollEnabled scrollEventThrottle={16}>
            {[...new Array(5)].map((v, i) => (
              <ListItem key={i} bottomDivider onPress={() => {}}>
                <Avatar
                  rounded
                  size={40}
                  source={require('../../assets/images/avatar1.jpg')}
                />
                <ListItem.Content>
                  <ListItem.Title>
                    <Text>John Doe</Text>
                  </ListItem.Title>
                  <View>
                    <Text>I am using React Native Elements</Text>
                  </View>
                </ListItem.Content>
                <Badge
                  value={i * 2 + 3}
                  badgeStyle={{
                    backgroundColor: '#25D366',
                  }}
                />
              </ListItem>
            ))}
          </ScrollView>
        </View>
        <View style={styles.view}>
          <ListItem bottomDivider onPress={() => {}}>
            <Avatar
              rounded
              size={40}
              source={require('../../assets/images/avatar1.jpg')}
            >
              <Avatar.Accessory
                iconProps={{ name: 'add' }}
                size={16}
                backgroundColor="#25D366"
              />
            </Avatar>
            <ListItem.Content>
              <ListItem.Title>
                <Text>My Status</Text>
              </ListItem.Title>
              <View style={{ flexDirection: 'row' }}>
                <Text>Tap to add status update</Text>
              </View>
            </ListItem.Content>
          </ListItem>
        </View>
        <View style={styles.view}>
          {[...new Array(3)].map((v, i) => (
            <ListItem key={i} bottomDivider onPress={() => {}}>
              <Avatar
                rounded
                size={40}
                source={require('../../assets/images/avatar1.jpg')}
              />
              <ListItem.Content>
                <ListItem.Title>
                  <Text>John Doe</Text>
                </ListItem.Title>
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    size={18}
                    name={'phone' + (i % 2 ? '-missed' : '')}
                    color={i % 2 ? 'red' : 'green'}
                  />
                  <Text>Today, 11:3{i * 3} AM</Text>
                </View>
              </ListItem.Content>
              <Icon name={'phone'} color={'#075E54'} />
            </ListItem>
          ))}
        </View>
      </ScrollView>

      <FAB
        icon={{
          name: ['chat', 'camera', 'phone'][Math.ceil(index)],
          color: '#fff',
        }}
        placement="right"
        color="#25D366"
      />
    </>
  );
};

export default WhatsappClone;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#075E54',
    paddingTop: 30,
  },
  icon: {
    paddingHorizontal: 10,
  },
  header1: {
    padding: 8,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: ScreenWidth - 40,
  },
  tabLabel: {
    color: '#fff',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  activeTabLabel: {
    padding: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 4,
  },
  chatOverviewLight: {
    opacity: 0.6,
    fontSize: 12,
    color: 'black',
  },
  chatOverviewDark: {
    opacity: 0.6,
    fontSize: 12,
    color: 'white',
  },
  view: {
    flex: 1,
    width: ScreenWidth,
  },
});
