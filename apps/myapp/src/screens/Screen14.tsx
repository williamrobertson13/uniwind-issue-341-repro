import { Pressable, Text, View } from 'react-native';

import { copy14 } from '../generated/copy/copy14';
import { layout14 } from '../generated/layouts/layout14';
import { palette14 } from '../generated/palettes/palette14';

export function Screen14() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout14.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy14.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy14.detail} / {palette14.name}
			</Text>
		</View>
	);
}
