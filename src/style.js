// @flow
import { StyleSheet, Platform } from 'react-native'

const calendarHeight = 2400
// const eventPaddingLeft = 4
const leftMargin = 50 - 1

export default function styleConstructor (
  theme = {}
) {
  let style = {
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      ...theme.container
    },
    contentStyle: {
      backgroundColor: '#F4F4F4',
      height: calendarHeight + 10
    },
    header: {
      paddingHorizontal: 0,
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E6E8F0',
      backgroundColor: '#210D2E',
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'center',
      ...theme.header
    },
    headerText: {
      fontSize: 16,
      color: '#FFF',
      fontFamily: Platform.OS === 'ios' ? 'Josefin Sans' : 'JosefinSans-Regular',
    },
    arrow: {
      width: 15,
      height: 15,
      resizeMode: 'contain'
    },
    event: {
      position: 'absolute',
      backgroundColor: '#D1CFF9',
      opacity: 0.8,
      borderColor: '#D1CFF9',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      minHeight: 25,
      flex: 1,
      paddingTop: 5,
      paddingBottom: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      ...theme.event
    },
    eventTitle: {
      color: '#300F5C',
      fontFamily: 'JosefinSans-Bold',
      fontSize: 14,
      minHeight: 15,
      ...theme.eventTitle
    },
    eventAddress: {
      color: '#3DB3EF',
      fontFamily: Platform.OS === 'ios' ? 'Josefin Sans' : 'JosefinSans-Regular',

      fontSize: 14,
      flexWrap: 'wrap',
      ...theme.eventAddress
    },
    eventSummary: {
      color: '#615B73',
      fontFamily: Platform.OS === 'ios' ? 'Josefin Sans' : 'JosefinSans-Regular',

      fontSize: 14,
      flexWrap: 'wrap',
      ...theme.eventSummary
    },
    eventTimes: {
      marginTop: 3,
      fontSize: 10,
      fontFamily: Platform.OS === 'ios' ? 'Josefin Sans' : 'JosefinSans-Regular',
      color: '#615B73',
      flexWrap: 'wrap',
      ...theme.eventTimes
    },
    line: {
      height: 0,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'rgb(216,216,216)',
      ...theme.line
    },
    lineNow: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'red',
      ...theme.line
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: '#FFF',
      fontSize: 10,
      fontFamily: Platform.OS === 'ios' ? 'Josefin Sans' : 'JosefinSans-Regular',
      ...theme.timeLabel
    }
  }
  return StyleSheet.create(style)
}
