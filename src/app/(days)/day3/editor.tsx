import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const template = `# Welcome to My Markdown Document

## Introduction

This is a sample markdown document created for demonstration purposes.

## Features

- Easy to read and write
- Lightweight
- Supports basic formatting such as headings, lists, and links

## Usage

You can use markdown in various places, including:

1. Creating documentation
2. Writing blog posts
3. Formatting README files on GitHub

## Examples

### Heading

Use the \`#\` symbol for headings:

# Heading 1
## Heading 2
### Heading 3

### Numbered List

Use numbers followed by periods for ordered lists:

1. First item
2. Second item
3. Third item

### Code List

Use backticks (\`) to format code:

Here's an example of inline code: 

\`\`\`javascript
// This is a code block
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('John');
\`\`\`

### Image List

Use \`![alt text](image_url)\` syntax for displaying images:

![Image 1](https://placehold.co/600x400)

### Link

Create links using \`[link text](url)\` syntax:

[Visit Google](https://www.google.com)

## Conclusion

Markdown is a versatile and user-friendly markup language that makes it easy to format text documents. Give it a try!
`

const EditorScreen = () => {
  const [content, setContent] = useState(template)
  const [tab, setTab] = useState('edit')

  return (
    <View style={styles.page}>
      <View style={styles.tabContent}>
        <Pressable
          onPress={() => setTab('edit')}
          style={[styles.tab, { borderColor: tab === 'edit' ? 'mediumorchid' : 'gray' }]}>
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab('preview')}
          style={[styles.tab, { borderColor: tab === 'preview' ? 'mediumorchid' : 'gray' }]}>
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === 'edit' ? (
        <TextInput value={content} onChangeText={setContent} multiline style={styles.input} />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  )
}

export default EditorScreen

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'whitesmock',
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    borderRadius: 10,
    fontSize: 16,
  },

  tabContent: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: 'gay',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabText: {
    fontFamily: 'InterBold',
  },
})
