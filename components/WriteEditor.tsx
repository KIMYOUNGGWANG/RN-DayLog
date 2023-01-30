import React, {useRef} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

interface Props {
  title?: string;
  body: string;
  onChangeTitle: (e: string) => void;
  onChangeBody: (e: string) => void;
}
const WriteEditor: React.FC<Props> = ({
  title,
  body,
  onChangeTitle,
  onChangeBody,
}) => {
  const bodyRef = useRef();
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.titleInput}
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
      />
      <TextInput
        style={styles.bodyInput}
        placeholder="당신의 오늘을 기록해보세요"
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
        ref={bodyRef}
      />
    </View>
  );
};

export default WriteEditor;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263268',
  },
});
