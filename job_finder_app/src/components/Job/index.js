import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './jobStyle.js';
import {AuthContext} from '../../context';

export function Job({job, onNavigate}) {
  const {state, dispatch} = useContext(AuthContext);

  const isBookmarked = () => {
    let value;
    let bookmarkedJobs = state?.bookmarks;
    value = bookmarkedJobs?.find(
      (bookmarkedJob) => bookmarkedJob.id === job.id,
    );
    return value;
  };

  return (
    <TouchableOpacity style={styles.jobContainer}>
      <Image source={{uri: job?.company?.logo}} style={styles.jobImage} />
      <View style={styles.jobInfo}>
        <Text style={styles.jobCompany} numberOfLines={1} ellipsizeMode="tail">
          {job?.company?.name}
        </Text>
        <Text style={styles.jobRole} numberOfLines={1} ellipsizeMode="tail">
          {job?.role}
        </Text>
        <View style={styles.flexRow}>
          <Text style={styles.jobSalary} numberOfLines={1} ellipsizeMode="tail">
            {job?.salary} |
          </Text>
          <Text
            style={styles.jobLocation}
            numberOfLines={1}
            ellipsizeMode="tail">
            {job?.location}
          </Text>
        </View>
      </View>
      {isBookmarked() ? (
        <FontAwesome name="bookmark" color="#ccc" size={20} />
      ) : (
        <FontAwesome name="bookmark-o" color="#ccc" size={20} />
      )}
    </TouchableOpacity>
  );
}