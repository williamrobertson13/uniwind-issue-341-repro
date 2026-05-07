import { Pressable, Text, View } from 'react-native';

import { copy446 } from '../generated/copy/copy446';
import { layout446 } from '../generated/layouts/layout446';
import { palette446 } from '../generated/palettes/palette446';

export function Screen446() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout446.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy446.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy446.detail} / {palette446.name}
			</Text>
		</View>
	);
}
