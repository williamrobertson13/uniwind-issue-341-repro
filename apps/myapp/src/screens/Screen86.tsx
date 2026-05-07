import { Pressable, Text, View } from 'react-native';

import { copy86 } from '../generated/copy/copy86';
import { layout86 } from '../generated/layouts/layout86';
import { palette86 } from '../generated/palettes/palette86';

export function Screen86() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout86.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy86.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy86.detail} / {palette86.name}
			</Text>
		</View>
	);
}
